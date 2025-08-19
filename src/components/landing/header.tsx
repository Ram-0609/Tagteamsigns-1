"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#services", label: "Service", id: "services" },
  { href: "#about", label: "About Us", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(`[data-id="${activeSection}"]`);
      if (activeLink) {
        setUnderlineStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      }
    }
  }, [activeSection]);


  const NavLink = ({ href, label, id }: { href: string; label: string; id: string }) => (
    <a
      href={href}
      data-id={id}
      onClick={() => setIsSheetOpen(false)}
      className={`relative z-10 px-1 py-2 font-medium uppercase tracking-wider transition-colors hover:text-primary ${
        activeSection === id ? "text-primary" : "text-foreground"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-headline text-lg font-extrabold tracking-tight text-primary">
              TAGTEAMSIGNS
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Design. Build. Install
            </span>
          </div>
        </a>
        <nav ref={navRef} className="relative hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <div
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
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
                        className={`relative py-2 font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                            activeSection === link.id ? "text-primary" : "text-foreground"
                        }`}
                    >
                        {link.label}
                        {activeSection === link.id && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transition-all"></span>
                        )}
                    </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
