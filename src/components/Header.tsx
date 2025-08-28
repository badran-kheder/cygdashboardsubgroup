"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerPadding, setHeaderPadding] = useState("2.5rem 10rem");

  useEffect(() => {
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

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial checks
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <img
              src="/images/logo.png"
              alt="CYG Parnters"
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary-200 hover:text-primary-500 transition-colors duration-200"
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-primary-200 hover:text-primary-500 transition-colors duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>

              {/* Services Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-primary-950 border border-primary-700 rounded-lg shadow-xl transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2">
                  <Link
                    href="/services/strategic"
                    className="block px-4 py-3 text-primary-200 hover:bg-primary-700 transition-colors duration-200"
                  >
                    Strategic Advisory
                  </Link>
                  <Link
                    href="/services/sell-side"
                    className="block px-4 py-3 text-primary-200 hover:bg-primary-700 transition-colors duration-200"
                  >
                    Sell-Side Advisory
                  </Link>
                  <Link
                    href="/services/buy-side"
                    className="block px-4 py-3 text-primary-200 hover:bg-primary-700 transition-colors duration-200"
                  >
                    Buy-Side Advisory
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-primary-200 hover:text-primary-500 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/clients"
              className="text-primary-200 hover:text-primary-500 transition-colors duration-200"
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="text-primary-200 hover:text-primary-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
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
          <div className="md:hidden border-t border-primary-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services/strategic"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Strategic Advisory
              </Link>
              <Link
                href="/services/sell-side"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell-Side Advisory
              </Link>
              <Link
                href="/services/buy-side"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy-Side Advisory
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/clients"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-primary-200 hover:bg-primary-800 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
