import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { LogoImg } from '../components/LogoImg';
import { staggerContainer, fadeRise } from '../components/motion';

/** Home — minimal demo. */
export const HomePage: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-white text-neutral-900 pt-8 pb-14 md:pt-12 md:pb-20 border-b-4 border-[#C8102E] overflow-hidden woodcut-hatch">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10"
        variants={staggerContainer(0.14, 0.1)}
        initial={reduced ? false : 'hidden'}
        animate={reduced ? undefined : 'visible'}
      >
        <motion.div variants={fadeRise} className="mb-6 flex justify-center">
          <LogoImg size={264} id="logo-shield-home" className="max-sm:!h-[220px]" />
        </motion.div>

        <motion.h1
          variants={fadeRise}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-[#111111] uppercase max-w-4xl mx-auto mb-6"
        >
          Lorem ipsum dolor sit amet
        </motion.h1>

        <motion.p
          variants={fadeRise}
          className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto font-serif-body leading-relaxed mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        <motion.div variants={fadeRise} className="flex justify-center">
          <Link
            to="/kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C8102E] text-white px-8 py-4 text-base sm:text-lg font-bold tracking-wider uppercase border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <span>Lorem ipsum</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
