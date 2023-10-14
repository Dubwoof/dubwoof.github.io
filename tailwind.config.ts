import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                background: 'var(--color-background)',
                card: 'var(--color-card)',
                text: 'var(--color-text)',
                textSecondary: 'var(--color-text-secondary)',
                textLight: 'var(--color-text-light)',
                textLighter: 'var(--color-text-lighter)',
            },
            fontFamily: {
                comfortaa: ['Comfortaa', 'sans'],
            },
            backgroundImage: {
                microFrontends: 'url(/micro-frontends.png)',
                realEstate1: 'url(/images/real-estate-1.jpeg)',
                realEstate2: 'url(/images/real-estate-2.webp)',
                realEstate3: 'url(/images/real-estate-3.jpeg)',
            },
        },
    },
    plugins: [],
    purge: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
};
export default config;
