
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

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const createSmokePuff = (e: MouseEvent) => {
      const puffCount = 10;
      
      for (let i = 0; i < puffCount; i++) {
        const puff = document.createElement('div');
        puff.className = 'smoke-puff';
        document.body.appendChild(puff);
        
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 30;
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        puff.style.left = `${e.clientX + xOffset}px`;
        puff.style.top = `${e.clientY + yOffset}px`;
        puff.style.animationDelay = `${Math.random() * 0.5}s`;
        puff.style.setProperty('--scale-end', `${(Math.random() * 1.5 + 0.5).toFixed(2)}`);


        puff.addEventListener('animationend', () => {
          puff.remove();
        });
      }
    };

    const mouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click
        cursor.classList.add('cursor-active');
        createSmokePuff(e);
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
            <path d="M4.2,3.46,19.34,12,4.2,20.54V12Z" />
          </svg>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
