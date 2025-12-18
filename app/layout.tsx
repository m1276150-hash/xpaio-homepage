import './globals.css'; // 파일명이 globals.css라면 이렇게, clobasals.css라면 그 이름대로 적어야 합니다.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}