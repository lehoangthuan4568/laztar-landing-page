"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Về chúng tôi", href: "#about" },
  { name: "Năng lực", href: "#capabilities" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Phương pháp", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="LAZTAR Logo" 
            className="h-8 md:h-10 transition-all duration-300"
          />
        </a>

        {/* Right side: nav + language + hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-[var(--text-body)] hover:text-[var(--navy)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Language badge */}
          <div className={`hidden md:flex items-center gap-1.5 text-sm font-semibold ${
            scrolled ? "text-[var(--navy)]" : "text-white/70"
          }`}>
            <span className="text-xs">🇻🇳</span> VI
          </div>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  scrolled ? "bg-[var(--navy)]" : "bg-white"
                } ${
                  mobileOpen && i === 0 ? "rotate-45 translate-y-[6.5px]" : ""
                } ${
                  mobileOpen && i === 1 ? "opacity-0" : ""
                } ${
                  mobileOpen && i === 2 ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile/Slide menu */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          mobileOpen
            ? "max-h-[400px] bg-white shadow-[var(--card-shadow)]"
            : "max-h-0"
        }`}
      >
        <div className="px-6 lg:px-28 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[var(--navy)] font-bold text-lg hover:text-[var(--blue-accent)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://laztar.com/vi/contact#contact-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[var(--navy)] text-white font-bold uppercase tracking-wider text-sm w-fit mt-2"
          >
            Liên hệ ngay
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[var(--navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
