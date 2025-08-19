import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MonumentSignsPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="container mx-auto max-w-[1200px] px-6 py-12 md:px-12">
        <Link href="/#services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
        <h1 className="mb-8 font-headline text-5xl font-bold uppercase tracking-tight md:text-7xl">
          Monument Signs
        </h1>
        <div className="space-y-6 text-lg">
          <p>
            This is a placeholder page for Monument Signs. You can add more content here about this service.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
