import React from 'react';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Outcomes from './components/Outcomes';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] [color-scheme:dark]">
      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0B1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400" />
            <span className="text-sm font-semibold">Gen‑AI Certifications</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#outcomes" className="hover:text-white">Outcomes</a>
            <a href="#cta" className="hover:text-white">Proposal</a>
          </nav>
          <a href="#cta" className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">Request Proposal</a>
        </div>
      </header>

      <main>
        <Hero />
        <Programs />
        <section id="outcomes"><Outcomes /></section>
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Gen‑AI Certification Programs • Corporate training for NBFC, IT, HR, Marketing, Sales & CX, Leadership
      </footer>
    </div>
  );
}
