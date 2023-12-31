export interface PricingBlock {
    title: string;
    subtitle: string;
    ctaText: string;
    price?: string;
    usps?: string[];
    plan?: 'free' | 'earlyBird' | 'enterprise';
}
