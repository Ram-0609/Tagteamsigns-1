import Image from 'next/image';

const services = [
  {
    name: "Storefront Signs",
    icon: "https://static.wixstatic.com/media/282ef0_941e9d1cd1434a2199dbf96150e56626~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Storefront.png",
    hint: "storefront sign icon"
  },
  {
    name: "Commercial Signs",
    icon: "https://static.wixstatic.com/media/282ef0_ccdad8e6e38d4a7f9781dfa5250b0439~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Commercial.png",
    hint: "commercial sign icon"
  },
  {
    name: "Monument Signs",
    icon: "https://static.wixstatic.com/media/282ef0_d509f74067334fa5a228dda2c4c2594b~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Monument.png",
    hint: "monument sign icon"
  },
  {
    name: "Service & Permitting",
    icon: "https://static.wixstatic.com/media/282ef0_6675323af6bb49d78cbdca058018d65e~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Service.png",
    hint: "service permitting icon"
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-secondary py-32 text-secondary-foreground md:py-48">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-4 h-1 w-16 bg-primary"></div>
        <h2 className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight md:mb-12 md:text-8xl">
          <div>Our</div>
          <div>Services</div>
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="flex items-center gap-4">
              <Image 
                src={service.icon} 
                alt={`${service.name} icon`}
                data-ai-hint={service.hint}
                width={34}
                height={34}
                className="h-8 w-8 flex-shrink-0"
              />
              <span className="text-lg font-semibold">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
