/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            colors: {
                glover: {
                    dark: '#0f172a',
                    slate: '#1e293b',
                    gold: '#f59e0b',
                    red: '#ef4444',
                    light: '#f8fafc'
                },
                packer: {
                    green: '#203731', // Dark Packers Green
                    gold: '#FFB612',  // Packers Gold
                    dark: '#182b26',  // Darker shade for backgrounds
                    light: '#e2e8f0'
                },
                bluecollar: {
                    blue: '#4dabe3',
                    dark: '#0b1120',
                    slate: '#1e293b',
                    gray: '#374151'
                }
            }
        },
    },
    plugins: [],
}
