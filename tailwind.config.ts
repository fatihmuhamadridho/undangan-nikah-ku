import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
