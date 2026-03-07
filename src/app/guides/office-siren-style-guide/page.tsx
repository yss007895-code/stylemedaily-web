'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OfficeSirenRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/guides/the-ultimate-office-siren-style-guide-how-to-get-the-viral-tiktok-look');
  }, [router]);

  return (
    <div className="pt-16 text-center">
      <p className="text-sm text-editorial-muted font-body">Redirecting...</p>
    </div>
  );
}
