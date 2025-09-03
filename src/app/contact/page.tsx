"use client";

import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/Hero";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";
import CTA from "@/components/CTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="min-h-screen bg-black text-primary-200">
        {/* Hero Section */}
        <Hero
          backgroundImage="/images/hero-bg.png"
          title="Let's Talk About Your"
          titleAccent="Next Move"
          description="Need help exploring strategic, sell-side, or buy-side advisory? Let us know, and one of our advisors will be in touch promptly."
          buttons={[
            {
              text: "Explore Services",
              href: "/services",
              variant: "secondary",
              icon: true,
            },
            {
              text: "Get Started",
              href: "/contact",
              variant: "primary",
            },
          ]}
          textAlign="center"
        />

        {/* Contact Form and Info */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <AnimateOnScroll animation="fadeInLeft" delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-8">
                      Send us a Message
                    </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="strategic">Strategic Advisory</option>
                      <option value="sell-side">Sell-Side Advisory</option>
                      <option value="buy-side">Buy-Side Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                      placeholder="Tell us about your business needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary text-primary-900 font-semibold text-lg w-full flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button>
                </form>
                  </div>
                </AnimateOnScroll>

                {/* Contact Information */}
                <AnimateOnScroll animation="fadeInRight" delay={600}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-8">
                      Contact Information
                    </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@CYGPartners.com"
                        className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
                      >
                        info@CYGPartners.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+971563221025"
                        className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
                      >
                        +971 56 322 1025
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Office
                      </h3>
                      <p className="text-gray-300">Boulevard, Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-300">
                        Sunday - Thursday: 9:00 AM - 6:00 PM
                        <br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 border border-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Why Choose CYG Partners?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Tailored financial advisory solutions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Expert guidance from Dubai and Lebanon</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Proven track record in strategic growth</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Personalized approach to every client</span>
                    </li>
                  </ul>
                </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Our Offices Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <IndustryPerspectivesHeading
            title="Our"
            titleAccent="Offices"
            description="Get in touch with us at any of our offices. We're always ready to support your next step — wherever you are."
          />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <IndustryPerspectivesCarousel
            perspectives={[
              {
                imageSrc: "/images/slide.png",
                title: "Dubai, UAE",
                category1: "info@cygpartners.com",
                category2: "+971 50 358 2464",
                date: "Main Office",
                href: "https://maps.google.com/?q=Dubai+UAE",
              },
              {
                imageSrc: "/images/hero-bg.png",
                title: "Beirut, Lebanon",
                category1: "info@cygpartners.com",
                category2: "+961 1 234 567",
                date: "Regional Office",
                href: "https://maps.google.com/?q=Beirut+Lebanon",
              },
              {
                imageSrc: "/images/services.png",
                title: "Coming Soon",
                category1: "info@cygpartners.com",
                category2: "Global Reach",
                date: "Expanding Soon",
              },
            ]}
          />
        </AnimateOnScroll>

        {/* CTA Component */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <CTA
            title="Ready to Start"
            titleAccent="Your Journey"
            buttonText="Get Started Today"
            buttonHref="/contact"
            backgroundPattern="default"
          />
        </AnimateOnScroll>
      </main>
    </>
  );
}
