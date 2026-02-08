'use client';

import { useState } from 'react';
import { ClimateZone, ExistingSystem, Region, calculateAnnualSavings, formatCurrency, REGIONS } from '@/lib/calculator-logic';
import { Zap, TrendingDown, Thermometer, Flame } from 'lucide-react';

export function OperatingCostCalculator() {
    const [currentBill, setCurrentBill] = useState<number>(300);
    const [region, setRegion] = useState<Region>('US');
    const [fuel, setFuel] = useState<ExistingSystem>('oil-furnace');
    const [climate, setClimate] = useState<ClimateZone>('moderate');

    const savings = calculateAnnualSavings(currentBill, fuel, climate, region);
    const isSavings = savings > 0;

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-50/50 p-6 border-b border-border">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-700">
                    <Zap className="w-6 h-6" />
                    Operating Cost & Savings
                </h2>
                <p className="text-muted-foreground">Compare running costs against Gas, Oil, and Propane.</p>
            </div>

            <div className="p-6 grid gap-8 md:grid-cols-2">
                <div className="space-y-5">
                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Region (Currency)</label>
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

                    {/* Current Bill */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Avg Monthly Heating Bill</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-muted-foreground">{REGIONS[region].symbol}</span>
                            <input
                                type="number"
                                value={currentBill}
                                onChange={(e) => setCurrentBill(Number(e.target.value))}
                                className="w-full pl-8 p-2 border border-input rounded-md"
                                step={10}
                            />
                        </div>
                    </div>

                    {/* Existing Fuel */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <Flame className="w-4 h-4" /> Current Heating Fuel
                        </label>
                        <select
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value as ExistingSystem)}
                            className="w-full p-2 border border-input rounded-md bg-background"
                        >
                            <option value="gas-furnace">Natural Gas</option>
                            <option value="oil-furnace">Heating Oil</option>
                            <option value="propane">Propane / LPG</option>
                            <option value="electric-baseboard">Electric Resistance</option>
                        </select>
                    </div>

                    {/* Climate */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
                            <Thermometer className="w-4 h-4" /> Climate Zone
                        </label>
                        <select
                            value={climate}
                            onChange={(e) => setClimate(e.target.value as ClimateZone)}
                            className="w-full p-2 border border-input rounded-md bg-background"
                        >
                            <option value="cold">Cold (Extended Freezing)</option>
                            <option value="moderate">Moderate (Mixed Seasons)</option>
                            <option value="warm">Warm (Mild Winters)</option>
                        </select>
                    </div>
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center">
                    <div className={`p-6 rounded-xl border ${isSavings ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                        <h3 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                            Estimated Annual Impact
                        </h3>
                        <div className={`text-5xl font-extrabold text-center ${isSavings ? 'text-emerald-600' : 'text-red-600'}`}>
                            {isSavings ? '-' : '+'}{formatCurrency(Math.abs(savings), region)}
                        </div>
                        <p className="text-center mt-2 font-medium">
                            {isSavings ? 'Annual Savings' : 'Extra Cost per Year'}
                        </p>

                        <div className="mt-6 pt-6 border-t border-black/5">
                            <div className="flex justify-between text-sm mb-2">
                                <span>10-Year ROI Estimate:</span>
                                <span className="font-bold">{formatCurrency(savings * 10, region)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                        <TrendingDown className="w-4 h-4" />
                        <span>Calculated based on {region} energy averages</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
