import { motion } from "motion/react";

export function PsychologySection() {
  const unityReasons = [
    {
      icon: "🌾",
      title: "Nguồn gốc: Cư dân lúa nước",
      description: "Chúng ta là cư dân lúa nước, sống dựa vào con đê và chống lại giặc ngoại xâm. Đắp đê hay đánh giặc đều là việc 'không thể làm một mình'.",
      image: "https://images.unsplash.com/photo-1571267011930-677915c391f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwcmljZSUyMGZpZWxkJTIwZmFybWVyfGVufDF8fHx8MTc3MzYzOTk3NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "⚔️",
      title: "Triết lý: 'Giặc đến nhà đàn bà cũng đánh'",
      description: "Khi có một kẻ thù chung (thiên tai hoặc nhân tai), cái Tôi cá nhân bị ép xuống mức thấp nhất để cái Ta cộng đồng tồn tại. Đó là bản năng sinh tồn mãnh liệt đã được rèn luyện hàng ngàn năm.",
      image: "https://st.vndoc.com/data/image/2019/06/28/giac-den-nha.jpg"
    }
  ];

  const divisionReasons = [
    {
      title: "Tính tự trị của làng xã",
      description: "'Phép vua thua lệ làng'. Mỗi làng là một 'vương quốc' nhỏ, dẫn đến tâm lý cục bộ, chỉ lo cho người trong nhà, trong họ trước.",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "Tâm lý tiểu nông",
      description: "Người nông dân quen với mảnh ruộng nhỏ, cách làm việc riêng rẽ. Khi không còn áp lực từ kẻ thù chung, tính tự tư tự lợi và sự đố kỵ (tâm lý cào bằng) dễ trỗi dậy.",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "Thiếu tư duy công nghiệp",
      description: "Chúng ta mạnh về 'ứng biến' (lúc khó khăn) nhưng yếu về 'hệ thống' (lúc cần duy trì sự ổn định). Khi yên ổn, sự thiếu kỷ luật và cái tôi cá nhân bắt đầu làm rạn nứt các mối liên kết.",
      image: "https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/23/3/19/4-0.jpg"
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
            <span className="text-xl">🧠</span>
            <span>Phần 3</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Tâm lý người Việt
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Có cố kết, lại có phân ly - Vậy nên sao?
          </p>
        </motion.div>

        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gradient-to-r from-yellow-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 text-center"
        >
          <div className="text-5xl mb-4">🤔</div>
          <h3 className="text-2xl font-bold mb-4">
            Tại sao người Việt lại có tâm lý 'biến thì hợp, bình thì tan'?
          </h3>
        </motion.div>

        {/* Unity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h3 className="text-3xl font-bold">Tại sao cố kết cao khi hoạn nạn?</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {unityReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30"
              >
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-white/80 leading-relaxed">{reason.description}</p>
                <img src={reason.image} alt={reason.title} className="mt-4 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Division Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            <h3 className="text-3xl font-bold">Tại sao dễ phân ly khi yên ổn?</h3>
          </div>

          <p className="text-lg text-white/80 mb-8">
            Đây không phải là bản chất xấu, mà là hệ quả của <span className="text-yellow-400 font-semibold">Văn hóa làng xã nhỏ lẻ</span>:
          </p>

          <div className="space-y-6">
            {divisionReasons.map((reason, index) => {
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 bg-black/20">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                      <p className="text-white/80 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Real Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-sm" />
          <div className="relative p-8 border border-red-500/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-5xl">💡</div>
              <div>
                <h4 className="text-xl font-bold mb-3">Ví dụ thực tế</h4>
                <p className="text-white/90 leading-relaxed">
                  Trong đại dịch <span className="text-yellow-400 font-semibold">Covid-19</span>, chúng ta đoàn kết đến kinh ngạc. 
                  Nhưng khi hết dịch, ra đường chúng ta lại dễ dàng chen lấn, không nhường nhịn nhau 
                  chỉ vì một chút tiện ích cá nhân.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="text-center p-8 bg-green-600/20 rounded-2xl border border-green-500/30">
            <div className="text-6xl mb-4">🥢</div>
            <h4 className="text-xl font-bold mb-2">Bó đũa - Cố kết</h4>
            <p className="text-white/70">Khi hoạn nạn, chúng ta như bó đũa không gãy</p>
          </div>
          <div className="text-center p-8 bg-orange-600/20 rounded-2xl border border-orange-500/30">
            <div className="text-6xl mb-4">💎</div>
            <h4 className="text-xl font-bold mb-2">Hạt cát - Phân ly</h4>
            <p className="text-white/70">Khi bình yên, chúng ta như hạt cát rời rạc</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}