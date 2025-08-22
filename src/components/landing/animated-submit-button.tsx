"use client";

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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
      }, 2000); // Animation duration

      return () => clearTimeout(timer);
    }
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
        
        {/* Surprise Box Elements */}
        <div className="surprise-box">
          <div className="box-lid"></div>
          <div className="box-body"></div>
          <div className="box-ribbon-h"></div>
          <div className="box-ribbon-v"></div>
        </div>

        {/* Confetti & Checkmark */}
        <div className="effects">
          <div className="checkmark"><Check size={32} /></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="confetti" style={{ '--i': i } as React.CSSProperties}></div>
          ))}
        </div>
      </button>
      <style jsx>{`
        .button-text {
          transition: opacity 0.2s ease-out;
          z-index: 10;
        }
        .button-text.fade-out {
          opacity: 0;
        }

        .surprise-box {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .box-body {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #E21F26;
            border-radius: 0.375rem;
            transition: transform 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        }

        .box-lid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 25%;
            background-color: #c01a20;
            border-top-left-radius: 0.375rem;
            border-top-right-radius: 0.375rem;
            z-index: 2;
            transition: transform 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045);
            transform-origin: top center;
        }

        .box-ribbon-v, .box-ribbon-h {
            position: absolute;
            background-color: #f0a80e;
        }
        .box-ribbon-v {
            top: 0;
            left: 50%;
            width: 12px;
            height: 100%;
            transform: translateX(-50%);
        }
        .box-ribbon-h {
            top: 50%;
            left: 0;
            width: 100%;
            height: 12px;
            transform: translateY(-50%);
            z-index: 1;
        }
        
        .is-animating .box-lid {
            transform: translateY(-100%) rotateX(-90deg);
        }
        .is-animating .box-body {
            transform: translateY(20%) scale(0.95);
        }
        .is-animating .box-ribbon-h, .is-animating .box-ribbon-v {
            opacity: 0;
            transition: opacity 0.2s ease-out;
        }

        .effects {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .checkmark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            color: #4ade80; /* green-400 */
            opacity: 0;
        }

        .is-animating .checkmark {
            animation: pop-in 0.5s 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .confetti {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: hsl(var(--i) * 18, 90%, 60%);
            top: 50%;
            left: 50%;
            opacity: 0;
            transform-origin: center;
        }

        .is-animating .confetti {
            animation: explode 1.2s 0.3s ease-out forwards;
        }

        @keyframes pop-in {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }

        @keyframes explode {
            0% {
                transform: translate(-50%, -50%) rotate(0deg) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(
                    calc(-50% + cos(var(--i) * 18deg) * 100px), 
                    calc(-50% + sin(var(--i) * 18deg) * 100px)
                ) rotate(360deg) scale(0);
                opacity: 0;
            }
        }
      `}</style>
    </div>
  );
}
