export const SITE = {
  name: '무스고 노트',
  title: '무스고 노트 · 수초 어항 기록',
  description: '수초와 레이아웃을 직접 키우며 잰 값으로 정리하는 수초 어항 블로그.',
  url: 'https://jyep2.com',
  lang: 'ko',
};

// 애드센스 게시자 ID. 공개 값이다. 모든 페이지의 <head> 에 애드센스 코드가 들어간다.
export const ADSENSE_CLIENT: string | undefined =
  import.meta.env.PUBLIC_ADSENSE_CLIENT ?? 'ca-pub-1678466552354015';

// 글 본문 아래 광고 단위의 슬롯 ID. 애드센스에서 광고 단위를 만든 뒤 숫자를 넣으면 광고 자리가 켜진다.
export const ADSENSE_SLOT_POST: string | undefined = undefined;

export const COUPANG_DISCLOSURE =
  '이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.';
