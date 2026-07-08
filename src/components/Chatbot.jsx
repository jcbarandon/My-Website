import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';

const SUGGESTIONS = [
  'What projects used Python and React?',
  'Tell me about the award-winning game',
  "What's Joe's experience with AI/ML?",
  'How can I contact Joe?',
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;

    const next = [...messages, { role: 'user', content: q }];
    setMessages(next);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch (e) {
      setError(e.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-brand-gradient text-white shadow-lg shadow-primary/30 grid place-items-center hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed z-[70] bottom-24 right-5 left-5 sm:left-auto sm:w-[380px] max-h-[70vh] flex flex-col rounded-2xl border border-slate-700 bg-secondary shadow-2xl overflow-hidden animate-[fadeUp_0.25s_ease]">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-700 bg-dark/60">
            <div className="w-9 h-9 rounded-full bg-brand-gradient grid place-items-center text-white shrink-0">
              <Sparkles size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-light font-semibold text-sm font-display">Ask about Joe</p>
              <p className="text-slate-400 text-xs">AI assistant · answers from his portfolio</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto text-slate-400 hover:text-light transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="flex gap-2.5">
                  <Avatar />
                  <div className="bubble-bot">
                    Hi! I'm Joe's AI assistant. Ask me anything about his projects,
                    skills, experience, or how to get in touch.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs text-primary border border-primary/40 rounded-full px-3 py-1.5 hover:bg-primary/10 transition-colors text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div className="bubble-user">{m.content}</div>
                </div>
              ) : (
                <div key={i} className="flex gap-2.5">
                  <Avatar />
                  <div className="bubble-bot whitespace-pre-wrap">{m.content}</div>
                </div>
              )
            )}

            {loading && (
              <div className="flex gap-2.5">
                <Avatar />
                <div className="bubble-bot flex items-center gap-2 text-slate-400">
                  <Loader2 size={14} className="animate-spin" /> Thinking…
                </div>
              </div>
            )}

            {error && (
              <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-700 p-3 bg-dark/40">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask a question…"
                className="flex-1 resize-none max-h-28 bg-secondary border border-slate-700 rounded-lg px-3 py-2 text-sm text-light placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 shrink-0 rounded-lg bg-primary text-white grid place-items-center hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 mt-2 text-center">
              AI can be imprecise — verify important details with Joe directly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const Avatar = () => (
  <div className="w-7 h-7 rounded-full bg-brand-gradient grid place-items-center text-white shrink-0 mt-0.5">
    <Sparkles size={14} />
  </div>
);

export default Chatbot;
