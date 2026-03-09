/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f8fafc',
        silver: '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.3), 0 25px 55px rgba(0, 0, 0, 0.08)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4), 0 30px 70px rgba(0, 0, 0, 0.12)',
        'glass-inner': 'inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.06) 0%, transparent 30%), radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 42%)",
      },
      animation: {
        'blob': 'blob 8s infinite',
        'blob-slow': 'blob-slow 10s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-from-left 0.7s ease-out',
        'slide-in-right': 'slide-in-from-right 0.7s ease-out',
        'float-up': 'float-up 4s ease-in-out infinite',
        'float-down': 'float-down 5s ease-in-out infinite',
        'glow-expand': 'glow-expand 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 6s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s infinite',
        'shimmer-light': 'shimmer-light 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-up-fade': 'slide-up-with-fade 0.7s ease-out',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'float-rotate': 'float-rotate 6s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'slide-beam': 'slide-beam 8s ease-in-out infinite',
        'slide-beam-vertical': 'slide-beam-vertical 10s ease-in-out infinite',
        'soft-pulse': 'soft-pulse-bg 4s ease-in-out infinite',
        'drift': 'drift-gentle 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
