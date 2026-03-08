'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center pr-8 border-r border-cyan-500/30">
            <Link href="/" className="text-2xl font-bold text-cyan-400 font-jetbrains-mono neon-glow tracking-wider">
              Rastgele Araçlar
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono">ONLINE</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/random-number-generator" 
              className="px-4 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-cyan-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Rastgele Sayı Üreteci"
            >
              &gt; Sayı Üreteci
            </Link>
            <Link 
              href="/random-name-generator" 
              className="px-4 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-cyan-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Rastgele İsim Üreteci"
            >
              &gt; İsim Üreteci
            </Link>
            <Link 
              href="/random-password-generator" 
              className="px-4 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-cyan-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Rastgele Şifre Üreteci"
            >
              &gt; Şifre Üreteci
            </Link>
            <Link 
              href="/random-color-generator" 
              className="px-4 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-cyan-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Rastgele Renk Üreteci"
            >
              &gt; Renk Üreteci
            </Link>
            <Link 
              href="/random-picker" 
              className="px-4 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-cyan-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Rastgele Seçici"
            >
              &gt; Rastgele Seçici
            </Link>
            
            {/* Ayırıcı */}
            <div className="h-6 w-px bg-cyan-500/30 mx-2"></div>
            
            {/* Diğer Sayfalar */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-green-300 hover:text-white hover:bg-green-500/20 rounded-lg transition-all duration-300 font-mono text-sm border border-transparent hover:border-green-500/50 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-green-500/20 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Hakkımızda"
            >
              &gt; HAKKINDA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 space-y-2 backdrop-blur-lg bg-black/30 rounded-lg mt-2 px-4 border border-cyan-500/20"
            role="menu"
          >
            {/* Araçlar Kategorisi */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-cyan-400 font-mono text-xs font-semibold border-b border-cyan-500/30">
                &gt; ARAÇLAR
              </div>
              <Link 
                href="/random-number-generator" 
                className="block px-6 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; Sayı Üreteci
              </Link>
              <Link 
                href="/random-name-generator" 
                className="block px-6 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; İsim Üreteci
              </Link>
              <Link 
                href="/random-password-generator" 
                className="block px-6 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; Şifre Üreteci
              </Link>
              <Link 
                href="/random-color-generator" 
                className="block px-6 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; Renk Üreteci
              </Link>
              <Link 
                href="/random-picker" 
                className="block px-6 py-2 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-cyan-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; Rastgele Seçici
              </Link>
            </div>
            
            {/* Ayırıcı */}
            <div className="h-px bg-cyan-500/30 my-2"></div>
            
            {/* Diğer Sayfalar */}
            <div className="space-y-1">
              <Link 
                href="/about" 
                className="block px-4 py-2 text-green-300 hover:text-white hover:bg-green-500/20 rounded-lg transition-all duration-300 font-mono text-sm focus-visible focus:outline-none focus-visible:focus:ring-2 focus-visible:focus:ring-green-500/20 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                &gt; HAKKINDA
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
