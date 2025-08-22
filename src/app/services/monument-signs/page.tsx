import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://www.identitygroup.com/wp-content/uploads/2024/09/What-is-a-Monument-Sign-A-Beginners-Guide.png',
    alt: 'Elegant monument sign for a business park',
    hint: 'monument sign',
  },
  {
    src: 'https://tuppsigns.com/wp-content/uploads/2021/09/How-to-Keep-Your-Monument-Sign-Looking-Brand-New.png',
    alt: 'Brick monument sign with dimensional letters',
    hint: 'monument sign brick',
  },
  {
    src: 'https://www.smithsteelworks.com/wp-content/uploads/2022/07/Welcome-To-Monument-Signs.jpg',
    alt: 'Modern monument sign with LED lighting',
    hint: 'monument sign modern',
  },
];

export default function MonumentSignsPage() {
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
              Monument Signs
            </h1>
            <p className="text-lg">
              Create a statement at your property entrance with a durable and impressive monument sign. We design, build, and install monument signs that reflect your brand’s prestige, using a variety of materials like stone, brick, and metal to achieve the perfect look.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
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
