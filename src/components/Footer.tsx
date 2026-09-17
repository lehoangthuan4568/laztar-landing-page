"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Globe, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--navy-dark)] text-white pt-24 pb-12 mt-12 rounded-t-[40px] md:rounded-t-[80px] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[var(--blue-accent)] mix-blend-screen opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
        
        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h3
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sẵn sàng bứt phá?
          </h3>
          <p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto font-medium">
            Biến ý tưởng thành hiện thực với giải pháp công nghệ dẫn đầu. Liên hệ ngay để nhận tư vấn chuyên sâu.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://laztar.com/vi/contact#contact-form"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--blue-accent)] to-[#3D5AFE] text-white font-bold uppercase tracking-wider text-sm shadow-[0_4px_30px_rgba(127,154,255,0.3)] hover:shadow-[0_4px_40px_rgba(127,154,255,0.5)] transition-all duration-300"
          >
            Gửi yêu cầu
            <span className="w-10 h-10 rounded-full bg-white text-[var(--navy)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/images/logo.png" 
              alt="LAZTAR Logo" 
              className="h-10 mb-6 object-contain"
            />
            <p className="text-[#9CA3AF] max-w-sm leading-relaxed font-medium text-sm mb-8">
              CÔNG TY TNHH LAZTAR<br />
              Đồng hành cùng doanh nghiệp kiến tạo tương lai số thông qua giải pháp công nghệ đột phá và dịch vụ xuất sắc.
            </p>
            
            <div className="flex gap-4">
              {[
                { 
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, 
                  href: "https://facebook.com/laztar.tech" 
                },
                { 
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, 
                  href: "https://linkedin.com/company/laztar" 
                },
                { 
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>, 
                  href: "https://tiktok.com/@laztar" 
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--blue-accent)] hover:border-transparent hover:shadow-[0_0_20px_rgba(127,154,255,0.4)] transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-white/50">Khám Phá</h4>
            <ul className="space-y-4 text-white/80 text-sm font-medium">
              <li><a href="#about" className="hover:text-[var(--blue-accent)] transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--blue-accent)] hover:after:w-full after:transition-all">Về LAZTAR</a></li>
              <li><a href="#capabilities" className="hover:text-[var(--blue-accent)] transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--blue-accent)] hover:after:w-full after:transition-all">Năng lực cốt lõi</a></li>
              <li><a href="#services" className="hover:text-[var(--blue-accent)] transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--blue-accent)] hover:after:w-full after:transition-all">Dịch vụ</a></li>
              <li><a href="#process" className="hover:text-[var(--blue-accent)] transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--blue-accent)] hover:after:w-full after:transition-all">Phương pháp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-white/50">Liên Hệ</h4>
            <ul className="space-y-5 text-white/80 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--blue-accent)] shrink-0" />
                <span>86/11 Ngô Chí Quốc, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--blue-accent)] shrink-0" />
                <a href="tel:+84866867027" className="hover:text-white transition-colors">+84 866 867 027</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--blue-accent)] shrink-0" />
                <a href="mailto:contact@laztar.com" className="hover:text-white transition-colors">contact@laztar.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[var(--blue-accent)] shrink-0" />
                <a href="https://laztar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">laztar.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p className="font-medium">© {new Date().getFullYear()} LAZTAR CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
