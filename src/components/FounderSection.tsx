import React from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Check,
  Instagram,
  ArrowUpRight,
  ShieldAlert,
  Building,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/lawFirmData';

export const FounderSection: React.FC = () => {
  return (
    <section id="escritorio" className="py-20 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Perfil Institucional & Liderança</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A Força Jurídica do Agronegócio em Mato Grosso
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Uma trajetória forjada na conexão genuína com a terra, no empreendedorismo de vanguarda e na defesa intransigente dos direitos de quem move a economia brasileira.
          </p>
        </div>

        {/* Two-Column Grid: Biography & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Key Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C5A059]/30 via-transparent to-[#193126]/20 rounded-2xl blur-xs transform -rotate-1 pointer-events-none" />
              
              <div className="relative bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                {/* Header Banner */}
                <div className="bg-[#14261E] py-6 px-6 text-center border-b border-[#C5A059]/40 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#1C362A] border-2 border-[#C5A059] flex items-center justify-center shadow-md mb-3">
                    <span
                      className="text-3xl font-serif font-bold text-[#D8B467]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      K
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                    Dra. Daiane Kirnev
                  </h3>
                  <p className="text-xs text-[#D8B467] font-semibold tracking-wider uppercase mt-1">
                    Advogada & Empresária • OAB/MT
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Fundadora da Kirnev Advocacia
                  </p>
                </div>

                {/* Profile Highlights List */}
                <div className="p-6 space-y-4 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-stone-900 tracking-wider">
                        Destaque Empresarial de Tapurah
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Eleita a banca de maior reconhecimento no segmento de advocacia do município.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-stone-900 tracking-wider">
                        Vivência Familiar no Campo
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Conhecimento prático da rotina, sazonalidade e desafios dos produtores de Mato Grosso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF5EB] text-[#8C6D2D] shrink-0 mt-0.5">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-stone-900 tracking-wider">
                        Centro Empresarial Lodi
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Idealizadora e construtora do complexo corporativo e coworking em Tapurah.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <a
                      href={SOCIAL_LINKS.instagramFounder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D2D] hover:text-[#5B4518] transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>@daianekirnevadvogada</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <a
                      href={SOCIAL_LINKS.jusbrasil}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-500 hover:text-stone-800 transition-colors"
                    >
                      Jusbrasil Perfil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Storytelling & Institutional Impact */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-stone max-w-none">
              <h3
                className="text-2xl font-serif font-bold text-[#14261E] leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Tradição da lida rural aliada à sofisticação e segurança jurídica contemporânea.
              </h3>
              
              <p className="text-stone-700 leading-relaxed text-base mt-4">
                A <strong>Dra. Daiane Kirnev</strong> é uma advogada e empresária atuante em <strong>Tapurah, Mato Grosso</strong>, com forte reconhecimento local e regional no segmento jurídico. O seu escritório, <strong>Kirnev Advocacia</strong>, destaca-se prioritariamente nas áreas do <strong>Direito do Agronegócio</strong> e em <strong>causas cíveis estratégicas</strong>.
              </p>

              <p className="text-stone-700 leading-relaxed text-base">
                Sua advocacia diferencia-se fundamentalmente por refletir sua própria vivência familiar ligada ao campo na próspera região mato-grossense. Essa intimidade com a produção agrícola — do plantio à colheita, da comercialização de grãos aos ciclos climáticos — permite um aconselhamento jurídico preventivo e combativo que compreende a linguagem e as necessidades reais do produtor rural.
              </p>
            </div>

            {/* 4 Pillars Grid based on Image 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#C5A059] transition-all">
                <div className="flex items-center gap-2 text-[#193126] font-bold text-sm mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Especialidade Principal</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Foco rigoroso em Direito do Agronegócio, Contratos Agrários, Títulos de Crédito (CPR), Regularização Fundiária e Direito Cível.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#C5A059] transition-all">
                <div className="flex items-center gap-2 text-[#193126] font-bold text-sm mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Destaque Empresarial</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Escritório eleito <strong>Destaque Empresarial de Tapurah</strong> pelo segmento de advocacia, chancelado pela preferência e confiança da comunidade.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#C5A059] transition-all">
                <div className="flex items-center gap-2 text-[#193126] font-bold text-sm mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Visão Empreendedora</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Idealização e construção do <strong>Centro Empresarial Lodi</strong> em Tapurah, fomentando coworking e infraestrutura corporativa para o município.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#C5A059] transition-all">
                <div className="flex items-center gap-2 text-[#193126] font-bold text-sm mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Atuação Institucional</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Envolvimento proativo em pautas locais de desenvolvimento da justiça na Comarca de Tapurah e conexão estratégica com entidades do agro como a <strong>Aprosoja</strong>.
                </p>
              </div>

            </div>

            {/* Official channels callout banner */}
            <div className="p-4 rounded-xl bg-[#F4F0E6] border border-[#C5A059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#193126] uppercase tracking-wider">
                  Canais Oficiais da Banca
                </p>
                <p className="text-xs text-stone-600">
                  Acompanhe publicações, novidades e jurisprudence no Instagram e Jusbrasil.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={SOCIAL_LINKS.instagramFirm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#193126] text-white text-xs font-medium hover:bg-[#254536] transition-colors"
                >
                  Instagram da Banca
                </a>
                <a
                  href={SOCIAL_LINKS.linkbio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-white border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors"
                >
                  LinkBio Oficial
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
