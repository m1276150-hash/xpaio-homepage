eimport Header from '../../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col font-sans">
      {/* 상단 헤더 (메인 페이지와 동일하게 유지) */}
      <Header />

      <main className="flex-1 p-8 md:p-20">
        {/* 헤더 섹션 */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-neon">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">
              Xpaio 소개
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            단순한 플랫폼을 넘어, 설계자의 창의적 열정이 깃든 <br className="hidden md:block" />
            무한한 확장의 공간입니다.
          </p>
        </section>

        {/* 비전 섹션 */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-neonYellow border-l-4 border-neonYellow pl-4">비전</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-neonBlue transition-colors">
              <h3 className="text-xl font-bold text-neonBlue mb-2">열정</h3>
              <p className="text-gray-400">창의적 설계자의 뜨거운 열정을 담습니다.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-neonPurple transition-colors">
              <h3 className="text-xl font-bold text-neonPurple mb-2">확장</h3>
              <p className="text-gray-400">한계가 없는 무한한 확장성을 지향합니다.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-neonYellow transition-colors">
              <h3 className="text-xl font-bold text-neonYellow mb-2">시너지</h3>
              <p className="text-gray-400">사용자와 플랫폼이 함께 성장합니다.</p>
            </div>
          </div>
        </section>

        {/* 핵심 가치 섹션 */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-neonBlue border-l-4 border-neonBlue pl-4">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neonBlue p-8 rounded-2xl text-background font-black text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              혁신: 새로운 시대의 기준
            </div>
            <div className="bg-neonPurple p-8 rounded-2xl text-white font-black text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              연대: 파이와의 파트너십
            </div>
            <div className="bg-neonYellow p-8 rounded-2xl text-background font-black text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              무한함: 한계 없는 확장
            </div>
          </div>
        </section>

        {/* 하단 버튼 */}
        <section className="text-center">
          <button className="bg-white text-background px-10 py-4 rounded-full font-bold text-lg hover:bg-neonBlue hover:scale-105 transition-all duration-300 shadow-xl">
            메인으로 돌아가기
          </button>
        </section>
      </main>
    </div>
  );
}
}