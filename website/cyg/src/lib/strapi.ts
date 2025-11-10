import { ContactFormData } from "@/types/strapi";

// Helper function to get full image URLs
export const getStrapiURL = (path: string = "") => {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${url}${path}`;
};

// Helper function to get image URL
export const getStrapiMediaURL = (url: string) => {
  if (url.startsWith("http")) return url;
  return getStrapiURL(url);
};

// API functions
export const getHeroSections = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/hero-sections?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching hero sections:", error);
    return [];
  }
};

export const getHeroSection = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/hero-sections/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
};

export const getServices = async () => {
  try {
    // Deep-populate service image and sub-services with their icons
    const response = await fetch(
      `${getStrapiURL()}/api/services?populate[0]=image&populate[1]=SubServices&populate[2]=SubServices.icon`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getService = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/services/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

export const getIndustryPerspectives = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/industry-perspectives?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching industry perspectives:", error);
    return [];
  }
};

export const getIndustryPerspective = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/industry-perspectives/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching industry perspective:", error);
    return null;
  }
};

export const getStrategicGrowth = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/strategic-growths?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching strategic growth:", error);
    return [];
  }
};

export const getStrategicGrowthById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/strategic-growths/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching strategic growth:", error);
    return null;
  }
};

export const getStock = async () => {
  try {
    const response = await fetch(`${getStrapiURL()}/api/stocks?populate=*`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching stock:", error);
    return [];
  }
};

export const getStockById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/stocks/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching stock:", error);
    return null;
  }
};

export const getFooterLogos = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/footer-logos?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching footer logos:", error);
    return [];
  }
};

export const getFooterLogoById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/footer-logos/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching footer logo:", error);
    return null;
  }
};

export const getPageHeroSections = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-hero-sections?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching page hero sections:", error);
    return [];
  }
};

export const getPageHeroSectionByPageName = async (pageName: string) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-hero-sections?filters[pageName][$eq]=${pageName}&populate=*`
    );
    const data = await response.json();
    return data.data && data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching page hero section:", error);
    return null;
  }
};

export const getPageHeroSectionById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-hero-sections/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching page hero section:", error);
    return null;
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/team-members?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};

export const getTeamMemberById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/team-members/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching team member:", error);
    return null;
  }
};

export const getClientReviews = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/client-reviews?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching client reviews:", error);
    return [];
  }
};

export const getClientReviewById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/client-reviews/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching client review:", error);
    return null;
  }
};

export const getPageServicesSections = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-service-sections?populate[services][populate]=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching page services sections:", error);
    return [];
  }
};

export const getPageServicesSectionByPageName = async (pageName: string) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-service-sections?filters[pageName][$eq]=${pageName}&populate[services][populate]=*`
    );
    const data = await response.json();
    return data.data && data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching page services section:", error);
    return null;
  }
};

export const getPageServicesSectionById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-service-sections/${id}?populate[services][populate]=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching page services section:", error);
    return null;
  }
};

// Office Location API functions
export const getOfficeLocations = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/office-locations?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching office locations:", error);
    return [];
  }
};

export const getOfficeLocationById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/office-locations/${id}?populate=*`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching office location:", error);
    return null;
  }
};

// Contact Form API functions
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/contact-form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const getContactFormSubmissions = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/contact-form-submissions?populate=*`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching contact form submissions:", error);
    return [];
  }
};

// Footer API functions
export const getFooter = async () => {
  try {
    const response = await fetch(`${getStrapiURL()}/api/footer?populate=*`);
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching footer:", error);
    return null;
  }
};

// Navigation API functions
export const getNavigation = async () => {
  try {
    // Use indexed parameters for the populate array
    const response = await fetch(
      `${getStrapiURL()}/api/navigation?populate[0]=logo&populate[1]=navLinks`
    );
    const data = await response.json();
    // Support both Strapi v4 (attributes) and v5 (flattened) shapes
    const raw = data?.data || null;
    if (!raw) return null;
    return raw.attributes ?? raw;
  } catch (error) {
    console.error("Error fetching navigation:", error);
    return null;
  }
};

// Page Section API functions
export const getPageSectionBySectionId = async (sectionId: string) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/page-sections?filters[sectionId][$eq]=${sectionId}&populate=backgroundImage`
    );
    const data = await response.json();
    return data.data && data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error(`Error fetching page section by ID (${sectionId}):`, error);
    return null;
  }
};

// Industry API functions
export const getIndustries = async () => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/industries?populate=icon&sort=order:asc`
    );
    
    // Check for 403 Forbidden status
    if (response.status === 403) {
      console.warn("Access forbidden (403) when fetching industries, using fallback data");
      throw new Error("FORBIDDEN_403");
    }
    
    // Check for other error statuses
    if (!response.ok) {
      console.warn(`Error fetching industries: ${response.status} ${response.statusText}`);
      throw new Error(`HTTP_${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    // Re-throw 403 errors so component can handle them
    if (error instanceof Error && error.message === "FORBIDDEN_403") {
      throw error;
    }
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const getIndustryById = async (id: number) => {
  try {
    const response = await fetch(
      `${getStrapiURL()}/api/industries/${id}?populate=icon`
    );
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching industry:", error);
    return null;
  }
};