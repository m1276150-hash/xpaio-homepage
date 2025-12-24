import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// /demo 라우트
app.get("/demo", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "demo.html"));
});

// 서버 실행
app.listen(4000, () => {
  console.log("Express server running on port 4000");
});