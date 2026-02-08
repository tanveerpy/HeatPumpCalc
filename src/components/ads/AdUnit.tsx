'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    slotId: string;
    className?: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    layoutKey?: string; // For In-feed ads
}

export function AdUnit({ slotId, className, format = 'auto', layoutKey }: AdUnitProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className={`ad-container my-8 flex justify-center overflow-hidden relative w-fit mx-auto ${className}`}>
            <ins
                className="adsbygoogle block"
                style={{ display: 'block', minWidth: '300px', minHeight: '250px' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Placeholder, user to replace
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout-key={layoutKey}
            />
            {/* Dev Mode Placeholder */}
            {process.env.NODE_ENV === 'development' && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 text-xs text-gray-500 pointer-events-none">
                    AdSlot: {slotId}
                </div>
            )}
        </div>
    );
}

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}
