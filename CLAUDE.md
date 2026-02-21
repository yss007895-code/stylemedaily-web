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

## 필수 규칙
- 파일 수정 후 반드시 git add, git commit, git push까지 완료할 것
- push 없이 작업 완료 보고 금지
- 커밋 메시지 형식: "[TrendLoopUSA] 변경 내용 요약"
