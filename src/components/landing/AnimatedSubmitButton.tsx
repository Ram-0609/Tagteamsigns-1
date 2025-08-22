
"use client";

import React, from 'react';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

export default function AnimatedSubmitButton() {
  const { formState, handleSubmit } = useFormContext();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const onSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
    // Here you would typically handle the form submission, e.g., send to an API
  };

  const handleClick = () => {
    if (formState.isSubmitting || isAnimating) return;
    
    setIsAnimating(true);
    handleSubmit(onSubmit)();

    setTimeout(() => {
      setIsAnimating(false);
    }, 4000); 
  };
  
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
        setIsAnimating(true);
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 4000);
        return () => clearTimeout(timeout);
    }
  }, [formState.isSubmitSuccessful]);

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
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          -webkit-tap-highlight-color: transparent;
        }
        .animated-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        .animated-button:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
          border-radius: 0.5rem 0.5rem 0 0;
        }
        .animated-button::after {
          bottom: 0;
          border-radius: 0 0 0.5rem 0.5rem;
        }
        .animated-button.cracked::before {
          transform: translateY(-100%) rotate(-8deg);
        }
        .animated-button.cracked::after {
          transform: translateY(100%) rotate(8deg);
        }
        .button-text {
          position: relative;
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        .animated-button.cracked .button-text {
            opacity: 0;
        }
        .rocket-icon {
          position: absolute;
          z-index: 0;
          font-size: 1.5rem;
          opacity: 0;
          transform: translateY(100%) rotate(-45deg);
        }
        .rocket-icon.launch {
          animation: launch 4s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }
        @keyframes launch {
          0% {
            transform: translateY(20px) rotate(-45deg);
            opacity: 1;
          }
          20% {
            transform: translateY(-20px) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-1000px) rotate(-45deg);
            opacity: 0;
          }
        }
        .smoke {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 8px;
            height: 8px;
            background: #e0e0e0;
            border-radius: 50%;
            opacity: 0;
            z-index: 0;
            transform: translateX(-50%);
        }
        .animated-button.cracked .smoke {
            animation: smoke-plume 1.5s ease-out forwards;
        }
        .smoke-1 { animation-delay: 0.2s; }
        .smoke-2 { animation-delay: 0.3s; left: 45%; }
        .smoke-3 { animation-delay: 0.4s; left: 55%; }
        .smoke-4 { animation-delay: 0.5s; left: 40%; }
        .smoke-5 { animation-delay: 0.6s; left: 60%; }

        @keyframes smoke-plume {
            0% {
                transform: translate(-50%, 0) scale(0.5);
                opacity: 0;
            }
            20% {
                transform: translate(-50%, 20px) scale(1);
                opacity: 0.8;
            }
            100% {
                transform: translate(-50%, 80px) scale(4);
                opacity: 0;
            }
        }
      `}</style>
      <button
        ref={buttonRef}
        onClick={handleClick}
        disabled={formState.isSubmitting || isAnimating}
        className={cn("animated-button", (formState.isSubmitting || isAnimating) ? "cracked" : "")}
      >
        <span className="button-text">
          {formState.isSubmitting ? 'Sending...' : formState.isSubmitSuccessful ? 'Submit' : 'Submit'}
        </span>
        <span className={cn("rocket-icon", (formState.isSubmitting || isAnimating) ? "launch" : "")}>🚀</span>
        <div className="smoke-container">
            <span className="smoke smoke-1"></span>
            <span className="smoke smoke-2"></span>
            <span className="smoke smoke-3"></span>
            <span className="smoke smoke-4"></span>
            <span className="smoke smoke-5"></span>
        </div>
      </button>
    </>
  );
}
