
export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full py-20 text-white md:py-28"
      aria-labelledby="about-heading"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg/v1/fill/w_1057,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg')" }}
        data-ai-hint="office background"
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container relative mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-2xl text-left">
          <div className="mb-4 h-1 w-16 bg-primary"></div>
          <h2 id="about-heading" className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight md:mb-12 md:text-8xl">
            <div>Who</div>
            <div>We Are</div>
          </h2>
          <div className="space-y-4 text-base leading-relaxed md:text-lg">
            <p>
              We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
            </p>
            <ul className="list-disc list-inside space-y-1 text-left">
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
            <p>
              Give us a call today for a Free Estimate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
