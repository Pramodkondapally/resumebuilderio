"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBubble from "./ChatBubble";
import { Loader } from "@/app/components/ui/loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async (text?: string) => {
  setLoading(true);
  const prompt = text ?? input;
  if (!prompt.trim()) return;

  setMessages((prev) => [...prev, { role: "user", text: prompt }]);
  setInput("");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
  } catch (e) {
    console.error(e);
    setMessages((prev) => [...prev, { role: "bot", text: "Something went wrong." }]);
  }
  setLoading(false);
};



  // 🔽 Auto-scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {!isOpen && <ChatBubble onClick={() => setIsOpen(true)} />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed bottom-5 right-5 w-106 h-[95%] bg-[#F3F4EF] border-4 border-[#fff] rounded-2xl shadow-lg flex flex-col"
          >
            {/* Header */}
            <div className="p-3 border-b border-[#fff] flex justify-between items-center">
              <span className="font-semibold">betterOne</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 cursor-pointer"
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg max-w-[90%] ${
                        msg.role === "user"
                          ? "bg-[#7136ed] text-white rounded-br-none"
                          : "bg-white text-black font-medium rounded-bl-none"
                      }`}
                    >
                    <div className="prose prose-sm max-w-none">
                     <ReactMarkdown remarkPlugins={[remarkGfm]}>
                       {msg.text || ""}
                     </ReactMarkdown>
                   </div>
                    </div>
                  </motion.div>
                ))}
            
                {/* 👇 Bot loader bubble */}
                {loading && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex justify-start"
                  >
                    <div className="px-3 py-2 rounded-lg max-w-[75%] bg-white text-black font-medium rounded-bl-none flex items-center gap-2">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse delay-150">●</span>
                      <span className="animate-pulse delay-300">●</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            
              {/* 👇 Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>


            {/* Input */}
            {/* chat suggested questions */}
            {/* Suggested Questions */}
             <div className="w-full overflow-x-auto px-2 py-2 flex gap-2 scrollbar-hide hide-scrollbar">
               {[
                 "Resume Tips",
                 "How to improve my LinkedIn?",
                 "What skills should I add?",
                 "Can you review my Resume?",
                 "Best format for ATS?"
               ].map((q, i) => (
                 <button
                   key={i}
                   onClick={() => sendMessage(q)}
                   className="whitespace-nowrap px-4 py-2 text-sm rounded-full bg-white hover:bg-gray-300 transition cursor-pointer"
                 >
                   {q}
                 </button>
               ))}
             </div>
            {/* Input */}
            <div className="p-1 border-t border-[#fff] bg-white flex items-center">
              <div className="w-full h-13 border rounded-full flex items-center p-1 justify-between">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={loading ? "Please wait..." : "Ask a question..."}
                  className="flex-1 h-10 px-3 py-2 text-sm focus:outline-none disabled:opacity-50"
                  onKeyDown={(e) => !loading && e.key === "Enter" && sendMessage()}
                  disabled={loading}   // 👈 disable when bot typing
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading}   // 👈 disable button too
                  className={`ml-2  text-[#7136ed] px-4 py-2 rounded-full cursor-pointer duration-300 transition-all ease-in-out 
                    hover:bg-zinc-50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                 </svg>

                </button>
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

