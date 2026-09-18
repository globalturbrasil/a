import React from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  MessageSquare,
  Bookmark,
  CheckCircle2,
  Tag,
  ArrowRight,
} from 'lucide-react';
import { BlogPost } from '../types';
import { SOCIAL_LINKS } from '../data/lawFirmData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: (topic: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onOpenConsultation,
}) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Dra. Daiane Kirnev! Li o artigo "${post.title}" no site da Kirnev Advocacia e gostaria de tirar uma dúvida jurídica sobre este assunto.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-[#14261E] text-white flex items-start justify-between gap-4 border-b border-[#C5A059]/30 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#12221A] text-[10px] font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-stone-300">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-stone-500">•</span>
              <div className="flex items-center gap-1 text-xs text-stone-300">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{post.publishedAt}</span>
              </div>
            </div>

            <h2
              className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#FAF9F5] leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {post.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-colors shrink-0"
            aria-label="Fechar artigo"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800">
          
          {/* Author Badge & Share Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C5A059] flex items-center justify-center font-serif font-bold text-[#8C6D2D]">
                DK
              </div>
              <div>
                <p className="text-sm font-bold text-[#14261E]">{post.author.name}</p>
                <p className="text-xs text-[#8C6D2D] font-medium">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors"
                title="Compartilhar Artigo"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </button>

              <a
                href={`https://wa.me/5566999990000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF7EE] hover:bg-[#D4F2DB] text-[#1E6B37] text-xs font-semibold transition-colors border border-[#25D366]/40"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Tirar Dúvida via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF6EE] border border-[#C5A059]/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
                <Bookmark className="w-4 h-4 text-[#C5A059]" />
                <span>Pontos Chave para o Produtor e Empresário</span>
              </div>
              <ul className="space-y-2">
                {post.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Paragraphs */}
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-stone-200 flex items-center gap-2 flex-wrap">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-xs text-stone-500 font-medium">Palavras-chave:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Call to action at the end of article */}
          <div className="p-5 rounded-xl bg-[#14261E] text-white border border-[#C5A059]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-serif font-bold text-[#FAF9F5]">
                Deseja uma consultoria personalizada sobre este tema?
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Agende uma reunião com a Dra. Daiane Kirnev presencialmente em Tapurah ou online.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation(`Artigo: ${post.title}`);
              }}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D8B467] text-[#12221A] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all"
            >
              <span>Consultar Banca</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
