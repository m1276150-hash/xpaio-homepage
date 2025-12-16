// pages/index.js
export default function Home() {
  return (
    <div className="bg-background text-textPrimary font-sans">
      {/* 헤더 */}
      <header className="flex justify-between p-6">
        <h1 className="text-neonBlue font-bold">XPAIOFINAL</h1>
        <nav className="space-x-6">
          <a href="#roadmap-section">로드맵</a>
          <a href="#tokenomics-section">토크노믹스</a>
          <a href="#leadership-section">비전</a>
        </nav>
      </header>

      {/* 히어로 */}
      <section id="hero-section" className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-neonBlue drop-shadow-lg">
          네온 우주로의 런치 🚀
        </h2>
        <p className="mt-4 text-xl">비전과 기술이 만나는 프레임워크</p>
        <button className="mt-8 px-6 py-3 border-2 border-neonBlue hover:bg-neonBlue hover:text-background shadow-lg">
          시작하기
        </button>
      </section>

      {/* 로드맵, 토크노믹스, 비전 섹션은 이후 추가 */}
    </div>
  );
}