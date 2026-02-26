'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ${
        isScrolled ? 'bg-[#1d606e] shadow-lg' : 'bg-[#1d606e]'
      }`}
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-5 lg:px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition">
              About
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition">
              Services
            </Link>
            <Link href="#" className="text-white hover:text-gray-200 transition">
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-white text-[#1d606e] px-6 py-2 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1d606e] border-t border-white/20">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 bg-white text-[#1d606e] text-center rounded-lg hover:bg-gray-100 transition mt-2 font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}