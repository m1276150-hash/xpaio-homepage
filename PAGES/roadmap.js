import { useEffect } from 'react';

export default function Roadmap() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.node');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('active'), i * 150);
        }
      });
    }, { threshold: 0.3 });

    nodes.forEach(n => observer.observe(n));
  }, []);

  return (
    <div className="bg-background text-textPrimary min-h-screen p-12">
      <h2 className="text-4xl font-bold text-neonPurple mb-12 drop-shadow-lg">
        🚀 XPAIO 로드맵
      </h2>

      <div className="relative">
        {/* 타임라인 라인 */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-neonPurple shadow-lg"></div>

        {/* 노드들 */}
        <div className="grid grid-cols-4 gap-8 relative mt-16">
          <div className="node opacity-30 transform translate-y-4 transition-all duration-500 text-center p-4 border border-neonPurple rounded-lg">
            <p className="text-sm text-neonPurple mb-2">Q1</p>
            <p>Core Setup</p>
          </div>
          <div className="node opacity-30 transform translate-y-4 transition-all duration-500 text-center p-4 border border-neonPurple rounded-lg">
            <p className="text-sm text-neonPurple mb-2">Q2</p>
            <p>Testnet Launch</p>
          </div>
          <div className="node opacity-30 transform translate-y-4 transition-all duration-500 text-center p-4 border border-neonPurple rounded-lg">
            <p className="text-sm text-neonPurple mb-2">Q3</p>
            <p>Tokenomics v1</p>
          </div>
          <div className="node opacity-30 transform translate-y-4 transition-all duration-500 text-center p-4 border border-neonPurple rounded-lg">
            <p className="text-sm text-neonPurple mb-2">Q4</p>
            <p>Mainnet Ready</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .node.active {
          opacity: 1 !important;
          transform: translateY(0) !important;
          box-shadow: 0 0 14px var(--color-neon-purple), 0 0 28px var(--color-neon-purple);
        }
      `}</style>
    </div>
  );
}