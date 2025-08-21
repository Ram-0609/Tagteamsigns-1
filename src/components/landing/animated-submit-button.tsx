"use client";

import { useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { cn } from '@/lib/utils';
import checkmarkAnimation from '@/animations/checkmark.json';

export function AnimatedSubmitButton() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    if (isSubmitted) return;
    
    setIsSubmitted(true);
    if(lottieRef.current) {
        lottieRef.current.play();
    }

    setTimeout(() => {
        setIsSubmitted(false);
        if(lottieRef.current) {
            lottieRef.current.stop();
        }
    }, 2000);
  };

  return (
    <div className="w-full md:w-auto">
      <button
        type="submit"
        className={cn(
          'relative flex items-center justify-center w-full md:w-auto h-11 px-8 rounded-md text-white font-medium overflow-hidden transition-all duration-300',
          'bg-primary hover:bg-primary/90 active:scale-95',
          isSubmitted && 'bg-green-500'
        )}
        onClick={handleClick}
        disabled={isSubmitted}
      >
        <span
          className={cn(
            'transition-all duration-300',
            isSubmitted ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
          )}
        >
          Submit
        </span>
        <div 
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            !isSubmitted && 'hidden'
          )}
        >
            <Lottie 
                lottieRef={lottieRef}
                animationData={checkmarkAnimation} 
                loop={false}
                autoplay={false}
                style={{ width: 64, height: 64 }}
            />
        </div>
      </button>
    </div>
  );
}
