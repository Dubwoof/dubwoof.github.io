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
    plan?: 'free' | 'earlyBird' | 'enterprise';
}

export function PricingBlock({ title, subtitle, price, ctaText, isAnnually, usps, plan }: PricingTabProps): JSX.Element {
    return (
        <div className="w-[18rem] h-auto bg-background rounded-xl p-4 ">
            <h2 className="text-primmary font-comfortaa text-3xl font-bold">{title}</h2>
            <Typography variant="light" className="mb-4">
                {subtitle}
            </Typography>

            <>
                <div className="flex">
                    <p className="text-xl font-bold">{price && '€'}</p>
                    <p className="text-4xl font-bold">{price ? '0' : "Let's Talk"}</p>
                </div>
                <Typography variant="caption">
                    {price ? `for 12 Months. Then ${isAnnually ? (parseFloat(price) * 0.75).toString() : price}€ monthly.` : 'Contact us'}
                </Typography>
            </>

            {isAnnually ? <Typography variant="caption">Billed annually</Typography> : <Typography variant="caption">Billed monthly</Typography>}

            <div className="mt-4 flex flex-col items-center justify-center w-full cursor-pointer h-min rounded-md bg-primary text-textSecondary p-2 mb-4">
                {ctaText}
            </div>
            {(usps || []).map((usp, i) => (
                <div className="flex items-start gap-2 mb-2" key={i}>
                    <div className="flex pt-1">
                        <BsCheckSquare color={Colors.Primary} size={16} />
                    </div>

                    <Typography variant="light">{usp}</Typography>
                </div>
            ))}
            {plan === 'earlyBird' && (
                <>
                    <Typography variant="caption" className="mt-4">
                        Early Bird Special is limited.
                        <br />
                        Free plans available:
                    </Typography>

                    <div className="w-full h-6 border-primary bg-card border-[1px] rounded-full">
                        <div className="w-1/12 bg-primary h-full rounded-l-full"></div>
                    </div>
                </>
            )}
        </div>
    );
}
