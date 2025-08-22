
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
    description: "We navigate the complexities of sign permitting for you, ensuring your project is compliant with all local regulations from the start.",
  },
  {
    src: 'https://media.istockphoto.com/id/1445807259/photo/business-people-doing-calculations-analyze-the-work-at-the-meeting.jpg?s=612x612&w=0&k=20&c=I1iGLJ15sDfGI13KpPV_Vmpyu9fRYcfdY7187E2gRhc=',
    alt: 'Team servicing an outdoor sign',
    hint: 'sign service',
    description: "Our comprehensive sign servicing ensures your investment remains vibrant and functional for years to come.",
  },
  {
    src: 'https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7682340.jpg&fm=jpg',
    alt: 'Crane installing a large commercial sign',
    hint: 'sign installation',
    description: "Our professional installation team handles everything with precision and care, from small storefront signs to large-scale commercial installations.",
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
            <h1 className="mb-8 font-headline text-5xl font-bold uppercase tracking-tight text-primary md:text-7xl">
              Service & Permitting
            </h1>
            <p className="text-lg">
              We handle the complexities of sign servicing and permitting so you don’t have to. Our team ensures that your signs remain in perfect condition and comply with all local regulations, managing everything from routine maintenance to navigating the entire permitting process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="flip-card group aspect-square">
              <div className="flip-card-inner">
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
