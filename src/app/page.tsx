'use client';

import { useViewportSection } from '@/hooks/useViewportSection';
import { HomeSection } from '@/sections/HomeSection/HomeSection';

export default function Home() {
    const { activeSection, registerSectionRef } = useViewportSection();
    // const showFabContainer = activeSection !== 'contact';

    return (
        <div id="page">
            <HomeSection getRef={registerSectionRef} />
            {/* {showFabContainer && <FabContainer />} */}
        </div>
    );
}
