import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, fadeRise, Reveal, FlameFlash } from '../components/motion';

const CARDS = [
  { title: 'Lorem ipsum I', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Lorem ipsum II', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
  { title: 'Lorem ipsum III', text: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
];

/** About — minimal demo. */
export const AboutPage: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#C8102E] text-white relative overflow-hidden woodcut-hatch-dark border-b-4 border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal className="border-b-2 border-white/30 pb-6 mb-12">
          <FlameFlash blend="screen">
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
              Lorem ipsum
            </h1>
          </FlameFlash>
        </Reveal>

        <Reveal className="bg-[#FAF6EE] text-[#1A1512] p-6 sm:p-8 border-4 border-[#1A1512] shadow-[8px_8px_0px_0px_rgba(26,21,18,1)] mb-12">
          <p className="font-serif-body text-xl sm:text-2xl leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Reveal>

        <motion.div variants={staggerContainer(0.14)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <motion.div key={c.title} variants={fadeRise} className="bg-neutral-950 text-white p-7 border-2 border-white">
              <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3">
                {c.title}
              </h3>
              <p className="font-serif-body text-lg text-neutral-200 leading-relaxed">
                {c.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
