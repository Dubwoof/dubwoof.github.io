import { Viewport } from '@/enums/Viewport';
import { useState, useEffect } from 'react';

interface ViewportValue {
    viewport: Viewport;
    isMobile: boolean;
    isDesktop: boolean;
}

export function useViewport(): ViewportValue {
    const [viewport, setViewport] = useState<Viewport>(Viewport.SM);

    useEffect(() => {
        function updateViewport() {
            const width = window.innerWidth;

            if (width >= 1536) {
                setViewport(Viewport.XXL);
            } else if (width >= 1280) {
                setViewport(Viewport.XL);
            } else if (width >= 1024) {
                setViewport(Viewport.LG);
            } else if (width >= 768) {
                setViewport(Viewport.MD);
            } else {
                setViewport(Viewport.SM);
            }
        }

        updateViewport();
        window.addEventListener('resize', updateViewport);

        return () => window.removeEventListener('resize', updateViewport);
    }, []);

    // Define isMobile and isDesktop based on the current viewport
    const isMobile = viewport === Viewport.SM || viewport === Viewport.MD;
    const isDesktop = viewport === Viewport.LG || viewport === Viewport.XL || viewport === Viewport.XXL;

    return {
        viewport,
        isMobile,
        isDesktop,
    };
}
