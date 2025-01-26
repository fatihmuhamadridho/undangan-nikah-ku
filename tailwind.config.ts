import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        // default
        main: '#E5F6F3',
        primary: '#9CB29E',
        secondary: '#4B5B40',
        // kedua
        // main: '#f3d0c8',
        // primary: '#d68a7b',
        // secondary: '#a74e4a',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        against: ['Against'],
        milyuna: ['Milyuna'],
        gallery: ['Gallery', 'serif'],
        brillion: ['Brillion'],
      },
    },
  },
  plugins: [],
} satisfies Config;
