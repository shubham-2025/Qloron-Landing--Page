import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
          extend: {
            colors: {
              qloronTeal: '#00BBA7',
              qloronDark: '#003C3B',
            },
          },
        },
        plugins: [],
      },
    }),
  ],
})
