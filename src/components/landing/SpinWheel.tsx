
'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, AlertTriangle, Biohazard, Radiation } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const offerSlides = [
    { title: "DANGER: HIGHLY VISIBLE SIGNS", description: "Get 25% off on all LED-illuminated signs.", icon: AlertTriangle },
    { title: "WARNING: CONTAGIOUSLY GOOD DEALS", description: "Biohazard-level savings on storefront signs.", icon: Biohazard },
    { title: "RADIOACTIVE SAVINGS", description: "A glowing 15% discount on custom designs.", icon: Radiation },
    { title: "CAUTION: HEAVY-DUTY DISCOUNTS", description: "20% off durable monument signs that last.", icon: AlertTriangle },
    { title: "TOXIC-LEVEL OFFERS AHEAD", description: "Free permitting with any project over $2500.", icon: Biohazard },
    { title: "RISK OF EXTREME SATISFACTION", description: "Our quality is dangerously good. Check our offers!", icon: Radiation },
];


interface SpinWheelProps {
  onClose: () => void;
}

export default function SpinWheel({ onClose }: SpinWheelProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offerSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % offerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + offerSlides.length) % offerSlides.length);

  return (
    <div 
      data-spin-wheel-area 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        className={cn(
          "relative w-full max-w-md md:max-w-lg rounded-2xl bg-black border-2 border-primary/50 shadow-2xl p-6 text-white overflow-hidden",
          isClosing ? 'spin-wheel-popup-leave' : 'spin-wheel-popup-enter'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
          onClick={handleClose}
        >
          <X />
        </Button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold uppercase font-headline tracking-tight text-primary">Special Offers!</h2>
          <p className="text-white/80 mt-1">Check out our latest deals on sign projects.</p>
        </div>

        {/* Offer Carousel */}
        <div className="mt-4 relative h-28">
            <div className="overflow-hidden rounded-lg bg-black/30 border border-yellow-400/50 p-1">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)`}}
                >
                    {offerSlides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-4 bg-secondary rounded-lg text-center flex flex-col items-center justify-center">
                            <div className="flex items-center gap-2 mb-1">
                                <slide.icon className="w-5 h-5 text-yellow-400" />
                                <h4 className="font-bold text-base text-yellow-300 font-headline uppercase">{slide.title}</h4>
                            </div>
                            <p className="text-sm text-white/70">{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
             <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 left-0 h-8 w-8 text-white/50 hover:text-white hover:bg-white/10" onClick={prevSlide}><ChevronLeft /></Button>
             <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 right-0 h-8 w-8 text-white/50 hover:text-white hover:bg-white/10" onClick={nextSlide}><ChevronRight /></Button>
        </div>
        
        <div className="mt-6 text-center">
            <Button 
                onClick={handleClose} 
                className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Continue to Site
            </Button>
        </div>

      </div>
    </div>
  );
}
