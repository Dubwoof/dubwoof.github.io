import { Typography } from '@/elements/Typography/Typography';
import { Demo } from '../../DemoSection';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Colors } from '@/enums/Colors';
import { CashFlowWidget } from '@/components/CashFlowModule/CashFlowWidget/CashFlowWidget';

export function Demo({ image, location, title, description, widgetType }: Demo): JSX.Element {
    return (
        <div className="w-[18rem] h-auto bg-slate-100 flex flex-col">
            <div className={`w-full h-[180px] bg-cover bg-center bg-no-repeat ${image}`} />
            <div className="flex flex-col p-2">
                <div className="flex gap-1 mb-1">
                    <HiOutlineLocationMarker color={Colors.Primary} size={20} />
                    <Typography variant="caption" color="tint">
                        {location}
                    </Typography>
                </div>
                <Typography variant="strong" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="caption" className="mb-4">{description}</Typography>
                <CashFlowWidget type={widgetType} />
            </div>
        </div>
    );
}
