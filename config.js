// 1. DB 설정을 사용하지 않으므로 더미 값으로 유지하거나 비워둡니다.
export const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "xpaio_db",
};

// 2. 실제 사이트에서 사용할 로드맵 데이터 (export 키워드 추가)
export const roadmapData = [
  { id: 1, title: '프로젝트 시작', date: '2025-01' },
  { id: 2, title: '토큰 발행', date: '2025-03' },
  { id: 3, title: '메인넷 런칭', date: '2025-06' }
];

// 전체를 하나로 내보낼 때 (필요시)
export default {
  dbConfig,
  roadmapData
};