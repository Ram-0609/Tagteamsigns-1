"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

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
          'bg-[#E21F26] hover:bg-red-700 active:scale-95'
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
        <span
          aria-hidden
          className={cn(
            'absolute text-2xl transition-all duration-300',
            'rocket',
            isAnimating ? 'animate-launch' : 'opacity-0'
          )}
        >
          🚀
        </span>
      </button>
    </div>
  );
}
