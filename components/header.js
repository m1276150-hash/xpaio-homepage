export default function Header() {
  return (
    <header className="flex justify-between p-6">
      <h1 className="text-neonBlue font-bold">XPAIOFINAL</h1>
      <nav className="space-x-6">
        <a href="/roadmap">로드맵</a>
        <a href="/tokenomics">토크노믹스</a>
        <a href="/leadership">비전</a>
      </nav>
    </header>
  );
}