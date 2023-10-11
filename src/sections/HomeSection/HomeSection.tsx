'use client';

import { styles } from './HomeSection.styles';
import { HomeSectionProps } from './HomeSection.props';
import { Sections } from '@/enums/Sections';

export function HomeSection({ getRef }: HomeSectionProps): JSX.Element {
    return (
        <section id={Sections.Home} ref={getRef} className={styles.section} data-style="section">
            <div className={styles.helloWrapper} data-style="helloWrapper">
                <h1 className={styles.hello} data-style="hello">
                    Hello
                </h1>
            </div>
        </section>
    );
}
