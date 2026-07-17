"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Role = "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: number;
}

const STORAGE_KEY = "technioz-chat-messages";
const SESSION_ID_KEY = "technioz-chat-session";

function getSessionId(): string {
  let id = localStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function loadMessages(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(-100);
  } catch {
    return [];
  }
}

function saveMessages(msgs: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-100)));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

function clearMessages() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Lightweight markdown-to-HTML for chat messages.
 * Handles: **bold**, *italic*, - bullet lists, 1. numbered lists,
 * blank-line paragraph breaks, and inline line breaks.
 */
function renderMarkdown(text: string): string {
  let html = text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const blocks = html.split(/\n\n+/);
  const rendered: string[] = [];

  for (const block of blocks) {
    const lines = block.split("\n");
    const trimmed = lines.map((l) => l.trim()).filter(Boolean);

    if (trimmed.length === 0) continue;

    const isBulletList = trimmed.every((l) => /^[-*]\s/.test(l));
    const isNumberedList = trimmed.every((l) => /^\d+\.\s/.test(l));

    if (isBulletList) {
      const items = trimmed.map((l) => `<li>${l.replace(/^[-*]\s+/, "")}</li>`).join("");
      rendered.push(`<ul class="flex flex-col gap-1 my-2 ml-1">${items}</ul>`);
    } else if (isNumberedList) {
      const items = trimmed.map((l) => `<li>${l.replace(/^\d+\.\s+/, "")}</li>`).join("");
      rendered.push(`<ol class="flex flex-col gap-1 my-2 ml-1">${items}</ol>`);
    } else {
      const para = trimmed.join("<br>");
      rendered.push(`<p class="my-1.5">${para}</p>`);
    }
  }

  return rendered.join("");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    getSessionId();
    const saved = loadMessages();
    if (saved.length > 0) {
      setMessages(saved);
    }
    setInitialized(true);
  }, []);

  // Save messages to localStorage on change
  useEffect(() => {
    if (initialized && messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages, initialized]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [open]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const addMessage = useCallback((role: Role, content: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);
    return msg;
  }, []);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;

    setInput("");
    addMessage("user", text);

    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const allMessages = [...messages, { id: "", role: "user" as const, content: text, timestamp: Date.now() }];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
        signal: controller.signal,
      });

      const data = (await res.json().catch(() => ({}))) as {
        content?: string;
        error?: string;
      };

      if (!res.ok || data.error) {
        throw new Error(data.error ?? `Server error (${res.status})`);
      }

      const content = data.content ?? "";
      if (content) {
        addMessage("assistant", content);
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      const msg = (err as Error).message || "Something went wrong. Please try again.";
      addMessage("assistant", `Sorry, ${msg.toLowerCase()}`);
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }, [input, streaming, messages, addMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    if (abortRef.current) abortRef.current.abort();
    setMessages([]);
    setStreaming(false);
    clearMessages();
  };

  const handleStop = () => {
    abortRef.current?.abort();
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black-500/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Bottom bar (closed state) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-400 ease-out ${
          open ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="w-full h-12 bg-cobolt-500 hover:bg-cobolt-400 text-white-100 flex items-center justify-between px-6 lg:px-[148px] transition-colors duration-200 cursor-pointer border-0"
          aria-label="Open chat"
        >
          <span className="e1 text-white-100">Ask Technioz</span>
          <span className="flex items-center gap-2 text-white-100/70">
            <span className="p5 hidden sm:inline">We&apos;re here to help</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 14l5-5 5 5" />
            </svg>
          </span>
        </button>
      </div>

      {/* Chat panel (open state) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-400 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "min(600px, 65vh)" }}
      >
        <div className="h-full flex flex-col bg-white-200 shadow-[0_-8px_40px_rgba(29,27,22,0.15)]">
          {/* Header */}
          <div className="bg-cobolt-500 shrink-0 flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-white-100/15 flex items-center justify-center">
                <span className="font-display text-[18px] text-white-100 leading-none">T</span>
              </div>
              <div>
                <p className="font-display text-[18px] leading-none tracking-[-0.9px] text-white-100">
                  Technioz
                </p>
                <p className="text-[11px] text-white-100/60 font-mono uppercase tracking-[1px]">
                  Online &middot; replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                aria-label="Clear chat"
                className="text-white-100/50 hover:text-white-100 p-2 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white-100/50 hover:text-white-100 p-2 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4 bg-white-200">
            {messages.length === 0 && !streaming && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 px-4">
                <div className="w-14 h-14 rounded-sm bg-cobolt-500/8 flex items-center justify-center">
                  <span className="font-display text-[28px] text-cobolt-500 leading-none">T</span>
                </div>
                <div>
                  <p className="font-display text-[20px] leading-[1.15] tracking-[-1px] text-black-500 mb-2">
                    Hi, we&apos;re Technioz
                  </p>
                  <p className="p4 text-black-400 max-w-[320px]">
                    Ask us anything about our services, pricing, or how we work. We build custom software, mobile apps, and AI solutions.
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-sm px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-cobolt-500 text-white-100"
                      : "bg-white-300 text-black-500 border border-neutral-200"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="p4 leading-relaxed">{msg.content}</p>
                  ) : (
                    <div
                      className="p4 leading-relaxed chat-message"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Streaming indicator */}
            {streaming && (
              <div className="flex justify-start">
                <div className="max-w-[82%] rounded-sm px-4 py-3 bg-white-300 text-black-500 border border-neutral-200">
                  <span className="flex gap-1.5 items-center h-5">
                    <span className="w-2 h-2 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-neutral-200 px-6 py-4 bg-white-200 shrink-0">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={streaming ? "Waiting for response..." : "Type your message..."}
                disabled={streaming}
                maxLength={2000}
                className="flex-1 border border-neutral-300 rounded-sm px-4 py-2.5 p4 text-black-500 bg-white-200 placeholder:text-black-200 focus:outline-none focus:border-cobolt-500 disabled:opacity-50"
              />
              {streaming ? (
                <button
                  onClick={handleStop}
                  className="h-10 px-4 rounded-sm bg-red-500 hover:bg-red-600 text-white-100 font-mono text-[12px] uppercase tracking-[1.2px] shrink-0 transition-colors"
                  aria-label="Stop generating"
                >
                  Stop
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-10 px-5 rounded-sm bg-cobolt-500 hover:bg-cobolt-400 disabled:bg-cobolt-300 text-white-100 font-mono text-[12px] uppercase tracking-[1.2px] shrink-0 transition-colors"
                  aria-label="Send message"
                >
                  Send
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
