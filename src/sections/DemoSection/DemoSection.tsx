'use client';

import { styles } from './DemoSection.styles';
import { Sections } from '@/enums/Sections';
import { DemoSectionProps } from './DemoSection.props';
import { Demo } from './components/Demo/Demo';
import { Typography } from '@/elements/Typography/Typography';

export interface Demo {
    location: string;
    title: string;
    description: string;
    image: string;
    widgetType: 'slim' | 'full' | 'text';
}

const demos: Demo[] = [
    {
        location: 'München - Solln',
        title: 'Solln Splendor: Chic Munich Residence Featuring a Stunning Terrace Garden and Premium Designer Interiors',
        description: 'Land: 1.800 m2 - Living Area: approx. 760m2 - Price Upon Request',
        image: 'bg-realEstate1',
        widgetType: 'slim',
    },
    {
        location: 'München - Grünwald',
        title: 'Grünwald Grandeur: Exquisite Munich Villa with Panoramic Alpine Views and an Elite Gourmet Kitchen',
        description: 'Land: 2,000 m2 - Living Space: ca. 850m2 - Price Upon Request',
        image: 'bg-realEstate2',
        widgetType: 'full',
    },
    {
        location: 'Tegernsee',
        title: 'Lake Haven: Elegant Tegernsee Estate, Boasting a Secluded Courtyard and Luxurious Spa Retreat',
        description: 'Land: 1,500 m2 - Usable Area: around 700m2 - Purchase Price: 2.800.000€',
        image: 'bg-realEstate3',
        widgetType: 'text',
    },
];

export function DemoSection({ getRef }: DemoSectionProps): JSX.Element {
    return (
        <section id={Sections.Demo} ref={getRef} className={styles.section} data-style="section">
            <div className="flex flex-col w-full items-center justify-start">
                <h1 className={styles.title}>Demo</h1>
                <Typography variant="subtitle" className="mb-10">
                    See how the CashFlowWidget and Calculator works in 3 different variations.
                </Typography>
                <div className="flex w-full justify-center gap-10">
                    {(demos || []).map((demo, i) => (
                        <Demo key={i} {...demo} />
                    ))}
                </div>
            </div>
        </section>
    );
}
