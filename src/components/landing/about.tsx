
export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full py-10 md:py-16 bg-cover bg-center bg-no-repeat" 
      style={{backgroundImage: "url('https://static.wixstatic.com/media/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg')"}}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex items-center py-10 md:py-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl text-left">
                <div className="mb-4 h-1 w-16 bg-primary"></div>
                <h2 id="about-heading" className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight text-white md:mb-12 md:text-8xl">
                  <div>Who</div>
                  <div>We Are</div>
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p className="text-white">
                    We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-left">
                    <li className="text-white">Pan Channel Letters</li>
                    <li className="text-white">Reversed Pan Channel Letters</li>
                    <li className="text-white">LED Illumination</li>
                    <li className="text-white">Monument & Pole Signs</li>
                    <li className="text-white">Sign Cabinets</li>
                    <li className="text-white">Sign Service and Repair</li>
                    <li className="text-white">National Accounts</li>
                    <li className="text-white">Permit Processing</li>
                    <li className="text-white">Licensed, Bonded and Insured</li>
                  </ul>
                  <p className="text-white">
                    Give us a call today for a Free Estimate!
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
