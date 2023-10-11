'use client';

import { useEffect, useRef } from 'react';
import { useViewportSection } from './useViewportSection';

export function useSectionRef() {
    const sectionRef = useRef(null);
    const { registerSectionRef } = useViewportSection();

    useEffect(() => {
        registerSectionRef(sectionRef.current);
    }, [registerSectionRef]);

    return sectionRef;
}
