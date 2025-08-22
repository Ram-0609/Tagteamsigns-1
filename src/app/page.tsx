import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import About from '@/components/landing/about';
import Work from '@/components/landing/work';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import InstagramChat from '@/components/landing/InstagramChat';

export default function HomePage() {
  return (
    <div className="flex w-full flex-col relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
      <InstagramChat />
    </div>
  );
}
