import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Contact */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
              <span className="text-black font-bold text-2xl">CYG</span>
            </div>
            <div className="text-white font-semibold text-center">
              <div className="text-2xl leading-tight">CYG</div>
              <div className="text-sm text-gray-400 leading-tight">PARTNERS</div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a 
                href="mailto:info@CYGPartners.com" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                info@CYGPartners.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+971563221025" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                +971 56 322 1025
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                Boulevard, Dubai, UAE
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/strategic" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Strategic Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/services/sell-side" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Sell-Side Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/services/buy-side" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Buy-Side Advisory
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/insights" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright 2025 CYG Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
