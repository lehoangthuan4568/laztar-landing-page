"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    title: "KHÁM PHÁ",
    description: "Lắng nghe và khám phá ý tưởng để định hình dự án.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "THIẾT KẾ",
    description: "Phân tích yêu cầu để thiết kế sản phẩm.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "TRIỂN KHAI",
    description: "Trình bày giải pháp tối ưu.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "PHÁT TRIỂN",
    description: "Nâng cấp và hỗ trợ dự án để phát triển bền vững.",
    icon: <HeadphonesIcon className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy-dark)] uppercase tracking-tight">
            Phương Pháp Của LAZTAR
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--border)] -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 border border-[var(--border)] relative group hover:border-[var(--blue-accent)] transition-colors shadow-sm"
              >
                <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Icon positioned at the bottom right */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--navy-dark)] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
