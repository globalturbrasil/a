/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FounderSection } from './components/FounderSection';
import { LodiCenterSection } from './components/LodiCenterSection';
import { PracticeAreas } from './components/PracticeAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ArticleModal } from './components/ArticleModal';
import { ConsultationModal } from './components/ConsultationModal';
import { BlogPost } from './types';

export default function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('Direito do Agronegócio');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    }
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2522]">
      {/* Navigation Header */}
      <Navbar onOpenConsultationModal={() => handleOpenConsultation('Consulta Jurídica Geral')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenConsultationModal={() => handleOpenConsultation('Atendimento Geral')} />

        {/* Institutional & Founder Profile */}
        <FounderSection />

        {/* Centro Empresarial Lodi Highlight */}
        <LodiCenterSection onOpenConsultationModal={() => handleOpenConsultation('Centro Empresarial Lodi')} />

        {/* Practice Areas */}
        <PracticeAreas onSelectAreaForConsultation={(areaTitle) => handleOpenConsultation(areaTitle)} />

        {/* Testimonials from Farmers & Clients */}
        <TestimonialsSection />

        {/* Legal News & Blog */}
        <BlogSection onSelectPost={(post) => setSelectedPost(post)} />

        {/* Contact Form & Official Channels */}
        <ContactSection initialArea={consultationTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Article Reading Modal */}
      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenConsultation={(topic) => handleOpenConsultation(topic)}
      />

      {/* Interactive Legal Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultTopic={consultationTopic}
      />
    </div>
  );
}
