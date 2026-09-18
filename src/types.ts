export interface PracticeArea {
  id: string;
  title: string;
  category: 'agro' | 'civel' | 'empresarial';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  iconName: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Agronegócio' | 'Direito Cível' | 'Institucional' | 'Gestão & Negócios';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  content: string[]; // paragraphs and sections
  keyTakeaways?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrFarm?: string;
  location: string;
  rating: number;
  text: string;
  category: 'Agro' | 'Cível' | 'Centro Empresarial Lodi';
  date: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  area: string;
  urgency: 'normal' | 'alta' | 'urgente';
  message: string;
}

export interface SocialLinks {
  instagramFirm: string;
  instagramFounder: string;
  linkbio: string;
  jusbrasil: string;
  whatsapp: string;
  email: string;
  phone: string;
  address: string;
  cityState: string;
}
