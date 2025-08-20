"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useOnScreen } from '@/hooks/use-on-screen';

const galleryItems = [
  { src: "https://static.wixstatic.com/media/282ef0_e357c3f3d41b4f43ae84bb7c5677cd97~mv2.jpg/v1/fill/w_600,h_600,fp_0.51_0.51,q_90/282ef0_e357c3f3d41b4f43ae84bb7c5677cd97~mv2.jpg", alt: "Custom storefront sign", hint: "storefront sign" },
  { src: "https://static.wixstatic.com/media/282ef0_2abe8015ccb34426a853b0d5071c4c79~mv2.jpg/v1/fill/w_600,h_600,q_90/282ef0_2abe8015ccb34426a853b0d5071c4c79~mv2.jpg", alt: "Storefront sign example", hint: "storefront sign" },
  { src: "https://static.wixstatic.com/media/282ef0_b59b063b2f6949b3832e5bcab1ec9f21~mv2.jpg/v1/fill/w_600,h_600,fp_0.48_0.48,q_90/282ef0_b59b063b2f6949b3832e5bcab1ec9f21~mv2.jpg", alt: "Commercial sign example", hint: "commercial sign" },
  { src: "https://static.wixstatic.com/media/282ef0_49577ce71b394d1da77d3fd360995bff~mv2.jpg/v1/fill/w_600,h_600,q_90/282ef0_49577ce71b394d1da77d3fd360995bff~mv2.jpg", alt: "Monument sign example", hint: "monument sign" },
  { src: "https://static.wixstatic.com/media/282ef0_e36878464fd742c9b815b5f70472d674~mv2.jpg/v1/fill/w_600,h_600,fp_0.48_0.48,q_90/282ef0_e36878464fd742c9b815b5f70472d674~mv2.jpg", alt: "LED sign example", hint: "led sign" },
  { src: "https://static.wixstatic.com/media/282ef0_c745e3d5d2624c038d197ad1fc7ea28f~mv2.jpg/v1/fill/w_600,h_600,fp_0.51_0.51,q_90/282ef0_c745e3d5d2624c038d197ad1fc7ea28f~mv2.jpg", alt: "Custom sign example", hint: "custom sign" },
];

export default function Work() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.1 });
  const [gridRef, isGridOnScreen] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="work" className="w-full" aria-labelledby="work-heading">
      <div ref={ref} className={`bg-primary py-10 text-primary-foreground md:py-16 scroll-animate ${isOnScreen ? 'scroll-animate-in' : ''}`}>
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="mb-4 h-1 w-16 bg-secondary"></div>
            <h2 id="work-heading" className="mb-8 font-headline text-7xl font-bold uppercase tracking-tight md:mb-12 md:text-8xl">
                <div>Our</div>
                <div>Work</div>
            </h2>
          <p className="max-w-3xl text-lg text-primary-foreground/90">
            Discover how TagTeamSigns is your best resource for creative, quality sign solutions. Our highly trained staff is committed to give you exceptional customer service. From start to finish, you'll see how we make the most out of the latest technologies to design, create and install virtually any type of sign. We streamline the sign buying process for you from Concept to Completion.
          </p>
        </div>
      </div>
      <div ref={gridRef} className="bg-background">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden shadow-none rounded-none border-0 transition-shadow hover:shadow-2xl aspect-square scroll-animate ${isGridOnScreen ? 'scroll-animate-in' : ''}`}
              style={{ transitionDelay: `${(index % 3) * 100}ms`}}
            >
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