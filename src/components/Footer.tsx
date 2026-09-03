import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImg } from './LogoImg';
import { Phone, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-14 pb-10 border-t-4 border-[#C8102E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Single simplified row: logo | navigation | contact | FB */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10 border-b border-neutral-800">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <LogoImg size={70} />
              <div>
                <span className="font-display font-black text-2xl tracking-widest block text-white">
                  TERRA IGNIS
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C8102E] font-bold block">
                  Ohňová, kejklířská a fakírská show
                </span>
              </div>
            </div>
            <p className="font-serif-body text-base text-neutral-400 max-w-md leading-relaxed">
              Ohnivé prvky bez použití pyrotechniky, dechberoucí kostýmy inspirované fantasy světem
              a příběhy plné emocí — pro svatby, slavnosti i firemní akce.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mt-3">
              <MapPin className="w-4 h-4 text-[#C8102E]" />
              <span>Mohelnice (působíme po celé ČR) • Působíme od roku 2022</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-3">
              Stránky
            </span>
            <nav className="flex flex-col space-y-2" aria-label="Navigace v patičce">
              <Link to="/" className="text-sm font-semibold text-neutral-300 hover:text-[#C8102E] transition-colors">
                Domů
              </Link>
              <Link to="/o-nas" className="text-sm font-semibold text-neutral-300 hover:text-[#C8102E] transition-colors">
                O nás
              </Link>
              <Link to="/reference" className="text-sm font-semibold text-neutral-300 hover:text-[#C8102E] transition-colors">
                Reference
              </Link>
              <Link to="/kontakt" className="text-sm font-semibold text-neutral-300 hover:text-[#C8102E] transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-2">
            <a
              href="tel:+420606310100"
              className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 hover:border-[#C8102E] transition-colors text-sm font-bold text-white group"
            >
              <Phone className="w-4 h-4 text-[#C8102E] group-hover:scale-110 transition-transform" />
              <span>+420 606 310 100</span>
            </a>
            <a
              href="tel:+420704792974"
              className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 hover:border-[#C8102E] transition-colors text-sm font-bold text-white group"
            >
              <Phone className="w-4 h-4 text-[#C8102E] group-hover:scale-110 transition-transform" />
              <span>+420 704 792 974</span>
            </a>
            <p className="text-xs text-neutral-500 pt-1">
              Po–ne, ověření termínu i detailů show.
            </p>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <a
              href="https://www.facebook.com/profile.php?id=61550985457315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider border border-white hover:bg-[#A30D25] transition-colors w-full justify-center"
            >
              <span>Oficiální Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-neutral-500 mt-3">
              Fotky, videa a novinky z našich vystoupení.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Terra Ignis. Všechna práva vyhrazena.
          </div>
          <div className="text-[#C8102E] font-semibold">
            Mohelnice 🔥
          </div>
        </div>

      </div>
    </footer>
  );
};
