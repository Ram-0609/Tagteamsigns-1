import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-primary text-primary-foreground"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto flex min-h-[70vh] max-w-[1200px] items-center justify-end px-6 md:px-12">
        <div className="text-right">
          <h1
            id="hero-heading"
            className="font-headline font-black uppercase leading-none tracking-tighter text-[clamp(4rem,10vw,5.75rem)]"
          >
            <div>SIGNS</div>
            <div>DESIGN</div>
            <div>BUILD</div>
            <div>INSTALL</div>
          </h1>
        </div>
      </div>
    </section>
  );
}
