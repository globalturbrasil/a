import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/lawFirmData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Agronegócio', 'Direito Cível', 'Institucional', 'Gestão & Negócios'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Todas' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-20 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Inteligência Jurídica & Notícias</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Blog & Análises do Agronegócio
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Artigos técnicos, atualizações legislativas de Mato Grosso e orientações preventivas elaboradas pela Dra. Daiane Kirnev e equipe.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#193126] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar artigo ou assunto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
            />
          </div>

        </div>

        {/* Featured Article Highlight (shows when no search or filter is applied, or if matches) */}
        {selectedCategory === 'Todas' && !searchQuery && (
          <div className="mb-12 rounded-2xl bg-[#14261E] text-white border border-[#C5A059]/40 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#12221A] text-[10px] font-bold uppercase tracking-wider">
                  Destaque Editorial
                </span>
                <span className="text-xs text-[#D8B467] font-semibold">{featuredPost.category}</span>
                <span className="text-stone-500">•</span>
                <span className="text-xs text-stone-300">{featuredPost.readTime}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] leading-snug cursor-pointer hover:text-[#D8B467] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                onClick={() => onSelectPost(featuredPost)}
              >
                {featuredPost.title}
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
                {featuredPost.summary}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectPost(featuredPost)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C5A059] text-[#12221A] font-bold text-xs uppercase tracking-wider hover:bg-[#D8B467] transition-colors shadow-sm"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-stone-400">
                  Por {featuredPost.author.name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#1C362A] rounded-xl p-5 border border-[#C5A059]/20 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B467]">
                Tópicos Principais
              </h4>
              <ul className="space-y-2">
                {featuredPost.keyTakeaways?.slice(0, 3).map((takeaway, i) => (
                  <li key={i} className="text-xs text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              <div className="p-6 space-y-3">
                {/* Meta Top: Category & Read Time */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5EB] text-[#8C6D2D] font-bold uppercase tracking-wider text-[10px] border border-[#E6CCA0]/40">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-stone-400">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-lg font-serif font-bold text-[#14261E] group-hover:text-[#8C6D2D] transition-colors leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags preview */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Author & Read link */}
              <div className="p-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium text-[11px] truncate max-w-[170px]">
                  {post.publishedAt}
                </span>

                <span className="inline-flex items-center gap-1 font-bold text-[#8C6D2D] group-hover:translate-x-0.5 transition-transform">
                  <span>Ler artigo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
            <p className="text-stone-500 text-sm">
              Nenhum artigo encontrado para o termo de busca informado.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todas');
              }}
              className="mt-3 text-xs font-semibold text-[#8C6D2D] underline"
            >
              Limpar filtros de busca
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
