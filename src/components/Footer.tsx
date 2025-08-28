import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-footer border-t border-gray-700"
      style={{ position: "relative", height: "80vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Contact */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="/images/cyg-logo.png"
              alt="CYG Partners"
              className="object-contain"
              style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -10%)",
              }}
            />
          </div>

          {/* Contact Information */}
          <div
            className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            style={{
              position: "absolute",
              bottom: "25%",
              left: "50%",
              transform: "translate(-50%, -10%)",
            }}
          >
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@CYGPartners.com"
                className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
              >
                info@CYGPartners.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a
                href="tel:+971563221025"
                className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
              >
                +971 56 322 1025
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">Boulevard, Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -10%)",
          }}
        >
          <p className="text-white text-sm">
            © Copyright 2025 CYG Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
