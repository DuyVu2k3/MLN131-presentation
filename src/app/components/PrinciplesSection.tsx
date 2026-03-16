import { motion } from "motion/react";

export function PrinciplesSection() {
  const principles = [
    {
      title: "Quyền bình đẳng dân tộc",
      color: "from-blue-500 to-cyan-500",
      description: "Dù anh là nước lớn hay nước nhỏ, dù giàu hay nghèo, anh đều có quyền ngang nhau trên bàn cờ quốc tế.",
      detail: "Không ai có quyền đi 'ban phát' dân chủ hay áp đặt văn hóa lên người khác.",
      image: "https://image.vovworld.vn/w500/Uploaded/vovworld/rykxqreyxq/2024_03_21/tsctamanh1_QYJT.jpg"
    },
    {
      title: "Quyền dân tộc tự quyết",
      color: "from-purple-500 to-pink-500",
      description: "Dân tộc đó tự quyết định chế độ chính trị, con đường phát triển.",
      detail: "Mác-Lênin ủng hộ quyền tự quyết nhưng kiên quyết phản đối việc lợi dụng nó để ly khai, chia rẽ vì mục đích cá nhân của các nhóm lợi ích.",
      image: "https://st.download.vn/data/image/2023/07/28/Quyen-binh-dang.jpg"
    },
    {
      title: "Liên hiệp công nhân các dân tộc",
      color: "from-red-500 to-orange-500",
      description: "Đây là linh hồn của cương lĩnh.",
      detail: "Sự đoàn kết của giai cấp công nhân là sức mạnh để xóa bỏ mọi rào cản sắc tộc, hướng tới một xã hội công bằng.",
      image: "https://file.thanhuyhanoi.vn/thanhuy/public/Uploads/TinTuc/2023/10/5/10032106/4ead40c0-fc19-4e99-9b9f-0a612bc576ee.jpg"
    }
  ];

  const trends = [
    {
      title: "Dân tộc hóa",
      emoji: "🏛️",
      description: "Lật đổ chủ nghĩa thực dân, giành độc lập, xây dựng nhà nước dân tộc.",
      example: "Ví dụ: Cách mạng Tháng Tám 1945 ở Việt Nam.",
      image: "https://lh6.googleusercontent.com/proxy/ERnyG921-meNEcQ7AZqkq8waeU71IOkM6l75NyRBVGKs2mZZxVu0nFQ7BQjF7dGxCZSDxyMmI-Go4K6U8AvJNeTDst8LQmZc9VV37I4g2kXB560c86M8vOBV0di-UpeCLvvxBdT7KnHeIqvJmcnF2FAlqra1ZkXXAxq5eyuoQN38iQd-aLCU"
    },
    {
      title: "Quốc tế hóa",
      emoji: "🌐",
      description: "Hợp tác quốc tế, hòa bình, phát triển chung, xóa bỏ rào cản biên giới.",
      example: "Ví dụ: Việt Nam tham gia hiệp định CPTPP.",
      image: "https://bcp.cdnchinhphu.vn/Uploaded/buithuhuong/2021_09_23/2657_20-hq0103.anh_bai_CPTPP.jpg"
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
            <span className="text-xl">⚖️</span>
            <span>Phần 2</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Cương lĩnh dân tộc của Chủ nghĩa Mác - Lênin
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Chủ nghĩa Mác - Lênin không nhìn dân tộc như một thực thể bất biến, mà là một sản phẩm của lịch sử
          </p>
        </motion.div>

        {/* Three Principles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Ba nguyên tắc bất hủ của Lênin</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                    {/* Image Header */}
                    <div className="relative h-56 md:h-60 overflow-hidden">
                      <img
                        src={principle.image}
                        alt={principle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                    </div>
                    
                    <div className="p-6">
                      <div className="text-lg font-bold mb-3">{index + 1}. {principle.title}</div>
                      <p className="text-white/80 mb-4">{principle.description}</p>
                      <div className="text-sm text-white/60 leading-relaxed">
                        {principle.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Two Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Hai xu hướng khách quan</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {trends.map((trend, index) => {
              return (
                <motion.div
                  key={trend.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="mb-3 flex items-center gap-4">
                      <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0">
                        <span className="text-xl">{trend.emoji}</span>
                      </div>
                      <h4 className="text-2xl font-bold">{trend.title}</h4>
                    </div>
                    <p className="text-sm text-white/80 mb-4">{trend.description}</p>
                    <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-black/30">
                      <img
                        src={trend.image}
                        alt={`Ví dụ minh họa cho ${trend.title}`}
                        className="w-full h-52 md:h-56 object-contain"
                      />
                    </div>
                    <p className="text-sm md:text-base text-yellow-300/95 font-medium leading-relaxed">
                      {trend.example}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <div className="text-6xl mb-4">☭</div>
            <p className="text-lg italic text-white/90">
              "Dân tộc là sản phẩm của lịch sử, không phải thực thể bất biến"
            </p>
            <p className="text-sm text-white/60 mt-2">- V.I. Lênin</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}