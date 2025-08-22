"use client";

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedSubmitButton() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }
    setIsAnimating(true);
    setTextVisible(false);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTextVisible(true);
      }, 1600); // Corresponds to animation duration

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="w-full md:w-auto">
      <button
        ref={buttonRef}
        type="submit"
        className={cn(
          'relative flex items-center justify-center w-full md:w-auto h-11 px-8 rounded-md text-white font-medium overflow-hidden transition-all duration-300',
          'bg-primary active:scale-95',
          isAnimating ? 'crack-open' : ''
        )}
        onClick={handleClick}
        disabled={isAnimating}
        style={{ perspective: '500px' }}
      >
        <span className={cn('button-text', { 'fade-out': !textVisible })}>Submit</span>
        <span className={cn('button-part left', { 'animate': isAnimating })}></span>
        <span className={cn('button-part right', { 'animate': isAnimating })}></span>
        <span className={cn('rocket', { 'launch': isAnimating })}>🚀</span>
      </button>
      <style jsx>{`
        .button-text {
          transition: opacity 0.2s ease-out;
        }
        .button-text.fade-out {
          opacity: 0;
        }
        .button-part {
          position: absolute;
          top: 0;
          height: 100%;
          width: 51%;
          background-color: #E21F26;
          transition: transform 1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
          transform-origin: center;
        }
        .button-part.left {
          left: 0;
          border-top-left-radius: 0.375rem;
          border-bottom-left-radius: 0.375rem;
        }
        .button-part.right {
          right: 0;
          border-top-right-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        .button-part.left.animate {
          transform: translateX(-100%) rotateY(-60deg);
        }
        .button-part.right.animate {
          transform: translateX(100%) rotateY(60deg);
        }
        .rocket {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0;
          transform: translateY(20px) rotate(-45deg);
        }
        .rocket.launch {
          animation: launch 1.5s ease-out forwards;
          animation-delay: 0.1s;
        }
        @keyframes launch {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.5) rotate(-45deg);
          }
          20% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(-45deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-200px) scale(1.5) rotate(-45deg);
          }
        }
        .crack-open {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
}
