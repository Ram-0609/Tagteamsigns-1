
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
      const hole = document.createElement('div');
      hole.className = 'bullet-hole';
      hole.style.left = `${e.clientX}px`;
      hole.style.top = `${e.clientY}px`;
      hole.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`;
      document.body.appendChild(hole);

      setTimeout(() => {
        hole.classList.add('fade-out');
        setTimeout(() => {
          hole.remove();
        }, 2000);
      }, 5000);
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
