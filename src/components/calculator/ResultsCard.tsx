import { formatCurrency } from '@/lib/calculator-logic';
import { ArrowDownIcon, CheckCircleIcon, DollarSignIcon } from 'lucide-react';

interface ResultsCardProps {
    costRange: { min: number; max: number };
    annualSavings: number;
    breakEvenYears: number;
}

export function ResultsCard({ costRange, annualSavings, breakEvenYears }: ResultsCardProps) {
    return (
        <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
            <div className="bg-primary/10 p-6 border-b border-border">
                <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6" />
                    Estimated Project Overview
                </h3>
            </div>

            <div className="p-6 space-y-6">
                {/* Cost Range */}
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Estimated Installation Cost</p>
                    <div className="text-3xl font-bold text-gray-900 my-2">
                        {formatCurrency(costRange.min)} - {formatCurrency(costRange.max)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        *Includes equipment and typical labor. Before tax credits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Annual Savings */}
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-700 mb-1">
                            <DollarSignIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Est. Annual Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-emerald-800">
                            {formatCurrency(annualSavings)}
                        </div>
                        <p className="text-xs text-emerald-600 mt-1">vs. your current system</p>
                    </div>

                    {/* Break Even */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-700 mb-1">
                            <ArrowDownIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">ROI / Break-even</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-800">
                            {breakEvenYears > 0 ? `${breakEvenYears} Years` : 'Immediate'}
                        </div>
                        <p className="text-xs text-blue-600 mt-1">Pays for itself over time</p>
                    </div>
                </div>

                {/* Incentive Highlight */}
                <div className="text-sm bg-amber-50 text-amber-800 p-3 rounded border border-amber-200">
                    <strong>Pro Tip:</strong> You may qualify for up to <strong>$2,000</strong> in federal tax credits (25C).
                </div>
            </div>
        </div>
    );
}
