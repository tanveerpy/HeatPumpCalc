import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | HeatPumpCalc',
    description: 'About HeatPumpCalc. Our mission to help homeowners make informed energy decisions.',
};

export default function AboutUs() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
            <h1>About Us</h1>
            <p>
                Welcome to HeatPumpCalc, your trusted resource for independent, data-driven analysis of HVAC costs and savings.
            </p>

            <h2>Our Mission</h2>
            <p>
                Homeowners today face a confusing landscape of energy options. Government incentives, fluctuating fuel prices, and complex efficiency ratings (SEER2, HSPF2)
                make it hard to know if switching to a heat pump is actually worth it.
            </p>
            <p>
                Our mission is to simplify this decision. We build tools that cut through the marketing noise and provide realistic, localized cost estimates.
            </p>

            <h2>Our Data Sources</h2>
            <p>
                To ensure accuracy, our calculators utilize data from:
            </p>
            <ul>
                <li><strong>U.S. Department of Energy (DOE)</strong> for efficiency standards.</li>
                <li><strong>EIA (Energy Information Administration)</strong> for regional fuel price baselines.</li>
                <li><strong>Manufacturer Specifications</strong> (Carrier, Trane, Mitsubishi, etc.) for equipment sizing and performance curves.</li>
                <li><strong>IRS & Energy Star</strong> for up-to-date tax credit eligibility rules (25C).</li>
            </ul>

            <h2>Why Trust Us?</h2>
            <p>
                We are an independent publisher. We do not sell heat pumps, and we are not owned by an HVAC manufacturer.
                Our goal is purely to provide the math you need to speak confidently with contractors.
            </p>
        </main>
    );
}
