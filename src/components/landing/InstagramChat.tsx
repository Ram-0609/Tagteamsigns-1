"use client";

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InstagramChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="icon"
        className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on Instagram"
      >
        <Link href="https://www.instagram.com/tagteamsigns/" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-8 w-8" />
        </Link>
      </Button>
    </div>
  );
}
