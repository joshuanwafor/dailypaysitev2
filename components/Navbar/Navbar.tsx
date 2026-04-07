'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/layouts/AnimatedSection';
import { scaleIn } from '@/utils/animations';
import { cn } from '@/utils/utils';

export default function Navbar({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'absolute top-0 left-0 right-0 z-50 md:max-w-[80vw] max-w-7xl mx-auto',
        className
      )}
    >
      <AnimatedSection
        variants={scaleIn}
        delay={0.1}
        className="w-full px-4 sm:px-6 lg:px-0 pt-5 pb-2 relative z-50"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-black/8 px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo-brand.png"
              alt="DailyPay"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/about"
              className="text-[#1F1F1F] font-onest font-medium text-base leading-[155%] hover:text-[#0F8C99] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#how-it-works"
              className="text-[#1F1F1F] font-onest font-medium text-base leading-[155%] hover:text-[#0F8C99] transition-colors"
            >
              How it works
            </Link>

            <Link
              href="https://medium.com/@daudatemidayo25/introducing-dailypay-founders-perspective-c94670f5c45e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1F1F] font-onest font-medium text-base leading-[155%] hover:text-[#0F8C99] transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Download Button */}
          <div className="hidden md:flex">
            <Link
              href="https://www.alerts.africa/download-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#191919] text-white font-onest font-medium text-base px-6 py-3 rounded-full hover:bg-[#333] transition-colors whitespace-nowrap w-38.75 flex justify-center h-12.5"
            >
              Download
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1F1F1F] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1F1F1F] transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1F1F1F] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-[20px] border border-black/8 px-6 py-4 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-[#1F1F1F] font-onest font-medium text-base hover:text-[#0F8C99] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#how-it-works"
              className="text-[#1F1F1F] font-onest font-medium text-base hover:text-[#0F8C99] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="https://medium.com/@daudatemidayo25/introducing-dailypay-founders-perspective-c94670f5c45e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1F1F] font-onest font-medium text-base hover:text-[#0F8C99] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="https://www.alerts.africa/download-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#191919] text-white font-onest font-medium text-base px-6 py-3 rounded-full text-center hover:bg-[#333] transition-colors "
              onClick={() => setMenuOpen(false)}
            >
              Download
            </Link>
          </div>
        )}
      </AnimatedSection>
    </nav>
  );
}
