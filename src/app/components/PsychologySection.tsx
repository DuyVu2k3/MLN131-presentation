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
      icon: "🏠",
      title: "Tính tự trị của làng xã",
      description: "'Phép vua thua lệ làng'. Mỗi làng là một 'vương quốc' nhỏ, dẫn đến tâm lý cục bộ, chỉ lo cho người trong nhà, trong họ trước.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "👥",
      title: "Tâm lý tiểu nông",
      description: "Người nông dân quen với mảnh ruộng nhỏ, cách làm việc riêng rẽ. Khi không còn áp lực từ kẻ thù chung, tính tự tư tự lợi và sự đố kỵ (tâm lý cào bằng) dễ trỗi dậy.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📉",
      title: "Thiếu tư duy công nghiệp",
      description: "Chúng ta mạnh về 'ứng biến' (lúc khó khăn) nhưng yếu về 'hệ thống' (lúc cần duy trì sự ổn định). Khi yên ổn, sự thiếu kỷ luật và cái tôi cá nhân bắt đầu làm rạn nứt các mối liên kết.",
      color: "from-blue-500 to-cyan-500"
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
                    <div className={`bg-gradient-to-br ${reason.color} p-4 rounded-xl flex-shrink-0`}>
                      <span className="text-3xl">{reason.icon}</span>
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