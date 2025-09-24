'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

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
  showScrollDown?: boolean
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
  reviewsLink = '/clients#team-carousel',
  showScrollDown = false
}: HeroProps) {
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [displayedAccent, setDisplayedAccent] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let titleIndex = 0
    let accentIndex = 0
    let titleTimeout: NodeJS.Timeout
    let accentTimeout: NodeJS.Timeout

    // Start typing the main title
    const typeTitle = () => {
      if (titleIndex < title.length) {
        setDisplayedTitle(title.slice(0, titleIndex + 1))
        titleIndex++
        titleTimeout = setTimeout(typeTitle, 100) // Adjust speed here
      } else {
        // Start typing the accent after a short delay
        setTimeout(() => {
          const typeAccent = () => {
            if (titleAccent && accentIndex < titleAccent.length) {
              setDisplayedAccent(titleAccent.slice(0, accentIndex + 1))
              accentIndex++
              accentTimeout = setTimeout(typeAccent, 100) // Adjust speed here
            } else {
              setIsTypingComplete(true)
            }
          }
          typeAccent()
        }, 300)
      }
    }

    typeTitle()

    // Cleanup timeouts
    return () => {
      clearTimeout(titleTimeout)
      clearTimeout(accentTimeout)
    }
  }, [title, titleAccent])
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
            <span>{displayedTitle}</span>
            {titleAccent && (
              <span className="hero-headline-accent"> {displayedAccent}</span>
            )}
            <span className="inline-block w-0.5 h-8 bg-white ml-1 animate-pulse">
              {!isTypingComplete && '|'}
            </span>
          </h1>
          <p className={`hero-description mb-6 sm:mb-8 transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            {description}
          </p>

          {/* CTA Buttons */}
          {buttons && buttons.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${getButtonAlignment()} items-start transition-opacity duration-1000 delay-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* Scroll Down Indicator */}
      {showScrollDown && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-white text-sm font-medium">Scroll Down</span>
            <div className="flex flex-col items-center space-y-1">
              <svg 
                className="w-6 h-6 text-white animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section with Brand Logos */}
      {showFooter && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[10vh] px-4"
          style={{
            backgroundColor: "#00000069",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="mx-auto flex flex-col h-full sm:flex-row justify-between items-center">
            {/* Brand Logos - Infinite Scrolling */}
            <div className="flex-1 mb-4 sm:mb-0 overflow-hidden">
              <div className="flex items-center space-x-8 animate-scroll">
                {/* First set of logos */}
                {footerLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
                    <div
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      {logo.brand}
                    </div>
                    <span className="text-white text-sm">
                      &ldquo;{logo.quote}&rdquo;
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {footerLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
                    <div
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    >
                      {logo.brand}
                    </div>
                    <span className="text-white text-sm">
                      &ldquo;{logo.quote}&rdquo;
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Reviews Button */}
            <Link
              href={reviewsLink}
              className="h-full inline-flex items-center justify-center font-semibold hover:scale-105"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                borderLeft: "1px solid white",
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
