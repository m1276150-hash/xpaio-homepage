# Generating Korean PDF for XPAIO 전체 배포 체크리스트 (GitHub, Vercel, 도메인 연결)
from fpdf import FPDF
import os

# Create PDF
pdf = FPDF()
pdf.add_page()
pdf.add_font("ArialUnicode", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", uni=True)
pdf.set_font("ArialUnicode", size=12)

def add_section(title, items):
    pdf.set_font("ArialUnicode", 'B', 14)
    pdf.cell(0, 10, title, ln=True)
    pdf.set_font("ArialUnicode", '', 12)
    for item in items:
        pdf.multi_cell(0, 8, f"- {item}")
    pdf.ln(5)

# Section 1: GitHub Push
github_steps = [
    "터미널을 프로젝트 폴더에서 엽니다 (예: D:\\XPAIOFINAL).",
    "Git 저장소 초기화: git init",
    "모든 파일 추가: git add .",
    "커밋 생성: git commit -m \"Initial commit for XPAIO\"",
    "메인 브랜치 설정: git branch -M main",
    "원격 저장소 추가: git remote add origin https://github.com/m1276150-hash/xpaio.git",
    "GitHub로 푸시: git push -u origin main",
    ".env.local 파일은 .gitignore에 추가하여 업로드 방지"
]

# Section 2: Vercel Deployment
vercel_steps = [
    "https://vercel.com 에 GitHub 계정으로 로그인",
    "'Add New Project' 클릭 후 'xpaio' 저장소 선택",
    "프로젝트 설정 구성 (예: 프레임워크 = Next.js)",
    "환경변수 설정 (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)",
    "'Deploy' 클릭하여 첫 배포 시작",
    "배포 완료 후 미리보기 URL 확인 (예: xpaio.vercel.app)"
]

# Section 3: Domain Connection
domain_steps = [
    "Vercel 대시보드 > 프로젝트 > Settings > Domains 이동",
    "'Add Domain' 클릭 후 도메인 입력 (예: xpaio.kr)",
    "도메인 제공업체에서 DNS 설정 변경:",
    "  - CNAME 레코드: cname.vercel-dns.com 으로 설정",
    "  - 또는 A 레코드: Vercel IP로 설정",
    "DNS 전파 완료 후 도메인 연결 상태 확인"
]

# Section 4: Verification Checklist
verification = [
    "[ ] GitHub 저장소에 모든 프로젝트 파일 포함",
    "[ ] .env.local 파일은 GitHub에 업로드되지 않음",
    "[ ] Vercel 배포 성공 및 사이트 정상 작동",
    "[ ] 사용자 도메인(xpaio.kr)이 Vercel에 연결됨",
    "[ ] 로드맵 페이지가 DB에서 데이터 불러옴",
    "[ ] 민감한 정보가 공개 저장소에 노출되지 않음"
]

# Section 5: Security Checklist
security = [
    "[ ] 강력한 DB 비밀번호 사용 (예: Xpaio!2025Secure)",
    "[ ] .env.local 파일 GitHub에 커밋 금지",
    "[ ] root가 아닌 별도 DB 사용자 사용 (예: xpaio_user)",
    "[ ] DB 접근은 IP 또는 방화벽으로 제한",
    "[ ] 주기적으로 비밀키 교체 및 접근 로그 모니터링"
]

# Add all sections
add_section("1. GitHub 푸시 단계", github_steps)
add_section("2. Vercel 배포 단계", vercel_steps)
add_section("3. 도메인 연결 단계", domain_steps)
add_section("4. 최종 확인 체크리스트", verification)
add_section("5. 보안 체크리스트", security)

# Save PDF
output_path = "/mnt/data/XPAIO_배포_체크리스트.pdf"
pdf.output(output_path)

print("XPAIO 전체 배포 체크리스트 PDF를 생성하여 저장했습니다.")

# Generating Korean PDF for XPAIO 전체 배포 체크리스트 (GitHub, Vercel, 도메인 연결)
from fpdf import FPDF
import os

# Create PDF
pdf = FPDF()
pdf.add_page()
pdf.add_font("ArialUnicode", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", uni=True)
pdf.set_font("ArialUnicode", size=12)

def add_section(title, items):
    pdf.set_font("ArialUnicode", 'B', 14)
    pdf.cell(0, 10, title, ln=True)
    pdf.set_font("ArialUnicode", '', 12)
    for item in items:
        pdf.multi_cell(0, 8, f"- {item}")
    pdf.ln(5)

# Section 1: GitHub Push
github_steps = [
    "터미널을 프로젝트 폴더에서 엽니다 (예: D:\\XPAIOFINAL).",
    "Git 저장소 초기화: git init",
    "모든 파일 추가: git add .",
    "커밋 생성: git commit -m \"Initial commit for XPAIO\"",
    "메인 브랜치 설정: git branch -M main",
    "원격 저장소 추가: git remote add origin https://github.com/m1276150-hash/xpaio.git",
    "GitHub로 푸시: git push -u origin main",
    ".env.local 파일은 .gitignore에 추가하여 업로드 방지"
]

# Section 2: Vercel Deployment
vercel_steps = [
    "https://vercel.com 에 GitHub 계정으로 로그인",
    "'Add New Project' 클릭 후 'xpaio' 저장소 선택",
    "프로젝트 설정 구성 (예: 프레임워크 = Next.js)",
    "환경변수 설정 (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)",
    "'Deploy' 클릭하여 첫 배포 시작",
    "배포 완료 후 미리보기 URL 확인 (예: xpaio.vercel.app)"
]

# Section 3: Domain Connection
domain_steps = [
    "Vercel 대시보드 > 프로젝트 > Settings > Domains 이동",
    "'Add Domain' 클릭 후 도메인 입력 (예: xpaio.kr)",
    "도메인 제공업체에서 DNS 설정 변경:",
    "  - CNAME 레코드: cname.vercel-dns.com 으로 설정",
    "  - 또는 A 레코드: Vercel IP로 설정",
    "DNS 전파 완료 후 도메인 연결 상태 확인"
]

# Section 4: Verification Checklist
verification = [
    "[ ] GitHub 저장소에 모든 프로젝트 파일 포함",
    "[ ] .env.local 파일은 GitHub에 업로드되지 않음",
    "[ ] Vercel 배포 성공 및 사이트 정상 작동",
    "[ ] 사용자 도메인(xpaio.kr)이 Vercel에 연결됨",
    "[ ] 로드맵 페이지가 DB에서 데이터 불러옴",
    "[ ] 민감한 정보가 공개 저장소에 노출되지 않음"
]

# Section 5: Security Checklist
security = [
    "[ ] 강력한 DB 비밀번호 사용 (예: Xpaio!2025Secure)",
    "[ ] .env.local 파일 GitHub에 커밋 금지",
    "[ ] root가 아닌 별도 DB 사용자 사용 (예: xpaio_user)",
    "[ ] DB 접근은 IP 또는 방화벽으로 제한",
    "[ ] 주기적으로 비밀키 교체 및 접근 로그 모니터링"
]

# Add all sections
add_section("1. GitHub 푸시 단계", github_steps)
add_section("2. Vercel 배포 단계", vercel_steps)
add_section("3. 도메인 연결 단계", domain_steps)
add_section("4. 최종 확인 체크리스트", verification)
add_section("5. 보안 체크리스트", security)

# Save PDF
output_path = "/mnt/data/XPAIO_배포_체크리스트.pdf"
pdf.output(output_path)

print("XPAIO 전체 배포 체크리스트 PDF를 생성하여 저장했습니다.")


# Fixing font error by using built-in DejaVu font without bold style for Korean PDF
from fpdf import FPDF
import os

# Create PDF
pdf = FPDF()
pdf.add_page()
pdf.add_font("DejaVu", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", uni=True)
pdf.set_font("DejaVu", size=12)

def add_section(title, items):
    pdf.set_font("DejaVu", size=13)
    pdf.cell(0, 10, title, ln=True)
    pdf.set_font("DejaVu", size=11)
    for item in items:
        pdf.multi_cell(0, 8, f"- {item}")
    pdf.ln(5)

# Section 1: GitHub Push
github_steps = [
    "터미널을 프로젝트 폴더에서 엽니다 (예: D:\\XPAIOFINAL).",
    "Git 저장소 초기화: git init",
    "모든 파일 추가: git add .",
    "커밋 생성: git commit -m \"Initial commit for XPAIO\"",
    "메인 브랜치 설정: git branch -M main",
    "원격 저장소 추가: git remote add origin https://github.com/m1276150-hash/xpaio.git",
    "GitHub로 푸시: git push -u origin main",
    ".env.local 파일은 .gitignore에 추가하여 업로드 방지"
]

# Section 2: Vercel Deployment
vercel_steps = [
    "https://vercel.com 에 GitHub 계정으로 로그인",
    "'Add New Project' 클릭 후 'xpaio' 저장소 선택",
    "프로젝트 설정 구성 (예: 프레임워크 = Next.js)",
    "환경변수 설정 (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)",
    "'Deploy' 클릭하여 첫 배포 시작",
    "배포 완료 후 미리보기 URL 확인 (예: xpaio.vercel.app)"
]

# Section 3: Domain Connection
domain_steps = [
    "Vercel 대시보드 > 프로젝트 > Settings > Domains 이동",
    "'Add Domain' 클릭 후 도메인 입력 (예: xpaio.kr)",
    "도메인 제공업체에서 DNS 설정 변경:",
    "  - CNAME 레코드: cname.vercel-dns.com 으로 설정",
    "  - 또는 A 레코드: Vercel IP로 설정",
    "DNS 전파 완료 후 도메인 연결 상태 확인"
]

# Section 4: Verification Checklist
verification = [
    "[ ] GitHub 저장소에 모든 프로젝트 파일 포함",
    "[ ] .env.local 파일은 GitHub에 업로드되지 않음",
    "[ ] Vercel 배포 성공 및 사이트 정상 작동",
    "[ ] 사용자 도메인(xpaio.kr)이 Vercel에 연결됨",
    "[ ] 로드맵 페이지가 DB에서 데이터 불러옴",
    "[ ] 민감한 정보가 공개 저장소에 노출되지 않음"
]

# Section 5: Security Checklist
security = [
    "[ ] 강력한 DB 비밀번호 사용 (예: Xpaio!2025Secure)",
    "[ ] .env.local 파일 GitHub에 커밋 금지",
    "[ ] root가 아닌 별도 DB 사용자 사용 (예: xpaio_user)",
    "[ ] DB 접근은 IP 또는 방화벽으로 제한",
    "[ ] 주기적으로 비밀키 교체 및 접근 로그 모니터링"
]

# Add all sections
add_section("1. GitHub 푸시 단계", github_steps)
add_section("2. Vercel 배포 단계", vercel_steps)
add_section("3. 도메인 연결 단계", domain_steps)
add_section("4. 최종 확인 체크리스트", verification)
add_section("5. 보안 체크리스트", security)

# Save PDF
output_path = "/mnt/data/XPAIO_배포_체크리스트.pdf"
pdf.output(output_path)

print("XPAIO 전체 배포 체크리스트 PDF를 생성하여 저장했습니다.")
