"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Về chúng tôi", href: "#about" },
  { name: "Năng lực", href: "#capabilities" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Phương pháp", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(6,9,19,0.85)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[68px]">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="LAZTAR Logo"
            className="h-8 md:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-full">
            VN
          </span>
          <a
            href="https://laztar.com/vi/contact#contact-form"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-base)] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Liên hệ ngay
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transform transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transform transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://laztar.com/vi/contact#contact-form"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-base)] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider w-full mt-2"
          >
            Liên hệ ngay
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
