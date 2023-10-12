'use client';

import { styles } from './PricingSection.styles';
import { Sections } from '@/enums/Sections';
import { PricingSectionProps } from './PricingSection.props';
import { PricingBlock } from '@/components/PricingBlock/PricingBlock';

export function PricingSection({ getRef }: PricingSectionProps): JSX.Element {
    return (
        <section id={Sections.Pricing} ref={getRef} className={styles.section} data-style="section">
            <div className="flex flex-col w-full items-center justify-start">
                <h1 className={styles.title}>Pricing</h1>
                <div className="flex gap-6">
                    <PricingBlock title="Free" subtitle="Best for learning how to use." ctaText="Try it free" price="0" />
                    <PricingBlock title="Early Bird" subtitle="Best for using in production." ctaText="Start a free trial" price="0" />
                    <PricingBlock title="Enterprise" subtitle="Custom Software Solution for your Business." ctaText="Book appointment" />
                </div>
            </div>
        </section>
    );
}
