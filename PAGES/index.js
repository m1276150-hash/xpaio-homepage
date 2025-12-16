import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-background text-textPrimary">
      <Header />
      <section className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-neonBlue drop-shadow-lg">
          네온 우주로의 런치 🚀
        </h2>
        <p className="mt-4 text-xl">비전과 기술이 만나는 프레임워크</p>
        <button className="mt-8 px-6 py-3 border-2 border-neonBlue hover:bg-neonBlue hover:text-background shadow-lg">
          시작하기
        </button>
      </section>
    </div>
  );
}