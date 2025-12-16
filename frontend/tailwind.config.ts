import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sears: {
                    blue: '#00205B',   // Dark Navy
                    light: '#2662C6',  // Bright Action Blue
                    gray: '#F7F7F7',   // Background Gray
                },
            },
        },
    },
    plugins: [],
};
export default config;