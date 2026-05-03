// components/BlurredCarousel.tsx
'use client';

import React from 'react';
import { BookOpenText, Target, BrainCircuit, PencilRuler } from 'lucide-react';

// Data for the carousel items - playful and relevant
const carouselItems = [
  { icon: BookOpenText, label: 'Reading Chapter 5' },
  { icon: Target, label: 'Bio Quiz Prep' },
  { icon: BrainCircuit, label: 'Mind Map History' },
  { icon: PencilRuler, label: 'Calc Homework' },
  { icon: Target, label: 'Midterm Review' },
  { icon: BookOpenText, label: 'Writing Essay' },
  { icon: BrainCircuit, label: 'Physics Lab' },
  // Duplicate items here to create the infinite scroll effect seamlessly
  { icon: BookOpenText, label: 'Reading Chapter 5' },
  { icon: Target, label: 'Bio Quiz Prep' },
  { icon: BrainCircuit, label: 'Mind Map History' },
  { icon: PencilRuler, label: 'Calc Homework' },
];

export default function BlurredCarousel() {
  return (
    // The wrapper that applies the heavy blur
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-white/40 z-10" /> {/* Slight overlay for contrast */}
      <div className="w-full h-full blur-[70px] opacity-60"> {/* The blur effect */}
        
        {/* The scrolling container */}
        {/* We use two copies of the content (top and bottom row) for depth */}
        <div className="flex flex-col gap-12 justify-center h-full">
          
          {/* Row 1 - Scrolling Left (created in global CSS below) */}
          <div className="flex gap-8 animate-scroll-left whitespace-nowrap">
            {carouselItems.map((item, index) => (
              <CarouselCard key={`top-${index}`} icon={item.icon} label={item.label} />
            ))}
          </div>

          {/* Row 2 - Scrolling Right, offset slightly */}
          <div className="flex gap-8 animate-scroll-right whitespace-nowrap -ml-24">
            {[...carouselItems].reverse().map((item, index) => (
              <CarouselCard key={`bottom-${index}`} icon={item.icon} label={item.label} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// Small sub-component for the card
function CarouselCard({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-4 bg-white border-2 border-orange-100 p-6 rounded-3xl shadow-lg shadow-orange-100/50 min-w-[280px]">
      <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-xl font-bold text-slate-700">{label}</span>
    </div>
  );
}