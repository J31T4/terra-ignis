import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, FlameFlash } from '../components/motion';

/** Kontakt — minimal lorem demo. */
export const ContactPage: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#C8102E] text-white relative overflow-hidden woodcut-hatch-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Reveal className="border-b-2 border-white/30 pb-6 mb-10">
          <FlameFlash blend="screen">
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
              Lorem ipsum
            </h1>
          </FlameFlash>
        </Reveal>

        <Reveal>
          <p className="font-serif-body text-xl sm:text-2xl text-white/95 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Reveal>

        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF6EE] text-[#C8102E] font-bold uppercase tracking-wider border-2 border-[#1A1512] hover:bg-[#F3ECDC] transition-colors"
          >
            <span>Lorem ipsum</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
