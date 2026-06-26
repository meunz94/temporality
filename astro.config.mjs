import { defineConfig } from 'astro/config';

// GitHub Pages 배포 설정
// - 프로젝트 페이지(https://<user>.github.io/<repo>)면 BASE_PATH를 '/<repo>/'로 설정.
//   기본값은 이 저장소 이름인 '/temporality'. 저장소 이름이 다르면 BASE_PATH 환경변수로 덮어쓰면 됨.
// - 유저/조직 페이지(https://<user>.github.io)면 BASE_PATH=/ 로 두면 됨.
const RAW_BASE = process.env.BASE_PATH ?? '/';
// 앞뒤 슬래시 제거 후 정규화. 빈 값이면 루트('/'), 아니면 '/<name>/' 형태.
const TRIMMED = RAW_BASE.replace(/^\/+|\/+$/g, '');
const BASE_PATH = TRIMMED ? `/${TRIMMED}/` : '/';
const SITE_URL = process.env.SITE_URL ?? 'https://temporality.art';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  build: {
    assets: 'assets',
  },
});
