import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// 글: src/content/posts/ 안의 마크다운 파일 하나가 글 하나다.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // 쿠팡 파트너스 링크가 들어간 글은 true 로 둔다. 고지 문구가 자동으로 붙는다.
    affiliate: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// 수초 데이터: src/data/plants.json 한 파일이 표, 상세 페이지, JSON API 를 모두 만든다.
const plants = defineCollection({
  loader: file('src/data/plants.json'),
  schema: z.object({
    id: z.string(),
    nameKo: z.string(),
    scientificName: z.string(),
    type: z.enum(['착생', '이끼', '전경', '중경', '후경', '부상']),
    placement: z.array(z.enum(['수중', '수상', '착생'])).min(1),
    light: z.enum(['낮음', '보통', '높음']),
    co2: z.enum(['불필요', '권장', '필수']),
    difficulty: z.enum(['쉬움', '보통', '어려움']),
    growth: z.enum(['느림', '보통', '빠름']),
    summary: z.string(),
    // 직접 키우며 잰 값만 넣는다. 재지 않았으면 null 로 둔다.
    measured: z.object({
      par: z.number().nullable(),
      weeksToEstablish: z.number().nullable(),
      note: z.string().nullable(),
    }),
  }),
});

export const collections = { posts, plants };
