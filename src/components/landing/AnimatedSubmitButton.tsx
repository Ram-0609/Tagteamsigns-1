
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSubmitButtonProps = {
  isSubmitting: boolean;
  onClick: () => void;
};

export default function AnimatedSubmitButton({ isSubmitting, onClick }: AnimatedSubmitButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (isSubmitting || isAnimating) return;
    
    setIsAnimating(true);
    onClick();
  };
  
  useEffect(() => {
    if (isAnimating) {
        const button = buttonRef.current;
        if (!button) return;

        const rocket = button.querySelector('.rocket-icon') as HTMLElement;
        const buttonText = button.querySelector('.button-text') as HTMLElement;

        if (buttonText) buttonText.style.opacity = '0';
        
        button.classList.add('cracked');
        if(rocket) rocket.classList.add('launch');

        const animationTimeout = setTimeout(() => {
            button.classList.remove('cracked');
            if(rocket) rocket.classList.remove('launch');
            setIsAnimating(false);
        }, 2500);
        
        return () => clearTimeout(animationTimeout);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (!isSubmitting && !isAnimating) {
        const button = buttonRef.current;
        const buttonText = button?.querySelector('.button-text') as HTMLElement;
        if (buttonText) buttonText.style.opacity = '1';
    }
  }, [isSubmitting, isAnimating]);

  return (
    <>
      <style jsx>{`
        .animated-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          background-color: #E21F26;
          color: white;
          font-weight: 600;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.2s ease, background-color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .animated-button:disabled {
          background-color: #fca5a5;
          cursor: not-allowed;
        }
        .animated-button::before,
        .animated-button::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          background: #E21F26;
          transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1);
          z-index: 1;
        }
        .animated-button::before {
          top: 0;
        }
        .animated-button::after {
          bottom: 0;
        }
        .animated-button.cracked::before {
          transform: translateY(-20px) rotate(-5deg);
        }
        .animated-button.cracked::after {
          transform: translateY(20px) rotate(5deg);
        }
        .button-text {
          position: relative;
          z-index: 2;
          transition: opacity 0.2s ease;
        }
        .rocket-icon {
          position: absolute;
          z-index: 0;
          font-size: 1.5rem;
          opacity: 0;
          transform: translateY(100%);
        }
        .rocket-icon.launch {
          opacity: 1;
          animation: launch 1.5s cubic-bezier(0.83, 0, 0.17, 1) forwards;
        }
        @keyframes launch {
          0% {
            transform: translateY(0) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
      <button
        ref={buttonRef}
        onClick={handleClick}
        disabled={isSubmitting || isAnimating}
        className={cn("animated-button", isAnimating ? "cracked" : "")}
      >
        <span className="button-text">
          {isSubmitting ? 'Sending...' : 'Submit'}
        </span>
        <span className={cn("rocket-icon", isAnimating ? "launch" : "")}>🚀</span>
      </button>
    </>
  );
}
