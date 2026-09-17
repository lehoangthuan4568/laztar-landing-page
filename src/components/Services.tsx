"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Layout, Globe, Smartphone, Sparkles, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    id: "uiux",
    title: "Giải pháp UI/UX toàn diện",
    subtitle: "Tối ưu hóa trải nghiệm số",
    description: "Tư vấn và kiến tạo hệ thống Design System chuyên nghiệp, tối ưu hành trình người dùng và nâng tầm định vị thương hiệu trên mọi thiết bị.",
    icon: <Layout className="w-5 h-5" />,
    features: [
      "Kiến trúc thông tin và phân luồng người dùng",
      "Xây dựng Design System đồng bộ và mở rộng",
      "Kiểm thử trải nghiệm và chuẩn hóa Accessibility",
    ],
    link: "https://laztar.com/vi/services",
  },
  {
    id: "web",
    title: "Phát triển Website và Web App",
    subtitle: "Hiệu năng cao và chuẩn SEO",
    description: "Xây dựng ứng dụng web hiện đại với kiến trúc Server Components, tốc độ tải trang vượt trội, bảo mật chặt chẽ và trải nghiệm mượt mà.",
    icon: <Globe className="w-5 h-5" />,
    features: [
      "Kiến trúc Next.js và React hiện đại",
      "Tối ưu Core Web Vitals và SEO kỹ thuật số",
      "Tích hợp API và hệ thống cơ sở dữ liệu quy mô lớn",
    ],
    link: "https://laztar.com/vi/services",
  },
  {
    id: "mobile",
    title: "Phát triển App đa nền tảng",
    subtitle: "iOS và Android mượt mà",
    description: "Hiện thực hóa ý tưởng thành ứng dụng di động hiệu năng cao với giao diện trực quan, phản hồi thời gian thực và độ ổn định cao.",
    icon: <Smartphone className="w-5 h-5" />,
    features: [
      "Ứng dụng gốc (Native) và giải pháp đa nền tảng",
      "Đồng bộ dữ liệu thời gian thực và xử lý ngoại tuyến",
      "Quản lý vòng đời phát hành ứng dụng lên App Store / Google Play",
    ],
    link: "https://laztar.com/vi/services",
  },
  {
    id: "consulting",
    title: "Tư vấn chuyển đổi số",
    subtitle: "Chiến lược công nghệ toàn diện",
    description: "Đồng hành cùng ban lãnh đạo doanh nghiệp định hình lộ trình số hóa, tái cấu trúc hệ thống công nghệ và tối ưu hóa chi phí vận hành.",
    icon: <Sparkles className="w-5 h-5" />,
    features: [
      "Đánh giá và kiểm toán kiến trúc hạ tầng phần mềm",
      "Lập bản đồ lộ trình công nghệ dài hạn cho doanh nghiệp",
      "Tối ưu quy trình vận hành kỹ thuật số",
    ],
    link: "https://laztar.com/vi/services",
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeId) || services[0];
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header: Headline only, vertical stack */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Dịch vụ chuyên biệt
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Các khối giải pháp công nghệ toàn diện được tùy biến theo nhu cầu đặc thù của từng doanh nghiệp.
          </p>
        </div>

        {/* Interactive Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-[var(--bg-elevated)] border-[var(--border-accent)] shadow-lg shadow-black/20"
                      : "bg-transparent border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)]/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--bg-base)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <div
                        className={`text-base font-semibold transition-colors ${
                          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {service.title}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[var(--accent)] scale-100" : "bg-transparent scale-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Service Active Detail Panel (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-base)] p-8 sm:p-10 flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-4">
                    <span>{activeService.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
                    {activeService.title}
                  </h3>

                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  <div className="border-t border-[var(--border-subtle)] pt-6 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                      Tiêu chuẩn thực thi
                    </div>
                    <ul className="space-y-3">
                      {activeService.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href={activeService.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-base)] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all active:scale-[0.98]"
                  >
                    Xem chi tiết dịch vụ
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
