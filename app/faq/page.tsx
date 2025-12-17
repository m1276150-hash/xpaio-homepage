export default function FAQ() {
  const faqs = [
    {
      question: "XPAIO는 어떤 플랫폼인가요?",
      answer: "XPAIO는 설계자의 창의적 열정을 담아 무한히 확장 가능한 공간을 제공하는 플랫폼입니다.",
    },
    {
      question: "어떻게 참여할 수 있나요?",
      answer: "회원가입 후 프로젝트에 기여하거나 이벤트에 참여할 수 있습니다.",
    },
    {
      question: "향후 계획은 무엇인가요?",
      answer: "지속적인 업데이트와 사용자와의 협업을 통해 새로운 기능을 추가할 예정입니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col font-sans">
      <main className="flex-1 p-8 md:p-20">
        {/* 헤더 섹션 */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-neon">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">
              자주 묻는 질문
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            사용자들이 가장 많이 궁금해하는 질문과 답변을 모았습니다.
          </p>
        </section>

        {/* FAQ 리스트 */}
        <section className="space-y-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-neonBlue transition-colors"
            >
              <h2 className="text-2xl font-bold text-neonYellow mb-2">
                Q. {faq.question}
              </h2>
              <p className="text-gray-300">A. {faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}