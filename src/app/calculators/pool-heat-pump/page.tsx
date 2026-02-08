import { Metadata } from 'next';
import { PoolHeatPumpCalculator } from '@/components/calculator/PoolHeatPumpCalculator';
import { AdUnit } from '@/components/ads/AdUnit';

export const metadata: Metadata = {
    title: "Pool Heat Pump Cost Calculator | Size & Running Cost Estimator",
    description: "Calculate recommended heat pump size (BTU) and estimated seasonal electrical costs for your swimming pool.",
};

export default function Page() {
    return (
        <main className="container py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Pool Heat Pump Cost Calculator</h1>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Planning to heat your pool? Estimate the equipment size you need and your seasonal electricity running costs.
            </p>
            <PoolHeatPumpCalculator />
            <AdUnit slotId="1111111111" className="mt-12" />

            <section className="mt-16 prose prose-slate max-w-none">
                <h2>Sizing Your Pool Heat Pump</h2>
                <p>
                    Unlike gas heaters which heat pools quickly (hours), heat pumps are designed for <strong>steady, efficient maintenance</strong> of temperature over days.
                    Undersizing your unit will result in the pool failing to hold temperature during cold nights.
                </p>

                <h3>Recommended Sizing Guide</h3>
                <div className="not-prose overflow-x-auto">
                    <table className="min-w-full text-sm text-left border border-border rounded-lg overflow-hidden">
                        <thead className="bg-muted">
                            <tr>
                                <th className="p-3 font-semibold">Pool Size (Gallons)</th>
                                <th className="p-3 font-semibold">Recommended BTU</th>
                                <th className="p-3 font-semibold">Typical Application</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr className="bg-white">
                                <td className="p-3">&lt; 10,000</td>
                                <td className="p-3">50,000 - 65,000</td>
                                <td className="p-3">Small Plunge Pools / Spas</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="p-3">10,000 - 20,000</td>
                                <td className="p-3">80,000 - 110,000</td>
                                <td className="p-3">Average Residential Pool</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-3">25,000+</td>
                                <td className="p-3">120,000 - 140,000</td>
                                <td className="p-3">Large / Commercial</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="mt-8">Heat Pump vs. Gas Heater</h3>
                <ul>
                    <li><strong>Gas Heater</strong>: Fast heat up. Expensive to run ($300-$500/month). Best for occasional weekends or spas.</li>
                    <li><strong>Heat Pump</strong>: Slow heat up. Cheap to run ($50-$150/month). Best for keeping the pool warm all season long.</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                    *Running costs assume a swimming season temperature of 80-82°F and average electricity rates.
                </p>
            </section>
        </main>
    );
}
