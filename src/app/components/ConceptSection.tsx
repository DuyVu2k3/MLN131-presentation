import { motion } from "motion/react";
import { CultureGallery } from "./CultureGallery";

export function ConceptSection() {
  const concepts = [
    {
      type: "Nghĩa hẹp (Tộc người - Ethnie)",
      definition: "Để chỉ một cộng đồng có chung nguồn gốc, ngôn ngữ và văn hóa.",
      keepImageFull: true,
      points: [
        "Đặc điểm: Hình thành sớm, dựa trên huyết thống và tập quán.",
        "Ví dụ: Việt Nam có 54 dân tộc. Ở đây, 'dân tộc' là để chỉ người Thái, người Mường, người Ê-đê..."
      ],
      image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/07/29/ten-va-hinh-anh54-dan-toc.jpg"
    },
    {
      type: "Nghĩa rộng (Quốc gia dân tộc - Nation)",
      definition: "Đây là khái niệm chính trị - pháp lý.",
      keepImageFull: true,
      points: [
        "Đặc điểm: Phải có 5 yếu tố: Lãnh thổ chung, Kinh tế chung, Ngôn ngữ chung, Văn hóa chung và đặc biệt là Nhà nước chung.",
        "Ví dụ: Dân tộc Việt Nam bao gồm tất cả 54 tộc người cùng sống dưới Hiến pháp Việt Nam."
      ],
      image: "https://buulong.com.vn/wp-content/uploads/2026/03/hinh-ve-dat-nuoc-viet-nam-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">📖</span>
            <span>Phần 1</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Phân định Dân tộc - Không chỉ là tên gọi
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            "Đầu tiên, chúng ta cần phân biệt rõ 'Dân tộc' để tránh râu ông nọ chắp cằm bà kia:"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {concepts.map((concept, index) => {
            return (
              <motion.div
                key={concept.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-72 md:h-80 overflow-hidden bg-black/20">
                    <img
                      src={concept.image}
                      alt={concept.type}
                      className={`w-full h-full transition-transform duration-500 ${concept.keepImageFull ? "object-contain p-2" : "object-cover group-hover:scale-110"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{concept.type}</h3>
                    <p className="text-white/80 mb-6">{concept.definition}</p>
                    
                    <div className="space-y-3">
                      {concept.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="text-sm text-white/70">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why distinguish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-yellow-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            Tại sao phải phân biệt?
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            Để chúng ta hiểu rằng: <span className="text-yellow-400 font-semibold">Bảo vệ lợi ích dân tộc (nghĩa rộng)</span> là bảo vệ toàn bộ cộng đồng, không thiên vị bất cứ <span className="text-yellow-400 font-semibold">tộc người (nghĩa hẹp)</span> nào.
          </p>
        </motion.div>

        {/* Culture Gallery */}
        <CultureGallery />
      </div>
    </div>
  );
}
