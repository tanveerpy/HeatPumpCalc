import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { AdUnit } from '@/components/ads/AdUnit';

export default function GuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            {/* Article Header / Nav */}
            <div className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur z-20">
                <div className="container mx-auto px-4 h-14 flex items-center">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Calculator
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <article className="lg:col-span-8 prose prose-slate lg:prose-lg max-w-none">
                    {children}
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sticky top-24">
                        <h3 className="font-bold text-lg mb-4">Calculate Your Own Costs</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            See exactly how much you'd pay (and save) with a modern heat pump.
                        </p>
                        <Link href="/" className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                            Open Calculator
                        </Link>

                        <div className="mt-8">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Advertisement</span>
                            <AdUnit slotId="sidebar-123" />
                        </div>
                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-gray-100 py-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to see your numbers?</h2>
                    <Link href="/" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                        Start Calculation
                    </Link>
                </div>
            </div>
        </div>
    );
}
