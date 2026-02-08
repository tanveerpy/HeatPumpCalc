import { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | HeatPumpCalc',
    description: 'Get in touch with the HeatPumpCalc team.',
};

export default function ContactUs() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <p className="text-lg mb-6">
                    Have a question about a calculation? Found a bug? Or just want to share your heat pump installation story?
                    We'd love to hear from you.
                </p>

                <div className="flex items-center gap-4 text-xl font-medium text-primary">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-6 h-6" />
                    </div>
                    <a href="mailto:hello@heatpumpcalc.com" className="hover:underline">
                        hello@heatpumpcalc.com
                    </a>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 48 hours.
                    <br />
                    For business inquiries or advertising opportunities, please use the same address.
                </p>
            </div>
        </main>
    );
}
