
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, User, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chat, type ChatInput } from '@/ai/flows/chatbot-flow';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', text: '👋 Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
        const history = messages.map(m => ({
            role: m.sender === 'bot' ? 'model' as const : 'user' as const,
            content: m.text,
        }));
        
        const input: ChatInput = {
            history,
            message: inputValue,
        };

      const response = await chat(input);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: response,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: `bot-error-${Date.now()}`,
        text: "I’m sorry, I seem to be having some trouble. Please try again later.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg"
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </Button>
      </div>

      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-lg border bg-card shadow-xl transition-all duration-300 ease-in-out',
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col h-[60vh]">
          <header className="flex items-center justify-between border-b bg-secondary px-4 py-3 text-secondary-foreground">
            <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <h3 className="font-semibold">TAGTEAMSIGNS Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 hover:bg-secondary/80">
                <X className="h-4 w-4" />
            </Button>
          </header>

          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="p-4 space-y-4">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={cn(
                    'flex items-start gap-3',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                >
                    {message.sender === 'bot' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                    <div
                    className={cn(
                        'max-w-[80%] rounded-lg px-4 py-2 text-sm',
                        message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                    >
                    {message.text}
                    </div>
                    {message.sender === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                </div>
            ))}
            {isTyping && (
                <div className="flex items-start gap-3 justify-start">
                    <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="max-w-[80%] rounded-lg px-4 py-2 text-sm bg-muted text-muted-foreground flex items-center gap-2">
                        <Loader className="h-4 w-4 animate-spin" />
                        <span>Assistant is typing...</span>
                    </div>
                </div>
            )}
            </div>
          </ScrollArea>

          <div className="border-t bg-background p-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                autoComplete="off"
                className="flex-1"
                disabled={isTyping}
              />
              <Button type="submit" size="icon" disabled={isTyping || !inputValue.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
