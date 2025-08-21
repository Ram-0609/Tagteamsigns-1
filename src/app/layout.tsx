
'use client';

import { useEffect, useRef } from 'react';
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

    let lastX = 0;
    let lastY = 0;
    let lastTrailTime = 0;
    const trailCooldown = 10; // ms

    const createTrail = (x: number, y: number, prevX: number, prevY: number) => {
        const distance = Math.sqrt(Math.pow(x - prevX, 2) + Math.pow(y - prevY, 2));
        if (distance === 0) return;

        const angle = Math.atan2(y - prevY, x - prevX) * 180 / Math.PI;
        
        const trail = document.createElement('div');
        trail.className = 'neon-trail';
        document.body.appendChild(trail);

        trail.style.left = `${prevX}px`;
        trail.style.top = `${prevY}px`;
        trail.style.width = `${distance}px`;
        trail.style.height = '2px';
        trail.style.transformOrigin = 'left center';
        trail.style.transform = `rotate(${angle}deg)`;

        setTimeout(() => {
            trail.remove();
        }, 500); 
    };

    const moveCursor = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrailTime > trailCooldown) {
          if (lastX !== 0 || lastY !== 0) {
              createTrail(e.clientX, e.clientY, lastX, lastY);
          }
          lastTrailTime = now;
          lastX = e.clientX;
          lastY = e.clientY;
      }
      
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
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
           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#111111">
              <path d="M4,21.9l4.9-10.4L20.8,4,4,21.9z M7.7,11.2l-3,6.4l9.7-9.7L7.7,11.2z"/>
           </svg>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
