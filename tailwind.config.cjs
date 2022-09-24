/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                twitch: [
                    'Inter',
                    'Roobert',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
}
