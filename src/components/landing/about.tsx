import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-10 md:py-16" aria-labelledby="about-heading">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Blurred background of sign fabrication"
        data-ai-hint="sign fabrication"
        fill
        className="object-cover filter blur-sm grayscale"
        quality={50}
      />
      <div className="relative flex justify-center py-10 md:py-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl rounded-lg bg-background/90 p-8 shadow-2xl md:p-12">
                <div className="mb-4 h-1 w-16 bg-primary"></div>
                <h2 id="about-heading" className="mb-4 font-headline text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
                Who We Are
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                We are TAGTEAMSIGNS, a creative company that helps businesses make strong first impressions with custom signs. Our team specializes in designing, building, and installing high-quality signs that reflect your brand identity. We work with storefronts, commercial buildings, and monuments to create professional signage that attracts attention and builds trust. Our goal is to deliver signs that are both beautiful and durable, making your business stand out in every way. With years of experience and a passion for design, we handle every step from idea to installation, ensuring our clients get the best results.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
