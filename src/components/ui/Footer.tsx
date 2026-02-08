import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="font-bold text-lg mb-4 block">
                            HeatPump<span className="text-primary">Calc</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm">
                            Helping homeowners make informed decisions about energy-efficient heating and cooling.
                            Calculations based on 2026 national averages and DOE data.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/calculators/installation-cost" className="hover:text-primary">Installation Pricing</Link></li>
                            <li><Link href="/calculators/operating-cost" className="hover:text-primary">Savings Calculator</Link></li>
                            <li><Link href="/guides" className="hover:text-primary">Buyer's Guides</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} HeatPumpCalc. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                        Disclaimer: Estimated costs and savings are for illustrative purposes only. Actual results may vary based on local rates, installer pricing, and home specifics.
                    </p>
                </div>
            </div>
        </footer>
    );
}
