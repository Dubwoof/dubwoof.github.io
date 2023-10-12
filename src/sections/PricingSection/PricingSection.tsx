'use client';

import { styles } from './PricingSection.styles';
import { Sections } from '@/enums/Sections';
import Image from 'next/image';
import { Typography } from '@/elements/Typography/Typography';
import Link from 'next/link';
import { PricingSectionProps } from './PricingSection.props';

export function PricingSection({ getRef }: PricingSectionProps): JSX.Element {
    return (
        <section id={Sections.Pricing} ref={getRef} className={styles.section} data-style="section">
            <div className="flex w-full gap-4">
                Pricing
            </div>
        </section>
    );
}
