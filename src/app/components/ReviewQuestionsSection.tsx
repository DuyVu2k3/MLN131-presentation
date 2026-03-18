import { motion } from "motion/react";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options?: string[];
  answer?: number;
  explanation?: string;
}

export function ReviewQuestionsSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Theo nghĩa hẹp, dân tộc được định nghĩa dựa trên những yếu tố nào?",
      options: [
        "Chỉ có ngôn ngữ chung",
        "Ngôn ngữ, lãnh thổ, đời sống kinh tế, tâm lý và văn hóa chung",
        "Chỉ có lãnh thổ chung",
        "Chỉ có văn hóa chung"
      ],
      answer: 1,
      explanation: "Dân tộc theo nghĩa hẹp là cộng đồng người có chung ngôn ngữ, lãnh thổ, đời sống kinh tế, tâm lý tình cảm và văn hóa."
    },
    {
      id: 2,
      question: "Nghĩa rộng của dân tộc đề cập đến điều gì?",
      options: [
        "Chỉ một sắc tộc duy nhất trong quốc gia",
        "Tất cả cư dân trong lãnh thổ quốc gia, không phân biệt nguồn gốc",
        "Chỉ những người có cùng ngôn ngữ",
        "Chỉ những người có cùng tôn giáo"
      ],
      answer: 1,
      explanation: "Dân tộc theo nghĩa rộng bao gồm toàn bộ cư dân trong một quốc gia, không phân biệt sắc tộc, nguồn gốc hay văn hóa."
    },
    {
      id: 3,
      question: "Ba nguyên tắc cơ bản trong cương lĩnh dân tộc của Mác-Lênin là gì?",
      options: [
        "Độc lập, tự do, hạnh phúc",
        "Quyền bình đẳng dân tộc, quyền tự quyết, liên hiệp công nhân các dân tộc",
        "Đoàn kết, thống nhất, phát triển",
        "Hòa bình, hữu nghị, hợp tác"
      ],
      answer: 1,
      explanation: "Ba nguyên tắc cốt lõi là: Quyền bình đẳng dân tộc, Quyền dân tộc tự quyết, và Liên hiệp công nhân các dân tộc."
    },
    {
      id: 4,
      question: "Tại sao người Việt Nam dễ đoàn kết khi có giặc?",
      options: [
        "Vì có chính phủ mạnh",
        "Vì cố kết bằng nỗi sợ chung trước nguy cơ diệt vong",
        "Vì có quân đội hùng mạnh",
        "Vì có kinh tế phát triển"
      ],
      answer: 1,
      explanation: "Lịch sử cho thấy người Việt cố kết mạnh mẽ khi đối mặt với ngoại xâm vì nỗi sợ chung về nguy cơ diệt vong dân tộc."
    },
    {
      id: 5,
      question: "Nguyên nhân nào dẫn đến tính phân ly khi yên ổn trong tâm lý người Việt?",
      options: [
        "Thiếu giáo dục",
        "Văn hóa làng xã nhỏ lẻ, tính tự trị, tâm lý tiểu nông",
        "Thiếu pháp luật",
        "Do khí hậu nhiệt đới"
      ],
      answer: 1,
      explanation: "Văn hóa làng xã tự trị, tâm lý tiểu nông, và thiếu tư duy công nghiệp hóa là nguyên nhân chính gây ra tính phân ly."
    },
    {
      id: 6,
      question: "Giải pháp nào được đề xuất để chuyển từ 'cố kết bằng nỗi sợ' sang 'cố kết bằng ý thức'?",
      options: [
        "Tăng cường quân sự",
        "Giáo dục ý thức dân tộc, xây dựng luật pháp minh bạch, phát triển kinh tế công nghiệp",
        "Hạn chế di chuyển giữa các vùng",
        "Chỉ tập trung vào phát triển kinh tế"
      ],
      answer: 1,
      explanation: "Cần kết hợp giáo dục ý thức, xây dựng thể chế pháp luật, và phát triển kinh tế công nghiệp hóa để tạo sự đoàn kết bền vững."
    },
    {
      id: 7,
      question: "Trong cương lĩnh Mác-Lênin, 'Quyền tự quyết' có nghĩa là gì?",
      options: [
        "Quyền làm bất cứ điều gì mình muốn",
        "Quyền tự quyết định chế độ chính trị và con đường phát triển của dân tộc",
        "Quyền tách khỏi quốc gia bất cứ lúc nào",
        "Quyền không tuân theo luật pháp"
      ],
      answer: 1,
      explanation: "Quyền tự quyết là quyền của mỗi dân tộc tự quyết định chế độ chính trị và con đường phát triển, nhưng không phải là quyền ly khai vô điều kiện."
    },
    {
      id: 8,
      question: "Hai xu hướng song song trong vấn đề dân tộc theo Mác-Lênin là gì?",
      options: [
        "Chiến tranh và hòa bình",
        "Dân tộc hóa và Quốc tế hóa",
        "Nông nghiệp và công nghiệp",
        "Truyền thống và hiện đại"
      ],
      answer: 1,
      explanation: "Hai xu hướng là Dân tộc hóa (giành độc lập, xây dựng nhà nước dân tộc) và Quốc tế hóa (hợp tác, xóa bỏ rào cản biên giới)."
    },
    {
      id: 9,
      question: "Đâu là biểu hiện của tinh thần đoàn kết cần được phát huy trong thời bình?",
      options: [
        "Khép kín trong phạm vi làng xã",
        "Né tránh trách nhiệm cộng đồng",
        "Chung tay vì mục tiêu quốc gia và tuân thủ luật pháp",
        "Chỉ quan tâm lợi ích nhóm"
      ],
      answer: 2,
      explanation: "Trong thời bình, đoàn kết bền vững thể hiện qua ý thức công dân, trách nhiệm cộng đồng và tôn trọng pháp luật."
    },
    {
      id: 10,
      question: "Yếu tố nào giúp tăng niềm tin xã hội và giảm xu hướng phân ly?",
      options: [
        "Luật pháp minh bạch và thực thi công bằng",
        "Tăng quyền tự trị cục bộ không kiểm soát",
        "Giảm vai trò giáo dục công dân",
        "Phát triển kinh tế tự phát, ngắn hạn"
      ],
      answer: 0,
      explanation: "Luật pháp minh bạch, công bằng là nền tảng tạo niềm tin xã hội và gắn kết cộng đồng."
    },
    {
      id: 11,
      question: "Theo nội dung bài học, vai trò của giáo dục công dân là gì?",
      options: [
        "Chỉ cung cấp kiến thức lịch sử",
        "Tăng cạnh tranh cá nhân bằng mọi giá",
        "Bồi dưỡng ý thức dân tộc và trách nhiệm xã hội",
        "Thay thế hoàn toàn vai trò của pháp luật"
      ],
      answer: 2,
      explanation: "Giáo dục công dân góp phần hình thành ý thức dân tộc, tinh thần trách nhiệm và hành vi xã hội tích cực."
    },
    {
      id: 12,
      question: "Mục tiêu cuối cùng của việc kết hợp dân tộc hóa và quốc tế hóa là gì?",
      options: [
        "Đóng cửa nền kinh tế để bảo vệ bản sắc",
        "Giữ độc lập dân tộc đồng thời hợp tác phát triển cùng thế giới",
        "Ưu tiên hội nhập và bỏ qua lợi ích dân tộc",
        "Chỉ tập trung vào vấn đề đối ngoại"
      ],
      answer: 1,
      explanation: "Cần bảo đảm độc lập, tự chủ dân tộc và đồng thời chủ động hợp tác quốc tế để phát triển bền vững."
    }
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (q.answer !== undefined && selectedAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    return correct;
  };

  const score = showAnswers ? calculateScore() : 0;
  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            <span className="text-xl">📝</span>
            <span>Kiểm tra kiến thức</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Câu hỏi ôn tập
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Củng cố kiến thức về Dân tộc và Bản sắc Việt Nam
          </p>
        </motion.div>

        {/* Multiple Choice Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            Câu hỏi trắc nghiệm
          </h3>

          <div className="space-y-6">
            {questions.map((question, qIndex) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: qIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h4 className="font-bold text-lg mb-4">
                  <span className="text-yellow-400">Câu {qIndex + 1}:</span> {question.question}
                </h4>

                {question.options && (
                  <div className="space-y-3">
                    {question.options.map((option, oIndex) => {
                      const isSelected = selectedAnswers[question.id] === oIndex;
                      const isCorrect = question.answer === oIndex;
                      const showCorrect = showAnswers && isCorrect;
                      const showWrong = showAnswers && isSelected && !isCorrect;

                      return (
                        <motion.button
                          key={oIndex}
                          onClick={() => handleAnswerSelect(question.id, oIndex)}
                          className={`w-full text-left p-4 rounded-xl border transition-all ${
                            showCorrect
                              ? "bg-green-500/20 border-green-500/50"
                              : showWrong
                              ? "bg-red-500/20 border-red-500/50"
                              : isSelected
                              ? "bg-yellow-500/20 border-yellow-500/50"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={showAnswers}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              showCorrect
                                ? "border-green-500 bg-green-500"
                                : showWrong
                                ? "border-red-500 bg-red-500"
                                : isSelected
                                ? "border-yellow-400 bg-yellow-400"
                                : "border-white/30"
                            }`}>
                              {(showCorrect || (isSelected && !showAnswers)) && (
                                <span className="text-white text-xs">✓</span>
                              )}
                              {showWrong && (
                                <span className="text-white text-xs">✗</span>
                              )}
                            </div>
                            <span className="flex-1">{option}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {showAnswers && question.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl"
                  >
                    <p className="text-sm text-white/90">
                      <span className="font-semibold text-blue-400">💡 Giải thích:</span> {question.explanation}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {!showAnswers ? (
              <motion.button
                onClick={() => setShowAnswers(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎯 Xem đáp án
              </motion.button>
            ) : (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {score}/{totalQuestions}
                  </div>
                  <div className="text-sm text-white/70">
                    Số câu đúng
                  </div>
                  <div className="mt-2 text-lg">
                    {score === totalQuestions && "🎉 Xuất sắc!"}
                    {score >= totalQuestions * 0.7 && score < totalQuestions && "👏 Rất tốt!"}
                    {score >= totalQuestions * 0.5 && score < totalQuestions * 0.7 && "💪 Khá!"}
                    {score < totalQuestions * 0.5 && "📚 Cần ôn thêm!"}
                  </div>
                </div>
                <motion.button
                  onClick={() => {
                    setShowAnswers(false);
                    setSelectedAnswers({});
                  }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔄 Làm lại
                </motion.button>
              </>
            )}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-yellow-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">💡</span>
            Lưu ý khi ôn tập
          </h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Nắm vững sự khác biệt giữa dân tộc nghĩa hẹp và nghĩa rộng</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Hiểu rõ ba nguyên tắc cơ bản trong cương lĩnh Mác-Lênin về dân tộc</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Phân tích được nguyên nhân lịch sử - văn hóa của tâm lý người Việt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Liên hệ thực tiễn với các vấn đề dân tộc hiện nay</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
