import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Link from "next/link";
import router from "next/router";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/90 backdrop-blur-md border-b border-cream-300"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="#hero"
          className="font-serif text-2xl font-semibold text-slate-primary tracking-tight animate-slide-up"
        >
          MP
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium text-slate-secondary hover:text-slate-primary transition-colors duration-200 animate-slide-up delay-${i + 1}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/MarmikResume.pdf"
            download="MarmikResume.pdf"
            className="text-sm font-medium px-5 py-2.5 rounded-full border border-slate-primary text-slate-primary hover:bg-slate-primary hover:text-cream-50 transition-all duration-200 animate-slide-up delay-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 animate-slide-up"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-slate-primary transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-slate-primary transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[1.5px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-cream-100 flex flex-col items-center justify-center z-50">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-6 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Close menu"
            >
              <span className="block w-5 h-[1.5px] bg-slate-primary rotate-45 translate-y-[1.5px]" />
              <span className="block w-5 h-[1.5px] bg-slate-primary -rotate-45 -translate-y-[1.5px]" />
            </button>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="py-4 text-2xl font-serif font-medium text-slate-primary cursor-pointer hover:text-accent transition-colors"
                onClick={() => {
                  toggleMobileMenu();
                  router.push(link.href);
                }}
              >
                {link.label}
              </div>
            ))}
            <a
              href="/MarmikResume.pdf"
              download="MarmikResume.pdf"
              className="mt-6 text-lg font-medium px-8 py-3 rounded-full border border-slate-primary text-slate-primary hover:bg-slate-primary hover:text-cream-50 transition-all duration-200"
              onClick={toggleMobileMenu}
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
