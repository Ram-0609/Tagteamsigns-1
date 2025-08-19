
export default function About() {
  return (
    <section 
      id="about" 
      className="w-full bg-background py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-2xl text-left">
          <div className="mb-4 h-1 w-16 bg-primary"></div>
          <h2 id="about-heading" className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight text-foreground md:mb-12 md:text-8xl">
            <div>Who</div>
            <div>We Are</div>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
            </p>
            <ul className="list-disc list-inside space-y-1 text-left text-muted-foreground">
              <li className="text-primary">Pan Channel Letters</li>
              <li className="text-primary">Reversed Pan Channel Letters</li>
              <li className="text-primary">LED Illumination</li>
              <li className="text-primary">Monument & Pole Signs</li>
              <li className="text-primary">Sign Cabinets</li>
              <li className="text-primary">Sign Service and Repair</li>
              <li className="text-primary">National Accounts</li>
              <li className="text-primary">Permit Processing</li>
              <li className="text-primary">Licensed, Bonded and Insured</li>
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
