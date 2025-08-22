
"use client";

import { useState, useEffect, useRef } from 'react';
import { Instagram, Send, X } from 'lucide-react';

export default function InstagramChat() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={chatRef} className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`
          absolute bottom-full right-0 mb-2 w-80 rounded-lg bg-white shadow-2xl transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}
        `}
      >
        <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6" />
            <h3 className="font-bold">Chat with us!</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-1 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700">
            Have a question? We're here to help! Tap the button below to send us a direct message on Instagram.
          </p>
          <a
            href="https://www.instagram.com/tagteamsigns/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-transform hover:scale-105"
          >
            <Send className="h-4 w-4" />
            Send Message
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className="
          flex h-16 w-16 items-center justify-center rounded-full
          bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500
          text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110
        "
      >
        <Instagram className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-45 scale-75' : ''}`} />
      </button>
    </div>
  );
}
