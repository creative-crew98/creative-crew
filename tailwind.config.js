/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0a0a12',
          900: '#0d0b16',
          800: '#141221',
        },
        brand: {
          violet: '#7c3aed',
          fuchsia: '#d946ef',
          light: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)',
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(124, 58, 237, 0.5)',
        card: '0 20px 40px -20px rgba(10, 10, 18, 0.15)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: 400 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        'draw-line': 'draw-line 1.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}