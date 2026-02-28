import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide }: { guide: StyleGuide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="group block">
      {guide.image ? (
        <div className="relative h-52 overflow-hidden bg-editorial-light">
          <SafeImage
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      ) : null}
      <div className="pt-4">
        <p className="text-[10px] tracking-editorial uppercase text-editorial-muted font-body mb-2">
          {guide.tag} &middot; {guide.readTime}
        </p>
        <h3 className="font-display text-xl font-normal text-editorial-text group-hover:text-editorial-accent transition-colors leading-snug mb-2">
          {guide.title}
        </h3>
        <p className="text-sm text-editorial-muted font-body line-clamp-2 leading-relaxed">{guide.description}</p>
      </div>
    </Link>
  );
}
