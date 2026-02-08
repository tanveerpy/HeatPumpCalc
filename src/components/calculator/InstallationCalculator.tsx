'use client';

import { useState } from 'react';
import { HeatPumpType, Region, BrandTier, estimateInstallationCost, formatCurrency, REGIONS } from '@/lib/calculator-logic';
import { Calculator, MapPin, BadgeDollarSign, Home, CheckCircle2 } from 'lucide-react';

export function InstallationCalculator() {
    const [sqFt, setSqFt] = useState<number>(2000);
    const [region, setRegion] = useState<Region>('US');
    const [tier, setTier] = useState<BrandTier>('mid-range');
    const [systemType, setSystemType] = useState<HeatPumpType>('air-source_ducted');

    const cost = estimateInstallationCost(sqFt, systemType, region, tier);

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-primary/5 p-6 border-b border-border">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    Installation Cost Estimator
                </h2>
                <p className="text-muted-foreground">Calculate upfront costs for different regions and equipment tiers.</p>
            </div>

            <div className="p-6 grid gap-6 md:grid-cols-2">
                {/* Controls */}
                <div className="space-y-4">

                    {/* Region Selector */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Location
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {(Object.keys(REGIONS) as Region[]).map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setRegion(r)}
                                    className={`py-2 text-sm font-medium rounded-md border transition-colors ${region === r
                                            ? 'bg-primary text-primary-foreground border-primary'
                                            : 'bg-background hover:bg-muted text-muted-foreground border-input'
                                        }`}
                                >
                                    {r} ({REGIONS[r].symbol})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Home Size */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <Home className="w-4 h-4" /> Home Size (Sq. Ft.)
                        </label>
                        <input
                            type="number"
                            value={sqFt}
                            onChange={(e) => setSqFt(Number(e.target.value))}
                            className="w-full p-2 border border-input rounded-md"
                            step={100}
                            min={500}
                        />
                    </div>

                    {/* System Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">System Type</label>
                        <select
                            value={systemType}
                            onChange={(e) => setSystemType(e.target.value as HeatPumpType)}
                            className="w-full p-2 border border-input rounded-md bg-background"
                        >
                            <option value="air-source_ducted">Ducted Air-Source (Central)</option>
                            <option value="mini-split">Ductless Mini-Split</option>
                            <option value="geothermal">Geothermal (Ground Source)</option>
                        </select>
                    </div>

                    {/* Brand Tier */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <BadgeDollarSign className="w-4 h-4" /> Equipment Tier
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['budget', 'mid-range', 'premium'] as BrandTier[]).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTier(t)}
                                    className={`py-2 text-xs font-bold uppercase rounded-md border transition-colors ${tier === t
                                            ? 'bg-secondary text-secondary-foreground border-secondary'
                                            : 'bg-background hover:bg-muted text-muted-foreground border-input'
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Results */}
                <div className="bg-muted/30 rounded-lg p-6 flex flex-col justify-center items-center text-center border border-border">
                    <span className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</span>
                    <div className="text-4xl font-bold text-primary mb-2">
                        {formatCurrency(cost.min, region)} - {formatCurrency(cost.max, region)}
                    </div>

                    <div className="mt-6 space-y-2 text-left w-full text-sm">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                            <span>Includes equipment & professional labor</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                            <span>Based on {tier} brand pricing in {region}</span>
                        </div>
                        {region === 'US' && (
                            <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 rounded text-xs border border-emerald-100">
                                <strong>Tax Credit Available:</strong> You may qualify for up to $2,000 via the 25C Tax Credit.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
