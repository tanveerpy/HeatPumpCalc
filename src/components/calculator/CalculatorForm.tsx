import { ClimateZone, ExistingSystem, HeatPumpType } from '@/lib/calculator-logic';
import { ThermometerIcon, HomeIcon, FlameIcon, SettingsIcon, DollarSignIcon } from 'lucide-react';

interface CalculatorFormProps {
    sqFt: number;
    setSqFt: (val: number) => void;
    climate: ClimateZone;
    setClimate: (val: ClimateZone) => void;
    fuel: ExistingSystem;
    setFuel: (val: ExistingSystem) => void;
    systemType: HeatPumpType;
    setSystemType: (val: HeatPumpType) => void;
    currentBill: number;
    setCurrentBill: (val: number) => void;
    theme?: 'light' | 'dark' | 'system';
}

export function CalculatorForm({
    sqFt, setSqFt,
    climate, setClimate,
    fuel, setFuel,
    systemType, setSystemType,
    currentBill, setCurrentBill,
    theme = 'system'
}: CalculatorFormProps) {

    // If theme is 'light', force light mode colors regardless of system pref
    // Otherwise use system defaults (bg-card, text-foreground)
    const isLightForced = theme === 'light';

    const containerClass = isLightForced
        ? "space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-900"
        : "space-y-6 bg-card p-6 rounded-xl border border-border shadow-sm";

    const labelClass = isLightForced
        ? "block text-sm font-medium text-slate-600 mb-1 flex items-center gap-2"
        : "block text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2";

    const inputClass = isLightForced
        ? "w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-white text-slate-900"
        : "w-full p-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none bg-background text-foreground";

    return (
        <div className={containerClass}>
            <h3 className={`text-xl font-semibold mb-4 ${isLightForced ? 'text-slate-900' : 'text-foreground'}`}>Property Details</h3>

            {/* Square Footage */}
            <div>
                <label htmlFor="sqFt" className={labelClass}>
                    <HomeIcon className="w-4 h-4" />
                    Home Size (Sq. Ft.)
                </label>
                <input
                    id="sqFt"
                    type="number"
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className={inputClass}
                    min={500}
                    step={100}
                />
            </div>

            {/* Climate Zone */}
            <div>
                <label htmlFor="climate" className={labelClass}>
                    <ThermometerIcon className="w-4 h-4" />
                    Climate Zone
                </label>
                <select
                    id="climate"
                    value={climate}
                    onChange={(e) => setClimate(e.target.value as ClimateZone)}
                    className={inputClass}
                >
                    <option value="cold">Cold (North/Midwest)</option>
                    <option value="moderate">Moderate (Mid-Atlantic)</option>
                    <option value="warm">Warm (South)</option>
                </select>
            </div>

            {/* Current Fuel */}
            <div>
                <label htmlFor="fuel" className={labelClass}>
                    <FlameIcon className="w-4 h-4" />
                    Current Heating Fuel
                </label>
                <select
                    id="fuel"
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value as ExistingSystem)}
                    className={inputClass}
                >
                    <option value="gas-furnace">Natural Gas Furnace</option>
                    <option value="oil-furnace">Oil Furnace</option>
                    <option value="propane">Propane Furnace</option>
                    <option value="electric-baseboard">Electric Baseboard</option>
                </select>
            </div>

            {/* Monthly Bill */}
            <div>
                <label htmlFor="currentBill" className={labelClass}>
                    <DollarSignIcon className="w-4 h-4" />
                    Avg. Monthly Heating Bill ($)
                </label>
                <input
                    id="currentBill"
                    type="number"
                    value={currentBill}
                    onChange={(e) => setCurrentBill(Number(e.target.value))}
                    className={inputClass}
                    min={50}
                    step={10}
                />
            </div>

            {/* System Type Preference */}
            <div>
                <label htmlFor="systemType" className={labelClass}>
                    <SettingsIcon className="w-4 h-4" />
                    Heat Pump Type Interest
                </label>
                <select
                    id="systemType"
                    value={systemType}
                    onChange={(e) => setSystemType(e.target.value as HeatPumpType)}
                    className={inputClass}
                >
                    <option value="air-source_ducted">Ducted Air-Source (Central)</option>
                    <option value="mini-split">Ductless Mini-Split</option>
                    <option value="geothermal">Geothermal (Ground Source)</option>
                </select>
            </div>
        </div>
    );
}
