import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
  Award,
  Shield,
  Building2,
  ArrowUp,
} from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';
import { SOCIAL_LINKS } from '../data/lawFirmData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C1712] text-stone-300 border-t border-[#1C3125] pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <EmblemLogo variant="gold-on-dark" size="md" />
            
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Escritório de advocacia de referência no <strong>Direito do Agronegócio</strong> e em <strong>causas cíveis estratégicas</strong>, fundado e conduzido pela <strong>Dra. Daiane Kirnev</strong> em Tapurah, Mato Grosso, com atuação em todo o Brasil.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162A20] text-[#D8B467] border border-[#C5A059]/30 text-[11px] font-semibold">
                <Award className="w-3.5 h-3.5 text-[#D8B467]" />
                <span>Destaque Empresarial de Tapurah / Advocacia</span>
              </div>
            </div>
          </div>

          {/* Practice Areas Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#C5A059] pl-2">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#areas" className="hover:text-[#C5A059] transition-colors">
                  Contratos Agrários & Arrendamentos
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C5A059] transition-colors">
                  Cédulas de Produto Rural (CPR) & Barter
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C5A059] transition-colors">
                  Regularização Fundiária & CAR em MT
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C5A059] transition-colors">
                  Holding Rural & Sucessão Familiar
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C5A059] transition-colors">
                  Direito Cível, Imobiliário & Contratos
                </a>
              </li>
              <li>
                <a href="#centro-lodi" className="hover:text-[#C5A059] transition-colors">
                  Centro Empresarial Lodi • Hub Corporativo
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#C5A059] pl-2">
              Redes & Canais
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <a
                  href={SOCIAL_LINKS.instagramFirm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>@kirnevadvocacia</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagramFounder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>@daianekirnevadvogada</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.jusbrasil}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
                >
                  <span>Consulta Jusbrasil</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkbio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
                >
                  <span>LinkBio Oficial</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Sede (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#C5A059] pl-2">
              Sede Institucional
            </h4>
            <div className="space-y-2 text-stone-400 text-xs">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 block">Centro Empresarial Lodi</strong>
                  Tapurah - Mato Grosso (MT) • Brasil
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {SOCIAL_LINKS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{SOCIAL_LINKS.email}</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#162A20] hover:bg-[#1E392B] text-stone-300 hover:text-white text-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao topo</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Ethical Legal Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} Kirnev Advocacia • Dra. Daiane Kirnev. Todos os direitos reservados.
          </p>

          <p className="text-center sm:text-right max-w-md">
            Este portal respeita rigorosamente as diretrizes éticas do Provimento nº 205/2021 do Conselho Federal da OAB sobre publicidade na advocacia, possuindo caráter meramente informativo.
          </p>
        </div>

      </div>
    </footer>
  );
};
