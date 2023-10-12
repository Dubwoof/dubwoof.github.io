'use client';

import { useViewportSection } from '@/hooks/useViewportSection';
import { HomeSection } from '@/sections/HomeSection/HomeSection';
import { PricingSection } from '@/sections/PricingSection/PricingSection';

export default function Home() {
    const { activeSection, registerSectionRef } = useViewportSection();
    // const showFabContainer = activeSection !== 'contact';

    return (
        <div id="page">
            <HomeSection getRef={registerSectionRef} />
            <PricingSection getRef={registerSectionRef} />
            {/* {showFabContainer && <FabContainer />} */}
        </div>
    );
}
