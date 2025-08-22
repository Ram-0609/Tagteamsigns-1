"use client";

import { useOnScreen } from "@/hooks/use-on-screen";

export default function Hero() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.3 });

  return (
    <section
      id="home"
      className="w-full bg-primary text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-end px-6 md:px-12">
        <div 
          ref={ref}
          className="text-right"
        >
          <h1
            id="hero-heading"
            className={`font-headline font-black uppercase leading-none tracking-tighter text-[clamp(4rem,10vw,5.75rem)]`}
          >
            <div className={`hero-animate ${isOnScreen ? 'hero-animate-in' : ''}`} style={{ transitionDelay: '0ms' }}>SIGNS</div>
            <div className={`hero-animate ${isOnScreen ? 'hero-animate-in' : ''}`} style={{ transitionDelay: '100ms' }}>DESIGN</div>
            <div className={`hero-animate ${isOnScreen ? 'hero-animate-in' : ''}`} style={{ transitionDelay: '200ms' }}>BUILD</div>
            <div className={`hero-animate ${isOnScreen ? 'hero-animate-in' : ''}`} style={{ transitionDelay: '300ms' }}>INSTALL</div>
          </h1>
        </div>
      </div>
    </section>
  );
}
