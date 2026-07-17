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
    return parsed.slice(-100); // keep last 100 messages max
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

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
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
  }, [messages, streamingContent]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
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
    setStreamingContent("");

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
      setStreamingContent("");
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
    setStreamingContent("");
    clearMessages();
  };

  const handleStop = () => {
    abortRef.current?.abort();
  };

  return (
    <>
      {/* Floating bubble button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cobolt-500 hover:bg-cobolt-400 text-white-100 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-white-200 rounded-sm shadow-2xl border border-neutral-300 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-cobolt-500 px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white-100/20 flex items-center justify-center text-white-100 text-sm font-display">
                T
              </div>
              <div>
                <p className="text-white-100 p4 font-medium leading-tight">Technioz Assistant</p>
                <p className="text-white-100/60 text-[11px] leading-tight">Online · Replies instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                aria-label="Clear chat"
                className="text-white-100/60 hover:text-white-100 p-1.5 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Minimize chat"
                className="text-white-100/60 hover:text-white-100 p-1.5 rounded-sm hover:bg-white-100/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-white-200">
            {messages.length === 0 && !streaming && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4 gap-3">
                <div className="w-12 h-12 rounded-full bg-cobolt-500/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className="p4 text-black-400">Hi! I&apos;m the Technioz assistant. Ask me anything about our services, pricing, or how we work.</p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-cobolt-500 text-white-100"
                      : "bg-white-300 text-black-500 border border-neutral-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Streaming message */}
            {streaming && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed bg-white-300 text-black-500 border border-neutral-200">
                  {streamingContent || (
                    <span className="flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cobolt-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-neutral-300 px-4 py-3 bg-white-200 shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={streaming ? "Waiting for response..." : "Type your message..."}
                disabled={streaming}
                maxLength={2000}
                className="flex-1 border border-neutral-300 rounded-sm px-3 py-2 text-sm text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500 disabled:opacity-50"
              />
              {streaming ? (
                <button
                  onClick={handleStop}
                  className="w-9 h-9 rounded-sm bg-red-500 hover:bg-red-600 text-white-100 flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Stop generating"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-sm bg-cobolt-500 hover:bg-cobolt-400 disabled:bg-cobolt-300 text-white-100 flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
