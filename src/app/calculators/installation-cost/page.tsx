import { Metadata } from 'next';
import { InstallationCalculator } from '@/components/calculator/InstallationCalculator';
import { AdUnit } from '@/components/ads/AdUnit';

export const metadata: Metadata = {
    title: "Heat Pump Installation Cost Calculator | 2026 Replacement Cost",
    description: "Calculate standard, ductless, and geothermal heat pump installation costs. Get estimates for Carrier, Trane, and various brand tiers in your region.",
};

export default function Page() {
    return (
        <main className="container py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Heat Pump Installation Cost Calculator</h1>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a customized estimate for installing a new heat pump system, including labor and equipment costs for your specific home size and location.
            </p>

            <InstallationCalculator />

            <AdUnit slotId="9876543210" className="mt-12" />

            <section className="mt-16 prose prose-slate max-w-none">
                <h2>Understanding Heat Pump Installation Costs</h2>
                <p>
                    The cost to install a heat pump varies significantly based on three main factors: <strong>Equipment Type</strong>, <strong>Efficiency Rating (SEER2/HSPF2)</strong>, and <strong>Labor Complexity</strong>.
                </p>

                <h3>1. Equipment Types</h3>
                <ul>
                    <li><strong>Ducted Air-Source ($12,000 - $20,000)</strong>: Best for homes with existing ductwork. Replaces your central AC and furnace.</li>
                    <li><strong>Ductless Mini-Split ($4,000 - $6,000 per zone)</strong>: Ideal for homes without ducts or for adding climate control to specific rooms. High efficiency due to no duct loss.</li>
                    <li><strong>Geothermal ($25,000+)</strong>: Most expensive upfront but offers the lowest operating costs by using stable ground temperatures.</li>
                </ul>

                <h3>2. Brand Tiers Matter</h3>
                <p>
                    We categorize brands into three tiers based on reliability, warranty, and features:
                </p>
                <ul>
                    <li><strong>Premium (Trane, Carrier, Lennox)</strong>: Highest SEER ratings, quieter operation, and proprietary variable-speed technology. Expect to pay 20-30% more.</li>
                    <li><strong>Mid-Range (Rheem, Goodman, Daikin)</strong>: Excellent value balance. Good warranties and reliable parts, often sharing components with premium brands.</li>
                    <li><strong>Budget (MrCool, Pioneer, Gree)</strong>: Often DIY-friendly or entry-level units. Lower upfront cost but may have shorter lifespans or louder operation.</li>
                </ul>

                <h3>3. 2026 Tax Credits (25C)</h3>
                <p>
                    The Inflation Reduction Act offers a federal tax credit of <strong>30% of the project cost, up to $2,000 per year</strong>, for qualified heat pumps.
                    Always check for the "Energy Star Cold Climate" certification to ensure eligibility.
                </p>
            </section>
        </main>
    );
}
