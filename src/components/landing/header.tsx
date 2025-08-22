
"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#services", label: "Service", id: "services" },
  { href: "/#about", label: "About Us", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const UNDERLINE_WIDTH = 24; 

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;
      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );
      const scrollPosition = window.scrollY + 100;

      let currentSection = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    if (isHomePage) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection('');
    }
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      const activeLink = linksRef.current[activeSection];
      if (activeLink) {
          const linkWidth = activeLink.offsetWidth;
          const left = activeLink.offsetLeft + (linkWidth - UNDERLINE_WIDTH) / 2;
          setUnderlineStyle({
              left: left,
              width: UNDERLINE_WIDTH,
          });
      }
    } else {
      setUnderlineStyle({ left: 0, width: 0 });
    }
  }, [activeSection, isHomePage]);


  const NavLink = ({ href, label, id }: { href: string; label: string; id: string }) => (
    <a
      href={href}
      ref={(el) => { linksRef.current[id] = el; }}
      data-id={id}
      onClick={() => setIsSheetOpen(false)}
      className={`relative z-10 px-3 py-2 font-headline text-sm font-extrabold uppercase tracking-tight transition-colors hover:text-primary ${
        activeSection === id ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-12">
        <a href="/#home" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-black uppercase tracking-tight text-primary">TAGTEAMSIGNS</span>
            <span className="text-xs uppercase tracking-widest text-foreground/80">Design. Build. Install</span>
            <span className="text-[0.6rem] uppercase tracking-widest text-foreground/80">ROC#240355</span>
          </div>
        </a>
        <div className="flex items-center">
            <nav ref={navRef} className="relative hidden items-center space-x-4 md:flex">
            {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
            ))}
            {isHomePage && (
                <div
                className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out"
                style={{ left: underlineStyle.left, width: underlineStyle.width }}
                />
            )}
            </nav>
            <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <nav className="mt-8 flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsSheetOpen(false)}
                            className={`relative py-2 font-headline font-extrabold uppercase tracking-tight transition-colors hover:text-primary ${
                                activeSection === link.id ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                            {link.label}
                            {activeSection === link.id && isHomePage && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-6 bg-primary transition-all"></span>
                            )}
                        </a>
                    ))}
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
