"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Giải pháp UI/UX toàn diện,\ntối ưu hóa trải nghiệm số",
    description: "Dịch vụ tư vấn và thiết kế UI/UX toàn diện, giúp xây dựng giao diện trực quan và trải nghiệm người dùng liền mạch cho sản phẩm của bạn.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Thiết kế & Phát triển website,\nứng dụng Web",
    description: "Phát triển website tùy chỉnh với thiết kế ấn tượng, hiệu suất tối ưu và tiêu chuẩn kỹ thuật cao - mang đến trải nghiệm người dùng vượt trội.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Dịch vụ thiết kế và phát triển\nApp đa nền tảng",
    description: "Biến ý tưởng thành ứng dụng di động hiệu suất cao (iOS & Android) với trải nghiệm mượt mà, ổn định và được xây dựng dựa trên nhu cầu thực tế của thị trường.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Tư vấn & Thúc đẩy chiến lược\nchuyển đổi số toàn diện",
    description: "LAZTAR đồng hành cùng doanh nghiệp trong việc xây dựng chiến lược, cung cấp tư vấn chuyên sâu và triển khai các giải pháp công nghệ phù hợp nhằm tối ưu vận hành.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy-dark)] uppercase tracking-tight">
            Dịch Vụ Của LAZTAR
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl md:rounded-3xl overflow-hidden hover:border-gray-300 transition-colors"
            >
              {/* Content Box */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--navy-dark)] mb-4 whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-8">
                  {service.description}
                </p>
                <div>
                  <a
                    href="https://laztar.com/vi/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--border)] bg-white text-[var(--navy-dark)] px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[var(--navy-dark)] hover:text-white hover:border-[var(--navy-dark)] transition-all"
                  >
                    Xem thêm
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Image Box */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-white p-4 md:p-8">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt="Service cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
