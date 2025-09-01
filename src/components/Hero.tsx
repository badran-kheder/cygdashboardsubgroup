'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

interface HeroButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  icon?: boolean
}

interface HeroProps {
  backgroundImage: string
  title: string
  titleAccent?: string
  description: string
  buttons?: HeroButton[]
  textAlign?: 'left' | 'center'
  showFooter?: boolean
  footerLogos?: Array<{
    brand: string
    quote: string
  }>
  reviewsLink?: string
}

export default function Hero({
  backgroundImage,
  title,
  titleAccent,
  description,
  buttons = [],
  textAlign = 'left',
  showFooter = false,
  footerLogos = [],
  reviewsLink = '/reviews'
}: HeroProps) {
  const getTextAlignment = () => {
    if (textAlign === 'center') {
      return 'text-center justify-center'
    }
    return 'justify-start'
  }

  const getContentMargin = () => {
    if (textAlign === 'center') {
      return 'mx-auto'
    }
    return 'ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-32'
  }

  const getButtonAlignment = () => {
    if (textAlign === 'center') {
      return 'justify-center'
    }
    return 'justify-start'
  }

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(28, 28, 28, 0.5)",
        }}
      ></div>
      
      {/* Main Hero Content */}
      <div className={`relative z-10 px-4 max-w-7xl mx-auto ${getContentMargin()}`}>
        <div className={`flex flex-col ${getTextAlignment()}`}>
          <h1 className="hero-headline mb-4 sm:mb-6">
            <span>{title}</span>
            {titleAccent && (
              <span className="hero-headline-accent"> {titleAccent}</span>
            )}
          </h1>
          <p className="hero-description mb-6 sm:mb-8">
            {description}
          </p>

          {/* CTA Buttons */}
          {buttons && buttons.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${getButtonAlignment()} items-start`}>
              {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center font-semibold hover:scale-105 ${
                  button.variant === 'primary' ? 'btn-primary' : 'btn-secondary'
                }`}
                style={{
                  backgroundColor: button.variant === 'primary' ? "#38A169" : "transparent",
                  color: button.variant === 'primary' ? "#0B1F3A" : "#FAFAFA",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: button.variant === 'secondary' ? "1px solid #FAFAFA" : "none",
                }}
                onMouseEnter={(e) => {
                  if (button.variant === 'primary') {
                    e.currentTarget.style.backgroundColor = "#4FD1C5";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(56, 161, 105, 0.3)";
                  } else {
                    e.currentTarget.style.backgroundColor = "#FAFAFA";
                    e.currentTarget.style.color = "#0B1F3A";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(250, 250, 250, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (button.variant === 'primary') {
                    e.currentTarget.style.backgroundColor = "#38A169";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#FAFAFA";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {button.text}
                {button.icon && <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />}
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>

      {/* Footer Section with Brand Logos */}
      {showFooter && (
        <div
          className="absolute bottom-0 left-0 right-0 py-6 px-4"
          style={{
            backgroundColor: "#00000069",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            {/* Brand Logos */}
            <div className="flex items-center space-x-8 mb-4 sm:mb-0">
              {footerLogos.map((logo, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {logo.brand}
                  </div>
                  <span className="text-white text-sm">
                    "{logo.quote}"
                  </span>
                </div>
              ))}
            </div>

            {/* View All Reviews Button */}
            <Link
              href={reviewsLink}
              className="inline-flex items-center justify-center font-semibold hover:scale-105"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                borderRadius: "2rem",
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View all Reviews
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
