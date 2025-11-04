import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonial = ({ quote, author, role }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 text-white/90 backdrop-blur"
  >
    <p className="text-white">“{quote}”</p>
    <div className="mt-4 text-sm text-white/70">— {author}, {role}</div>
  </motion.div>
);

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10">
      {/* Testimonials */}
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-semibold text-white">What Leaders Say</h3>
        <p className="mt-2 text-white/70">Real, business-style outcomes from teams that adopted AI-first workflows</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Testimonial quote="Our NBFC team automated credit assessment steps and reduced TAT by 35%." author="Head of Risk" role="NBFC" />
        <Testimonial quote="Marketing now ships campaigns 2x faster with AI content workflows." author="VP Marketing" role="Enterprise Tech" />
        <Testimonial quote="AI copilots boosted developer productivity and improved code review quality." author="Engineering Director" role="IT Services" />
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/20 p-8 text-white backdrop-blur"
      >
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-semibold">Ready to upgrade your team with AI?</h4>
            <p className="mt-2 text-white/80">Request a demo, talk to an AI Training Advisor, or download the full program catalog.</p>
            <div className="mt-4 flex gap-3">
              <div className="overflow-hidden rounded-lg border border-white/10">
                <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop" alt="Corporate training" className="h-24 w-40 object-cover opacity-95" />
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" alt="Team consulting" className="h-24 w-40 object-cover opacity-95" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <a href="#programs" className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white">
              Request Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> Talk to AI Training Advisor
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Download Program Catalog
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/1234567890?text=Hi%2C%20we%20want%20a%20corporate%20Gen-AI%20training%20proposal"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] hover:opacity-95"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </section>
  );
}
