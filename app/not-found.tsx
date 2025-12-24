export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다 😢</h1>
      <p className="text-lg mb-6">요청하신 페이지가 존재하지 않습니다.</p>
      <a
        href="/"
        className="px-6 py-3 bg-neonBlue text-black font-bold rounded-lg hover:bg-neonYellow transition"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}