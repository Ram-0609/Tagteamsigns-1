
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Gift, Repeat, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const offers = [
  { type: 'discount', value: '50%', label: '50% OFF' },
  { type: 'gift', value: 'Free Gift', label: 'FREE GIFT' },
  { type: 'discount', value: '10%', label: '10% OFF' },
  { type: 'try-again', value: 'Try Again', label: 'TRY AGAIN' },
  { type: 'discount', value: '20%', label: '20% OFF' },
  { type: 'discount', value: '5%', label: '5% OFF' },
];

const offerSlides = [
    { title: "FLAT 20% OFF", description: "On all storefront sign installations." },
    { title: "FREE PERMITTING", description: "With any commercial sign project over $5000." },
    { title: "50% OFF DESIGN", description: "Get 50% off on your next sign design project." },
    { title: "10% EXTRA DISCOUNT", description: "For returning customers on any service." },
];

interface SpinWheelProps {
  onClose: () => void;
}

export default function SpinWheel({ onClose }: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const [finalAngle, setFinalAngle] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);

    const spinCycles = 5;
    const winningSegmentIndex = Math.floor(Math.random() * offers.length);
    const segmentAngle = 360 / offers.length;
    const randomOffset = Math.random() * segmentAngle - (segmentAngle / 2);
    const newFinalAngle = (spinCycles * 360) + (winningSegmentIndex * segmentAngle) + randomOffset;
    
    setFinalAngle(newFinalAngle);

    setTimeout(() => {
      const result = offers[winningSegmentIndex];
      setSpinResult(result.label);
      setIsSpinning(false);
      toast({
        title: "Congratulations!",
        description: `You won: ${result.label}`,
      });
    }, 5000); // Corresponds to animation duration
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
          <h2 className="text-3xl font-extrabold uppercase font-headline tracking-tight text-primary">Spin to Win!</h2>
          <p className="text-white/80 mt-1">Get exclusive offers on your next sign project.</p>
        </div>

        <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto flex items-center justify-center">
            {/* Pointer */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-primary"></div>
            </div>
            
            {/* Wheel */}
            <div 
              ref={wheelRef}
              className="absolute w-full h-full rounded-full border-4 border-primary/50 bg-secondary shadow-inner transition-transform duration-[5000ms] ease-out"
              style={{ transform: `rotate(${finalAngle}deg)` }}
            >
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)' }}></div>
              {offers.map((offer, index) => {
                const rotation = (360 / offers.length) * index;
                const skew = 90 - (360 / offers.length);
                return (
                  <div 
                    key={index} 
                    className="absolute w-1/2 h-1/2 origin-bottom-right" 
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    <div 
                      className="absolute w-full h-full origin-bottom-right flex items-center justify-center"
                      style={{ 
                        transform: `skewY(-${skew}deg) rotate(${(360 / offers.length) / 2}deg)`,
                        background: index % 2 === 0 ? '#111' : '#222'
                      }}
                    >
                      <div 
                        className="flex flex-col items-center justify-center text-white font-semibold uppercase text-xs md:text-sm" 
                        style={{ transform: `skewY(${skew}deg) rotate(-${(360 / offers.length) / 2}deg)`}}
                      >
                         {offer.type === 'gift' ? <Gift className="w-5 h-5 md:w-6 md:h-6 mb-1 text-primary" /> : null}
                         {offer.type === 'try-again' ? <Repeat className="w-5 h-5 md:w-6 md:h-6 mb-1" /> : null}
                        <span>{offer.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Button */}
            <Button
              onClick={handleSpin}
              disabled={isSpinning || !!spinResult}
              className="relative z-10 h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary border-4 border-white text-lg font-bold uppercase shadow-lg transition-transform hover:scale-105 disabled:bg-primary/70 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isSpinning ? '...' : spinResult ? 'Done' : 'Spin'}
            </Button>
        </div>

        {/* Result Banner */}
        <div className="h-16 mt-6 flex items-center justify-center">
            {spinResult && !isSpinning && (
                <div className="result-banner-enter bg-black border border-primary p-3 rounded-lg shadow-lg text-center opacity-0">
                    <p className="text-white/80 text-sm">Congratulations! You won:</p>
                    <p className="font-bold text-xl text-primary font-headline tracking-wide">{spinResult}</p>
                </div>
            )}
        </div>

        {/* Offer Carousel */}
        <div className="mt-4 relative h-28">
            <div className="overflow-hidden rounded-lg">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)`}}
                >
                    {offerSlides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-4 bg-secondary rounded-lg text-center">
                            <h4 className="font-bold text-lg text-primary font-headline">{slide.title}</h4>
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
                onClick={spinResult ? handleClose : handleSpin} 
                disabled={isSpinning}
                className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              {spinResult ? 'Claim Offer & Continue' : 'Spin Now!'}
            </Button>
        </div>

      </div>
    </div>
  );
}
