import './globals.css';

export const metadata = {
  // 1. 실제 도메인으로 변경 (xpaio.kr 사용 시 권장)
  metadataBase: new URL("https://xpaio.kr"), 
  title: "XPAIO | 은하수가 이끄는 새로운 비전",
  description: "XPAIO는 Web3 기반의 혁신적인 프로젝트이자 당신의 아이디어를 현실로 만드는 공간입니다.",
  keywords: ["XPAIO", "Web3", "블록체인", "토큰", "로드맵", "은하수"],
  openGraph: {
    title: "XPAIO | Web3 프로젝트",
    description: "XPAIO는 Web3 기반의 혁신적인 프로젝트입니다.",
    url: "https://xpaio.kr",
    siteName: "XPAIO",
    images: [
      {
        url: "/roadmap-01.png", // public 폴더의 실제 파일명과 일치하는지 확인
        width: 1200, // SNS 공유 시 더 선명한 크기 권장
        height: 630,
        alt: "XPAIO 로드맵",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* 2. 폰트 최적화 및 스타일 적용을 위해 body 클래스나 구조 유지 */}
      <body className="antialiased">
        {/* 네비게이션이 모든 페이지에 공통으로 나온다면 여기에 배치할 수도 있습니다. */}
        {children}
      </body>
    </html>
  );
}