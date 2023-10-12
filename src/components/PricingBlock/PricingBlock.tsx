import { Typography } from '@/elements/Typography/Typography';

interface PricingTabProps {
    title: string;
    subtitle: string;
    price?: string;
    ctaText: string;
    isAnnually?: boolean;
}

export function PricingBlock({ title, subtitle, price, ctaText, isAnnually }: PricingTabProps): JSX.Element {
    return (
        <div className="w-[18rem] h-[24rem] bg-background rounded-xl p-4 ">
            <Typography variant="strong">{title}</Typography>
            <Typography variant="light" className="mb-4">
                {subtitle}
            </Typography>
            {price ? (
                <>
                    <div className="flex">
                        <p className="font-comfortaa text-xl font-bold">€</p>
                        <p className="font-comfortaa text-6xl font-bold">{price}</p>
                    </div>
                    <Typography variant="caption">for 12 Months. Then 20€ monthly.</Typography>
                </>
            ) : (
                <Typography variant="light">Contact us</Typography>
            )}
            {isAnnually && <Typography variant="light">Billed annually</Typography>}

            <div className="mt-4 flex flex-col items-center justify-center w-full h-min rounded-md bg-primary text-textSecondary p-2">{ctaText}</div>
        </div>
    );
}
