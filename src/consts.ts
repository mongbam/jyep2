export const SITE = {
  name: 'jyep2',
  title: 'jyep2 · 수초 어항 기록',
  description: '수초와 레이아웃을 직접 키우며 잰 값으로 정리하는 수초 어항 블로그.',
  url: 'https://jyep2.com',
  lang: 'ko',
};

// 애드센스 승인 후 Cloudflare Pages 환경 변수에 PUBLIC_ADSENSE_CLIENT (예: ca-pub-0000000000000000) 를 넣으면 광고 자리가 켜진다.
export const ADSENSE_CLIENT: string | undefined = import.meta.env.PUBLIC_ADSENSE_CLIENT;

export const COUPANG_DISCLOSURE =
  '이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.';
