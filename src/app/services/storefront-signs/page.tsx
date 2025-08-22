
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const heroImage = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdw9zxF16RhMSUreeDVNi-Q6evKLz_7dz0g&s',
  alt: 'Illuminated channel letters for a modern storefront',
  hint: 'storefront sign',
};

const galleryImages = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCkwY6maJ1dtRuUWINyVjPKkVsPLvwBTkRg&s',
    alt: 'Awnings with branded graphics for a restaurant',
    hint: 'storefront sign',
  },
  {
    src: 'https://www.davessigns.com/wp-content/uploads/2023/04/bf5398cf-36b4-40ae-81b6-61d977d2ab19.jpg',
    alt: 'Dimensional letter sign on a brick wall',
    hint: 'storefront sign',
  },
];

export default function StorefrontSignsPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            data-ai-hint={heroImage.hint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 py-12 text-white md:px-12">
            <Link href="/#services" className="absolute top-8 md:top-12">
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            <div className="max-w-2xl">
              <h1 className="mb-4 font-headline text-5xl font-bold uppercase tracking-tight md:text-7xl">
                Storefront Signs
              </h1>
              <p className="text-lg text-white/90">
                Make a lasting first impression with a high-quality storefront sign. We design, build, and install a wide variety of signs to match your brand and attract customers. From classic designs to modern illuminated displays, we have the solution for you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
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
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
