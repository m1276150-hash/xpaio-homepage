// 1. 상단에 데이터 정의 (SQL에 있던 내용을 객체로 변환)
const roadmapData = [
  { id: 1, title: '프로젝트 시작', date: '2025-01' },
  { id: 2, title: '토큰 발행', date: '2025-03' },
  { id: 3, title: '메인넷 런칭', date: '2025-06' }
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">XPAIO 로드맵</h1>
      
      {/* 2. DB 연결 없이 바로 화면에 출력 */}
      <div className="space-y-4">
        {roadmapData.map((item) => (
          <div key={item.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <span className="text-sm text-gray-500">{item.date}</span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}