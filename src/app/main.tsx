import { Footer } from '@/components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }): JSX.Element {
    return (
        <main className="flex flex-col min-h-screen items-start justify-between">
            <div className="fixed w-[600px] h-[600px] rounded-full top-60 left-40">
                <div className="absolute w-[600px] h-[400px] bg-purple-400 rounded-full transform rotate-45"></div>
                <div className="absolute w-[600px] h-[400px] top-[500px] left-40 bg-pink-400 rounded-full transform rotate-45"></div>
            </div>
            <div className="fixed w-full h-screen bg-white/70 backdrop-blur-3xl"></div>
            <div className="flex flex-col w-full">
                <Navigation />
            </div>

            <div id="wrapperChildren" className="relative w-full h-screen">
                {children}
            </div>
            
        </main>
    );
}
