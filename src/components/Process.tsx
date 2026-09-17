"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Khám phá và phân tích",
    description: "Nghiên cứu mô hình vận hành, lắng nghe yêu cầu và xác định chính xác mục tiêu kinh doanh.",
    icon: <Search className="w-5 h-5" />,
    number: "01",
  },
  {
    title: "Kiến trúc và thiết kế",
    description: "Xây dựng bản vẽ kỹ thuật, thiết kế trải nghiệm người dùng và lập kế hoạch công nghệ tối ưu.",
    icon: <Compass className="w-5 h-5" />,
    number: "02",
  },
  {
    title: "Triển khai và kiểm thử",
    description: "Lập trình chuẩn mực, kiểm tra tính tương thích và kiểm toán bảo mật toàn diện trên từng module.",
    icon: <Rocket className="w-5 h-5" />,
    number: "03",
  },
  {
    title: "Vận hành và tăng trưởng",
    description: "Bàn giao hệ thống, đào tạo đội ngũ và đồng hành hỗ trợ kỹ thuật để duy trì tốc độ phát triển ổn định.",
    icon: <ShieldCheck className="w-5 h-5" />,
    number: "04",
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header: Headline only, vertical stack */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Phương pháp triển khai
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Quy trình 4 bước tiêu chuẩn hóa đảm bảo tính chính xác, minh bạch và hiệu quả cao nhất cho từng dự án.
          </p>
        </div>

        {/* 4-Column Linear Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[var(--text-muted)] tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full h-0.5 bg-[var(--border-subtle)] mt-8 group-hover:bg-[var(--accent)] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
