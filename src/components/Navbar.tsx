import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Instagram,
  ExternalLink,
  MessageSquare,
  Menu,
  X,
  Award,
  ChevronRight,
  Building,
} from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';
import { SOCIAL_LINKS } from '../data/lawFirmData';

interface NavbarProps {
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Escritório', href: '#escritorio' },
    { label: 'Centro Lodi', href: '#centro-lodi' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Blog & Notícias', href: '#blog' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar with Geographic Authority & Social Links */}
      <div className="bg-[#101D17] border-b border-[#22392E] text-xs text-amber-100/80 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Location & Distinction Badge */}
          <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4 text-stone-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Tapurah - Mato Grosso</span>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <span className="text-stone-400 hidden sm:inline">Presença em todo o Brasil</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1B3227] text-[#D8B467] font-medium border border-[#C5A059]/30">
              <Award className="w-3 h-3 text-[#D8B467]" />
              <span>Destaque Empresarial de Tapurah</span>
            </div>
          </div>

          {/* Social Links & Immediate Contact */}
          <div className="flex items-center gap-4 text-stone-300 text-xs">
            {/* Instagram Banca */}
            <a
              href={SOCIAL_LINKS.instagramFirm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#C5A059] transition-colors"
              title="Instagram Oficial Kirnev Advocacia"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-medium hidden sm:inline">@kirnevadvocacia</span>
            </a>

            {/* Instagram Dra. Daiane */}
            <a
              href={SOCIAL_LINKS.instagramFounder}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#C5A059] transition-colors"
              title="Instagram Profissional Dra. Daiane Kirnev"
            >
              <span className="text-stone-500 hidden sm:inline">|</span>
              <span className="font-medium text-stone-300 hover:text-white">@daianekirnevadvogada</span>
            </a>

            {/* Jusbrasil */}
            <a
              href={SOCIAL_LINKS.jusbrasil}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 hover:text-[#C5A059] transition-colors text-stone-400 hover:text-stone-200"
              title="Consulta e Publicações Jurídicas no Jusbrasil"
            >
              <span className="text-stone-600">|</span>
              <span>Jusbrasil</span>
              <ExternalLink className="w-3 h-3 text-stone-500" />
            </a>

            {/* Linkbio Hub */}
            <a
              href={SOCIAL_LINKS.linkbio}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-[#D8B467] hover:underline"
              title="Central de Links Oficiais"
            >
              <span className="text-stone-600">|</span>
              <span>linkbio.co/KIRNEVADV</span>
            </a>

            {/* Direct Phone / WhatsApp */}
            <div className="flex items-center gap-1 pl-2 border-l border-stone-700 text-white">
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] font-semibold transition-colors"
              >
                {SOCIAL_LINKS.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar with Glassmorphism / Solid Transition */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E6CCA0]/30'
            : 'bg-[#FAF9F5] py-4 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center group">
            <EmblemLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#2C3832]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 hover:text-[#A8843E] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EBF7EE] text-[#1E6B37] border border-[#25D366]/30 hover:bg-[#D4F2DB] text-xs font-semibold tracking-wide transition-all shadow-xs"
              title="Conversar diretamente com a banca no WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Agro</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              id="nav-consultation-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#173024] to-[#102219] text-[#FAF9F5] hover:from-[#1E3E2F] hover:to-[#173024] text-xs font-semibold tracking-wider uppercase shadow-sm border border-[#C5A059]/40 hover:border-[#C5A059] transition-all transform active:scale-95"
            >
              <span>Agendar Consulta</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D8B467]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#193126] hover:bg-stone-200/60 focus:outline-hidden transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF9F5] border-b border-[#E6CCA0]/60 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-base font-semibold text-[#193126] hover:bg-[#F2ECE1] rounded-md transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </a>
            ))}

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#193126] text-white text-center font-bold tracking-wider text-sm uppercase flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Solicitar Consulta Jurídica</span>
                <ChevronRight className="w-4 h-4 text-[#D8B467]" />
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[#176632] text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento Rápido via WhatsApp</span>
              </a>
            </div>

            {/* Social Links on Mobile */}
            <div className="pt-3 flex items-center justify-around text-xs text-stone-600 border-t border-stone-200">
              <a
                href={SOCIAL_LINKS.instagramFirm}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#A8843E]"
              >
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>@kirnevadvocacia</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagramFounder}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#A8843E]"
              >
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>@daianekirnevadvogada</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkbio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#C5A059]"
              >
                <span>LinkBio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
