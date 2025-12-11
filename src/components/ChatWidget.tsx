import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import { Icons } from './Icons';
import { createChatSession } from '../services/geminiService';
import { Chat } from '@google/genai';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ChatWidget: React.FC = () => {
    const { t } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    // Store chat session in ref to persist across renders but not cause re-renders
    const chatSessionRef = useRef<Chat | null>(null);

    useEffect(() => {
        setMessages([{ role: 'model', text: t.chat.welcome }]);
        // Reset chat session when language changes to update system prompt
        const systemPrompt = t.chat.role_prompt + ` Services: AI Chatbots, Automation (RPA), Data Analysis. Contact: 021-91322922.`;
        chatSessionRef.current = createChatSession(systemPrompt);
    }, [t]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            if (!chatSessionRef.current) {
                // Fallback if init failed, though it shouldn't
                chatSessionRef.current = createChatSession(t.chat.role_prompt);
            }

            const result = await chatSessionRef.current.sendMessage({ message: userMessage });
            const botResponse = result.text || "Error.";
            setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
        } catch (error) {
            console.error("Chat Error", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the service." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)} 
                className={`fixed bottom-6 ${t.dir === 'rtl' ? 'right-6' : 'left-6'} z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                aria-label="Open Chat"
            >
                <Icons.MessageSquare size={28} />
            </button>
            {isOpen && (
                <div className={`fixed bottom-6 ${t.dir === 'rtl' ? 'right-6' : 'left-6'} z-50 w-[92vw] md:w-[380px] h-[500px] bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up ring-1 ring-black/5 dark:ring-white/10`}>
                    <div className="bg-zinc-50/80 dark:bg-zinc-900/80 p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                <Icons.Bot size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <span className="font-bold text-zinc-900 dark:text-white text-sm block">{t.chat.title}</span>
                                <span className="text-[10px] text-green-600 dark:text-green-500 flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    {t.chat.online}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <Icons.X size={20} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/30 dark:bg-black/30">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-bl-none border border-zinc-100 dark:border-zinc-800'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full rounded-bl-none text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2 border border-zinc-200 dark:border-zinc-800">
                                    {t.chat.thinking} <Icons.Sparkles size={12} className="animate-spin-slow text-blue-500"/>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-3 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 flex relative">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                            placeholder={t.chat.placeholder} 
                            className={`w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 ${t.dir === 'rtl' ? 'pr-4 pl-12' : 'pl-4 pr-12'} text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400`} 
                        />
                        <button 
                            onClick={handleSend} 
                            className={`absolute ${t.dir === 'rtl' ? 'left-5' : 'right-5'} top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg`}
                        >
                            <Icons.Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
