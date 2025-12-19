import './globals.css';

export const metadata = {
  metadataBase: new URL("https://xpaio-homepage.netlify.app"),
  title: "XPAIO | Web3 프로젝트",
  description: "XPAIO는 Web3 기반의 혁신적인 프로젝트입니다.",
  keywords: ["XPAIO", "Web3", "블록체인", "토큰", "로드맵"],
  openGraph: {
    title: "XPAIO | Web3 프로젝트",
    description: "XPAIO는 Web3 기반의 혁신적인 프로젝트입니다.",
    url: "https://xpaio-homepage.netlify.app",
    siteName: "XPAIO",
    images: [
      {
        url: "/roadmap-01.png",
        width: 800,
        height: 600,
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
      <body>{children}</body>
    </html>
  );
}