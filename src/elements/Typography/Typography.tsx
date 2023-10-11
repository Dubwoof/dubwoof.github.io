import { Colors } from '@/enums/Colors';
import { TypographyProps } from './Typograhpy.props';
import { styles } from './Typograhpy.styles';

const textColorStyles = {
    default: {
        color: Colors.Text,
    },
    alt: {
        color: Colors.TextSecondary,
    },
    tint: {
        color: Colors.Primary,
    },
};

export function Typography({
    variant = 'default',
    color = 'default',
    className = '',
    children,
    ...otherProps
}: TypographyProps & React.HTMLProps<HTMLDivElement>) {
    const style: React.CSSProperties = {
        ...styles[variant],
    };

    return (
        <div
            style={style}
            className={`${className} ${color === 'default' ? 'text-black' : color === 'alt' ? 'text-secondary' : 'text-primary'}`}
            {...otherProps}
        >
            {children}
        </div>
    );
}
