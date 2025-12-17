export default function About() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-12 md:p-16">
      {/* 헤더 섹션 */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Xpaio 소개
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          단순한 플랫폼을 넘어, 설계자의 창의적 열정이 깃든 <br className="hidden md:block" />
          무한한 확장의 공간입니다.
        </p>
      </section>

      {/* 비전 섹션 */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">비전</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
          <li className="bg-gray-800 p-4 rounded-lg">✨ 창의적 설계자의 열정</li>
          <li className="bg-gray-800 p-4 rounded-lg">🚀 무한한 확장성</li>
          <li className="bg-gray-800 p-4 rounded-lg">🤝 사용자와의 시너지</li>
        </ul>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-400 p-8 rounded-2xl text-black font-bold text-center shadow-xl transform hover:-translate-y-2 transition duration-300">
            혁신: 새로운 시대의 기준
          </div>
          <div className="bg-purple-400 p-8 rounded-2xl text-black font-bold text-center shadow-xl transform hover:-translate-y-2 transition duration-300">
            연대: 파이와의 파트너십
          </div>
          <div className="bg-yellow-400 p-8 rounded-2xl text-black font-bold text-center shadow-xl transform hover:-translate-y-2 transition duration-300">
            무한함: 한계 없는 확장
          </div>
        </div>
      </section>

      {/* 푸터 버튼 */}
      <section className="text-center">
        <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition duration-300 shadow-lg">
          더 알아보기
        </button>
      </section>
    </main>
  );
}