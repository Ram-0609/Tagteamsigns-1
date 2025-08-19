import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { src: "https://static.wixstatic.com/media/282ef0_e357c3f3d41b4f43ae84bb7c5677cd97~mv2.jpg/v1/fill/w_600,h_600,fp_0.51_0.51,q_90/282ef0_e357c3f3d41b4f43ae84bb7c5677cd97~mv2.jpg", alt: "Custom storefront sign", hint: "storefront sign" },
  { src: "https://static.wixstatic.com/media/282ef0_2abe8015ccb34426a853b0d5071c4c79~mv2.jpg/v1/fill/w_600,h_600,q_90/282ef0_2abe8015ccb34426a853b0d5071c4c79~mv2.jpg", alt: "Storefront sign example", hint: "storefront sign" },
  { src: "https://static.wixstatic.com/media/282ef0_b59b063b2f6949b3832e5bcab1ec9f21~mv2.jpg/v1/fill/w_600,h_600,fp_0.48_0.48,q_90/282ef0_b59b063b2f6949b3832e5bcab1ec9f21~mv2.jpg", alt: "Commercial sign example", hint: "commercial sign" },
  { src: "https://static.wixstatic.com/media/282ef0_49577ce71b394d1da77d3fd360995bff~mv2.jpg/v1/fill/w_600,h_600,q_90/282ef0_49577ce71b394d1da77d3fd360995bff~mv2.jpg", alt: "Monument sign example", hint: "monument sign" },
  { src: "https://static.wixstatic.com/media/282ef0_e36878464fd742c9b815b5f70472d674~mv2.jpg/v1/fill/w_600,h_600,fp_0.48_0.48,q_90/282ef0_e36878464fd742c9b815b5f70472d674~mv2.jpg", alt: "LED sign example", hint: "led sign" },
  { src: "https://static.wixstatic.com/media/282ef0_c745e3d5d2624c038d197ad1fc7ea28f~mv2.jpg/v1/fill/w_600,h_600,fp_0.51_0.51,q_90/282ef0_c745e3d5d2624c038d197ad1fc7ea28f~mv2.jpg", alt: "Custom sign example", hint: "custom sign" },
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
