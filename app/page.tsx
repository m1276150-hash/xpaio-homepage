// 예시: 데이터를 직접 화면에 그리는 방식
const roadmap = [
  { id: 1, title: '프로젝트 시작', date: '2025-01' },
  { id: 2, title: '토큰 발행', date: '2025-03' },
  { id: 3, title: '메인넷 런칭', date: '2025-06' }
];

export default function Home() {
  return (
    <div>
      <h2>XPAIO ROADMAP</h2>
      {roadmap.map(item => (
        <div key={item.id}>
          <span>[{item.date}]</span> {item.title}
        </div>
      ))}
    </div>
  );
}