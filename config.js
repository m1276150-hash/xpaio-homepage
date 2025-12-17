m// config.js 최종 수정본
module.exports = {
  // DB 설정을 사용하지 않으므로 모두 빈 값으로 두거나 주석 처리합니다.
  dbConfig: {
    host: "localhost",
    user: "root",
    password: "",
    database: "xpaio_db",
  },
  // 실제 사이트에서 사용할 데이터는 아래처럼 직접 정의합니다.
  roadmapData: [
    { id: 1, title: '프로젝트 시작', date: '2025-01' },
    { id: 2, title: '토큰 발행', date: '2025-03' },
    { id: 3, title: '메인넷 런칭', date: '2025-06' }
  ]
};