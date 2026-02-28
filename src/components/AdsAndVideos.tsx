export const AdSenseUnit = () => (
  <div className="w-full my-8 text-center min-h-[250px] bg-gray-50 flex items-center justify-center border border-gray-100 rounded-lg">
    {/* Google AdSense Auto Ad Unit */}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
  </div>
);

export const ViralVideoGrid = () => (
  <section className="my-10">
    <h3 className="text-xl font-bold mb-4">Trending on Socials</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <img src="/images/guides/spring-fashion-trends-2026.webp" alt="Viral TikTok Video" className="w-full h-auto object-cover" />
      </div>
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <img src="/images/guides/editors-choice-fashion-trends-2026.webp" alt="YouTube Shorts Video" className="w-full h-auto object-cover" />
      </div>
    </div>
  </section>
);
