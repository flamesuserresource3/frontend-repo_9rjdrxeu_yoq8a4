import React from 'react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const OutcomeItem = ({ children, delay = 0 }) => (
  <motion.li
    initial={{ y: 8, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay }}
    className="flex items-start gap-3 text-white/90"
  >
    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
    <span>{children}</span>
  </motion.li>
);

const ToolLogo = ({ label }) => (
  <motion.div
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 6, opacity: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xs font-medium text-white/90 shadow-inner"
    style={{ backgroundImage: 'radial-gradient(120px 120px at 30% 20%, rgba(99,102,241,0.35), rgba(56,189,248,0.15) 70%)', backgroundSize: 'cover' }}
  >
    {label}
  </motion.div>
);

export default function Outcomes() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Key Learning Outcomes */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Key Learning Outcomes</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem delay={0.02}>Understand Gen-AI impact on business</OutcomeItem>
            <OutcomeItem delay={0.06}>Prompt engineering for real business tasks</OutcomeItem>
            <OutcomeItem delay={0.1}>Build AI workflows (content, reports, automation)</OutcomeItem>
            <OutcomeItem delay={0.14}>Use industry tools (ChatGPT, Copilot, Notion AI, Canva AI)</OutcomeItem>
            <OutcomeItem delay={0.18}>Ethical & safe AI use</OutcomeItem>
            <OutcomeItem delay={0.22}>Real AI-based project building</OutcomeItem>
          </ul>
        </motion.div>

        {/* Tools Icons Section */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Tools You’ll Master</h3>
          <p className="mt-1 text-sm text-white/70">ChatGPT, Copilot, Gemini, Claude, Canva AI, Notion AI, PowerBI AI, Excel AI, HeyGen, ElevenLabs</p>
          <div className="mt-6 grid grid-cols-5 gap-3 md:grid-cols-5">
            {[
              'ChatGPT', 'Copilot', 'Gemini', 'Claude', 'Canva AI',
              'Notion AI', 'PowerBI AI', 'Excel AI', 'HeyGen', 'ElevenLabs',
            ].map((t, idx) => (
              <ToolLogo key={idx} label={t} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certification Block + Real Business Impact */}
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Certification</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem>Certificate of Completion</OutcomeItem>
            <OutcomeItem>AI Prompt & Workflow Playbook</OutcomeItem>
            <OutcomeItem>Project portfolio & automation templates</OutcomeItem>
            <OutcomeItem>30+ AI tools list</OutcomeItem>
          </ul>
          {/* certificate visual */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10 p-5">
              <div className="rounded-lg border border-white/20 bg-white/10 p-6 text-center">
                <div className="mx-auto inline-block rounded-md border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80">
                  Sample Certificate Mockup
                </div>
                <p className="mt-3 text-sm text-white/70">Your team receives verified certificates after completion</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                alt="Team showcasing AI certification"
                className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="flex items-center gap-2 text-2xl font-semibold"><Shield className="h-6 w-6 text-cyan-300" /> Real Business Impact</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem>Faster decision-making</OutcomeItem>
            <OutcomeItem>Improved efficiency</OutcomeItem>
            <OutcomeItem>AI-enabled work culture</OutcomeItem>
            <OutcomeItem>Actual measurable productivity boost</OutcomeItem>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop" alt="Data-driven teams" className="h-28 w-full object-cover opacity-95 transition duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop" alt="AI productivity" className="h-28 w-full object-cover opacity-95 transition duration-500 hover:scale-105" />
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-white/20 bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 p-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 text-white"><Sparkles className="h-4 w-4 text-indigo-300" /> Outcome-driven, playbook-first training</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
