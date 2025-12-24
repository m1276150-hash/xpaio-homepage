export default function Roadmap() {
  const roadmap = [
    { date: "2025-01", title: "프로젝트 시작" },
    { date: "2025-03", title: "토큰 발행" },
    { date: "2025-06", title: "메인넷 런칭" },
  ];

  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col font-sans">
      <main className="flex-1 p-8 md:p-20">

        {/* 제목 섹션 */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-neon">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">
              XPAIO ROADMAP
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            프로젝트의 주요 일정과 목표를 확인하세요.
          </p>
        </section>

        {/* 로드맵 리스트 */}
        <section className="space-y-8 max-w-3xl mx-auto">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-neonBlue transition-colors"
            >
              <span className="text-neonYellow font-bold text-xl w-32">
                {item.date}
              </span>
              <span className="text-gray-300 text-lg">{item.title}</span>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}