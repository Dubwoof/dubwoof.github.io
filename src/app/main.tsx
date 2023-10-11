import { Footer } from '@/components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }): JSX.Element {
    return (
        <main className="flex flex-col min-h-screen items-start justify-between">
            <div className="flex flex-col w-full">
                <Navigation />
            </div>
            <div id="wrapperChildren" className="w-full h-screen">
                {children}
            </div>
            <Footer />
        </main>
    );
}
