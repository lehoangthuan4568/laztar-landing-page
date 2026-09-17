"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] flex items-center bg-[var(--navy-dark)]">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-28 relative z-10 py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-widest uppercase mb-12"
          >
            Giải pháp số &amp; Công nghệ
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[80px] md:leading-[1.1] font-bold text-white mb-8 tracking-tight"
          >
            Dẫn đầu thời đại.<br />
            Công nghệ quyết định tốc độ.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            LAZTAR xây dựng các giải pháp đột phá giúp doanh nghiệp bứt tốc, tối ưu hóa tiềm năng và dẫn đầu thị trường trong kỷ nguyên số.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="https://laztar.com/vi/contact#contact-form"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-[var(--navy-dark)] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors"
            >
              Liên hệ ngay
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
