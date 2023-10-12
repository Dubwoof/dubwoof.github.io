'use client';

import { styles } from './DemoSection.styles';
import { Sections } from '@/enums/Sections';
import { DemoSectionProps } from './DemoSection.props';

export function DemoSection({ getRef }: DemoSectionProps): JSX.Element {
    return (
        <section id={Sections.Demo} ref={getRef} className={styles.section} data-style="section">
            <div className="flex flex-col w-full items-center justify-start">
                <h1 className={styles.title}>Demo</h1>
                
            </div>
        </section>
    );
}
