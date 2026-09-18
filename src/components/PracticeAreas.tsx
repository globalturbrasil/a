import React, { useState } from 'react';
import {
  Tractor,
  Coins,
  Landmark,
  ShieldCheck,
  Scale,
  Building2,
  CheckCircle2,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/lawFirmData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectAreaForConsultation: (areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectAreaForConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'agro' | 'civel' | 'empresarial'>('all');
  const [expandedAreaId, setExpandedAreaId] = useState<string | null>(null);

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (filter === 'all') return true;
    return area.category === filter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tractor':
        return <Tractor className="w-6 h-6 text-[#8C6D2D]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#8C6D2D]" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-[#8C6D2D]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#8C6D2D]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#8C6D2D]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#8C6D2D]" />;
      default:
        return <Scale className="w-6 h-6 text-[#8C6D2D]" />;
    }
  };

  return (
    <section id="areas" className="py-20 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Atuação Jurídica de Excelência</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Áreas de Atuação Especializadas
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Soluções jurídicas personalizadas, combinando visão técnica aprofundada, estratégia preventiva e atuação contenciosa firme para defender seu patrimônio e suas safras.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-[#193126] text-white shadow-sm'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Todas as Áreas
          </button>
          <button
            onClick={() => setFilter('agro')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === 'agro'
                ? 'bg-[#193126] text-white shadow-sm'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Direito do Agronegócio
          </button>
          <button
            onClick={() => setFilter('civel')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === 'civel'
                ? 'bg-[#193126] text-white shadow-sm'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Direito Cível & Contratos
          </button>
          <button
            onClick={() => setFilter('empresarial')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === 'empresarial'
                ? 'bg-[#193126] text-white shadow-sm'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Empresarial & Centro Lodi
          </button>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => {
            const isExpanded = expandedAreaId === area.id;

            return (
              <div
                key={area.id}
                className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Top Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] border border-[#E8DFC8] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[10px] font-bold uppercase tracking-wider text-stone-600">
                      {area.category === 'agro'
                        ? 'Agronegócio'
                        : area.category === 'civel'
                        ? 'Direito Cível'
                        : 'Empresarial'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-serif font-bold text-[#14261E] group-hover:text-[#8C6D2D] transition-colors leading-snug mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {area.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {area.shortDescription}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    {area.highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Extended Content if expanded */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-600 leading-relaxed bg-[#FAF9F5] p-3 rounded-lg animate-in fade-in duration-200">
                      <p>{area.fullDescription}</p>
                    </div>
                  )}
                </div>

                {/* Card Footer with Buttons */}
                <div className="p-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setExpandedAreaId(isExpanded ? null : area.id)}
                    className="text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    {isExpanded ? 'Ver menos' : 'Saiba mais'}
                  </button>

                  <button
                    onClick={() => onSelectAreaForConsultation(area.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#193126] text-[#FAF9F5] hover:bg-[#244536] text-xs font-semibold tracking-wide uppercase transition-colors"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3 h-3 text-[#D8B467]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#14261E] text-white border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4
              className="text-xl font-serif font-bold text-[#FAF9F5]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Precisa de uma análise prévia de contrato ou demanda jurídica?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Nossa banca avalia sua situação com absoluto sigilo profissional, identificando vulnerabilidades e desenhando a estratégia jurídica mais adequada.
            </p>
          </div>

          <button
            onClick={() => onSelectAreaForConsultation('Consulta Jurídica Geral')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D8B467] text-[#12221A] font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md transition-all"
          >
            <span>Falar com a Dra. Daiane Kirnev</span>
            <ArrowRight className="w-4 h-4 text-[#12221A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
