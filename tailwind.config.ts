import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Example: If you want to use the exact Figma purple for the button
      // colors: {
      //   'figma-purple': '#6A0DAD', // Replace with actual hex from Figma
      //   'brand-indigo': {
      //      DEFAULT: '#6366F1', // indigo-500
      //      '50': '#EEF2FF',
      //      '100': '#E0E7FF',
      //      '200': '#C7D2FE',
      //      '300': '#A5B4FC',
      //      '400': '#818CF8',
      //      '500': '#6366F1',
      //      '600': '#4F46E5', // indigo-600
      //      '700': '#4338CA', // indigo-700
      //      '800': '#3730A3',
      //      '900': '#312E81',
      //      '950': '#1E1B4B'
      //   }
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // You can also extend spacing, fontFamily, etc. if needed
    },
  },
  plugins: [],
}
export default config