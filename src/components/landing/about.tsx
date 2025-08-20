"use client";

import { useOnScreen } from "@/hooks/use-on-screen";

export default function About() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.2 });
  const [textRef, isTextOnScreen] = useOnScreen({ threshold: 0.4 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative w-full py-20 text-black md:py-28 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isOnScreen ? 'scale-100' : 'scale-110'}`}
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg/v1/fill/w_1057,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg')" }}
        data-ai-hint="office background"
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      <div 
        ref={textRef}
        className="container relative mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <div className={`max-w-2xl text-left`}>
           <div className={`curtain-animate ${isTextOnScreen ? 'curtain-animate-in' : ''}`}>
            <div className="mb-4 h-1 w-16 bg-primary"></div>
            <h2 id="about-heading" className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight text-black md:mb-12 md:text-8xl">
              <div>Who</div>
              <div>We Are</div>
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-secondary-foreground md:text-lg">
            <p className={`curtain-animate ${isTextOnScreen ? 'curtain-animate-in' : ''}`} style={{ transitionDelay: '100ms' }}>
              We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
            </p>
            <ul className={`list-disc list-inside space-y-1 text-left text-primary curtain-animate ${isTextOnScreen ? 'curtain-animate-in' : ''}`} style={{ transitionDelay: '200ms' }}>
              <li>Pan Channel Letters</li>
              <li>Reversed Pan Channel Letters</li>
              <li>LED Illumination</li>
              <li>Monument & Pole Signs</li>
              <li>Sign Cabinets</li>
              <li>Sign Service and Repair</li>
              <li>National Accounts</li>
              <li>Permit Processing</li>
              <li>Licensed, Bonded and Insured</li>
            </ul>
            <p className={`curtain-animate ${isTextOnScreen ? 'curtain-animate-in' : ''}`} style={{ transitionDelay: '300ms' }}>
              Give us a call today for a Free Estimate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
