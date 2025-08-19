import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-10 md:py-16" aria-labelledby="about-heading">
      <Image
        src="https://static.wixstatic.com/media/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/282ef0_9b21842360a9440ebf54c7f823266517~mv2.jpg"
        alt="Background of sign fabrication"
        data-ai-hint="sign fabrication"
        fill
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex justify-center py-10 md:py-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl p-8 md:p-12">
                <div className="mb-4 h-1 w-16 bg-primary"></div>
                <h2 id="about-heading" className="mb-4 font-headline text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                Who We Are
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-gray-200 md:text-lg">
                  <p className="text-black">
                    We are a Full Service Sign Company with Over 20 Years in the Industry. We specialize in Commercial Building Signs, Storefront Signs and Monument Signs!
                  </p>
                  <ul className="list-disc list-inside space-y-1">
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
