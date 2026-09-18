import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Building2,
  Shield,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/lawFirmData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialArea }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    area: initialArea || 'Direito do Agronegócio',
    urgency: 'normal',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [protocol, setProtocol] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.message) {
      alert('Por favor, preencha seu nome, telefone e mensagem.');
      return;
    }

    setStatus('submitting');

    // Simulate secure legal submission
    setTimeout(() => {
      const generatedProtocol = `KIRNEV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setProtocol(generatedProtocol);
      setStatus('success');
    }, 1200);
  };

  const handleSendWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Solicitação de Atendimento Jurídico - Kirnev Advocacia*\n` +
      `*Nome:* ${formData.fullName || 'Não informado'}\n` +
      `*Telefone:* ${formData.phone || 'Não informado'}\n` +
      `*Área:* ${formData.area}\n` +
      `*Urgência:* ${formData.urgency.toUpperCase()}\n` +
      `*Mensagem:* ${formData.message || 'Gostaria de agendar uma consulta.'}`
    );
    window.open(`https://wa.me/5566999990000?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#7A5B1E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Canais Oficiais de Atendimento</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Fale com a Kirnev Advocacia
          </h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Agende uma reunião presencial em nossa sede no Centro Empresarial Lodi em Tapurah/MT ou solicite um parecer consultivo remoto para qualquer região do país.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
              
              <div className="border-b border-stone-100 pb-4 mb-6">
                <h3 className="text-xl font-serif font-bold text-[#14261E]">
                  Formulário de Contato & Consultoria
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Suas informações são protegidas pelo rigoroso sigilo profissional da OAB.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-[#EBF7EE] border border-[#25D366]/40 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#176632]">
                      Mensagem Enviada com Sucesso!
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Protocolo de Atendimento Registrado: <strong className="text-stone-900">{protocol}</strong>
                    </p>
                    <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto">
                      Nossa equipe jurídica analisará sua demanda e entrará em contato pelo telefone ou e-mail fornecido com a maior brevidade.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Encaminhar Cópia para o WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          area: 'Direito do Agronegócio',
                          urgency: 'normal',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 rounded-lg bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
                    >
                      Novo Contato
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João da Silva / Fazenda Progresso"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Telefone / WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(66) 99999-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Área de Interesse *
                      </label>
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A059] focus:bg-white transition-all"
                      >
                        <option value="Direito do Agronegócio">Direito do Agronegócio</option>
                        <option value="Contratos Agrários & Arrendamentos">Contratos Agrários & Arrendamentos</option>
                        <option value="Títulos do Agro & CPR">Títulos do Agro & CPR</option>
                        <option value="Regularização Fundiária & CAR">Regularização Fundiária & CAR</option>
                        <option value="Holding Rural & Sucessão Familiar">Holding Rural & Sucessão Familiar</option>
                        <option value="Direito Cível & Contratos">Direito Cível & Contratos</option>
                        <option value="Centro Empresarial Lodi">Centro Empresarial Lodi / Coworking</option>
                        <option value="Outros Assuntos">Outros Assuntos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Grau de Prioridade
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'normal' })}
                        className={`py-2 px-3 text-xs rounded-lg font-medium border text-center transition-all ${
                          formData.urgency === 'normal'
                            ? 'bg-[#193126] text-white border-[#193126]'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Padrão
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'alta' })}
                        className={`py-2 px-3 text-xs rounded-lg font-medium border text-center transition-all ${
                          formData.urgency === 'alta'
                            ? 'bg-[#C5A059] text-[#12221A] font-bold border-[#C5A059]'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Alta (Safra / Contrato)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'urgente' })}
                        className={`py-2 px-3 text-xs rounded-lg font-medium border text-center transition-all ${
                          formData.urgency === 'urgente'
                            ? 'bg-red-700 text-white font-bold border-red-700'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Urgente (Prazo Judicial)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Descreva sua Demanda ou Situação *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva brevemente o caso, localização da fazenda ou imóvel, e principais dúvidas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#193126] hover:bg-[#234535] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#D8B467]" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#176632] text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>Falar Direto no WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Physical Location, Hours & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#14261E] text-white rounded-2xl p-6 sm:p-7 border border-[#C5A059]/30 shadow-lg space-y-5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
                <h4 className="text-lg font-serif font-bold text-[#FAF9F5]">
                  Sede & Atendimento
                </h4>
              </div>

              <div className="space-y-3.5 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Centro Empresarial Lodi</strong>
                    <span>Tapurah - Mato Grosso (MT)</span>
                    <span className="block text-[11px] text-stone-400">CEP 78510-000 • Brasil</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Telefone & WhatsApp</strong>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                      {SOCIAL_LINKS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">E-mail Institucional</strong>
                    <span>{SOCIAL_LINKS.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Horário de Funcionamento</strong>
                    <span>Segunda a Sexta: 07h30 às 17h30 (Horário de MT)</span>
                    <span className="block text-[11px] text-stone-400">Plantão telefônico para urgências de safra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Digital Channels Box (as explicitly requested in prompt) */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#14261E]">
                Canais Digitais Oficiais
              </h4>
              <p className="text-xs text-stone-600">
                Conecte-se com a Dra. Daiane Kirnev nas redes sociais e consulte movimentações processuais oficiais:
              </p>

              <div className="space-y-2.5">
                {/* Instagram da Banca */}
                <a
                  href={SOCIAL_LINKS.instagramFirm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-[#FAF5EB] border border-stone-200 hover:border-[#C5A059] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EB] flex items-center justify-center text-[#8C6D2D]">
                      <Instagram className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block group-hover:text-[#8C6D2D]">
                        @kirnevadvocacia
                      </span>
                      <span className="text-[11px] text-stone-500">Instagram Oficial da Banca</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#8C6D2D]" />
                </a>

                {/* Instagram Pessoal / Dra. Daiane */}
                <a
                  href={SOCIAL_LINKS.instagramFounder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-[#FAF5EB] border border-stone-200 hover:border-[#C5A059] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EB] flex items-center justify-center text-[#8C6D2D]">
                      <Instagram className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block group-hover:text-[#8C6D2D]">
                        @daianekirnevadvogada
                      </span>
                      <span className="text-[11px] text-stone-500">Dra. Daiane Kirnev</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#8C6D2D]" />
                </a>

                {/* Jusbrasil */}
                <a
                  href={SOCIAL_LINKS.jusbrasil}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-[#FAF5EB] border border-stone-200 hover:border-[#C5A059] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 font-bold text-xs">
                      JB
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block group-hover:text-[#8C6D2D]">
                        Consulta Processual no Jusbrasil
                      </span>
                      <span className="text-[11px] text-stone-500">Publicações e histórico jurídico</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#8C6D2D]" />
                </a>

                {/* Linkbio Hub */}
                <a
                  href={SOCIAL_LINKS.linkbio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-[#FAF5EB] border border-stone-200 hover:border-[#C5A059] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EB] flex items-center justify-center text-[#C5A059] font-bold text-xs">
                      🔗
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block group-hover:text-[#8C6D2D]">
                        Central de Links Oficiais
                      </span>
                      <span className="text-[11px] text-stone-500">linkbio.co/KIRNEVADV</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#8C6D2D]" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
