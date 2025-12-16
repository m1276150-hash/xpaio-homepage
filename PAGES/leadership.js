export default function Leadership() {
  return (
    <div className="bg-background text-textPrimary min-h-screen p-12">
      <h2 className="text-4xl font-bold text-neonPurple mb-12 drop-shadow-lg">
        💡 비전 & 리더십
      </h2>

      <div className="flex items-center gap-12">
        {/* 네온 코어 */}
        <div className="core relative w-60 h-60 rounded-full flex items-center justify-center">
          <span className="core__glow absolute w-32 h-32 rounded-full"></span>
        </div>

        {/* 비전 텍스트 */}
        <div className="space-y-4">
          <p><strong>핵심:</strong> 네온 인터랙션으로 사용자의 몰입을 극대화</p>
          <p><strong>원칙:</strong> 성능, 접근성, 투명성의 균형</p>
          <p><strong>확장:</strong> 모듈형 UI와 API로 빠른 진화</p>
        </div>
      </div>

      <style jsx>{`
        .core {
          background: radial-gradient(
            closest-side,
            rgba(0, 255, 255, 0.2),
            rgba(204, 51, 255, 0.15),
            transparent 70%
          );
          border: 2px solid rgba(0, 255, 255, 0.6);
          box-shadow: 0 0 18px var(--color-neon-blue),
                      inset 0 0 24px rgba(204, 51, 255, 0.4);
          animation: pulse 3s ease-in-out infinite;
        }
        .core__glow {
          box-shadow: 0 0 28px var(--color-neon-blue),
                      0 0 28px var(--color-neon-purple);
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 18px var(--color-neon-blue),
                        inset 0 0 24px rgba(204, 51, 255, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 28px var(--color-neon-blue),
                        inset 0 0 36px rgba(204, 51, 255, 0.55);
          }
        }
      `}</style>
    </div>
  );
}