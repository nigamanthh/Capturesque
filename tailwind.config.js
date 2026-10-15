/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Editorial Palette
        parchment: '#F3EBDD',
        espresso: '#29241F',
        forest: '#4F5D48',
        terracotta: '#B76E4D',
        sand: '#D9CBB7',
        'warm-white': '#FAF8F3',

        // Backward compatibility mappings
        ivory: '#F3EBDD',
        charcoal: '#29241F',
        'muted-olive': '#4F5D48',
        'warm-grey': '#D9CBB7',
        'burnt-orange': '#B76E4D',
        surface: {
          light: '#FAF8F3',
          DEFAULT: '#F3EBDD',
          muted: '#EADECF',
          dark: '#241F1A',
          charcoal: '#29241F',
          espresso: '#29241F',
          darker: '#1C1814',
          card: '#FAF8F3',
          sand: '#D9CBB7'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-editorial': '0.15em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
