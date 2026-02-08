import Link from 'next/link';
import { ZapIcon } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-90 transition-opacity">
                    <div className="bg-primary text-white p-1.5 rounded-lg">
                        <ZapIcon className="w-5 h-5" />
                    </div>
                    <span>HeatPump<span className="text-foreground">Calc</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/calculators/installation-cost" className="text-muted-foreground hover:text-primary transition-colors">
                        Installation Cost
                    </Link>
                    <Link href="/calculators/operating-cost" className="text-muted-foreground hover:text-primary transition-colors">
                        Savings
                    </Link>
                    <Link href="/calculators/pool-heat-pump" className="text-muted-foreground hover:text-primary transition-colors">
                        Pool Calculator
                    </Link>
                    <Link href="/guides" className="text-muted-foreground hover:text-primary transition-colors">
                        Guides
                    </Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Placeholder (simplification for now) */}
                    <Link href="/" className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        Get an Estimate
                    </Link>
                </div>
            </div>
        </header>
    );
}
