import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-blush-100/60 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blush-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-display font-bold italic">S</span>
              </div>
              <span className="font-display font-bold text-gray-900">Style<span className="text-blush-500">Me</span>Daily</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Your personal stylist, available 24/7. Expert guides for every woman, every occasion.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm mb-3">Explore</h4>
            <div className="space-y-2">
              <Link href="/guides" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Style Guides</Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Blog</Link>
              <Link href="/style-quiz" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Style Quiz</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm mb-3">Popular</h4>
            <div className="space-y-2">
              <Link href="/guides/capsule-wardrobe-working-women-2026" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Capsule Wardrobe</Link>
              <Link href="/guides/dress-for-body-shape-guide" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Body Shape Guide</Link>
              <Link href="/compare/nordstrom-vs-asos" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Nordstrom vs ASOS</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm mb-3">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">About</Link>
              <Link href="/privacy" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-blush-500 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-blush-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} StyleMeDaily. All rights reserved.</p>
          <p className="text-xs text-gray-400">Some links are affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
