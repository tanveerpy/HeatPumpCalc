import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Heat Pump Guides & Resources | Expert Advice 2026',
    description: 'In-depth guides on heat pump costs, installation, and savings. Learn about mini-splits, geothermal, and gas furnace comparisons.',
};

const guides = [
    {
        title: "Heat Pump Cost Guide 2026",
        slug: "heat-pump-cost-2026",
        description: "Complete breakdown of installation costs for air-source, ductless, and geothermal systems. Includes labor rates and equipment prices.",
        category: "Cost Analysis"
    },
    {
        title: "Ductless Mini-Split Cost Guide",
        slug: "ductless-mini-split-cost-2026",
        description: "Detailed pricing for single-zone and multi-zone ductless systems. Compare Mitsubishi, Daikin, and budget brands.",
        category: "Ductless"
    },
    {
        title: "Heat Pump vs. Gas Furnace",
        slug: "heat-pump-vs-gas-furnace",
        description: "Side-by-side comparison of upfront costs, operating expenses, and lifespan. Find out which system saves you more money.",
        category: "Comparison"
    }
];

export default function GuidesIndex() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Heat Pump Resource Center</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Everything you need to know about pricing, installation, and efficiency.
                    Unbiased data to help you make the right choice.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide) => (
                    <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors">
                            {/* Placeholder for future images */}
                            <span className="text-4xl">📚</span>
                        </div>
                        <div className="p-6">
                            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                                {guide.category}
                            </div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-700 transition-colors">
                                {guide.title}
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {guide.description}
                            </p>
                            <div className="mt-4 font-medium text-emerald-600 flex items-center gap-1">
                                Read Guide
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
