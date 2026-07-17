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
    // localStorage full or unavailable
  }
}

function clearMessages() {
  localStorage.removeItem(STORAGE_KEY);
}

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
      const items = trimmed
        .map((l) => `<li>${l.replace(/^[-*]\s+/, "")}</li>`)
        .join("");
      rendered.push(
        `<ul class="flex flex-col gap-1 my-2 ml-4 list-disc">${items}</ul>`
      );
    } else if (isNumberedList) {
      const items = trimmed
        .map((l) => `<li>${l.replace(/^\d+\.\s+/, "")}</li>`)
        .join("");
      rendered.push(
        `<ol class="flex flex-col gap-1 my-2 ml-4 list-decimal">${items}</ol>`
      );
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

  useEffect(() => {
    getSessionId();
    const saved = loadMessages();
    if (saved.length > 0) setMessages(saved);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized && messages.length > 0) saveMessages(messages);
  }, [messages, initialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
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
      const allMessages = [
        ...messages,
        { id: "", role: "user" as const, content: text, timestamp: Date.now() },
      ];
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

      if (data.content) addMessage("assistant", data.content);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      const msg = (err as Error).message || "Something went wrong.";
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

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Collapsed trigger — corner card, not a circle */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="flex items-center gap-2.5 pl-3.5 pr-5 h-12 bg-cobolt-500 hover:bg-cobolt-400 text-white-100 rounded-sm shadow-[0_4px_24px_rgba(57,35,199,0.25)] transition-all duration-200 hover:shadow-[0_6px_32px_rgba(57,35,199,0.35)] hover:-translate-y-0.5"
        >
          {/* Chat icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="e1 text-white-100 whitespace-nowrap">Ask us anything</span>
        </button>
      )}

      {/* Open panel — fixed 400px, anchored bottom-right */}
      {open && (
        <div className="w-[400px] max-w-[calc(100vw-2.5rem)] h-[560px] max-h-[calc(100vh-3rem)] bg-white-200 rounded-sm shadow-[0_8px_48px_rgba(29,27,22,0.18)] flex flex-col overflow-hidden border border-neutral-200">
          {/* Header */}
          <div className="bg-cobolt-500 px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-white-100/15 flex items-center justify-center">
                <span className="font-display text-[16px] text-white-100 leading-none">T</span>
              </div>
              <div>
                <p className="font-display text-[16px] leading-none tracking-[-0.8px] text-white-100">Technioz</p>
                <p className="text-[10px] text-white-100/50 font-mono uppercase tracking-[1px] mt-0.5">
                  Online &middot; replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <button
                onClick={handleClear}
                aria-label="Clear chat"
                className="text-white-100/40 hover:text-white-100 p-2 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white-100/40 hover:text-white-100 p-2 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-white-200">
            {messages.length === 0 && !streaming && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3 px-4">
                <div className="w-12 h-12 rounded-sm bg-cobolt-500/8 flex items-center justify-center">
                  <span className="font-display text-[24px] text-cobolt-500 leading-none">T</span>
                </div>
                <div>
                  <p className="font-display text-[18px] leading-[1.15] tracking-[-0.9px] text-black-500 mb-1.5">
                    Hi, we&apos;re Technioz
                  </p>
                  <p className="p5 text-black-400 max-w-[300px] leading-relaxed">
                    Ask us about our services, pricing, or how we work. We build custom software, mobile apps, and AI solutions.
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
                  className={`max-w-[85%] rounded-sm px-3.5 py-2.5 ${
                    msg.role === "user"
                      ? "bg-cobolt-500 text-white-100"
                      : "bg-white-300 text-black-500 border border-neutral-200"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="text-[14px] leading-relaxed">{msg.content}</p>
                  ) : (
                    <div
                      className="text-[14px] leading-relaxed chat-message"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                    />
                  )}
                </div>
              </div>
            ))}

            {streaming && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-sm px-3.5 py-2.5 bg-white-300 text-black-500 border border-neutral-200">
                  <span className="flex gap-1.5 items-center h-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-neutral-200 px-4 py-3 bg-white-200 shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={streaming ? "Waiting..." : "Type your message..."}
                disabled={streaming}
                maxLength={2000}
                className="flex-1 border border-neutral-300 rounded-sm px-3 py-2 text-[14px] text-black-500 bg-white-200 placeholder:text-black-200 focus:outline-none focus:border-cobolt-500 disabled:opacity-50"
              />
              {streaming ? (
                <button
                  onClick={() => abortRef.current?.abort()}
                  className="h-9 px-3 rounded-sm bg-red-500 hover:bg-red-600 text-white-100 text-[11px] font-mono uppercase tracking-[1px] shrink-0 transition-colors"
                  aria-label="Stop"
                >
                  Stop
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-9 w-9 rounded-sm bg-cobolt-500 hover:bg-cobolt-400 disabled:bg-cobolt-300 text-white-100 flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Send"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}