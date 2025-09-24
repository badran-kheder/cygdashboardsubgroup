/* eslint-disable @typescript-eslint/no-explicit-any */
// Strapi API Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, unknown>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HeroButton {
  id: number;
  text: string;
  href: string;
  Options: "Primary" | "Secondary";
  icon: boolean | null;
}

export interface HeroSection {
  id: number;
  documentId: string;
  title: string;
  titleAccent: string;
  description: string;
  textAlign: "left" | "center";
  showFooter: boolean;
  reviewsLink: string;
  backgroundImage: StrapiMedia;
  buttons: HeroButton[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Simplified types for easier use in components
export interface HeroSectionData {
  id: number;
  title: string;
  titleAccent: string;
  description: string;
  textAlign: "left" | "center";
  showFooter: boolean;
  reviewsLink: string;
  backgroundImage: string;
  buttons: HeroButtonData[];
}

export interface HeroButtonData {
  id: number;
  text: string;
  href: string;
  variant: "primary" | "secondary";
  icon: boolean;
}

export interface SubService {
  id: number;
  title: string;
  icon: StrapiMedia;
  backgroundColor: "green" | "black";
  href: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  titleAccent: string;
  description: string;
  image?: StrapiMedia | null;
  imageAlt: string;
  buttonText?: string | null;
  buttonHref?: string | null;
  serviceKey?: string | null;
  subServices?: SubService[];
  SubServices?: SubService[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ServiceData {
  id: number;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  serviceKey: string;
  subServices: {
    id: number;
    title: string;
    icon: string;
    backgroundColor: "green" | "black";
    href: string;
  }[];
}

export interface IndustryPerspective {
  id: number;
  documentId: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
  imageSrc: StrapiMedia;
  href?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IndustryPerspectiveData {
  id: number;
  imageSrc: string;
  title: string;
  category1: string;
  category2: string;
  date: string;
  href?: string;
}

export interface StrategicGrowth {
  id: number;
  documentId: string;
  title: string;
  titleAccent: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: StrapiMedia;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrategicGrowthData {
  id: number;
  title: string;
  titleAccent: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
}

export interface StockSection {
  id: number;
  documentId: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage: StrapiMedia;
  backgroundImageAlt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StockData {
  id: number;
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}

export interface FooterLogo {
  id: number;
  documentId: string;
  brands: string;
  quote: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FooterLogoData {
  id: number;
  brand: string;
  quote: string;
}

export interface PageHeroSection {
  id: number;
  documentId: string;
  pageName: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage: StrapiMedia;
  HeroButton: HeroButton[];
  textAlign: "left" | "center";
  showFooter: boolean | null;
  reviewLink?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PageHeroSectionData {
  id: number;
  pageName: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundImage: string;
  buttons: HeroButtonData[];
  textAlign: "left" | "center";
  showFooter: boolean;
  reviewsLink?: string;
}

export interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  description: string;
  image: StrapiMedia;
  alt: string;
  position?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TeamMemberData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
}

export interface ClientReview {
  id: number;
  documentId: string;
  clientName: string;
  company: string;
  review: string;
  image: StrapiMedia;
  alt: string;
  rating?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ClientReviewData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  company?: string;
  rating?: number;
}

export interface PageServicesSection {
  id: number;
  documentId: string;
  pageName: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundGradient: string;
  showSpecialService: boolean | null;
  clickableCards?: boolean | null;
  services: Service[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PageServicesSectionData {
  id: number;
  pageName: string;
  title: string;
  titleAccent: string;
  description: string;
  backgroundGradient: string;
  showSpecialService: boolean;
  clickableCards?: boolean;
  services: ServiceData[];
}

// Office Location types
export interface OfficeLocation {
  id: number;
  documentId: string;
  title: string;
  email: string;
  phone: string;
  officeType: string;
  image: StrapiMedia;
  mapLink?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface OfficeLocationData {
  id: number;
  imageSrc: string;
  title: string;
  category1: string; // email
  category2: string; // phone
  date: string; // office type
  href?: string; // map link
}

// Contact Form Submission types
export interface ContactFormSubmission {
  id?: number;
  documentId?: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Footer types
export interface Footer {
  id: number;
  logo: StrapiMedia;
  email: string;
  phone: string;
  address: string;
  copyrightText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FooterData {
  logoUrl: string;
  logoAlt: string;
  email: string;
  phone: string;
  address: string;
  copyrightText: string;
}

// Component Types
export interface NavLink {
  id: number;
  label: string;
  url: string;
}

// Navigation types
export interface Navigation {
  id: number;
  logo: StrapiMedia;
  navLinks: NavLink[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface NavigationData {
  logoUrl: string;
  logoAlt: string;
  navLinks: NavLink[];
}

// Page Section types
export interface PageSection {
  id: number;
  sectionId: string;
  title: string;
  titleAccent?: string; // Added optional titleAccent
  description: string;
  backgroundImage: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PageSectionData {
  id: number;
  sectionId: string;
  title: string;
  titleAccent: string; // Added titleAccent
  description: string;
  backgroundImage: string;
}
