import React from 'react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';

const OutcomeItem = ({ children }) => (
  <li className="flex items-start gap-3 text-white/90">
    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
    <span>{children}</span>
  </li>
);

const ToolLogo = ({ label, gradient }) => (
  <div
    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-medium text-white/90 shadow-inner"
    style={{ backgroundImage: gradient, backgroundSize: 'cover' }}
  >
    {label}
  </div>
);

export default function Outcomes() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Key Learning Outcomes */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
          <h3 className="text-2xl font-semibold">Key Learning Outcomes</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem>Understand Gen-AI impact on business</OutcomeItem>
            <OutcomeItem>Prompt engineering for real business tasks</OutcomeItem>
            <OutcomeItem>Build AI workflows (content, reports, automation)</OutcomeItem>
            <OutcomeItem>Use industry tools (ChatGPT, Copilot, Notion AI, Canva AI)</OutcomeItem>
            <OutcomeItem>Ethical & safe AI use</OutcomeItem>
            <OutcomeItem>Real AI-based project building</OutcomeItem>
          </ul>
        </div>

        {/* Tools Icons Section */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
          <h3 className="text-2xl font-semibold">Tools You’ll Master</h3>
          <p className="mt-1 text-sm text-white/70">ChatGPT, Copilot, Gemini, Claude, Canva AI, Notion AI, PowerBI AI, Excel AI, HeyGen, ElevenLabs</p>
          <div className="mt-6 grid grid-cols-5 gap-3 md:grid-cols-5">
            {[
              'ChatGPT', 'Copilot', 'Gemini', 'Claude', 'Canva AI',
              'Notion AI', 'PowerBI AI', 'Excel AI', 'HeyGen', 'ElevenLabs',
            ].map((t, idx) => (
              <ToolLogo key={idx} label={t} gradient="radial-gradient(120px 120px at 30% 20%, rgba(99,102,241,0.35), rgba(56,189,248,0.15) 70%)" />
            ))}
          </div>
        </div>
      </div>

      {/* Certification Block + Real Business Impact */}
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
          <h3 className="text-2xl font-semibold">Certification</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem>Certificate of Completion</OutcomeItem>
            <OutcomeItem>AI Prompt & Workflow Playbook</OutcomeItem>
            <OutcomeItem>Project portfolio & automation templates</OutcomeItem>
            <OutcomeItem>30+ AI tools list</OutcomeItem>
          </ul>
          {/* certificate mockup */}
          <div className="mt-6 rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10 p-5">
            <div className="rounded-lg border border-white/20 bg-white/10 p-6 text-center">
              <div className="mx-auto inline-block rounded-md border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80">
                Sample Certificate Mockup
              </div>
              <p className="mt-3 text-sm text-white/70">Your team receives verified certificates after completion</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
          <h3 className="flex items-center gap-2 text-2xl font-semibold"><Shield className="h-6 w-6 text-cyan-300" /> Real Business Impact</h3>
          <ul className="mt-5 space-y-3 text-white/80">
            <OutcomeItem>Faster decision-making</OutcomeItem>
            <OutcomeItem>Improved efficiency</OutcomeItem>
            <OutcomeItem>AI-enabled work culture</OutcomeItem>
            <OutcomeItem>Actual measurable productivity boost</OutcomeItem>
          </ul>
          <div className="mt-6 rounded-xl border border-white/20 bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 p-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 text-white"><Sparkles className="h-4 w-4 text-indigo-300" /> Outcome-driven, playbook-first training</span>
          </div>
        </div>
      </div>
    </section>
  );
}
