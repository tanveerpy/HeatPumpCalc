import { Metadata } from 'next';
import { HeatPumpCalculator } from '@/components/calculator/HeatPumpCalculator';
import { AdUnit } from "@/components/ads/AdUnit";

export const metadata: Metadata = {
  title: "Heat Pump Cost Calculator | 2026 Installation & Savings Est.",
  description: "Calculate your potential savings by switching to a heat pump. Compare costs against Gas, Oil, and Electric heating for your specific home size and climate.",
};

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">

      {/* Hero Section */}
      <section className="bg-white text-slate-900 pt-12 pb-6 relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Is a Heat Pump <span className="text-emerald-600">Worth It?</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Calculate your real-world installation costs and savings for 2026.
              Compare against Gas, Oil, and Propane furnaces.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-1 shadow-2xl text-slate-900 mx-auto max-w-6xl">
            <HeatPumpCalculator theme="light" />
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container mx-auto px-4">
        <AdUnit slotId="1234567890" />
      </div>

      {/* Trust Signals */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-lg mb-2">Up-to-Date 2026 Data</h3>
          <p className="text-muted-foreground text-sm">Based on latest equipment pricing and national energy averages.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-lg mb-2">Inflation Reduction Act</h3>
          <p className="text-muted-foreground text-sm">Includes estimates for the $2,000 federal tax credit (25C). </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-lg mb-2">Climate Adjusted</h3>
          <p className="text-muted-foreground text-sm">Efficiency calculations based on your specific climate zone.</p>
        </div>
      </div>

      {/* FAQ Section & Schema */}
      <section className="container max-w-4xl py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-2">How much does a heat pump cost installed?</h3>
            <p className="text-muted-foreground">
              For a typical 2000 sq ft home, a ducted air-source heat pump costs between <strong>$12,000 and $20,000</strong> after installation.
              Ductless mini-splits typically cost $4,000 - $6,000 per zone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-2">Do heat pumps work in cold weather?</h3>
            <p className="text-muted-foreground">
              Yes. Modern &quot;cold climate&quot; heat pumps (like HyperHeat) can maintain 100% efficiency down to 5°F and continue working down to -13°F or lower.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-2">Are heat pumps worth the money?</h3>
            <p className="text-muted-foreground">
              If you are replacing an oil or propane furnace, the ROI is often under 5 years.
              Replacing natural gas takes longer (8-12 years) unless you also need to replace your AC unit, in which case the switch makes financial sense immediately.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Heat Pump Cost Calculator",
                  "applicationCategory": "FinanceApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How much does a heat pump cost installed?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For a typical 2000 sq ft home, a ducted air-source heat pump costs between $12,000 and $20,000 after installation. Ductless mini-splits typically cost $4,000 - $6,000 per zone."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do heat pumps work in cold weather?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Modern cold climate heat pumps (like HyperHeat) can maintain 100% efficiency down to 5°F and continue working down to -13°F or lower."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are heat pumps worth the money?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you are replacing an oil or propane furnace, the ROI is often under 5 years. Replacing natural gas takes longer (8-12 years) unless you also need to replace your AC unit, in which case the switch makes financial sense immediately."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </section>

    </main >
  );
}
