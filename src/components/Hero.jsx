import React from 'react';
import Spline from '@splinetool/react-spline';
import { BadgeCheck, Download, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Badge = ({ text, delay = 0 }) => (
  <motion.span
    initial={{ y: 8, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
  >
    <BadgeCheck className="h-4 w-4 text-cyan-300" />
    {text}
  </motion.span>
);

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1020]/70 via-[#0B1020]/75 to-[#0B1020]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white md:pt-36">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur"
        >
          <Users className="h-4 w-4 text-indigo-300" />
          Corporate Gen-AI Certification Programs
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl bg-gradient-to-br from-white via-indigo-100 to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.1]"
        >
          Future-Ready Workforce with Gen-AI Certification Programs
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl text-base text-white/80 md:text-lg"
        >
          AI skills for every business function — NBFC, IT, HR, Marketing, CX, Leadership
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Badge text="Certificate Program" delay={0.0} />
          <Badge text="Live Training" delay={0.05} />
          <Badge text="Hands-on Projects" delay={0.1} />
          <Badge text="For All Business Functions" delay={0.15} />
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#programs" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-95">
            <Rocket className="h-5 w-5" />
            Explore Programs
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/30">
            <Download className="h-5 w-5" />
            Request Corporate Proposal
          </a>
        </motion.div>

        {/* Team imagery strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 grid w-full max-w-5xl grid-cols-3 gap-3"
        >
          {[
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop', // team
            'https://images.unsplash.com/photo-1551281044-8d8d0d8f9a5c?q=80&w=1600&auto=format&fit=crop', // laptops
            'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop', // meeting
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
              <img src={src} alt="Corporate teams working with AI tools" className="h-28 w-full object-cover opacity-90 transition duration-500 hover:scale-105 hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
