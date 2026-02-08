import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heat Pump Cost Guide 2026: Installation, Units & Labor Ratings',
    description: 'Detailed breakdown of heat pump installation costs in 2026. Compare Air Source, Ductless, and Geothermal prices including labor and tax credits.',
};

export default function Page() {
    return (
        <>
            <h1>Heat Pump Cost Guide 2026</h1>
            <p className="lead">
                Switching to a heat pump is one of the smartest home upgrades you can make in 2026.
                However, the upfront cost varies wildly depending on your home size, ductwork status, and equipment choice.
                This guide breaks down exactly what you can expect to pay.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 my-8 not-prose">
                <h3 className="text-emerald-800 font-semibold text-lg mb-2">Quick Answer: Average Costs</h3>
                <ul className="space-y-2 text-emerald-900">
                    <li><strong>Air Source (Ducted):</strong> $12,000 - $20,000</li>
                    <li><strong>Ductless Mini-Split:</strong> $4,000 - $12,000 (per zone)</li>
                    <li><strong>Geothermal:</strong> $25,000 - $45,000</li>
                </ul>
            </div>

            <h2>Factors Affecting Installation Cost</h2>
            <p>
                The wide range in pricing usually comes down to three main factors:
            </p>
            <ul>
                <li><strong>Unit Efficiency (SEER2/HSPF2):</strong> Higher efficiency units cost 20-30% more upfront but save significantly on monthly bills.</li>
                <li><strong>Size (Tonnage):</strong> A 4-ton unit for a large home costs more than a 2-ton unit for a condo.</li>
                <li><strong>Ductwork:</strong> If your existing ducts need repair or replacement, add $2,000 - $5,000 to the total.</li>
            </ul>

            <h2>Cost Breakdown by System Type</h2>
            <h3>1. Ducted Air-Source Heat Pumps</h3>
            <p>
                Most common for homes with existing furnaces. Uses your current vents.
                Expect to pay between <strong>$12,000 and $20,000</strong> installed.
            </p>

            <h3>2. Ductless Mini-Splits</h3>
            <p>
                Perfect for homes with radiators or baseboard heat. No ducts required.
                Cost is per "head" (indoor unit). A typical 3-zone system runs <strong>$12,000 - $18,000</strong>.
            </p>

            <h3>3. Geothermal (Ground Source)</h3>
            <p>
                The most efficient but expensive option. Requires digging vertically or horizontally in your yard.
                Prices start at <strong>$25,000</strong> and can exceed <strong>$45,000</strong>.
            </p>

            <h2>Labor vs Equipment Split</h2>
            <p>
                Homeowners are often surprised that the equipment itself is only about 40-50% of the quote. The rest covers:
            </p>
            <ul>
                <li><strong>Labor:</strong> HVAC technicians are skilled tradespeople. Installation takes 1-3 days.</li>
                <li><strong>Overhead:</strong> Permits, insurance, and warranty processing.</li>
                <li><strong>Electrical:</strong> Many homes need a panel upgrade ($1,500+) to handle the new load.</li>
            </ul>

            <h2>2026 Tax Credits & Rebates</h2>
            <p>
                The Inflation Reduction Act (IRA) is in full swing for 2026.
                The <strong>25C Energy Efficient Home Improvement Credit</strong> covers 30% of the project cost, up to a maximum of <strong>$2,000 a year</strong>.
                State rebates (like Mass Save or NYS Clean Heat) can stack on top of this for huge savings.
            </p>
        </>
    );
}
