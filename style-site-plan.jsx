import { useState } from "react";

const tabs = ["Site Preview", "Business Plan", "Revenue Model", "Content Strategy"];

// ─── SITE PREVIEW TAB ───
function SitePreview() {
  const [activeCat, setActiveCat] = useState("all");
  const categories = [
    { id: "all", label: "All Styles" },
    { id: "casual", label: "Casual Chic" },
    { id: "work", label: "Workwear" },
    { id: "date", label: "Date Night" },
    { id: "seasonal", label: "Seasonal" },
    { id: "bodytype", label: "Body Types" },
  ];
  const articles = [
    { cat: "work", title: "The Ultimate Capsule Wardrobe Guide for Working Women 2026", tag: "Pillar Guide", reads: "45K", cpc: "$3.20", img: "👔" },
    { cat: "casual", title: "15 Effortless Casual Outfits That Look Expensive on a Budget", tag: "Trending", reads: "38K", cpc: "$2.80", img: "👗" },
    { cat: "date", title: "What to Wear on a First Date: 20 Outfits for Every Vibe", tag: "Popular", reads: "62K", cpc: "$2.40", img: "💃" },
    { cat: "bodytype", title: "Dressing for Your Body Shape: A Complete Visual Guide", tag: "Evergreen", reads: "55K", cpc: "$4.10", img: "✨" },
    { cat: "seasonal", title: "Spring 2026 Fashion Trends: What's In & What's Out", tag: "New", reads: "28K", cpc: "$1.90", img: "🌸" },
    { cat: "work", title: "Nordstrom vs ASOS: Best Online Shopping for Professional Women", tag: "Comparison", reads: "22K", cpc: "$5.50", img: "🛍️" },
  ];
  const filtered = activeCat === "all" ? articles : articles.filter(a => a.cat === activeCat);

  return (
    <div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #f5e6ff 100%)", borderRadius: 20, padding: "48px 32px", marginBottom: 32, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(236,72,153,0.15), transparent)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 160, height: 160, background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent)", borderRadius: "50%" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-block", background: "rgba(236,72,153,0.12)", color: "#be185d", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginBottom: 16, fontFamily: "JetBrains Mono", letterSpacing: 1 }}>YOUR PERSONAL STYLE STARTS HERE</div>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.15, margin: "0 0 12px 0" }}>
            Find Your<br />
            <span style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Perfect Style</span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 420, lineHeight: 1.6, margin: "0 0 24px 0" }}>
            Expert styling guides, curated outfit ideas, and personalized fashion advice for every woman, every occasion, every body.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)", color: "white", border: "none", padding: "12px 28px", borderRadius: 14, fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 4px 15px rgba(236,72,153,0.3)" }}>Take the Style Quiz →</button>
            <button style={{ background: "white", color: "#6b7280", border: "1px solid #e5e7eb", padding: "12px 28px", borderRadius: 14, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Browse Guides</button>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 28 }}>
            {[{ v: "500K+", l: "Monthly Readers" }, { v: "200+", l: "Style Guides" }, { v: "50+", l: "Brand Partners" }].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "JetBrains Mono", fontSize: 20, fontWeight: 700, color: "#be185d" }}>{s.v}</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
        {categories.map(c => (
          <button key={c.id} onClick={() => setActiveCat(c.id)} style={{
            padding: "8px 18px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", transition: "all 0.2s",
            background: activeCat === c.id ? "linear-gradient(135deg, #ec4899, #a855f7)" : "#f9fafb",
            color: activeCat === c.id ? "white" : "#6b7280",
            boxShadow: activeCat === c.id ? "0 2px 10px rgba(236,72,153,0.2)" : "none",
          }}>{c.label}</button>
        ))}
      </div>

      {/* Article Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {filtered.map((a, i) => (
          <div key={i} style={{ background: "white", borderRadius: 16, padding: 20, border: "1px solid #f3e8ff", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#d8b4fe"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(168,85,247,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#f3e8ff"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{a.img}</div>
            <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 700, background: a.tag === "New" ? "#dcfce7" : a.tag === "Trending" ? "#fef3c7" : "#f3e8ff", color: a.tag === "New" ? "#15803d" : a.tag === "Trending" ? "#b45309" : "#7c3aed", padding: "2px 8px", borderRadius: 8 }}>{a.tag}</span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1f2937", margin: "0 0 8px 0", lineHeight: 1.4 }}>{a.title}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af", fontFamily: "JetBrains Mono" }}>
              <span>{a.reads} reads</span>
              <span>CPC: {a.cpc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div style={{ background: "linear-gradient(135deg, #fdf2f8, #f5f3ff)", borderRadius: 20, padding: 32, marginTop: 32, textAlign: "center", border: "1px solid #f3e8ff" }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>💌</div>
        <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 700, color: "#1f2937", margin: "0 0 8px 0" }}>Weekly Style Drop</h3>
        <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 16px 0" }}>Outfit ideas, trend alerts, and exclusive deals every Thursday.</p>
        <div style={{ display: "flex", gap: 8, maxWidth: 360, margin: "0 auto" }}>
          <input placeholder="your@email.com" style={{ flex: 1, padding: "10px 16px", borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 14, outline: "none" }} />
          <button style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)", color: "white", border: "none", padding: "10px 20px", borderRadius: 12, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

// ─── BUSINESS PLAN TAB ───
function BusinessPlan() {
  return (
    <div style={{ color: "#374151" }}>
      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 28, color: "#1a1a2e", marginBottom: 8 }}>Business Plan Overview</h2>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>여성 퍼스널 스타일리스트 콘텐츠 사이트 — 광고 + 제휴 수익 모델</p>

      {[
        { title: "🎯 사이트 컨셉", items: [
          { h: "사이트명 후보", d: "HerStyleCode.com / ChicByDesign.com / StyleMeDaily.com / DressedByHer.com / TheStyleEdit.co" },
          { h: "포지셔닝", d: "20-40대 여성을 위한 실용적 스타일 가이드. '인스타 감성'이 아닌 '실생활에서 바로 쓸 수 있는' 패션 조언에 집중" },
          { h: "차별화", d: "체형별/상황별/예산별 맞춤 가이드 + 'Shop the Look' 제휴 링크로 바로 구매 가능" },
        ]},
        { title: "👩 타겟 오디언스", items: [
          { h: "Primary", d: "25-40세 미국 여성. 직장인, 워킹맘. 스타일에 관심 있지만 시간이 부족한 여성" },
          { h: "Secondary", d: "18-25세 대학생/사회초년생. 예산 내에서 트렌디하게 입고 싶은 여성" },
          { h: "Tertiary", d: "40-55세 여성. 나이에 맞는 세련된 스타일을 찾는 여성" },
        ]},
        { title: "🏗️ 기술 스택", items: [
          { h: "프레임워크", d: "Next.js 14 + TypeScript + Tailwind CSS (AIStackHub과 동일 구조)" },
          { h: "호스팅", d: "Cloudflare Pages (무료, 글로벌 CDN)" },
          { h: "CMS", d: "MDX (마크다운 기반 콘텐츠) 또는 Sanity.io (비주얼 에디터)" },
          { h: "이미지", d: "Unsplash/Pexels 무료 이미지 + Canva로 커스텀 그래픽" },
          { h: "이메일", d: "ConvertKit 또는 Beehiiv (뉴스레터)" },
          { h: "분석", d: "Google Analytics 4 + Cloudflare Analytics" },
        ]},
        { title: "💰 초기 비용", items: [
          { h: "도메인", d: "$10-15/년 (Cloudflare Registrar)" },
          { h: "호스팅", d: "$0 (Cloudflare Pages 무료)" },
          { h: "이미지 도구", d: "$0 (Canva 무료) ~ $13/월 (Canva Pro)" },
          { h: "이메일", d: "$0 (1,000 구독자까지 무료)" },
          { h: "총 시작 비용", d: "~$10-15만 필요" },
        ]},
      ].map((section, i) => (
        <div key={i} style={{ background: "white", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #f3e8ff" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1f2937", marginBottom: 16, margin: "0 0 16px 0" }}>{section.title}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {section.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: 12 }}>
                <div style={{ minWidth: 120, fontSize: 12, fontWeight: 700, color: "#a855f7", fontFamily: "JetBrains Mono" }}>{item.h}</div>
                <div style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.5 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── REVENUE MODEL TAB ───
function RevenueModel() {
  const affiliates = [
    { brand: "Nordstrom", commission: "5-11%", cookie: "12 hours", avg: "$150", note: "럭셔리/프리미엄 추천" },
    { brand: "ASOS", commission: "5-7%", cookie: "30 days", avg: "$65", note: "트렌디/어포더블" },
    { brand: "H&M", commission: "7-10.5%", cookie: "30 days", avg: "$45", note: "베이직/일상복" },
    { brand: "REVOLVE", commission: "5%", cookie: "7 days", avg: "$200+", note: "인플루언서 패션" },
    { brand: "Zappos", commission: "7%", cookie: "14 days", avg: "$150", note: "신발/액세서리" },
    { brand: "Stitch Fix", commission: "4%", cookie: "30 days", avg: "$55", note: "AI 스타일링 서비스" },
    { brand: "Amazon Fashion", commission: "4%", cookie: "24 hours", avg: "$35", note: "범용/가성비" },
    { brand: "ShopBop", commission: "7%", cookie: "15 days", avg: "$180", note: "디자이너 브랜드" },
  ];

  const months = [
    { m: "1-2", traffic: "2K-8K", adsense: "$20-80", affiliate: "$50-200", total: "$70-280" },
    { m: "3-4", traffic: "15K-35K", adsense: "$150-400", affiliate: "$400-1,200", total: "$550-1,600" },
    { m: "5-6", traffic: "40K-80K", adsense: "$500-1,200", affiliate: "$1,500-4,000", total: "$2,000-5,200" },
    { m: "7-9", traffic: "80K-150K", adsense: "$1,200-3,000", affiliate: "$3,000-8,000", total: "$4,200-11,000" },
    { m: "10-12", traffic: "150K-300K", adsense: "$3,000-6,000", affiliate: "$6,000-15,000", total: "$9,000-21,000" },
  ];

  return (
    <div style={{ color: "#374151" }}>
      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 28, color: "#1a1a2e", marginBottom: 8 }}>Revenue Model</h2>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>패션 블로그는 제휴 마케팅이 핵심 수익원입니다 (AdSense보다 2-3배 높은 수익)</p>

      {/* Revenue Split */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { label: "제휴 마케팅", pct: "55-65%", color: "#ec4899", desc: "패션 브랜드 링크 커미션" },
          { label: "Google AdSense", pct: "25-30%", color: "#a855f7", desc: "디스플레이 광고 수익" },
          { label: "스폰서/뉴스레터", pct: "10-15%", color: "#f59e0b", desc: "브랜드 협찬 + 유료 뉴스레터" },
        ].map((r, i) => (
          <div key={i} style={{ background: "white", borderRadius: 14, padding: 20, textAlign: "center", border: "1px solid #f3e8ff" }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: `${r.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 20, fontWeight: 800, color: r.color, fontFamily: "JetBrains Mono" }}>{r.pct.split("-")[0]}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1f2937" }}>{r.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: r.color, fontFamily: "JetBrains Mono" }}>{r.pct}</div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>{r.desc}</div>
          </div>
        ))}
      </div>

      {/* Affiliate Programs */}
      <div style={{ background: "white", borderRadius: 16, padding: 24, marginBottom: 24, border: "1px solid #f3e8ff" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", margin: "0 0 16px 0" }}>🛍️ 주요 제휴 프로그램</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f3e8ff" }}>
                {["브랜드", "커미션", "쿠키", "평균 주문", "용도"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "#a855f7", fontFamily: "JetBrains Mono", fontSize: 11, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {affiliates.map((a, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #faf5ff" }}>
                  <td style={{ padding: "8px 10px", fontWeight: 600, color: "#1f2937" }}>{a.brand}</td>
                  <td style={{ padding: "8px 10px", color: "#15803d", fontFamily: "JetBrains Mono", fontWeight: 600 }}>{a.commission}</td>
                  <td style={{ padding: "8px 10px", color: "#6b7280" }}>{a.cookie}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono" }}>{a.avg}</td>
                  <td style={{ padding: "8px 10px", color: "#6b7280", fontSize: 12 }}>{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Forecast */}
      <div style={{ background: "white", borderRadius: 16, padding: 24, border: "1px solid #f3e8ff" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", margin: "0 0 16px 0" }}>📈 12개월 수익 예측</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f3e8ff" }}>
                {["기간", "월 트래픽", "AdSense", "제휴 수익", "월 총 수익"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "#a855f7", fontFamily: "JetBrains Mono", fontSize: 11, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {months.map((m, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #faf5ff", background: i === months.length - 1 ? "#fdf2f8" : "transparent" }}>
                  <td style={{ padding: "8px 10px", fontWeight: 600 }}>Month {m.m}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono" }}>{m.traffic}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono" }}>{m.adsense}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono" }}>{m.affiliate}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono", fontWeight: 700, color: "#be185d" }}>{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 16, padding: 12, background: "#fef3c7", borderRadius: 10, fontSize: 12, color: "#92400e" }}>
          💡 패션 블로그 수익의 핵심: "Shop the Look" 형태로 제휴 링크를 콘텐츠에 자연스럽게 녹이면 클릭률이 3-5배 높아집니다. 비교 글("Nordstrom vs ASOS")과 시즌별 가이드("Spring 2026 Must-Haves")가 가장 높은 전환율을 보입니다.
        </div>
      </div>
    </div>
  );
}

// ─── CONTENT STRATEGY TAB ───
function ContentStrategy() {
  const keywords = [
    { kw: "capsule wardrobe", vol: "135K", cpc: "$1.50", diff: "Medium", type: "Pillar" },
    { kw: "what to wear to a wedding", vol: "90K", cpc: "$2.10", diff: "Low", type: "Seasonal" },
    { kw: "work outfit ideas", vol: "74K", cpc: "$3.20", diff: "Medium", type: "Pillar" },
    { kw: "how to dress for your body type", vol: "60K", cpc: "$4.10", diff: "Low", type: "Evergreen" },
    { kw: "nordstrom anniversary sale", vol: "550K", cpc: "$5.50", diff: "High", type: "Event" },
    { kw: "spring fashion trends 2026", vol: "45K", cpc: "$1.90", diff: "Low", type: "Seasonal" },
    { kw: "best jeans for women", vol: "40K", cpc: "$3.80", diff: "Medium", type: "Product" },
    { kw: "date night outfit", vol: "55K", cpc: "$2.40", diff: "Low", type: "Situation" },
    { kw: "professional outfits for women", vol: "35K", cpc: "$3.50", diff: "Medium", type: "Pillar" },
    { kw: "affordable fashion brands", vol: "28K", cpc: "$2.20", diff: "Low", type: "Guide" },
  ];

  const phases = [
    { phase: "Phase 1 (Month 1-2)", title: "Foundation", color: "#ec4899", items: [
      "체형별 스타일 가이드 5편 (Evergreen 트래픽의 핵심)",
      "시즌별 '무엇을 입을까' 가이드 5편",
      "브랜드 비교 글 5편 (Nordstrom vs ASOS 등 → 제휴 전환율 최고)",
      "'Shop the Look' 위젯 탑재 (각 글에 3-5개 제휴 링크)",
      "Pinterest 계정 개설 & 핀 50개 생성 (패션 블로그 트래픽의 40%+)",
    ]},
    { phase: "Phase 2 (Month 3-4)", title: "Growth", color: "#a855f7", items: [
      "주간 뉴스레터 시작 ('Weekly Style Drop')",
      "트렌드 분석 글 8편 (시즌별 트렌드, 셀럽 스타일)",
      "제품 리뷰 & 'Best of' 시리즈 10편 (Best Jeans, Best Work Bags 등)",
      "Instagram Reels/TikTok 시작 (60초 스타일 팁 → 블로그 트래픽 유도)",
      "Style Quiz 도구 구현 (이메일 수집 + 개인화 콘텐츠)",
    ]},
    { phase: "Phase 3 (Month 5-6+)", title: "Scale & Monetize", color: "#f59e0b", items: [
      "Google AdSense 신청 (15-20개 글 이후)",
      "스폰서 포스트 수주 시작 ($200-1,000/건)",
      "시즌 이벤트 콘텐츠 (블랙프라이데이, 홀리데이 기프트 가이드)",
      "'Outfit of the Week' 유료 뉴스레터 런칭 ($5/월)",
      "YouTube 채널 시작 (룩북, 하울, 스타일 팁 → 패션 영상 조회수 높음)",
    ]},
  ];

  return (
    <div style={{ color: "#374151" }}>
      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 28, color: "#1a1a2e", marginBottom: 8 }}>Content Strategy</h2>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>패션 블로그 성공의 핵심: Pinterest + 시즌 콘텐츠 + Shop the Look</p>

      {/* Target Keywords */}
      <div style={{ background: "white", borderRadius: 16, padding: 24, marginBottom: 24, border: "1px solid #f3e8ff" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", margin: "0 0 16px 0" }}>🔑 고수익 타겟 키워드 TOP 10</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f3e8ff" }}>
                {["키워드", "월 검색량", "CPC", "난이도", "콘텐츠 유형"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "#a855f7", fontFamily: "JetBrains Mono", fontSize: 11, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {keywords.map((k, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #faf5ff" }}>
                  <td style={{ padding: "8px 10px", fontWeight: 600, color: "#1f2937" }}>{k.kw}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono", color: "#be185d" }}>{k.vol}</td>
                  <td style={{ padding: "8px 10px", fontFamily: "JetBrains Mono", color: "#15803d" }}>{k.cpc}</td>
                  <td style={{ padding: "8px 10px" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 8,
                      background: k.diff === "Low" ? "#dcfce7" : k.diff === "Medium" ? "#fef3c7" : "#fee2e2",
                      color: k.diff === "Low" ? "#15803d" : k.diff === "Medium" ? "#b45309" : "#b91c1c",
                    }}>{k.diff}</span>
                  </td>
                  <td style={{ padding: "8px 10px", fontSize: 12, color: "#6b7280" }}>{k.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Roadmap */}
      {phases.map((p, i) => (
        <div key={i} style={{ background: "white", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #f3e8ff", borderLeft: `4px solid ${p.color}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, background: `${p.color}20`, color: p.color, padding: "3px 10px", borderRadius: 8, fontFamily: "JetBrains Mono" }}>{p.phase}</span>
            <span style={{ fontWeight: 700, color: "#1f2937" }}>{p.title}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {p.items.map((item, j) => (
              <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: p.color, marginTop: 2, fontSize: 14 }}>→</span>
                <span style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Pinterest Tip */}
      <div style={{ background: "linear-gradient(135deg, #fef2f2, #fff7ed)", borderRadius: 16, padding: 24, border: "1px solid #fecaca" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px 0" }}>📌 Pinterest = 패션 블로그 트래픽의 핵심</h3>
        <p style={{ fontSize: 13, color: "#7f1d1d", lineHeight: 1.6, margin: 0 }}>
          패션 블로그 트래픽의 40-60%가 Pinterest에서 옵니다. 매 글마다 세로형 핀 이미지(1000x1500px)를 2-3개 만들어 올리세요.
          "Outfit Ideas for [상황]" "How to Style [아이템]" "Best [카테고리] 2026" 형식의 핀이 가장 높은 클릭률을 보입니다.
          Canva 무료 버전으로 충분히 만들 수 있습니다.
        </p>
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function StyleSiteApp() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ background: "white", borderBottom: "1px solid #f3e8ff", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #ec4899, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontFamily: "Playfair Display", fontSize: 16 }}>S</div>
            <span style={{ fontFamily: "Playfair Display", fontWeight: 700, fontSize: 18, color: "#1f2937" }}>StyleMe<span style={{ color: "#ec4899" }}>Daily</span></span>
          </div>
          <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "JetBrains Mono" }}>Business Plan + Prototype</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "white", borderBottom: "1px solid #f3e8ff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px", display: "flex", gap: 4, overflowX: "auto" }}>
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              padding: "14px 20px", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: "transparent", whiteSpace: "nowrap", transition: "all 0.2s",
              color: activeTab === i ? "#ec4899" : "#9ca3af",
              borderBottom: activeTab === i ? "2px solid #ec4899" : "2px solid transparent",
            }}>{tab}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
        {activeTab === 0 && <SitePreview />}
        {activeTab === 1 && <BusinessPlan />}
        {activeTab === 2 && <RevenueModel />}
        {activeTab === 3 && <ContentStrategy />}
      </div>
    </div>
  );
}
