import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { src: "https://placehold.co/600x600.png", alt: "Storefront sign example", hint: "storefront sign" },
  { src: "https://placehold.co/600x600.png", alt: "Commercial sign example", hint: "commercial sign" },
  { src: "https://placehold.co/600x600.png", alt: "Monument sign example", hint: "monument sign" },
  { src: "https://placehold.co/600x600.png", alt: "LED sign example", hint: "led sign" },
  { src: "https://placehold.co/600x600.png", alt: "Office sign example", hint: "office sign" },
  { src: "https://placehold.co/600x600.png", alt: "Building sign example", hint: "building sign" },
];

export default function Work() {
  return (
    <section id="work" className="w-full" aria-labelledby="work-heading">
      <div className="bg-primary py-10 text-primary-foreground md:py-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
          <h2 id="work-heading" className="mb-4 font-headline text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Our Work
          </h2>
          <p className="max-w-3xl text-lg text-primary-foreground/90">
            We take pride in the signs we create, from modern storefront designs to durable monument signs. Our mission is to deliver quality, clarity, and long-lasting impact in every project.
          </p>
        </div>
      </div>
      <div className="bg-background">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-none rounded-none border-0 transition-shadow hover:shadow-2xl aspect-square">
              <CardContent className="p-0 h-full">
                <div className="overflow-hidden h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    data-ai-hint={item.hint}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
