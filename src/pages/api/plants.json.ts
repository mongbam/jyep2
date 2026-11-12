import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// 수초 데이터를 기계가 읽을 수 있는 JSON 으로 내보낸다: /api/plants.json
export const GET: APIRoute = async () => {
  const plants = await getCollection('plants');
  return new Response(
    JSON.stringify(
      plants.map((plant) => plant.data),
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
};
