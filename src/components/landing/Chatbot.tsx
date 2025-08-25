
'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { chat } from '@/ai/flows/chatFlow';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
            { sender: 'bot', text: "Hello! I'm the TagTeamSigns virtual assistant. How can I help you with your sign needs today?" }
        ]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (viewport) {
      setTimeout(() => viewport.scrollTop = viewport.scrollHeight, 100);
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat(input);
      const botMessage: Message = { text: response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot'
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div data-chatbot-area className="fixed bottom-4 right-4 z-50">
      <div className={cn("chatbot-widget w-80 h-[28rem] flex-col rounded-lg border bg-card shadow-2xl overflow-hidden transition-all duration-300 ease-in-out", isOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4')}>
        <div className="flex items-center justify-between bg-primary p-3 text-primary-foreground">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <h3 className="font-semibold">TagTeamSigns Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 hover:bg-primary/80">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex items-start gap-3", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                {message.sender === 'bot' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                <div className={cn("max-w-[80%] rounded-lg px-3 py-2 text-sm", message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                  {message.text}
                </div>
                {message.sender === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                  <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                      <div className="flex items-center gap-1">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60" style={{animationDelay: '0s'}}></span>
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60" style={{animationDelay: '0.2s'}}></span>
                          <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60" style={{animationDelay: '0.4s'}}></span>
                      </div>
                  </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-3">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
      <Button
        onClick={toggleChat}
        className={cn(
          "rounded-full h-16 w-16 shadow-lg flex items-center justify-center transition-transform hover:scale-110",
          isOpen && "scale-0"
        )}
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
    </div>
  );
}
