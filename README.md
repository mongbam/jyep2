# jyep2.com

수초 어항 블로그. Astro로 만든 정적 사이트이며 Cloudflare Pages에 배포한다.

## 글 추가하기

`src/content/posts/` 에 마크다운 파일을 하나 만든다. 파일 이름이 주소가 된다 (`my-post.md` → `/posts/my-post/`).

```markdown
---
title: 글 제목
description: 검색 결과와 목록에 보이는 한두 문장 요약
pubDate: 2026-11-13
tags: [세팅]
affiliate: false   # 쿠팡 파트너스 링크가 있으면 true (고지 문구가 자동으로 붙는다)
draft: false       # true 면 사이트에 올라가지 않는다
---

본문
```

## 수초 데이터 추가하기

`src/data/plants.json` 에 항목을 추가한다. 이 파일 하나로 표(`/plants/`), 상세 페이지, JSON API(`/api/plants.json`)가 함께 만들어진다.

- 형식이 틀리면 빌드가 실패하므로 잘못된 데이터가 사이트에 올라가지 않는다. 허용 값은 `src/content.config.ts` 에 있다.
- `measured` 에는 직접 잰 값만 넣는다. 재지 않았으면 `null` 로 둔다.

## 로컬에서 보기

```
npm install
npm run dev
```

## 배포

`main` 브랜치에 올리면 Cloudflare Pages가 자동으로 빌드해 배포한다.

- 빌드 명령: `npm run build`
- 출력 폴더: `dist`
- 애드센스 게시자 ID는 `src/consts.ts` 에 들어 있다. 광고 단위를 만들면 같은 파일의 `ADSENSE_SLOT_POST` 에 슬롯 ID를 넣는다.

## 주의

API 키, 토큰, 비밀번호는 이 저장소에 넣지 않는다.
