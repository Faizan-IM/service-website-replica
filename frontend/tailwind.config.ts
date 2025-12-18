import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // <--- This catches EVERYTHING in src
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#DC2626',
                    dark: '#111827',
                }
            },
        },
    },
    plugins: [],
};
export default config;