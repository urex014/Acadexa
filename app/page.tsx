// app/page.tsx
import React from 'react';
import { ArrowRight, BrainCircuit, CalendarClock, Coffee, Zap } from 'lucide-react';
import Link from 'next/link';
import BlurredCarousel from '@/components/BlurredCarousel'; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navigation - Keep Z-index high to stay above background */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <div className="text-2xl font-black text-orange-500 tracking-tight flex items-center gap-2">
          <Zap className="w-8 h-8 fill-orange-500" />
          StudySync
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-slate-600 font-semibold hover:text-orange-500 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 hover:scale-105 transition-all shadow-md shadow-orange-200">
            Start for free
          </Link>
        </div>
      </nav>

      {/* Hero Section - NOTE THE 'relative' CLASS ADDED HERE */}
      <header className="relative container mx-auto px-6 pt-24 pb-16 text-center min-h-[80vh] flex flex-col justify-center overflow-hidden">
        
        {/* THE BACKGROUND COMPONENT */}
        <BlurredCarousel />

        {/* Content Container - Ensure Z-index is higher than background */}
        <div className="relative z-10">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-extrabold mb-6 border border-orange-200 shadow-inner shadow-orange-200/50">
            🎉 The smartest way to survive midterms
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Stop cramming. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600">
              Start thriving.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
            Tell us what you need to study and when your exams are. We'll instantly build a personalized, guilt-free schedule that actually works around your life.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup" className="bg-orange-500 text-white px-10 py-5 rounded-full font-extrabold text-xl flex items-center gap-2.5 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-300 hover:-translate-y-1 transition-all duration-300 transform">
              Build My Schedule <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
        
      </header>

      {/* Features Section - Keep it static white for contrast */}
      <section className="bg-white py-24 relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 text-slate-900 tracking-tight">
            How we save your GPA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature cards remain the same as previous step, just ensure font weights fit the new font */}
            <FeatureCard 
              icon={BrainCircuit} 
              title="Smart Block Scheduling" 
              description="We chop your massive syllabus down into bite-sized, 45-minute Pomodoro sessions. No more staring at a mountain of work."
            />
            <FeatureCard 
              icon={CalendarClock} 
              title="Guilt-Free Rescheduling" 
              description="Missed a session because life happened? Hit one button and we'll automatically redistribute your remaining workload."
            />
            <FeatureCard 
              icon={Coffee} 
              title="Built for Humans" 
              description="We factor in breaks, sleep, and your actual free time. Because burning out before the exam defeats the whole point."
            />
          </div>
        </div>
      </section>
    </div>
  );
}


function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100/70 border border-slate-100 hover:border-orange-100 hover:shadow-orange-100/50 transition-all duration-300 group">
      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-slate-800 tracking-tight">{title}</h3>
      <p className="text-slate-600 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}