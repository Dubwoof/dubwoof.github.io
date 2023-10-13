'use client';

import { styles, tabSelect } from './GetStartedSection.styles';
import { Sections } from '@/enums/Sections';
import { GetstartedSectionProps } from './GetStartedSection.props';
import { Sandbox } from '@/components/Sandbox/Sandbox';
import { Typography } from '@/elements/Typography/Typography';
import { useState } from 'react';

type Tab = 'iframe' | 'react' | 'moduleFederation';

export function GetStartedSection({ getRef }: GetstartedSectionProps): JSX.Element {
    const [activeTab, setActiveTab] = useState<Tab>('iframe');

    function handleTabClick(tab: 'iframe' | 'react' | 'moduleFederation') {
        console.log(tab);
        setActiveTab(tab);
    }

    return (
        <section id={Sections.GetStarted} ref={getRef} className={styles.section} data-style="section">
            <div className="flex flex-col w-full items-center justify-start">
                <h1 className={styles.title}>Get Started</h1>
                <div className="flex w-full bg-slate-100/40 backdrop-blur-3xl rounded-3xl border-[1px] border-background shadow-md">
                    <div className="flex flex-col w-[350px] h-fit">
                        <div onClick={() => handleTabClick('iframe')} className={tabSelect(activeTab === 'iframe')}>
                            <Typography variant="strong">iFrame</Typography>
                        </div>
                        <div onClick={() => handleTabClick('react')} className={tabSelect(activeTab === 'react')}>
                            <Typography variant="strong">React (npm)</Typography>
                        </div>
                        <div onClick={() => handleTabClick('moduleFederation')} className={tabSelect(activeTab === 'moduleFederation')}>
                            <Typography variant="strong">Module Federation</Typography>
                        </div>
                    </div>
                    <Sandbox />
                </div>
            </div>
        </section>
    );
}
