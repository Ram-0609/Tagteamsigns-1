"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

export function AnimatedSubmitButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="w-full md:w-auto">
      <button
        type="submit"
        className={cn(
          'relative flex items-center justify-center w-full md:w-auto h-11 px-8 rounded-md text-white font-medium overflow-hidden transition-all duration-300',
          'bg-primary hover:bg-primary/90 active:scale-95',
          isAnimating && 'animate-crack'
        )}
        onClick={handleClick}
        disabled={isAnimating}
      >
        <span
          className={cn(
            'transition-all duration-500',
            isAnimating ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
          )}
        >
          Submit
        </span>
        <Rocket
          aria-hidden
          className={cn(
            'absolute h-6 w-6 transition-all duration-300',
            'rocket',
            isAnimating ? 'animate-launch' : 'opacity-0'
          )}
        />
      </button>
    </div>
  );
}
