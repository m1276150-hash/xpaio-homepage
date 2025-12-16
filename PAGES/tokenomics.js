export default function Tokenomics() {
  return (
    <div className="bg-background text-textPrimary min-h-screen p-12">
      <h2 className="text-4xl font-bold text-neonBlue mb-12 drop-shadow-lg">
        📊 XPAIO 토크노믹스
      </h2>

      <div className="glass-panel p-8 rounded-xl">
        <p className="italic mb-6">
          현재 XPAIO 토크노미는 투명성과 지속가능성을 중심으로 설계되었습니다.
        </p>

        <ul className="space-y-4">
          <li>
            <strong>배분:</strong> 커뮤니티, 개발, 파트너십 비율 명시
          </li>
          <li>
            <strong>락업:</strong> 주요 지갑의 베스팅 일정
          </li>
          <li>
            <strong>유틸리티:</strong> 네온 인터랙션, 거버넌스 참여
          </li>
        </ul>
      </div>

      <style jsx>{`
        .glass-panel {
          background: rgba(4, 28, 59, 0.4);
          backdrop-filter: blur(10px);
          border: 2px solid var(--color-neon-blue);
          box-shadow: 0 0 15px var(--color-neon-blue);
        }
      `}</style>
    </div>
  );
}