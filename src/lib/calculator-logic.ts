export type ClimateZone = 'warm' | 'moderate' | 'cold';
export type ExistingSystem = 'gas-furnace' | 'oil-furnace' | 'electric-baseboard' | 'propane';
export type HeatPumpType = 'air-source_ducted' | 'mini-split' | 'geothermal';
export type Region = 'US' | 'UK' | 'CA' | 'IE';
export type BrandTier = 'budget' | 'mid-range' | 'premium';

interface CostRange {
  min: number;
  max: number;
}

// --- Regional Configuration ---
export const REGIONS: Record<Region, { currency: string; symbol: string; costMultiplier: number }> = {
  US: { currency: 'USD', symbol: '$', costMultiplier: 1 },
  UK: { currency: 'GBP', symbol: '£', costMultiplier: 0.85 }, // Rough alignment to UK market
  CA: { currency: 'CAD', symbol: '$', costMultiplier: 1.35 },
  IE: { currency: 'EUR', symbol: '€', costMultiplier: 0.95 },
};

export const HEAT_PUMP_COSTS: Record<HeatPumpType, CostRange> = {
  'air-source_ducted': { min: 12000, max: 20000 },
  'mini-split': { min: 4000, max: 12000 },
  'geothermal': { min: 25000, max: 45000 },
};

// Efficiency (COP) assumptions
export const EFFICIENCY = {
  gas: 0.95,
  oil: 0.85,
  electric: 1.0,
  propane: 0.95,
  heatPump: {
    warm: 3.5,
    moderate: 3.0,
    cold: 2.5,
  }
};

// Average Fuel Costs (Base US rates)
const BASE_COSTS = {
  kwh: 0.18,
  therm: 1.40,
  gallon_oil: 4.50,
  gallon_propane: 3.20,
};

// Heat content
const BTUS = {
  therm: 100000,
  gallon_oil: 138500,
  gallon_propane: 91500,
  kwh: 3412,
};

// --- Installation Logic ---

export function estimateInstallationCost(
  sqFt: number,
  type: HeatPumpType,
  region: Region = 'US',
  tier: BrandTier = 'mid-range'
): CostRange {
  const tons = Math.ceil(sqFt / 600);
  const sizeMultiplier = tons > 2 ? 1 + ((tons - 2) * 0.15) : 1;
  const regionMultiplier = REGIONS[region].costMultiplier;

  let brandMultiplier = 1;
  if (tier === 'budget') brandMultiplier = 0.85;
  if (tier === 'premium') brandMultiplier = 1.3;

  const baseMin = HEAT_PUMP_COSTS[type].min * sizeMultiplier;
  const baseMax = HEAT_PUMP_COSTS[type].max * sizeMultiplier;

  // Mini-split logic override
  if (type === 'mini-split') {
    const heads = Math.max(1, Math.round(sqFt / 500));
    const msMin = heads * 3500;
    const msMax = heads * 5500;
    return {
      min: Math.round(msMin * regionMultiplier * brandMultiplier),
      max: Math.round(msMax * regionMultiplier * brandMultiplier),
    };
  }

  return {
    min: Math.round(baseMin * regionMultiplier * brandMultiplier),
    max: Math.round(baseMax * regionMultiplier * brandMultiplier),
  };
}

// --- Operating Cost Logic ---

export function calculateAnnualSavings(
  currentBill: number,
  fuel: ExistingSystem,
  climate: ClimateZone,
  region: Region = 'US'
): number {
  // Adjust base costs for region (Simplified relative purchase power adjustment)
  // Real implementation would need regional fuel price APIs or arrays
  const rMult = REGIONS[region].costMultiplier;

  const annualHeatingSpend = currentBill * 7;

  let fuelPrice = 0;
  let fuelBtus = 0;
  let fuelEff = 0;

  switch (fuel) {
    case 'gas-furnace':
      fuelPrice = BASE_COSTS.therm * rMult;
      fuelBtus = BTUS.therm;
      fuelEff = EFFICIENCY.gas;
      break;
    case 'oil-furnace':
      fuelPrice = BASE_COSTS.gallon_oil * rMult;
      fuelBtus = BTUS.gallon_oil;
      fuelEff = EFFICIENCY.oil;
      break;
    case 'propane':
      fuelPrice = BASE_COSTS.gallon_propane * rMult;
      fuelBtus = BTUS.gallon_propane;
      fuelEff = EFFICIENCY.propane;
      break;
    case 'electric-baseboard':
      fuelPrice = BASE_COSTS.kwh * rMult;
      fuelBtus = BTUS.kwh;
      fuelEff = EFFICIENCY.electric;
      break;
  }

  const unitsConsumed = annualHeatingSpend / fuelPrice;
  const heatNeededBtus = unitsConsumed * fuelBtus * fuelEff;

  const hpCop = EFFICIENCY.heatPump[climate];
  const hpKwhNeeded = heatNeededBtus / (BTUS.kwh * hpCop);
  const hpCost = hpKwhNeeded * (BASE_COSTS.kwh * rMult);

  return Math.round(annualHeatingSpend - hpCost);
}

// --- Pool Heat Pump Logic ---

export function calculatePoolHeatPump(
  poolSizeGallons: number,
  seasonMonths: number,
  region: Region = 'US'
) {
  // 1 BTU raises 1 lb of water 1°F
  // 1 Gallon water = 8.34 lbs
  // Maintenance heating approx: 
  // Surface area loss is main factor, but gallons is a decent proxy for simple calculators

  // Rough sizing: 50,000 BTU for < 10k gallons, 100k+ for > 20k
  let recommendedBTU = 50000;
  if (poolSizeGallons > 10000) recommendedBTU = 80000;
  if (poolSizeGallons > 20000) recommendedBTU = 110000;
  if (poolSizeGallons > 35000) recommendedBTU = 140000;

  // Cost Estimation
  const rMult = REGIONS[region].costMultiplier;
  const baseUnitCost = 2500 + (recommendedBTU / 100 * 2); // $2500 + $20 per 1k BTU roughly
  const installCost = 1000 * rMult; // Simple install assumption

  const totalInstallMin = Math.round((baseUnitCost + installCost) * 0.9);
  const totalInstallMax = Math.round((baseUnitCost + installCost) * 1.25);

  // Running Cost
  // 100k BTU HP draws approx 5-6kW
  const kwDraw = recommendedBTU / 20000; // Cop 5-6 for pools is common
  const hoursPerDay = 10; // average run time
  const dailyKwh = kwDraw * hoursPerDay;
  const monthlyCost = dailyKwh * (BASE_COSTS.kwh * rMult) * 30;
  const seasonalCost = monthlyCost * seasonMonths;

  return {
    recommendedBTU,
    installCost: { min: totalInstallMin, max: totalInstallMax },
    seasonalCost: Math.round(seasonalCost)
  };
}


export function formatCurrency(val: number, region: Region = 'US') {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: REGIONS[region].currency,
    maximumFractionDigits: 0,
  }).format(val);
}
