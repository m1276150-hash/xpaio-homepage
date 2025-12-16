import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col">
      {/* 상단 헤더 */}
      <Header />

      {/* 메인 섹션 */}
      <main className="flex flex-col flex-1 items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold text-neonBlue drop-shadow-lg">
          네온 우주로의 런치 🚀
        </h2>
        <p className="mt-4 text-xl">
          비전과 기술이 만나는 프레임워크
        </p>
        <button
          className="mt-8 px-6 py-3 border-2 border-neonBlue rounded-md 
                     hover:bg-neonBlue hover:text-background transition-colors shadow-lg"
        >
          시작하기
        </button>
      </main>
    </div>
  );
}