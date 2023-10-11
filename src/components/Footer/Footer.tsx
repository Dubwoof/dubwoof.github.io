import { Typography } from '@/elements/Typography/Typography';
import Link from 'next/link';

export function Footer(): JSX.Element {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t bg-white">
            <Typography variant="caption">© 2021 - All rights reserved</Typography>
            <Link href="/imprint">
                <Typography variant="caption">Imprint</Typography>
            </Link>
            <Link href="/privacy">
                <Typography variant="caption">Privacy Policy</Typography>
            </Link>
        </footer>
    );
}

