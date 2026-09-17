"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Statement */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              Mở khóa tiềm năng tối đa cho doanh nghiệp trong kỷ nguyên số.
            </h2>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              LAZTAR không chỉ xây dựng phần mềm chất lượng cao. Chúng tôi kiến tạo nền tảng công nghệ bền vững, chuẩn hóa hạ tầng số để doanh nghiệp phát triển vượt bậc và dẫn đầu thị trường.
            </p>

            <div className="pt-4">
              <a
                href="https://laztar.com/vi/contact#contact-form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-primary)] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all bg-[var(--bg-base)]"
              >
                Bắt đầu dự án
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent)]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
