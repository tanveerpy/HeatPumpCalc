import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heat Pump vs. Gas Furnace: Which is Cheaper in 2026?',
    description: 'Operating cost comparison between heat pumps and natural gas furnaces. Analysis of efficiency, climate performance, and long-term ROI.',
};

export default function Page() {
    return (
        <>
            <h1>Heat Pump vs. Gas Furnace Cost</h1>
            <p className="lead">
                The debate is settled: Heat pumps range from "slightly cheaper" to "massively cheaper" than gas furnaces to operate,
                depending on your electricity rates. But is it worth the higher upfront price?
            </p>

            <h2>Upfront Cost Comparison</h2>
            <p>
                <strong>Gas Furnace:</strong> A typical replacement costs <strong>$4,500 - $8,000</strong>. <br />
                <strong>Heat Pump:</strong> A comparable ducted replacement costs <strong>$12,000 - $18,000</strong>.
            </p>
            <p>
                The heat pump is clearly more expensive day one. However, it also replaces your <em>Air Conditioner</em>.
                If you need to replace both a furnace and AC, the price gap disappears.
            </p>

            <h2>Operating Cost Analysis</h2>
            <p>
                Heat pumps move heat rather than generating it. This makes them 300% - 400% efficient (COP 3-4).
                Gas furnaces are at best 98% efficient.
            </p>
            <p>
                Even if electricity is 3x more expensive than gas per unit of energy, the heat pump's 4x efficiency advantage wins out.
                Most homeowners save <strong>$200 - $600 per year</strong> on heating bills.
            </p>

            <h2>The "Cold Climate" Factor</h2>
            <p>
                Old heat pumps stopped working at 32°F. Modern "Cold Climate Inverters" (like HyperHeat) work down to <strong>-13°F</strong> or lower.
                Gas backup is rarely needed anymore, except in extreme arctic zones (Zone 7+).
            </p>

            <h2>Lifespan & Maintenance</h2>
            <ul>
                <li><strong>Gas Furnace:</strong> 15-20 years. Simpler mechanism, less moving parts.</li>
                <li><strong>Heat Pump:</strong> 15 years. Runs year-round (heating + cooling), so it accumulates wear faster.</li>
            </ul>

            <h2>Verdict: Who Should Switch?</h2>
            <ol>
                <li>If you heat with <strong>Oil, Propane, or Electric Resistance</strong>: Switch immediately. ROI is 2-4 years.</li>
                <li>If you have <strong>Solar Panels</strong>: Free heating! Switch immediately.</li>
                <li>If you have <strong>Cheap Natural Gas</strong>: Switch when your AC dies, so you get heating essentially for "free" with the new AC unit.</li>
            </ol>
        </>
    );
}
