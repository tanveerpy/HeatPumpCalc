import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | HeatPumpCalc',
    description: 'Terms and conditions for using HeatPumpCalc.',
};

export default function TermsOfService() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
            <h1>Terms of Service</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Agreement to Terms</h2>
            <p>
                By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
            </p>

            <h2>2. Use License</h2>
            <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on HeatPumpCalc's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
                The materials on HeatPumpCalc's website are provided on an 'as is' basis. HeatPumpCalc makes no warranties, expressed or implied,
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
                Further, HeatPumpCalc does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of
                the materials on its website or otherwise relating to such materials or on any sites linked to this site. The calculations provided
                are estimates only and should not be considered professional financial or HVAC advice.
            </p>

            <h2>4. Limitations</h2>
            <p>
                In no event shall HeatPumpCalc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                or due to business interruption) arising out of the use or inability to use the materials on HeatPumpCalc's website.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
                The materials appearing on HeatPumpCalc's website could include technical, typographical, or photographic errors.
                HeatPumpCalc does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
        </main>
    );
}
