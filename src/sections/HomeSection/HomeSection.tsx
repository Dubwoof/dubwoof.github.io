'use client';

import { styles } from './HomeSection.styles';
import { HomeSectionProps } from './HomeSection.props';
import { Sections } from '@/enums/Sections';
import Image from 'next/image';
import { Typography } from '@/elements/Typography/Typography';
import Link from 'next/link';

export function HomeSection({ getRef }: HomeSectionProps): JSX.Element {
    return (
        <section id={Sections.Home} ref={getRef} className={styles.section} data-style="section">
            <div className="flex w-full">
                <div className="flex flex-col w-1/2">
                    <Typography variant="headline" className="text-6xl mb-4">
                        Frontend Features, Masterfully Crafted.
                    </Typography>
                    <h1 className={styles.title}>
                        Architecting
                        <br />
                        Future-Ready
                        <br />
                        Micro Frontends for global Enterprises.
                    </h1>
                    <Typography variant="caption" className="mb-4">
                        Revolutionizing enterprise digital landscapes with cutting-edge micro frontends, we deliver scalable, innovative, and bespoke solutions,
                        ensuring your business thrives in the evolving technological epoch.
                    </Typography>

                    <Link href="">
                        <div className={styles.tryButton}>Try it free</div>
                    </Link>
                </div>
                <div className="w-1/2">
                    <div className="w-full h-full bg-microFrontends rounded-3xl bg-cover"></div>
                </div>
            </div>
        </section>
    );
}
