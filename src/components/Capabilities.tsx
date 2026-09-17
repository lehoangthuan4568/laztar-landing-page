"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Cpu, Users } from "lucide-react";

const stats = [
  { value: "10+", label: "Năm kinh nghiệm thực chiến công nghệ" },
  { value: "30+", label: "Kỹ sư và chuyên gia công nghệ cao" },
  { value: "100%", label: "Dự án bàn giao chuẩn mốc tiến độ" },
  { value: "30%", label: "Kỹ sư top đầu từ đại học danh tiếng" },
];

export default function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header: Headline only, vertical stack */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Năng lực cốt lõi
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Hạ tầng kỹ thuật vững chắc kết hợp cùng tư duy kiến trúc hiện đại giúp xây dựng giải pháp tối ưu.
          </p>
        </div>

        {/* Bento Grid: 3 Cells (1 Large + 2 Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          
          {/* Bento Cell 1: Large Tile with Bespoke Visual Asset (7 cols) */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between"
          >
            <div className="p-8 md:p-10 z-10 relative">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Hệ thống bền vững
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-[45ch] leading-relaxed">
                Hạ tầng ổn định, tính mở rộng linh hoạt, bảo mật cao và được thiết kế chuyên biệt cho tăng trưởng dài hạn.
              </p>
            </div>

            {/* Visual Image container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/system-visual.jpg"
                alt="LAZTAR High-Performance Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Bento Column 2: 2 Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bento Cell 2: Quy trình minh bạch */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 rounded-2xl p-8 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-colors flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] mb-6">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                Quy trình minh bạch
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Mỗi mốc bàn giao đều tuân theo chuẩn quản trị chuyên nghiệp, kiểm soát chất lượng nghiêm ngặt và đảm bảo đúng tiến độ cam kết.
              </p>
            </motion.div>

            {/* Bento Cell 3: Đội ngũ chuyên gia */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 rounded-2xl p-8 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-colors flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                Đội ngũ chuyên môn cao
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tập thể kỹ sư giàu kinh nghiệm thực tiễn, làm chủ các công nghệ tiên tiến nhất để hiện thực hóa mọi yêu cầu kỹ thuật phức tạp.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Key Metrics Section */}
        <div className="border-t border-[var(--border-subtle)] pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col"
              >
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-normal">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
