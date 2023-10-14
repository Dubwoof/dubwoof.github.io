'use client';

import { styles } from './PricingSection.styles';
import { Sections } from '@/enums/Sections';
import { PricingSectionProps } from './PricingSection.props';
import { PricingBlock } from '@/components/PricingBlock/PricingBlock';
import { Typography } from '@/elements/Typography/Typography';
import { pricingBlocks } from './constants/pricingBlocks';
import { useState } from 'react';

export function PricingSection({ getRef }: PricingSectionProps): JSX.Element {
    const [paymentPlan, setPaymentPlan] = useState<'monthly' | 'annually'>('annually');

    function handlePaymentPlanClick(plan: 'monthly' | 'annually') {
        setPaymentPlan(plan);
    }

    return (
        <section id={Sections.Pricing} ref={getRef} className={styles.section} data-style="section">
            <div className="flex flex-col w-full items-center justify-start">
                <h1 className={styles.title}>Pricing</h1>
                <div className="flex mb-6">
                    <div
                        onClick={() => handlePaymentPlanClick('monthly')}
                        className={`p-2 w-[8rem] flex justify-center rounded-l-md cursor-pointer ${
                            paymentPlan === 'monthly' ? 'bg-primary text-white' : 'bg-slate-200 text-primary'
                        }`}
                    >
                        <Typography variant="strong">MONTHLY</Typography>
                    </div>
                    <div
                        onClick={() => handlePaymentPlanClick('annually')}
                        className={`p-2 w-[8rem] flex justify-center rounded-r-md cursor-pointer ${
                            paymentPlan === 'annually' ? 'bg-primary text-white' : 'bg-slate-200 text-primary'
                        }`}
                    >
                        <Typography variant="strong">ANNUALLY</Typography>
                        <div className="absolute translate-x-16 -translate-y-6 bg-background border-primary border-[1px] text-xs text-primary py-1 px-2 rounded-md">
                            25% off
                        </div>
                    </div>
                </div>
                <div className="flex gap-10">
                    {(pricingBlocks || []).map((pricingBlock, i) => (
                        <PricingBlock isAnnually={paymentPlan === 'annually'} key={i} {...pricingBlock} />
                    ))}
                </div>
            </div>
        </section>
    );
}
