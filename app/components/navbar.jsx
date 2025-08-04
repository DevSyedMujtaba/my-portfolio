"use client";

// @flow strict
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        {/* Logo/Name - Centered on mobile, left on desktop */}
        <div className="flex flex-shrink-0 items-center md:flex-1">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl md:text-3xl font-bold text-center md:text-left w-full md:w-auto">
            MUJTABA BUKHARI
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        {isMounted && (
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-600 focus:outline-none focus:text-pink-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMounted && (
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 py-4 border-t border-gray-700">
            <li>
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#education"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href="/#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;