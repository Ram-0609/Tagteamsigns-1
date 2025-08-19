import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-6 py-6 text-sm md:px-12">
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/people/TagTeamSigns/100067477160793/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-primary">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="text-center">
          <p className="no-underline">&copy; {new Date().getFullYear()} TAGTEAMSIGNS &bull; AN HONIST PRODUCTION</p>
        </div>
      </div>
    </footer>
  );
}
