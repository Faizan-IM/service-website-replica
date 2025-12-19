import React from 'react';
import Link from 'next/link';

export default function Header() {
  // Brand Colors defined as constants to ensure consistency without Tailwind
  const BRAND_RED = '#DC2626';
  const BRAND_DARK = '#111827';

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* 1. LOGO AREA (Force Styled) */}
        <Link href="/" className="flex items-center gap-2 group decoration-transparent">
          {/* Icon Circle */}
          <div 
            className="w-10 h-10 flex items-center justify-center text-white font-bold text-xl shadow-md"
            style={{ 
              backgroundColor: BRAND_RED, 
              borderRadius: '50%' // Forces perfect circle
            }}
          >
            S
          </div>
          {/* Text Logo */}
          <span 
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: BRAND_DARK }}
          >
            Service<span style={{ color: BRAND_RED }}>Pro</span>
          </span>
        </Link>

        {/* 2. NAVIGATION (Includes ABOUT Link) */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
          <Link 
            href="/about" 
            className="transition hover:opacity-75"
            style={{ color: BRAND_DARK }}
          >
            ABOUT US
          </Link>
          <Link 
            href="/repair" 
            className="transition hover:opacity-75"
            style={{ color: BRAND_DARK }}
          >
            REPAIRS
          </Link>
          <Link 
            href="/locations" 
            className="transition hover:opacity-75"
            style={{ color: BRAND_DARK }}
          >
            LOCATIONS
          </Link>
        </nav>

        {/* 3. CTA BUTTONS */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:1-800-665-2127" 
            className="hidden lg:block font-bold hover:opacity-75 transition"
            style={{ color: BRAND_DARK }}
          >
            (800) 665-2127
          </a>
          
          <Link href="/">
            <button 
              className="px-6 py-2.5 font-bold text-sm shadow-lg hover:opacity-90 transition transform hover:scale-105"
              style={{ 
                backgroundColor: BRAND_RED, 
                color: 'white', 
                borderRadius: '50px', // Forces pill shape
                border: 'none'
              }}
            >
              Book Online
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}


