
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://www.davessigns.com/wp-content/uploads/2024/07/6ef39846-07d4-4269-9606-6ac9ec872a3f.jpeg',
    alt: 'Modern commercial building sign',
    hint: 'commercial sign',
    description: 'Sleek, professional signs for corporate offices and business parks that make a bold statement.',
  },
  {
    src: 'https://www.poyantsigns.com/wp-content/uploads/2017/08/Sonnys-3-1.jpg',
    alt: 'Pylon sign for a shopping center',
    hint: 'pylon sign',
    description: 'Tall, freestanding pylon signs designed for maximum visibility from a distance, ideal for shopping centers and retail parks.',
  },
  {
    src: 'https://image.made-in-china.com/202f0j00OMJVWGQFLkYK/Advertising-Lights-Commercial-for-Coffee-Shop-Acrylic-Advertisement-Light-Box-Outdoor-Waterproof-Business-Signs-Lighting-LED-Signs.webp',
    alt: 'Interior lobby sign for a corporate office',
    hint: 'lobby sign',
    description: 'Elegant and impactful lightbox signs for your cafe or retail space, ensuring your brand shines bright.',
  },
];

export default function CommercialSignsPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main>
        <div className="container mx-auto max-w-[1200px] px-6 py-12 md:px-12">
          <Link href="/#services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          <div className="prose max-w-none">
            <h1 className="mb-8 font-headline text-5xl font-bold uppercase tracking-tight text-primary md:text-7xl">
              Commercial Signs
            </h1>
            <p className="text-lg">
                We create high-impact commercial signs that enhance your brand visibility and attract customers. Our expertise covers a wide range of signs suitable for office buildings, retail parks, industrial sites, and more. From design to installation, we manage the entire process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="flip-card group aspect-square">
              <div className="flip-card-inner group-hover:rotate-y-180">
                <div className="flip-card-front">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flip-card-back bg-white p-6 flex items-center justify-center text-center">
                    <p className="text-foreground">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
