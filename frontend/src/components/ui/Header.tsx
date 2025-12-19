'use client'; // Required for useState

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">
            S
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Service<span className="text-red-600">Pro</span>
          </span>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-gray-700 hover:text-red-600 uppercase tracking-wide transition-colors">
            Home
          </Link>
          <Link href="/locations" className="text-sm font-bold text-gray-700 hover:text-red-600 uppercase tracking-wide transition-colors">
            Locations
          </Link>
          <Link href="/contact" className="text-sm font-bold text-gray-700 hover:text-red-600 uppercase tracking-wide transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* --- RIGHT SIDE ACTIONS --- */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Phone Number (Hidden on mobile) */}
          <a href="tel:8006652127" className="hidden lg:block font-bold text-gray-900 hover:text-red-600 transition-colors">
            (800) 665-2127
          </a>
          
          {/* CTA Button */}
          <Link 
            href="/schedule" 
            className="hidden sm:inline-block bg-red-600 text-white px-6 py-2.5 rounded font-bold hover:bg-red-700 transition-all shadow-md shadow-red-900/10"
          >
            Book Online
          </Link>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 top-20 shadow-lg animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-lg font-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/locations" 
              className="text-lg font-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link 
              href="/contact" 
              className="text-lg font-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            {/* Mobile-only CTA actions */}
            <hr className="border-gray-100" />
            <a href="tel:8006652127" className="text-lg font-bold text-gray-900">
              Call: (800) 665-2127
            </a>
            <Link 
              href="/schedule" 
              className="bg-red-600 text-white text-center py-3 rounded font-bold hover:bg-red-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}