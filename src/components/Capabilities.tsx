"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Quy trình rõ ràng",
    description: "Mỗi dự án đều tuân theo kế hoạch và timeline rõ ràng, đảm bảo khả năng kiểm soát toàn diện.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
  },
  {
    title: "Hệ thống bền vững",
    description: "Hệ thống ổn định, linh hoạt, được xây dựng để phát triển dài hạn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Đội ngũ chuyên nghiệp",
    description: "Chuyên môn sâu, tập trung vào việc giải quyết tận gốc vấn đề với kết quả đáng tin cậy.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

const stats = [
  { value: "10+", label: "Nhiều năm kinh nghiệm thực tiễn" },
  { value: "30+", label: "Đội ngũ chuyên gia công nghệ tận tâm" },
  { value: "100%", label: "Hoàn thành nhiều dự án thành công" },
  { value: "30%", label: "Kỹ sư hàng đầu tốt nghiệp từ trường đại học danh tiếng" },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy-dark)] uppercase tracking-tight">
            Năng Lực Cốt Lõi
          </h2>
        </motion.div>

        {/* Capability Cards - Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">
                {cap.title}
              </h3>
              <p className="text-[var(--text-secondary)] font-medium leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy-dark)] uppercase tracking-tight">
            Những Con Số Biết Nói
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-transparent md:divide-[var(--border)]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl font-bold text-[var(--navy-dark)] mb-4">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
