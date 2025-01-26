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
        against: ['against'],
        milyuna: ['milyuna'],
        gallery: ['gallery', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
