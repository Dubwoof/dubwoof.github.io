
import { BiWallet, BiCog, BiChevronRight } from 'react-icons/bi';
import { MdOutlineShowChart } from 'react-icons/md';
import type { SlimWidgetProps } from './SlimWidget.props';
import type { CashFlowWidgetProps } from '../CashFlowWidget/CashFlowWidget.props';

export function SlimWidget({
    outline,
    secondaryColor,
    primaryColor,
    handleOpenModalCallback,
    hasCalculated = false,
    returnOfInvest,
    roiPercentage,
}: Pick<CashFlowWidgetProps, 'secondaryColor' | 'primaryColor' | 'outline'> & SlimWidgetProps): JSX.Element {
    const dynamicStyles = {
        backgroundColor: outline ? secondaryColor : primaryColor,
        color: outline ? primaryColor : secondaryColor,
        border: outline ? `1px solid ${primaryColor}` : 'none',
    };

    return (
        <div style={dynamicStyles} className="flex p-2 w-[240] justify-between items-center h-10 cursor-pointer" onClick={handleOpenModalCallback}>
            <div className="w-full flex items-center gap-2">
                <BiWallet size={20} color={outline ? primaryColor : secondaryColor} />
                {hasCalculated ? (
                    <div className="flex w-full justify-between pr-2">
                        <div>CashFlow: {returnOfInvest}€ p.a.</div>
                        <div className="flex items-center">
                            <MdOutlineShowChart /> {roiPercentage}%
                        </div>
                    </div>
                ) : (
                    'Calculate CashFlow'
                )}
            </div>
            {hasCalculated ? <BiCog size={20} /> : <BiChevronRight size={20} color={outline ? primaryColor : secondaryColor} />}
        </div>
    );
}
