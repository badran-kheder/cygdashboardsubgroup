"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Data layer functions and types
import { getNavigation, getServices } from "@/lib/strapi";
import { transformNavigation, transformService } from "@/lib/transform";
import { NavigationData, Service, ServiceData, NavLink } from "@/types/strapi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerPadding, setHeaderPadding] = useState("2.5rem 10rem");
  const pathname = usePathname();

  // State for dynamic data
  const [navigationData, setNavigationData] = useState<NavigationData | null>(
    null
  );
  const [services, setServices] = useState<ServiceData[]>([]);

  // Helper functions to check for active links
  const isActive = (path: string) => pathname === path;
  const isServicesActive = () => pathname.startsWith("/services");
  const isServicesDetailActive = (servicePath: string) =>
    pathname === servicePath;

  useEffect(() => {
    // Combined data fetching function
    const fetchData = async () => {
      try {
        const [navResponse, servicesResponse] = await Promise.all([
          getNavigation(),
          getServices(),
        ]);

        if (navResponse) {
          const transformedNav = transformNavigation(navResponse);
          setNavigationData(transformedNav);
        }

        if (servicesResponse && servicesResponse.length > 0) {
          const transformedServices = servicesResponse.map((service: Service) =>
            transformService(service)
          );
          setServices(transformedServices);
        }
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchData();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const shouldBeScrolled = scrollTop > 20;
      setIsScrolled(shouldBeScrolled);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) setHeaderPadding("2.5rem 8rem");
      else if (width >= 1280) setHeaderPadding("2.5rem 6rem");
      else if (width >= 1024) setHeaderPadding("2.5rem 4rem");
      else if (width >= 768) setHeaderPadding("2.5rem 2rem");
      else setHeaderPadding("2.5rem 1rem");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fallback data for initial render or API failure
  const fallbackNavigationData: NavigationData = {
    logoUrl: "/images/logo.png",
    logoAlt: "CYG Partners",
    navLinks: [
      { id: 1, label: "Home", url: "/" },
      { id: 2, label: "About Us", url: "/about" },
      { id: 3, label: "Clients", url: "/clients" },
      { id: 4, label: "Contact Us", url: "/contact" },
    ],
  };

  const fallbackServices: ServiceData[] = [
    {
      id: 1,
      title: "Strategic Advisory",
      buttonHref: "/services/strategic-advisory",
      titleAccent: "",
      description: "",
      image: "",
      imageAlt: "",
      buttonText: "",
      serviceKey: "",
      subServices: [],
    },
    {
      id: 2,
      title: "Sell-Side Advisory",
      buttonHref: "/services/sell-side-advisory",
      titleAccent: "",
      description: "",
      image: "",
      imageAlt: "",
      buttonText: "",
      serviceKey: "",
      subServices: [],
    },
    {
      id: 3,
      title: "Buy-Side Advisory",
      buttonHref: "/services/buy-side-advisory",
      titleAccent: "",
      description: "",
      image: "",
      imageAlt: "",
      buttonText: "",
      serviceKey: "",
      subServices: [],
    },
  ];

  const currentNavData = navigationData || fallbackNavigationData;
  const currentServices = services.length > 0 ? services : fallbackServices;

  // Split navLinks for layout flexibility (e.g., Contact Us as a button)
  const mainLinks = currentNavData.navLinks.filter(
    (link) => link.url !== "/contact"
  );
  const contactLink = currentNavData.navLinks.find(
    (link) => link.url === "/contact"
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        borderBottom: isScrolled ? "2px solid #FAFAFA" : "none",
        boxShadow: isScrolled ? "0px 4px 16px 0px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div
        className="mx-auto h-full transition-all "
        style={{
          width: "100%",
          maxWidth: "1920px",
          margin: "0 auto",
          height: isScrolled ? "6rem" : "10rem",
        }}
      >
        <div
          className="flex justify-between items-center h-full"
          style={{
            padding: headerPadding,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={currentNavData.logoUrl}
              alt={currentNavData.logoAlt}
              width={120}
              height={48}
              className="object-contain"
              style={{ height: "auto", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`transition-colors duration-200 ${
                  isActive(link.url)
                    ? "text-primary-500 font-semibold"
                    : "text-primary-200 hover:text-primary-500"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center transition-colors duration-200 ${
                  isServicesActive()
                    ? "text-primary-500 font-semibold"
                    : "text-primary-200 hover:text-primary-500"
                }`}
              >
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Link>

              <div
                className={`absolute top-full left-0 mt-0 w-64 bg-primary-950 border border-primary-700 rounded-lg shadow-xl transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {currentServices.map((service) => (
                    <Link
                      key={service.id}
                      href={service.buttonHref}
                      className={`block px-4 py-3 transition-colors duration-200 ${
                        isServicesDetailActive(service.buttonHref)
                          ? "text-primary-500 bg-primary-700 font-semibold"
                          : "text-primary-200 hover:bg-primary-700"
                      }`}
                    >
                      {service.title} {service.titleAccent}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {contactLink && (
              <Link
                href={contactLink.url}
                className={`transition-colors duration-200 ${
                  isActive(contactLink.url)
                    ? "text-primary-500 font-semibold"
                    : "text-primary-200 hover:text-primary-500"
                }`}
              >
                {contactLink.label}
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary-200 hover:text-primary-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-700 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main Links */}
              {mainLinks.map((link) => (
                <Link
                  key={`mobile-${link.id}`}
                  href={link.url}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(link.url)
                      ? "text-primary-500 bg-primary-800 font-semibold"
                      : "text-primary-200 hover:bg-primary-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Service Links */}
              {currentServices.map((service) => (
                <Link
                  key={`mobile-service-${service.id}`}
                  href={service.buttonHref}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isServicesDetailActive(service.buttonHref)
                      ? "text-primary-500 bg-primary-800 font-semibold"
                      : "text-primary-200 hover:bg-primary-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.title} {service.titleAccent}
                </Link>
              ))}

              {/* Contact Link */}
              {contactLink && (
                <Link
                  href={contactLink.url}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(contactLink.url)
                      ? "text-primary-500 bg-primary-800 font-semibold"
                      : "text-primary-200 hover:bg-primary-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {contactLink.label}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
