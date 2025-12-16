CREATE DATABASE IF NOT EXISTS xpaio_db;
USE xpaio_db;

CREATE TABLE roadmap (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date VARCHAR(50) NOT NULL
);

INSERT INTO roadmap (title, date) VALUES
('프로젝트 시작', '2025-01'),
('토큰 발행', '2025-03'),
('메인넷 런칭', '2025-06');