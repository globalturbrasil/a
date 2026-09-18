import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle,
  MapPin,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/lawFirmData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Agro' | 'Cível' | 'Centro Empresarial Lodi'>('Todos');
  const [currentPage, setCurrentPage] = useState(0);

  const filtered = TESTIMONIALS.filter((item) => {
    if (activeFilter === 'Todos') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-[#FAF9F5] via-[#F4F1EA] to-[#FAF9F5] border-b border-stone-200 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Reconhecimento & Confiança</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Depoimentos de Quem Confia na Nossa Banca
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            A satisfação e a segurança jurídica de produtores rurais, famílias e empresários que confiam na condução ética e firme da Dra. Daiane Kirnev.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['Todos', 'Agro', 'Cível', 'Centro Empresarial Lodi'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setCurrentPage(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-[#193126] text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {cat === 'Todos' ? 'Todos os Depoimentos' : cat}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#C5A059]/60 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating & Top Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5EB] text-[#8C6D2D] text-[10px] font-bold uppercase tracking-wider border border-[#E6CCA0]/50">
                    {item.category}
                  </span>
                </div>

                {/* Quote Icon Background */}
                <Quote className="w-8 h-8 text-[#C5A059]/20 transform rotate-180" />

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#14261E] flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span title="Cliente Verificado">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                    </span>
                  </h4>
                  <p className="text-xs text-[#8C6D2D] font-medium">
                    {item.role} • <span className="text-stone-500">{item.companyOrFarm}</span>
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 py-6 px-8 rounded-xl bg-white border border-stone-200/80 shadow-xs flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="block text-2xl font-serif font-bold text-[#193126]">100%</span>
            <span className="text-xs text-stone-500 font-medium">Comprometimento com o Cliente</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-stone-200" />
          <div>
            <span className="block text-2xl font-serif font-bold text-[#8C6D2D]">Destaque</span>
            <span className="text-xs text-stone-500 font-medium">Empresarial de Tapurah - MT</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-stone-200" />
          <div>
            <span className="block text-2xl font-serif font-bold text-[#193126]">Nacional</span>
            <span className="text-xs text-stone-500 font-medium">Atuação e Sustentações em Todo o Brasil</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-stone-200" />
          <div>
            <span className="block text-2xl font-serif font-bold text-[#8C6D2D]">Sigilo</span>
            <span className="text-xs text-stone-500 font-medium">Absoluto e Rigor Ético</span>
          </div>
        </div>

      </div>
    </section>
  );
};
