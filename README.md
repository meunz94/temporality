# (Tempo)rality 時間性

ASCII 아트 + 픽셀 폰트 기반의 타이포그래피 랜딩 사이트. Astro로 빌드하고 GitHub Pages에 배포합니다.

## 개발

```bash
npm install
npm run dev        # http://localhost:4321/temporality/
npm run build      # dist/ 정적 산출물 생성
npm run preview    # 빌드 결과 미리보기
```

## 구조

```
src/
  layouts/Base.astro        공통 <head> · 폰트 · 검정 배경
  pages/
    index.astro             메인 화면 (고정 1600×900 캔버스, 좌상단 기준)
    notice.astro            공지사항 (더미 콘텐츠)
  components/
    AsciiArt.astro          좌측 ASCII 아트 (src/assets/ascii-art.txt 임베드)
    Countdown.astro         D-day 카운트다운
    InfoBox.astro           공지/접수/제출 박스 (solid · dashed)
  styles/global.css         폰트 import · CSS 변수
```

## 폰트

`npm` 패키지로 셀프 호스팅 (외부 CDN 의존 없음):

- **Noto Serif KR** — 타이틀 `(Tempo)rality`, `時間性`
- **Noto Sans KR** — 사전 정의 본문
- **Galmuri9 / Galmuri11 / GalmuriMono9** — 박스·카운트다운·ASCII 아트 (픽셀 폰트)

## 레이아웃 정책

현재는 **반응형 없음** — 1600×900 고정 캔버스를 화면 좌상단에 고정 배치합니다.
크기를 바꾸려면 [src/styles/global.css](src/styles/global.css)의 `--stage-w` / `--stage-h`를 수정하세요.

## 동작 정책

- **공지사항** 박스만 클릭 가능 → `/notice`
- **접수 / 제출** 박스는 표시 전용(클릭 불가)
- **카운트다운** 목표일은 [src/pages/index.astro](src/pages/index.astro)의 `<Countdown target="2026-07-13" />`에서 변경. `D-NN` / `D-DAY` / `D+NN` 자동 표시.

## ASCII 아트 교체

[src/assets/ascii-art.txt](src/assets/ascii-art.txt)를 다른 ASCII 텍스트로 교체하면 됩니다. (현재는 임의 생성한 플레이스홀더)

## GitHub Pages 배포

1. GitHub 저장소에 push (`main` 브랜치).
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 설정.
3. push 시 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)이 자동 빌드·배포.
   - `BASE_PATH`는 저장소 이름으로 자동 설정됨 (프로젝트 페이지 `https://<user>.github.io/<repo>/`).
   - 유저/조직 페이지(`<user>.github.io`)에 배포하려면 워크플로의 `BASE_PATH`를 `/`로 두세요.
