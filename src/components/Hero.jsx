import React from 'react';
import Spline from '@splinetool/react-spline';
import { BadgeCheck, Download, Rocket, Users } from 'lucide-react';

const Badge = ({ text }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
    <BadgeCheck className="h-4 w-4 text-cyan-300" />
    {text}
  </span>
);

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1020]/70 via-[#0B1020]/75 to-[#0B1020]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white md:pt-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
          <Users className="h-4 w-4 text-indigo-300" />
          Corporate Gen-AI Certification Programs
        </div>

        <h1 className="max-w-4xl bg-gradient-to-br from-white via-indigo-100 to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.1]">
          Future-Ready Workforce with Gen-AI Certification Programs
        </h1>

        <p className="mt-4 max-w-3xl text-base text-white/80 md:text-lg">
          AI skills for every business function — NBFC, IT, HR, Marketing, CX, Leadership
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Badge text="Certificate Program" />
          <Badge text="Live Training" />
          <Badge text="Hands-on Projects" />
          <Badge text="For All Business Functions" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#programs" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-95">
            <Rocket className="h-5 w-5" />
            Explore Programs
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/30">
            <Download className="h-5 w-5" />
            Request Corporate Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
