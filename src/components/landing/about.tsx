
export default function About() {
  return (
    <section id="about" className="w-full bg-background py-10 md:py-16" aria-labelledby="about-heading">
      <div className="flex justify-center py-10 md:py-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="mx-auto max-w-2xl p-8 md:p-12 text-center">
                <div className="mb-4 h-1 w-16 bg-primary mx-auto"></div>
                <h2 id="about-heading" className="mb-4 font-headline text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
                  Who We Are
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-left max-w-sm mx-auto">
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
      </div>
    </section>
  );
}
