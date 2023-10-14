import { Typography } from '@/elements/Typography/Typography';
import { Colors } from '@/enums/Colors';
import { BsCheckSquare } from 'react-icons/bs';

interface PricingTabProps {
    title: string;
    subtitle: string;
    price?: string;
    ctaText: string;
    isAnnually?: boolean;
    usps?: string[];
}

export function PricingBlock({ title, subtitle, price, ctaText, isAnnually, usps }: PricingTabProps): JSX.Element {
    return (
        <div className="w-[18rem] h-[25rem] bg-background rounded-xl p-4 ">
            <h2 className="text-primmary font-comfortaa text-3xl font-bold">{title}</h2>
            <Typography variant="light" className="mb-4">
                {subtitle}
            </Typography>

            <>
                <div className="flex">
                    <p className="text-xl font-bold">{price && '€'}</p>
                    <p className="text-4xl font-bold">{price ?? 'Custom'}</p>
                </div>
                <Typography variant="caption">{price ? 'for 12 Months. Then 20€ monthly.' : 'Contact us'}</Typography>
            </>

            {isAnnually && <Typography variant="light">Billed annually</Typography>}

            <div className="mt-4 flex flex-col items-center justify-center w-full h-min rounded-md bg-primary text-textSecondary p-2 mb-4">{ctaText}</div>
            {(usps || []).map((usp, i) => (
                <div className="flex items-start gap-2 mb-2" key={i}>
                    <div className="flex pt-1">
                        <BsCheckSquare color={Colors.Primary} size={16} />
                    </div>

                    <Typography variant="light">{usp}</Typography>
                </div>
            ))}
        </div>
    );
}
