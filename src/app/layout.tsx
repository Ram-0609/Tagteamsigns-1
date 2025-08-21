
'use client';

import { useEffect } from 'react';
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let lastTrailTime = 0;
    const trailCooldown = 25; // ms

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = 'neon-trail';
      document.body.appendChild(trail);

      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;

      setTimeout(() => {
        trail.remove();
      }, 500); 
    };

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const now = Date.now();
      if (now - lastTrailTime > trailCooldown) {
        createTrail(e.clientX, e.clientY);
        lastTrailTime = now;
      }
    };

    const mouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click
        cursor.classList.add('cursor-active');
      } else if (e.button === 1) { // Middle click (scroll wheel)
        cursor.style.display = 'none';
      }
    }

    const mouseUp = (e: MouseEvent) => {
       if (e.button === 0) { // Left click
        cursor.classList.remove('cursor-active');
      } else if (e.button === 1) { // Middle click (scroll wheel)
        cursor.style.display = 'block';
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        cursor.style.display = 'none';
      } else {
        cursor.style.display = 'block';
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    document.addEventListener('mouseover', handleMouseOver);


    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@800;900&family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div id="custom-cursor">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3 L21 12 L3 21 L10 12 Z" />
          </svg>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
