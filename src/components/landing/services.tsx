import { CheckCircle2 } from 'lucide-react';

const services = [
  "Storefront Signs",
  "Commercial Signs",
  "Monument Signs",
  "Service & Permitting",
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-4 h-1 w-16 bg-primary"></div>
        <h2 className="mb-8 font-headline text-3xl font-bold uppercase tracking-tight md:mb-12 md:text-4xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
              <span className="text-lg font-semibold">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
