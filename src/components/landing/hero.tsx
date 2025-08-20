"use client";

import { useOnScreen } from "@/hooks/use-on-screen";

export default function Hero() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.1 });

  return (
    <section
      id="home"
      className="w-full bg-primary text-black"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-end px-6 md:px-12">
        <div 
          ref={ref}
          className={`text-right scroll-animate ${isOnScreen ? 'scroll-animate-in' : ''}`}
        >
          <h1
            id="hero-heading"
            className={`font-headline font-black uppercase leading-none tracking-tighter text-[clamp(4rem,10vw,5.75rem)]`}
          >
            <div className="text-white">SIGNS</div>
            <div>DESIGN</div>
            <div>BUILD</div>
            <div>INSTALL</div>
          </h1>
        </div>
      </div>
    </section>
  );
}
