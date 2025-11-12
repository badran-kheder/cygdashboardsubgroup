import {
  HeroSection,
  HeroSectionData,
  Service,
  ServiceData,
  IndustryPerspective,
  IndustryPerspectiveData,
  StrategicGrowth,
  StrategicGrowthData,
  StockSection,
  StockData,
  FooterLogo,
  FooterLogoData,
  PageHeroSection,
  PageHeroSectionData,
  TeamMember,
  TeamMemberData,
  ClientReview,
  ClientReviewData,
  PageServicesSection,
  PageServicesSectionData,
  OfficeLocation,
  OfficeLocationData,
  Footer,
  FooterData,
  Navigation,
  NavigationData,
  PageSectionData,
  PageSection,
  Industry,
  IndustryData,
  ServiceDetail,
  ServiceDetailData,
  AboutTeamSection,
  AboutTeamSectionData,
} from "@/types/strapi";
import { getStrapiMediaURL } from "./strapi";

// Transform Strapi data to component-friendly format
export const transformHeroSection = (
  strapiData: HeroSection
): HeroSectionData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    textAlign: strapiData.textAlign,
    showFooter: strapiData.showFooter,
    reviewsLink: strapiData.reviewsLink,
    backgroundImage: strapiData.backgroundImage?.url
      ? getStrapiMediaURL(strapiData.backgroundImage.url)
      : "/images/hero-bg.png", // fallback
    buttons: strapiData.buttons.map((button) => ({
      id: button.id,
      text: button.text,
      href: button.href.startsWith("/") ? button.href : `/${button.href}`,
      variant: button.Options === "Primary" ? "primary" : "secondary",
      icon: button.icon || false,
    })),
  };
};

// Transform Strapi service data to component-friendly format
export const transformService = (strapiData: Service): ServiceData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    image: strapiData.image?.url
      ? getStrapiMediaURL(strapiData.image.url)
      : "/images/Group.svg", // fallback
    imageAlt: strapiData.imageAlt,
    buttonText: strapiData.buttonText || "",
    buttonHref: strapiData.buttonHref
      ? strapiData.buttonHref.startsWith("/")
        ? strapiData.buttonHref
        : `/${strapiData.buttonHref}`
      : "",
    serviceKey: strapiData.serviceKey || "",
    subServices: (strapiData.subServices || strapiData.SubServices || []).map(
      (subService) => ({
        id: subService.id,
        title: subService.title,
        icon: subService.icon?.url
          ? getStrapiMediaURL(subService.icon.url)
          : "/images/spec-ico.png", // fallback
        backgroundColor: subService.backgroundColor,
        href: subService.href.startsWith("/")
          ? subService.href
          : `/${subService.href}`,
      })
    ),
  };
};

// Transform Strapi industry perspective data to component-friendly format
export const transformIndustryPerspective = (
  strapiData: IndustryPerspective
): IndustryPerspectiveData => {
  return {
    id: strapiData.id,
    imageSrc: strapiData.imageSrc?.url
      ? getStrapiMediaURL(strapiData.imageSrc.url)
      : "/images/slide.png", // fallback
    title: strapiData.title,
    category1: strapiData.category1,
    category2: strapiData.category2,
    date: strapiData.date,
    href: strapiData.href,
  };
};

// Transform Strapi strategic growth data to component-friendly format
export const transformStrategicGrowth = (
  strapiData: StrategicGrowth
): StrategicGrowthData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    buttonText: strapiData.buttonText,
    buttonHref: strapiData.buttonHref.startsWith("/")
      ? strapiData.buttonHref
      : `/${strapiData.buttonHref}`,
    backgroundImage: strapiData.backgroundImage?.url
      ? getStrapiMediaURL(strapiData.backgroundImage.url)
      : "/images/chess.png", // fallback
  };
};

// Transform Strapi stock data to component-friendly format
export const transformStock = (strapiData: StockSection): StockData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    backgroundImage: strapiData.backgroundImage?.url
      ? getStrapiMediaURL(strapiData.backgroundImage.url)
      : "/images/t-stock.png", // fallback
    backgroundImageAlt: strapiData.backgroundImageAlt,
  };
};

// Transform Strapi footer logo data to component-friendly format
export const transformFooterLogo = (strapiData: FooterLogo): FooterLogoData => {
  const media =
    strapiData.logo ||
    strapiData.brandLogo ||
    strapiData.image ||
    null;
  return {
    id: strapiData.id,
    brand: strapiData.brands,
    quote: strapiData.quote,
    brandLogoUrl: media?.url ? getStrapiMediaURL(media.url) : null,
  };
};

// Transform Strapi page hero section data to component-friendly format
export const transformPageHeroSection = (
  strapiData: PageHeroSection
): PageHeroSectionData => {
  return {
    id: strapiData.id,
    pageName: strapiData.pageName,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    textAlign: strapiData.textAlign,
    showFooter: strapiData.showFooter || false,
    reviewsLink: strapiData.reviewLink || undefined,
    backgroundImage: strapiData.backgroundImage?.url
      ? getStrapiMediaURL(strapiData.backgroundImage.url)
      : "/images/hero-bg.png", // fallback
    buttons: strapiData.HeroButton.map((button) => ({
      id: button.id,
      text: button.text,
      href: button.href.startsWith("/") ? button.href : `/${button.href}`,
      variant: button.Options === "Primary" ? "primary" : "secondary",
      icon: button.icon || false,
    })),
  };
};

// Transform Strapi team member data to component-friendly format
export const transformTeamMember = (strapiData: TeamMember): TeamMemberData => {
  return {
    id: strapiData.id,
    title: strapiData.name,
    description: strapiData.description,
    image: strapiData.image?.url
      ? getStrapiMediaURL(strapiData.image.url)
      : "/images/slide.png", // fallback
    alt: strapiData.alt,
    position: strapiData.position,
  };
};

// Transform Strapi client review data to component-friendly format
export const transformClientReview = (
  strapiData: ClientReview
): ClientReviewData => {
  return {
    id: strapiData.id,
    title: strapiData.clientName,
    description: strapiData.review,
    image: strapiData.image?.url
      ? getStrapiMediaURL(strapiData.image.url)
      : "/images/slide.png", // fallback
    alt: strapiData.alt,
    company: strapiData.company,
    rating: strapiData.rating,
  };
};

// Transform Strapi page services section data to component-friendly format
export const transformPageServicesSection = (
  strapiData: PageServicesSection
): PageServicesSectionData => {
  return {
    id: strapiData.id,
    pageName: strapiData.pageName,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
    backgroundGradient: strapiData.backgroundGradient,
    showSpecialService: strapiData.showSpecialService || false,
    clickableCards: strapiData.clickableCards || false,
    services: strapiData.services.map((service: Service) =>
      transformService(service)
    ),
  };
};

// Transform Strapi office location data to component-friendly format
export const transformOfficeLocation = (
  strapiData: OfficeLocation
): OfficeLocationData => {
  return {
    id: strapiData.id,
    imageSrc: strapiData.image?.url
      ? getStrapiMediaURL(strapiData.image.url)
      : "/images/slide.png", // fallback
    title: strapiData.title,
    category1: strapiData.email,
    category2: strapiData.phone,
    date: strapiData.officeType,
    href: strapiData.mapLink,
  };
};

// Transform Strapi footer data to component-friendly format
export const transformFooter = (strapiData: Footer): FooterData => {
  return {
    logoUrl: strapiData.logo?.url
      ? getStrapiMediaURL(strapiData.logo.url)
      : "/images/cyg-logo.png", // fallback
    logoAlt: strapiData.logo?.alternativeText || "CYG Partners", // fallback
    email: strapiData.email,
    phone: strapiData.phone,
    address: strapiData.address,
    copyrightText: strapiData.copyrightText,
  };
};

// Transform Strapi navigation data
export const transformNavigation = (strapiData: Navigation): NavigationData => {
  const logoUrl = strapiData.logo?.url
    ? getStrapiMediaURL(strapiData.logo.url)
    : "/images/logo.png";
  const logoAlt = strapiData.logo?.alternativeText || "CYG Partners";

  const navLinks = (strapiData.navLinks || [])
    .map((link) => ({
      id: link.id,
      label: link.label,
      url: link.url.startsWith("/") ? link.url : `/${link.url}`,
      order: link.order ?? null,
    }))
    .sort((a, b) => {
      const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return a.id - b.id;
    });

  return {
    logoUrl,
    logoAlt,
    navLinks,
  };
};

// Transform Strapi page section data
export const transformPageSection = (
  strapiData: PageSection
): PageSectionData => {
  return {
    id: strapiData.id,
    // Access properties directly from strapiData
    sectionId: strapiData.sectionId,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent || "", // Use titleAccent, provide fallback
    description: strapiData.description,
    // Access the image URL directly from the backgroundImage object
    backgroundImage: strapiData.backgroundImage?.url
      ? getStrapiMediaURL(strapiData.backgroundImage.url)
      : "/images/about-bg.png", // Fallback image
  };
};

// Transform Industry data
export const transformIndustry = (strapiData: Industry): IndustryData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    icon: strapiData.icon?.url
      ? getStrapiMediaURL(strapiData.icon.url)
      : "/images/cpu.png", // Fallback icon
    href: strapiData.href || "/services",
    order: strapiData.order || 0,
  };
};

// Transform Service Detail data
export const transformServiceDetail = (
  strapiData: ServiceDetail
): ServiceDetailData => {
  return {
    id: strapiData.id,
    serviceKey: strapiData.service?.serviceKey || "",
    overview: strapiData.overview,
    benefits: strapiData.benefits.map((benefit) => benefit.text),
    process: strapiData.process.map((step) => ({
      step: step.step,
      title: step.title,
      description: step.description,
      iconName: step.iconName,
    })),
    features: strapiData.features.map((feature) => ({
      title: feature.title,
      description: feature.description,
      iconName: feature.iconName,
    })),
    ctaTitle: strapiData.ctaTitle,
    ctaTitleAccent: strapiData.ctaTitleAccent,
    ctaButtonText: strapiData.ctaButtonText,
  };
};

// Transform About Team Section data
export const transformAboutTeamSection = (
  strapiData: AboutTeamSection
): AboutTeamSectionData => {
  return {
    id: strapiData.id,
    title: strapiData.title,
    titleAccent: strapiData.titleAccent,
    description: strapiData.description,
  };
};
