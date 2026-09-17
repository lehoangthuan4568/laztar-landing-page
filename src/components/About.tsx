"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 justify-between max-w-6xl mx-auto">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--navy-dark)] mb-2 tracking-tight">
              LAZTAR mở khóa
            </h2>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#94A3B8] to-[#CBD5E1] tracking-tight">
              Tiềm năng tối đa
            </p>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-start gap-8"
          >
            <p className="text-lg md:text-xl font-bold text-[var(--navy-dark)] leading-relaxed border-l-4 border-[var(--navy-dark)] pl-6 py-2">
              LAZTAR không chỉ mang đến công nghệ tuyệt vời cho doanh nghiệp của bạn. LAZTAR còn đảm bảo bước đột phá bền vững giúp bạn tối đa hóa tiềm năng tăng trưởng và dẫn đầu thị trường.
            </p>
            
            <a
              href="https://laztar.com/vi/contact#contact-form"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--navy-dark)] px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs hover:border-[var(--navy-dark)] transition-colors"
            >
              Bắt đầu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
