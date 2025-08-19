import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Illuminated channel letters for a modern storefront',
    hint: 'storefront sign',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Awnings with branded graphics for a restaurant',
    hint: 'storefront sign',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Dimensional letter sign on a brick wall',
    hint: 'storefront sign',
  },
];

export default function StorefrontSignsPage() {
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
            <h1 className="mb-8 font-headline text-5xl font-bold uppercase tracking-tight md:text-7xl">
              Storefront Signs
            </h1>
            <p className="text-lg">
              Make a lasting first impression with a high-quality storefront sign. We design, build, and install a wide variety of signs to match your brand and attract customers. From classic designs to modern illuminated displays, we have the solution for you.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
