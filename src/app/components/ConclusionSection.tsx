import { motion } from "motion/react";

export function ConclusionSection() {
  const keyMessages = [
    {
      icon: "🎓",
      title: "Học về dân tộc để hiểu chính mình",
      description: "Không phải để thuộc lòng định nghĩa, mà để hiểu bản chất con người Việt Nam"
    },
    {
      icon: "⚖️",
      title: "Về sự bình đẳng và liên hiệp",
      description: "Chủ nghĩa Mác - Lênin dạy chúng ta về sự bình đẳng giữa các dân tộc và sức mạnh của liên hiệp"
    },
    {
      icon: "💪",
      title: "Liên hiệp để sinh tồn",
      description: "Người Việt chúng ta đã làm rất tốt việc liên hiệp khi đối diện với hoạn nạn"
    }
  ];

  const challenge = {
    icon: "🚀",
    title: "Thách thức lớn nhất trong thời đại mới",
    description: "Liên hiệp để phát triển",
    detail: "Chuyển từ sự 'cố kết bằng nỗi sợ' sang 'cố kết bằng ý thức hệ và luật pháp'"
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1670299160449-58cccb9545ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHRvZ2V0aGVyJTIwdW5pdHklMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzM2Mzk5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Unity"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">💡</span>
            <span>Kết luận</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Thông điệp & Suy ngẫm
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Dân tộc không chỉ là di sản - mà là con đường
          </p>
        </motion.div>

        {/* Key Messages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {keyMessages.map((message, index) => (
            <motion.div
              key={message.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{message.icon}</div>
              <h3 className="text-lg font-bold mb-3">{message.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{message.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Challenge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-600/30 to-red-600/30 backdrop-blur-md rounded-3xl p-10 border-2 border-yellow-500/50 shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">{challenge.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-4">{challenge.description}</div>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {challenge.detail}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-5xl mb-4">💡</div>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Chỉ khi đó, chúng ta mới <span className="text-yellow-400 font-bold">thực sự mạnh</span> ngay cả khi bình yên.
            </p>
            <div className="inline-block">
              <div className="flex items-center gap-2 text-red-400">
                <span className="text-2xl">❤️</span>
                <span className="font-semibold">Đoàn kết - Kỷ cương - Phát triển</span>
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Question to Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <div className="flex items-start gap-4">
              <div className="text-4xl">❓</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3">Câu hỏi mở</h4>
                <p className="text-white/90 text-lg leading-relaxed">
                  Các bạn có đồng ý rằng chúng ta cần học cách <span className="text-yellow-400 font-semibold">'đoàn kết trên bàn làm việc'</span> giống như cách chúng ta <span className="text-yellow-400 font-semibold">'đoàn kết trên chiến trường'</span> không?
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Những con số đáng nhớ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "54", label: "Dân tộc thiểu số" },
              { number: "1", label: "Quốc gia" },
              { number: "3", label: "Nguyên tắc Lênin" },
              { number: "2", label: "Xu hướng khách quan" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank you */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-600 p-1 rounded-2xl">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl px-12 py-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-6xl mb-4"
              >
                🙏
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Cảm ơn thầy và các bạn đã lắng nghe</h3>
              <p className="text-white/70 text-lg">
                Chúc các bạn thành công và luôn tự hào về bản sắc dân tộc Việt Nam
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}