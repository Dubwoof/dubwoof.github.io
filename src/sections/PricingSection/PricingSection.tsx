'use client';

import { styles } from './PricingSection.styles';
import { Sections } from '@/enums/Sections';
import { PricingSectionProps } from './PricingSection.props';
import { PricingBlock } from '@/components/PricingBlock/PricingBlock';
import { Typography } from '@/elements/Typography/Typography';
import { pricingBlocks } from './constants/pricingBlocks';
import { useState } from 'react';

export function PricingSection({ getRef }: PricingSectionProps): JSX.Element {
    const [paymentPlan, setPaymentPlan] = useState<'monthly' | 'yearly'>('yearly');

    function handlePaymentPlanClick(plan: 'monthly' | 'yearly') {
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
                            paymentPlan === 'monthly' ? 'bg-primary text-card' : 'bg-slate-200 text-primary'
                        }`}
                    >
                        <Typography variant="strong">MONTHLY</Typography>
                    </div>
                    <div
                        onClick={() => handlePaymentPlanClick('yearly')}
                        className={`p-2 w-[8rem] flex justify-center rounded-r-md cursor-pointer ${
                            paymentPlan === 'yearly' ? 'bg-primary text-card' : 'bg-slate-200 text-primary'
                        }`}
                    >
                        <Typography variant="strong">ANNUALY</Typography>
                    </div>
                </div>
                <div className="flex gap-10">
                    {(pricingBlocks || []).map((pricingBlock, i) => (
                        <PricingBlock key={i} {...pricingBlock} />
                    ))}
                </div>
            </div>
        </section>
    );
}
