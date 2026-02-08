'use client';

import { useState } from 'react';
import {
    ClimateZone,
    ExistingSystem,
    HeatPumpType,
    estimateInstallationCost,
    calculateAnnualSavings
} from '@/lib/calculator-logic';
import { CalculatorForm } from './CalculatorForm';
import { ResultsCard } from './ResultsCard';

interface HeatPumpCalculatorProps {
    theme?: 'light' | 'dark' | 'system';
}

export function HeatPumpCalculator({ theme = 'system' }: HeatPumpCalculatorProps) {
    // State
    const [sqFt, setSqFt] = useState<number>(2000);
    const [climate, setClimate] = useState<ClimateZone>('moderate');
    const [fuel, setFuel] = useState<ExistingSystem>('gas-furnace');
    const [systemType, setSystemType] = useState<HeatPumpType>('air-source_ducted');
    const [currentBill, setCurrentBill] = useState<number>(250);

    // Derived Results (Calculated on every render)
    const cost = estimateInstallationCost(sqFt, systemType);
    const annualSavings = calculateAnnualSavings(currentBill, fuel, climate);

    // Break Even Logic
    const avgCost = (cost.min + cost.max) / 2;
    const netCost = avgCost - 2000; // Apply tax credit assumption

    const breakEvenYears = annualSavings > 0
        ? parseFloat((netCost / annualSavings).toFixed(1))
        : 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            <div className="lg:col-span-7">
                <CalculatorForm
                    sqFt={sqFt} setSqFt={setSqFt}
                    climate={climate} setClimate={setClimate}
                    fuel={fuel} setFuel={setFuel}
                    systemType={systemType} setSystemType={setSystemType}
                    currentBill={currentBill} setCurrentBill={setCurrentBill}
                    theme={theme}
                />
            </div>

            <div className="lg:col-span-5">
                <div className="sticky top-8">
                    <ResultsCard
                        costRange={cost}
                        annualSavings={annualSavings}
                        breakEvenYears={breakEvenYears}
                    />
                </div>
            </div>
        </div>
    );
}
