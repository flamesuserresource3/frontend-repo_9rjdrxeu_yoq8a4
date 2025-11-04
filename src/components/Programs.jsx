import React from 'react';
import { Calendar, Monitor, BadgeCheck, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 12, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/90 backdrop-blur"
  >
    {children}
  </motion.div>
);

const ProgramCard = ({ title, desc, duration, mode, certificate, tools, img }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55 }}
    className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/10 text-white/90 backdrop-blur-xl"
  >
    <div>
      {img && (
        <div className="overflow-hidden rounded-t-2xl">
          <img src={img} alt={title} className="h-32 w-full object-cover opacity-90 transition duration-500 hover:scale-105" />
        </div>
      )}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="mt-2 text-sm text-white/80">{desc}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 p-6 pt-0 text-sm">
      <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><Calendar className="h-4 w-4 text-indigo-300" /> {duration}</div>
      <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><Monitor className="h-4 w-4 text-indigo-300" /> {mode}</div>
      <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><BadgeCheck className="h-4 w-4 text-indigo-300" /> {certificate}</div>
      <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"><BookOpen className="h-4 w-4 text-indigo-300" /> {tools}</div>
    </div>
  </motion.div>
);

export default function Programs() {
  return (
    <section id="programs" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      {/* Why It Matters */}
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white via-indigo-100 to-cyan-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          AI isn’t the future — it’s the present
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <WhyCard delay={0.02}>Real AI workflows for everyday business tasks</WhyCard>
          <WhyCard delay={0.06}>Boost productivity, creativity, speed & accuracy</WhyCard>
          <WhyCard delay={0.1}>AI skills for modern leadership & workforce</WhyCard>
          <WhyCard delay={0.14}>Future-ready competitive advantage</WhyCard>
        </div>
      </div>

      {/* Program Cards */}
      <div className="mt-16">
        <h3 className="text-center text-2xl font-semibold text-white">Programs for Each Department</h3>
        <p className="mt-2 text-center text-white/70">NBFC, IT, HR, Marketing, Sales & CX, Leadership</p>

        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          {[
            'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt="Business function" className="h-28 w-full object-cover opacity-95 transition duration-500 hover:scale-105" />
            </div>
          ))}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="NBFC & BFSI"
            desc="Credit scoring assist, customer experience automation"
            duration="Duration: 2 Days"
            mode="Mode: Hybrid"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1569025690938-a00729c9e1d9?q=80&w=1600&auto=format&fit=crop"
          />
          <ProgramCard
            title="IT Teams"
            desc="AI automation, workflow design, copilots"
            duration="Duration: 2 Days"
            mode="Mode: Hybrid"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
          />
          <ProgramCard
            title="HR Leaders"
            desc="Hiring, onboarding, policy automation"
            duration="Duration: 1 Day"
            mode="Mode: Live"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
          />
          <ProgramCard
            title="Marketing Teams"
            desc="Content workflows, campaign automation"
            duration="Duration: 1 Day"
            mode="Mode: Live"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
          />
          <ProgramCard
            title="Sales & CX"
            desc="Customer scripts, CRM automation"
            duration="Duration: 1 Day"
            mode="Mode: Live"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
          />
          <ProgramCard
            title="Leadership"
            desc="AI-assisted strategy & decision-making"
            duration="Duration: 1 Day"
            mode="Mode: Cohort"
            certificate="Certificate: Yes"
            tools="Tools Included"
            img="https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* Program Table */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-16 overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur"
      >
        <div className="border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">Program Table</h3>
        </div>
        <div className="divide-y divide-white/10 text-white/90">
          {[
            ['AI for Professionals', '1 Day', 'Online/Offline', 'Yes'],
            ['Applied AI for NBFC', '2 Days', 'Hybrid', 'Yes'],
            ['AI for IT Teams', '2 Days', 'Hybrid', 'Yes'],
            ['AI for HR Leaders', '1 Day', 'Live', 'Yes'],
            ['AI for Marketing Teams', '1 Day', 'Live', 'Yes'],
            ['Executive AI Leadership', '1 Day', 'Cohort', 'Yes'],
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-3 px-6 py-4 md:grid-cols-4">
              <div className="font-medium text-white">{row[0]}</div>
              <div>{row[1]}</div>
              <div>{row[2]}</div>
              <div>{row[3]}</div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
            <BookOpen className="h-4 w-4" /> Download Program Brochure
          </a>
        </div>
      </motion.div>
    </section>
  );
}
