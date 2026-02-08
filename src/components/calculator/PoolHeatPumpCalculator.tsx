'use client';

import { useState } from 'react';
import { Region, calculatePoolHeatPump, formatCurrency } from '@/lib/calculator-logic';
import { Waves, CalendarDays, Droplets, CreditCard } from 'lucide-react';

export function PoolHeatPumpCalculator() {
    const [gallons, setGallons] = useState<number>(15000);
    const [months, setMonths] = useState<number>(5);
    const [region, setRegion] = useState<Region>('US');

    const result = calculatePoolHeatPump(gallons, months, region);

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-600 p-6 border-b border-border text-white">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Waves className="w-6 h-6" />
                    Pool Heat Pump Calculator
                </h2>
                <p className="text-blue-100">Estimate equipment size and running costs for your swimming pool.</p>
            </div>

            <div className="p-6 grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Region</label>
                        <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value as Region)}
                            className="w-full p-2 border border-input rounded-md bg-background"
                        >
                            <option value="US">United States ($)</option>
                            <option value="UK">United Kingdom (£)</option>
                            <option value="CA">Canada ($CAD)</option>
                            <option value="IE">Ireland (€)</option>
                        </select>
                    </div>

                    {/* Pool Size */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <Droplets className="w-4 h-4" /> Pool Volume (Gallons)
                        </label>
                        <input
                            type="number"
                            value={gallons}
                            onChange={(e) => setGallons(Number(e.target.value))}
                            className="w-full p-2 border border-input rounded-md"
                            step={1000}
                        />
                        <p className="text-xs text-muted-foreground mt-1">Avg 15x30 pool is ~13,500 gallons.</p>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" /> Swimming Season (Months)
                        </label>
                        <input
                            type="range"
                            min="3" max="12"
                            value={months}
                            onChange={(e) => setMonths(Number(e.target.value))}
                            className="w-full"
                        />
                        <div className="text-right font-bold text-primary">{months} Months</div>
                    </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                    {/* Unit Size */}
                    <div className="bg-muted p-4 rounded-lg border border-border">
                        <span className="text-xs uppercase font-bold text-muted-foreground">Recommended Unit Size</span>
                        <div className="text-3xl font-bold text-foreground">
                            {result.recommendedBTU.toLocaleString()} BTU
                        </div>
                    </div>

                    {/* Upfront Cost */}
                    <div className="bg-muted p-4 rounded-lg border border-border">
                        <span className="text-xs uppercase font-bold text-muted-foreground">Est. Installation Cost</span>
                        <div className="text-2xl font-bold text-primary flex items-end gap-2">
                            {formatCurrency(result.installCost.min, region)} - {formatCurrency(result.installCost.max, region)}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Includes unit + standard install</p>
                    </div>

                    {/* Running Cost */}
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                            <span className="text-xs uppercase font-bold text-blue-700">Seasonal Running Cost</span>
                        </div>
                        <div className="text-3xl font-extrabold text-blue-700">
                            {formatCurrency(result.seasonalCost, region)}
                        </div>
                        <p className="text-xs text-blue-600 mt-1">Total for {months} months of heating</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
