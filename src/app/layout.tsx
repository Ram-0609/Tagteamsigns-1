
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

    const createSparkle = (e: MouseEvent) => {
      const sparkleCount = 20;
      const fireworkColors = ['#FFC700', '#FF5733', '#C70039', '#900C3F', '#581845', '#FFFFFF'];
      
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        
        const angle = (i / sparkleCount) * 2 * Math.PI;
        const radius = Math.random() * 100 + 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];

        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        sparkle.style.setProperty('--transform-end', `translate(${x}px, ${y}px)`);
        sparkle.style.setProperty('--sparkle-color', color);
        sparkle.style.animationDelay = `${Math.random() * 0.2}s`;

        sparkle.addEventListener('animationend', () => {
          sparkle.remove();
        });
      }
    };

    const mouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click
        cursor.classList.add('cursor-active');
        createSparkle(e);
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
