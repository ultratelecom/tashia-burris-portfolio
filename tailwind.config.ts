import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        peach: {
          50: '#fdf4f0',
          100: '#fce4d6',
          200: '#f9c5a8',
          300: '#f5a474',
          400: '#f0824a',
          500: '#eb6f47',
          600: '#dc5a3c',
          700: '#b84532',
          800: '#94372f',
          900: '#772f29',
        },
      },
    },
  },
  plugins: [],
}

export default config 