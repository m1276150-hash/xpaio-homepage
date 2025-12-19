'use client';

export default function About() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/hero-banner-01.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 안전한 폭 컨테이너 */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Xpaio 소개</h1>
          <p className="text-lg text-gray-300">
            단순한 플랫폼을 넘어, 설계자의 창의적 열정이 깃든 무한한 확장의 공간입니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">비전</h2>
          <ul className="list-disc list-inside text-gray-300 pl-5">
            <li>창의적 설계자의 열정</li>
            <li>무한한 확장성</li>
            <li>사용자와의 시너지</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#4ECDC4] p-6 rounded-lg text-black">혁신: 새로운 시대의 기준</div>
            <div className="bg-[#FF6B6B] p-6 rounded-lg text-black">연대: 파이와의 강력한 파트너십</div>
            <div className="bg-[#D4AF37] p-6 rounded-lg text-black">무한함: 한계 없는 확장</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">팀</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">경오 – 설계자</div>
            <div className="bg-gray-800 p-6 rounded-lg">팀원 A – 개발자</div>
            <div className="bg-gray-800 p-6 rounded-lg">팀원 B – 디자이너</div>
          </div>
        </section>

        <section className="text-center">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg hover:bg-white transition">
            더 알아보기
          </button>
        </section>
      </div>
    </main>
  );
}