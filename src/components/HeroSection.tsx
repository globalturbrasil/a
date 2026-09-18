import React from 'react';
import {
  Shield,
  Award,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Building2,
  Tractor,
  Scale,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/lawFirmData';

interface HeroSectionProps {
  onOpenConsultationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#101F18] via-[#14261E] to-[#1A3227] text-white pt-12 pb-20 md:pt-16 md:pb-28"
    >
      {/* Subtle Geometric / Architectural Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C5A059" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Radiant Gold Ambient Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Badge: Destaque Empresarial & Localização */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F3B2E]/90 border border-[#C5A059]/40 text-[#E6CCA0] text-xs font-semibold tracking-wide shadow-sm">
              <Award className="w-4 h-4 text-[#D8B467]" />
              <span>Eleito Destaque Empresarial de Tapurah • MT</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Soluções Jurídicas Personalizadas para o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBA73] via-[#F4E3B2] to-[#C5A059]">
                Agronegócio
              </span>{' '}
              e Causas Cíveis.
            </h1>

            {/* Authoritative Subtext */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              Com raízes profundas na terra e na vivência prática do campo em Mato Grosso, o escritório{' '}
              <strong className="text-white font-semibold">Kirnev Advocacia</strong>, liderado pela{' '}
              <strong className="text-[#DFBA73] font-semibold">Dra. Daiane Kirnev</strong>, assegura a blindagem patrimonial,
              contratual e financeira de produtores rurais e empresas em todo o território nacional.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Especialista em Direito do Agronegócio e CPRs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Holding Rural e Planejamento Sucessório</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Idealizadora do Centro Empresarial Lodi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Conexão ativa com o setor produtivo e Aprosoja</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultationModal}
                id="hero-cta-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A059] via-[#D8B467] to-[#A8843E] text-[#12221A] font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-105 transition-all transform active:scale-95"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4 text-[#12221A]" />
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#183528] border border-[#25D366]/40 text-[#54E487] hover:bg-[#1E4333] font-semibold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp Oficial</span>
              </a>
            </div>

            {/* Social Proof Quote */}
            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Plantão consultivo e atendimento a produtores rurais de todo o Brasil.</span>
            </div>
          </div>

          {/* Right Column: Executive Crest & Authority Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#162A20]/90 border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />

              <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Official Crest Display */}
                <div className="relative w-28 h-28 rounded-full bg-[#0F1E16] border-2 border-[#C5A059] p-3 shadow-inner flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                    {/* Outer rings */}
                    <circle cx="100" cy="100" r="92" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Crown */}
                    <path d="M 100 24 C 96 32, 92 38, 86 42 C 89 45, 95 47, 100 48 C 105 47, 111 45, 114 42 C 108 38, 104 32, 100 24 Z" fill="#D8B467" />
                    <circle cx="100" cy="22" r="3" fill="#FFE29A" />
                    {/* Shield */}
                    <path d="M 100 45 C 125 45, 148 54, 150 78 C 152 118, 126 148, 100 166 C 74 148, 48 118, 50 78 C 52 54, 75 45, 100 45 Z" stroke="#C5A059" strokeWidth="3" fill="#183125" />
                    {/* K with column */}
                    <rect x="74" y="75" width="20" height="4" fill="#C5A059" />
                    <rect x="77" y="79" width="14" height="52" fill="#D8B467" />
                    <line x1="84" y1="80" x2="84" y2="130" stroke="#FFF" strokeWidth="1" strokeOpacity="0.8" />
                    <rect x="74" y="132" width="20" height="4" fill="#C5A059" />
                    <path d="M 88 106 L 118 78 L 126 78 L 99 110 Z" fill="#C5A059" />
                    <path d="M 94 104 L 122 134 L 130 134 L 103 103 Z" fill="#C5A059" />
                  </svg>
                </div>

                <div>
                  <h2
                    className="text-xl font-serif font-bold text-[#FAF9F5] tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    KIRNEV ADVOCACIA
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#D8B467] font-semibold mt-0.5">
                    Dra. Daiane Kirnev
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    OAB/MT • Tapurah - Mato Grosso
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent my-1" />

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-3 gap-2 w-full pt-1">
                  <div className="flex flex-col items-center p-2 rounded-lg bg-[#11231A]/80 border border-stone-700/50">
                    <Tractor className="w-4 h-4 text-[#D8B467] mb-1" />
                    <span className="text-[11px] font-bold text-white">Agronegócio</span>
                    <span className="text-[9px] text-stone-400">Raízes no Campo</span>
                  </div>

                  <div className="flex flex-col items-center p-2 rounded-lg bg-[#11231A]/80 border border-stone-700/50">
                    <Scale className="w-4 h-4 text-[#D8B467] mb-1" />
                    <span className="text-[11px] font-bold text-white">Cível & CPR</span>
                    <span className="text-[9px] text-stone-400">Contratos Blindados</span>
                  </div>

                  <div className="flex flex-col items-center p-2 rounded-lg bg-[#11231A]/80 border border-stone-700/50">
                    <Building2 className="w-4 h-4 text-[#D8B467] mb-1" />
                    <span className="text-[11px] font-bold text-white">Centro Lodi</span>
                    <span className="text-[9px] text-stone-400">Hub Corporativo</span>
                  </div>
                </div>

                {/* Direct quote on rural experience */}
                <div className="w-full bg-[#11231A] rounded-lg p-3 text-left border-l-2 border-[#C5A059]">
                  <p className="text-xs italic text-stone-300">
                    &ldquo;Nossa advocacia reflete a vivência prática com o produtor rural. Compreendemos a urgência da safra e a importância de proteger o legado construído na terra.&rdquo;
                  </p>
                  <p className="text-[11px] text-[#D8B467] font-semibold mt-1 text-right">
                    — Dra. Daiane Kirnev
                  </p>
                </div>

                {/* Award Banner inside card */}
                <div className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#1F3B2E] text-[#F3DEB0] text-xs font-medium border border-[#C5A059]/30">
                  <Award className="w-4 h-4 text-[#D8B467] shrink-0" />
                  <span>Destaque Empresarial de Tapurah / Advocacia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
