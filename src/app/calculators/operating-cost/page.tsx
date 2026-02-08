import { Metadata } from 'next';
import { OperatingCostCalculator } from '@/components/calculator/OperatingCostCalculator';
import { AdUnit } from '@/components/ads/AdUnit';

export const metadata: Metadata = {
    title: "Heat Pump Running Cost Calculator | Savings vs Gas & Oil",
    description: "Calculate your potential savings. Compare heat pump running costs vs natural gas, oil, propane, and electric furnaces in 2026.",
};

export default function Page() {
    return (
        <main className="container py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Heat Pump Operating Cost Calculator</h1>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                See exactly how much you can save on your monthly heating bills by switching to a high-efficiency heat pump.
            </p>

            <OperatingCostCalculator />

            <AdUnit slotId="5555555555" className="mt-12" />

            <section className="mt-16 prose prose-slate max-w-none">
                <h2>How We Calculate Savings</h2>
                <p>
                    Heat pumps are unique because they <strong>move heat</strong> rather than generating it. This allows them to operate at 300% to 400% efficiency, compared to 95% for a top-tier gas furnace.
                </p>

                <h3>The "COP" Advantage</h3>
                <p>
                    Coefficient of Performance (COP) measures efficiency. A COP of 3.0 means for every $1 of electricity you buy, you get $3 worth of heat.
                </p>
                <ul>
                    <li><strong>Gas Furnace</strong>: COP 0.95 (Always loses energy)</li>
                    <li><strong>Electric Baseboard</strong>: COP 1.0 (Direct 1:1 ratio)</li>
                    <li><strong>Heat Pump</strong>: COP 2.5 - 4.0 (Multiplies energy)</li>
                </ul>

                <h3>Regional Fuel Prices</h3>
                <p>
                    Savings depend heavily on the "Spark Spread" — the price difference between natural gas/oil and electricity in your area.
                </p>
                <ul>
                    <li><strong>High Savings Zones</strong>: Areas with expensive heating oil or propane (Northeast US, Rural areas). ROI is often 3-5 years.</li>
                    <li><strong>Moderate Savings</strong>: Areas with cheap natural gas. You may need a high-efficiency heat pump (COP &gt; 3.5) to see significant bill reductions.</li>
                </ul>

                <blockquote>
                    <strong>Tip:</strong> Even if operating costs are similar to gas, a heat pump saves you the cost of maintaining a separate Air Conditioner, improving total home ROI.
                </blockquote>
            </section>
        </main>
    );
}
