
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import React, { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const bulletHole = document.createElement('div');
      bulletHole.className = 'bullet-hole';
      bulletHole.style.left = `${e.clientX}px`;
      bulletHole.style.top = `${e.clientY}px`;
      const rotation = Math.random() * 360;
      bulletHole.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      document.body.appendChild(bulletHole);

      setTimeout(() => {
        bulletHole.classList.add('fade-out');
        setTimeout(() => {
            bulletHole.remove();
        }, 2000);
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
