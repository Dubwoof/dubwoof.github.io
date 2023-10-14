import { BiChevronRight, BiCog, BiWallet } from 'react-icons/bi';
import { MdOutlineShowChart } from 'react-icons/md';
import type { CashFlowWidgetProps } from './CashFlowWidget.props';
import { useCallback } from 'react';
import { SlimWidget } from '../SlimWidget/SlimWidget';
import { Typography } from '@/elements/Typography/Typography';
import { Colors } from '@/enums/Colors';

interface ReturnOfInvestmentReturn {
    returnOfInvest?: number;
    roiPercentage?: number;
}

interface ReturnOfInvestmentProps {
    rent?: number;
    interest?: number;
    maintenance?: number;
    tax?: number;
    insurance?: number;
    management?: number;
    other?: number;
}

function getReturnOfInvestment({ rent }: ReturnOfInvestmentProps): ReturnOfInvestmentReturn {
    return {
        returnOfInvest: 1200,
        roiPercentage: 4,
    };
}

export function CashFlowWidget({ primaryColor = '#cdcdcd', secondaryColor = '#ffffff', outline = false, type }: CashFlowWidgetProps): JSX.Element {
    const { returnOfInvest, roiPercentage } = getReturnOfInvestment({ rent: 800 });

    const handleOpenModalCallback = useCallback(() => {
        window.parent.postMessage({ type: 'OPEN_MODAL', contentUrl: 'http://localhost:6006' }, '*');
    }, []);

    const containerStyle = {
        backgroundColor: outline ? secondaryColor : primaryColor,
        color: outline ? primaryColor : secondaryColor,
        border: outline ? `1px solid ${primaryColor}` : 'none',
    };

    const hasCalculated: boolean = returnOfInvest !== undefined && roiPercentage !== undefined;

    if (type === 'text') {
        return (
            <div className="flex justify-start items-center cursor-pointer">
                <BiChevronRight color={Colors.Primary} />
                <p>Calculate CashFlow</p>
            </div>
        );
    }

    if (type === 'slim') {
        return (
            <SlimWidget
                handleOpenModalCallback={handleOpenModalCallback}
                hasCalculated={false}
                outline={outline}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
            />
        );
    }

    return (
        <div style={containerStyle} className="flex flex-col p-2 w-[240]">
            <div className="flex justify-between mb-1">
                <div className="text-sm font-bold">Möglicher Cash-Flow</div>
                <BiCog className="cursor-pointer" size={20} onClick={handleOpenModalCallback} />
            </div>
            <div className="flex gap-2">
                <div className="bg-white p-2 rounded-xl flex justify-center items-center">
                    <BiWallet size={40} color={primaryColor} />
                </div>
                {returnOfInvest && roiPercentage ? (
                    <div className="flex flex-col w-full">
                        <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold">{returnOfInvest}€</div>
                            <div className="text-lg flex items-center">
                                <MdOutlineShowChart />
                                {roiPercentage}%
                            </div>
                        </div>
                        <p className="leading-3">p.a.</p>
                    </div>
                ) : (
                    <div className="flex flex-col w-full justify-center">
                        <p className="cursor-pointer" onClick={handleOpenModalCallback}>
                            Jetzt berechnen
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
