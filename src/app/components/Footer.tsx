import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🇻🇳 Dân Tộc Việt
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Website thuyết trình về bản sắc dân tộc Việt Nam, dựa trên lý luận Triết học Mác-Lênin. 
              Tạo ra nhằm mục đích giáo dục và nghiên cứu.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">📖</span>
              Nội dung
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#concept" className="text-white/70 hover:text-white transition-colors">
                  • Phân định Dân tộc
                </a>
              </li>
              <li>
                <a href="#principles" className="text-white/70 hover:text-white transition-colors">
                  • Cương lĩnh Mác-Lênin
                </a>
              </li>
              <li>
                <a href="#psychology" className="text-white/70 hover:text-white transition-colors">
                  • Tâm lý người Việt
                </a>
              </li>
              <li>
                <a href="#conclusion" className="text-white/70 hover:text-white transition-colors">
                  • Kết luận
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Thông tin</h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/70">
                <span className="font-semibold text-white">Môn học:</span> Triết học Mác-Lênin
              </p>
              <p className="text-white/70">
                <span className="font-semibold text-white">Chủ đề:</span> Dân tộc & Bản sắc Việt
              </p>
              <p className="text-white/70">
                <span className="font-semibold text-white">Công nghệ:</span> React + TypeScript + Tailwind CSS
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>© {currentYear} Made with</span>
              <span className="text-xl animate-pulse">❤️</span>
              <span>for Vietnamese education</span>
            </div>

          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-4 rounded-full">
            <div className="text-2xl">🌟</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}