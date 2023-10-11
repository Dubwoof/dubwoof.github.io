'use client';

import { useEffect, useState, useRef } from 'react';

export function useViewportSection() {
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            // console.log(entries);
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sectionRefs.current.forEach(sectionRef => {
            observer.observe(sectionRef);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const registerSectionRef = (ref: HTMLElement | null) => {
        if (ref && !sectionRefs.current.includes(ref)) {
            sectionRefs.current.push(ref);
        }
    };

    return { activeSection, registerSectionRef };
}
