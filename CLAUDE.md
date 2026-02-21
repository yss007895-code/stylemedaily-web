# StyleMeDaily - Claude Code Agent

## 프로젝트 개요
패션 어필리에이트 블로그. Amazon Associates + Skimlinks로 수익화.
사이트: https://bjunseog60-boop.github.io/trendloop-usa-official/

## 에이전트 명령어

### /generate-post
새 블로그 포스트를 자동 생성해서 GitHub에 push합니다.
```
node scripts/agent-generate.js
```

### /update-trends  
Google Trends에서 패션 트렌드를 수집합니다.
```
node scripts/update-trends.js
```

### /seo-check
Search Console 데이터로 SEO를 분석합니다.
```
node scripts/optimize-seo.js
```

### /full-auto
트렌드 수집 → 포스트 생성 → SEO 최적화 → push 전체 자동 실행
```
node scripts/agent-generate.js --full
```

## 포스트 생성 규칙
- 타겟: 미국 20-40대 여성
- 언어: 영어
- 길이: 800-1200 단어
- Amazon 제품 3-5개 포함 (어필리에이트 링크)
- SEO 키워드 자연스럽게 포함
- guides-content-new.ts 파일에 추가

## 파일 구조
- `src/lib/guides-data.ts` - 가이드 메타데이터
- `src/lib/guides-content-new.ts` - 최신 콘텐츠
- `src/lib/guides-content-batch12.ts` - 배치 12 콘텐츠
- `scripts/` - 자동화 스크립트

## 콘텐츠 품질 규칙

### AI 느낌 제거 (절대 금지 표현)
- "In today's world", "In this article", "Let's dive in"
- "It's important to note", "Whether you're a beginner or expert"
- "In conclusion", "To sum up", "All in all"
- "game-changer", "revolutionary", "cutting-edge"
- "seamless", "leverage", "robust", "streamline"
- "Look no further", "Without further ado"
- "Are you looking for", "Have you ever wondered"
- 느낌표(!) 글 전체에서 최대 2개
- 이모지 사용 금지

### 자연스러운 글쓰기
- 문장 길이 랜덤: 짧은 문장(5단어)과 긴 문장(25단어) 섞기
- 구어체 자연스럽게: "honestly", "here's the thing", "I'd skip this"
- 개인 경험/의견 톤: "I've been using this for 3 months" 스타일
- 불완전한 문장 가끔: "Worth it? Absolutely."
- 부정적 의견도 포함 (단점 언급 필수)
- 모든 글 도입부 매번 다르게 (템플릿 반복 금지)
- 한 문단 2~4문장

### SEO + E-E-A-T
- FAQ 스키마 JSON-LD 자동 삽입
- 목차(Table of Contents) 추가
- 내부 링크 2~3개 (같은 사이트 관련 글)
- 외부 출처 링크 1~2개 (신뢰성)
- 업데이트 날짜 표시
- 읽기 시간 표시
- 저자 프로필 섹션

### 사이트 톤: 친근한 패션 블로거
- 20대 여성 대상, 친구에게 말하듯 친근하게
- 브랜드명, 원단, 컬러팔레트 구체적으로 언급
- 트렌드의 문화적 맥락 설명

## 필수 규칙
- 파일 수정 후 반드시 git add, git commit, git push까지 완료할 것
- push 없이 작업 완료 보고 금지
- 커밋 메시지 형식: "[TrendLoopUSA] 변경 내용 요약"
