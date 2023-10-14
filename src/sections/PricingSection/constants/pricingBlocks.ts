import { PricingBlock } from "../types/PricingBlock";

export const pricingBlocks: PricingBlock[] = [
    {
        title: 'Free',
        subtitle: 'Best for learning how to use our widgets & modules.',
        ctaText: 'Try it free',
        price: '0',
        usps: ['1 user', 'Demo Content', 'upgradable to Early Bird'],
    },
    {
        title: 'Early Bird',
        subtitle: 'Best for using in your production environment.',
        ctaText: 'Start a free trial',
        price: '0',
        usps: ['Full usage of up to 3 widgets & modules', '200 Requests per day', 'mail support'],
    },
    {
        title: 'Enterprise',
        subtitle: 'Custom Software Solution for your Business.',
        ctaText: 'Book appointment',
        usps: ['Unlimited widgets & modules', 'Custom widgets & modules for your enterprise', 'personal support'],
    },
];
