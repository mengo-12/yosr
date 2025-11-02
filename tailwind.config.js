/** @type {import('tailwindcss').Config} */

const rtl = require('tailwindcss-rtl');

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        './node_modules/flowbite-react/**/*.js',
    ],

    safelist: [
        "keen-slider",
        "keen-slider__slide"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                almohand: ['Almohand', 'sans-serif'],
            },
            colors: {
                primary: '#0068B4',    // اللون الأزرق
                secondary: '#9C9C9C',  // اللون الرمادي
            },

        },
        screens: {
            sm: '640px',
            md: '768px',  // ← هذا السطر ضروري
            lg: '1024px',
            xl: '1280px',
        },
    },
    plugins: [
        rtl()
    ],
}