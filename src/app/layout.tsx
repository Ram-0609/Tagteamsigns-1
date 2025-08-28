
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import React, { useEffect, useState } from 'react';
import Chatbot from '@/components/landing/Chatbot';
import SpinWheel from '@/components/landing/SpinWheel';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSpinWheel, setShowSpinWheel] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Prevent effect on buttons, inputs, and chatbot
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('button') ||
        target.closest('[data-chatbot-area]') ||
        target.closest('[data-spin-wheel-area]')
      ) {
        return;
      }
      
      // Crack effect
      if (target) {
        target.classList.add('animate-crack');
        setTimeout(() => {
          target.classList.remove('animate-crack');
        }, 500);
      }

      // Bullet hole effect
      const existingHoles = document.querySelectorAll('.bullet-hole');
      if (existingHoles.length >= 15) {
        existingHoles[0].remove();
      }

      const hole = document.createElement('div');
      hole.className = 'bullet-hole';
      hole.style.left = `${e.clientX}px`;
      hole.style.top = `${e.clientY}px`;
      hole.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`;
      document.body.appendChild(hole);

      setTimeout(() => {
        hole.classList.add('fade-out');
        setTimeout(() => {
          if (hole.parentElement) {
            hole.parentElement.removeChild(hole);
          }
        }, 1000); 
      }, 3000);
    };

    document.addEventListener('click', handleClick);

    const hasSeenSpinWheel = sessionStorage.getItem('hasSeenSpinWheel');
    if (!hasSeenSpinWheel) {
      const timer = setTimeout(() => {
        setShowSpinWheel(true);
        sessionStorage.setItem('hasSeenSpinWheel', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }

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
        {showSpinWheel && <SpinWheel onClose={() => setShowSpinWheel(false)} />}
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
