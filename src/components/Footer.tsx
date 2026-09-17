"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer id="contact" className="bg-[var(--bg-surface)] text-[var(--text-primary)] pt-24 pb-12 border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Pre-Footer Call to Action */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-base)] p-8 sm:p-12 md:p-16 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
              Sẵn sàng bứt phá công nghệ?
            </h3>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Đồng hành cùng LAZTAR để hiện thực hóa các giải pháp số đột phá và tối ưu hóa vận hành cho doanh nghiệp.
            </p>
          </div>

          <a
            href="https://laztar.com/vi/contact#contact-form"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[var(--accent)] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent-glow)] active:scale-[0.98] shrink-0"
          >
            Liên hệ tư vấn
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company identity (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="LAZTAR Logo"
              className="h-8 mb-6 object-contain"
            />
            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed mb-6">
              CÔNG TY TNHH LAZTAR<br />
              Đồng hành cùng doanh nghiệp kiến tạo tương lai số thông qua các giải pháp công nghệ dẫn đầu và dịch vụ chuyên nghiệp.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com/laztar.tech",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/company/laztar",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "TikTok",
                  href: "https://tiktok.com/@laztar",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] transition-colors"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
              Khám phá
            </div>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
                  Về LAZTAR
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[var(--text-primary)] transition-colors">
                  Năng lực cốt lõi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">
                  Dịch vụ chuyên biệt
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[var(--text-primary)] transition-colors">
                  Phương pháp triển khai
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
              Thông tin liên hệ
            </div>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>Số 170 Đường Bùi Xương Trạch, Phường Khương Đình, Quận Thanh Xuân, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a href="tel:0966458999" className="hover:text-[var(--text-primary)] transition-colors">
                  0966 458 999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a href="mailto:contact@laztar.com" className="hover:text-[var(--text-primary)] transition-colors">
                  contact@laztar.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a href="https://laztar.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                  laztar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            Copyright &copy; {new Date().getFullYear()} LAZTAR. Mọi quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://laztar.com/vi/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-secondary)] transition-colors">
              Chính sách bảo mật
            </a>
            <a href="https://laztar.com/vi/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-secondary)] transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
