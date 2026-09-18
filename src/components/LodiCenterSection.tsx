import React from 'react';
import {
  Building2,
  Users,
  Wifi,
  Coffee,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/lawFirmData';

interface LodiCenterSectionProps {
  onOpenConsultationModal: () => void;
}

export const LodiCenterSection: React.FC<LodiCenterSectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="centro-lodi" className="py-20 bg-gradient-to-b from-[#FAF9F5] to-[#F2EFE8] border-b border-stone-200 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Empreendedorismo & Inovação</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Centro Empresarial Lodi
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            O complexo corporativo e espaço de coworking idealizado e edificado pela{' '}
            <strong>Dra. Daiane Kirnev</strong> para impulsionar negócios, networking e profissionais de excelência em Tapurah - MT.
          </p>
        </div>

        {/* Feature Grid & Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Architectural Mockup & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#14261E] text-white rounded-2xl p-8 border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 className="w-48 h-48 text-[#C5A059]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22392E] text-[#D8B467] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sede da Kirnev Advocacia</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] leading-snug">
                  Ambiente de Alto Padrão para Grandes Decisões
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed">
                  Projetado com arquitetura contemporânea, o Centro Empresarial Lodi proporciona conforto acústico, salas privativas de atendimento confidencial, tecnologia de ponta para videoconferências com tribunais de todo o país e um auditório corporativo preparado para o agronegócio.
                </p>

                {/* 3 Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-stone-700/60">
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#D8B467]">100%</span>
                    <span className="text-[11px] text-stone-400">Estrutura Corporativa</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#D8B467]">Sede</span>
                    <span className="text-[11px] text-stone-400">Tapurah, MT</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#D8B467]">Hub</span>
                    <span className="text-[11px] text-stone-400">Coworking & Inovação</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs text-stone-300">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Localização central em Tapurah / MT • Fácil acesso para produtores da região</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Infrastructure Highlights & Community Value */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-[#C5A059] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14261E] uppercase tracking-wide">
                    Fomento ao Desenvolvimento Regional
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Mais que um edifício, o Centro Lodi foi concebido como um catalisador de oportunidades, permitindo que profissionais autônomos, consultores do agro e empresas disponham de endereço nobre e infraestrutura completa.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-[#C5A059] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14261E] uppercase tracking-wide">
                    Conectividade & Atendimento Nacional
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Equipado com links redundantes de fibra ótica de alta velocidade, viabilizando sustentações orais telepresenciais no TJMT, TRF1, STJ e STF, com segurança de dados e confidencialidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-[#C5A059] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14261E] uppercase tracking-wide">
                    Espaço Executivo & Coworking
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Salas de reunião confortáveis e acolhedoras para negociações de safra, mediação de acordos agrários e fechamento de contratos de grande porte com discrição e elegância.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#193126] text-white hover:bg-[#234535] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Agendar Atendimento Presencial</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B467]" />
              </button>

              <a
                href={SOCIAL_LINKS.instagramFounder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
              >
                <span>Ver Cobertura na Revista Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
