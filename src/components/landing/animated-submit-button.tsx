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
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      // Total animation time is roughly 1.5s for launch + reset
      timer = setTimeout(() => {
        setIsAnimating(false);
        // Delay showing text until button is fully reset
        setTimeout(() => {
            setTextVisible(true);
        }, 200);
      }, 1800);
    }
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div className="w-full md:w-auto">
      <button
        ref={buttonRef}
        type="submit"
        className={cn(
          'relative flex items-center justify-center w-full md:w-auto h-12 px-8 rounded-md text-white font-medium overflow-hidden transition-all duration-300',
          'bg-primary active:scale-95 group',
          isAnimating ? 'is-animating' : ''
        )}
        onClick={handleClick}
        disabled={isAnimating}
        style={{ perspective: '800px' }}
      >
        <span className={cn('button-text', { 'fade-out': !textVisible })}>Submit</span>
        
        <span className="rocket">🚀</span>
        <div className="crack-top"></div>
        <div className="crack-bottom"></div>
      </button>
      <style jsx>{`
        .button-text {
          transition: opacity 0.2s ease-out;
          z-index: 10;
        }
        .button-text.fade-out {
          opacity: 0;
        }

        .crack-top,
        .crack-bottom {
          position: absolute;
          left: 0;
          right: 0;
          height: 50%;
          background: #E21F26;
          transition: transform 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }

        .crack-top {
          top: 0;
          border-bottom: 1px solid #c01a20;
          transform-origin: bottom;
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
        }

        .crack-bottom {
          bottom: 0;
          border-top: 1px solid #c01a20;
          transform-origin: top;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }

        .is-animating .crack-top {
          transform: translateY(-20%) scaleY(0.8) rotateX(-20deg);
        }
        
        .is-animating .crack-bottom {
          transform: translateY(20%) scaleY(0.8) rotateX(20deg);
        }

        .rocket {
          position: absolute;
          font-size: 2rem;
          opacity: 0;
          pointer-events: none;
          z-index: 5;
        }

        .is-animating .rocket {
          animation: launch 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes launch {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          20% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) scale(1.5) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
