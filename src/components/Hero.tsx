"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const transitionConfig = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden bg-[var(--bg-base)]">
      {/* Subtle structural grid lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]">
        <div className="w-full h-full border-t border-[var(--border-subtle)] [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols on Desktop */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            {/* 1. Eyebrow (1 of max 2 for whole page) */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionConfig}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent)] text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Giải pháp số và công nghệ
            </motion.div>

            {/* 2. Headline: strictly ≤ 2 lines desktop */}
            <motion.h1
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: reduceMotion ? 0 : 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6"
            >
              Dẫn đầu thời đại.<br />
              Công nghệ quyết định tốc độ.
            </motion.h1>

            {/* 3. Subtext: strictly ≤ 20 words */}
            <motion.p
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: reduceMotion ? 0 : 0.16 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-[54ch]"
            >
              LAZTAR xây dựng các giải pháp số đột phá giúp doanh nghiệp bứt tốc, tối ưu hóa quy trình và khẳng định vị thế.
            </motion.p>

            {/* 4. CTAs: Primary + Secondary */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: reduceMotion ? 0 : 0.24 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://laztar.com/vi/contact#contact-form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[var(--accent)] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent-glow)] active:scale-[0.98]"
              >
                Liên hệ ngay
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.98]"
              >
                Khám phá dịch vụ
              </a>
            </motion.div>
          </div>

          {/* Right Column: 5 Cols on Desktop - Bespoke 3D Glass & Titanium Sculpture Asset */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitionConfig, delay: reduceMotion ? 0 : 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl shadow-black/40 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-visual.jpg"
                alt="LAZTAR 3D Digital Architecture Sculpture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
