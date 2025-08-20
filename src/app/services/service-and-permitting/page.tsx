import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://media.istockphoto.com/id/1388925360/photo/business-lawyer-notary-stamping-agreement-company-secretary-official-document-validity.jpg?s=612x612&w=0&k=20&c=H6SlpM8XdrjSUp9mUpPnft7_uUAjtH6-aYY1xkHdN-g=',
    alt: 'Sign permitting process documentation',
    hint: 'sign permit',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Team servicing an outdoor sign',
    hint: 'sign service',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Crane installing a large commercial sign',
    hint: 'sign installation',
  },
];

export default function ServiceAndPermittingPage() {
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
              Service & Permitting
            </h1>
            <p className="text-lg">
              We handle the complexities of sign servicing and permitting so you don’t have to. Our team ensures that your signs remain in perfect condition and comply with all local regulations, managing everything from routine maintenance to navigating the entire permitting process.
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
