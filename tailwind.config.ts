import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        danger: 'var(--color-danger)',
      },
      authBackgroundImage: {
        'auth-bg': 'url("/images/auth-background.jpg")',
      },
    },
  },
  plugins: [],
}

export default config
