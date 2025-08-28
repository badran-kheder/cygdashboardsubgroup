import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CYG Partners Custom Color Palette
        primary: {
          50: '#F7F4EF',   // Light cream
          100: '#F2F2F2',  // Light gray
          200: '#FAFAFA',  // Off white
          300: '#E2E8F0',  // Light blue-gray
          400: '#BDFFDC',  // Light mint
          500: '#77EB8A',  // Light green
          600: '#4FD1C5',  // Teal
          700: '#38A169',  // Green
          800: '#12325A',  // Dark blue
          900: '#0B1F3A',  // Darkest blue
          950: '#1C1C1C',  // Dark gray
        },
        
        // Semantic color variations
        brand: {
          blue: '#0B1F3A',      // Primary brand color
          blueLight: '#12325A', // Secondary brand color
          green: '#38A169',     // Primary accent
          teal: '#4FD1C5',      // Secondary accent
          cyan: '#77EB8A',      // Highlight color
          mint: '#BDFFDC',      // Light accent
        },
        
        // Background variations
        surface: {
          50: '#FAFAFA',   // Lightest surface
          100: '#F7F4EF',  // Light surface
          200: '#F2F2F2',  // Neutral surface
          300: '#E2E8F0',  // Subtle surface
          400: '#1C1C1C',  // Dark surface
          500: '#0B1F3A',  // Darkest surface
        },
        
        // Text colors
        content: {
          primary: '#0B1F3A',   // Primary text
          secondary: '#12325A',  // Secondary text
          accent: '#38A169',     // Accent text
          muted: '#1C1C1C',     // Muted text
          light: '#FAFAFA',     // Light text
        },
        
        // Status colors
        success: {
          50: '#BDFFDC',
          100: '#77EB8A',
          200: '#4FD1C5',
          300: '#38A169',
          400: '#12325A',
          500: '#0B1F3A',
        },
        
        // Extended grays for better contrast
        gray: {
          50: '#FAFAFA',
          100: '#F7F4EF',
          200: '#F2F2F2',
          300: '#E2E8F0',
          400: '#1C1C1C',
          500: '#12325A',
          600: '#0B1F3A',
          700: '#0B1F3A',
          800: '#0B1F3A',
          900: '#0B1F3A',
        },
        
        // Custom button colors
        'btn-primary': '#38A169',
        'btn-secondary': '#4FD1C5',
        'btn-border': '#FAFAFA',
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      // Custom button dimensions
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'btn-y': '1.25rem',      // 20px (Padding/5)
        'btn-x-primary': '4rem',  // 64px (Padding/16)
        'btn-x-secondary': '2.5rem', // 40px (Padding/10)
      },
      
      // Border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'btn': '5rem',           // 80px (Padding/20)
      },
      
      // Custom button sizes
      width: {
        'btn-primary': '17.125rem',    // 274px
        'btn-secondary': '21.5625rem', // 345px
      },
      
      height: {
        'btn': '4.75rem',              // 76px
      },
      
      // Shadows
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(119, 235, 138, 0.3)',
        'glow-green': '0 0 20px rgba(56, 161, 105, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(119, 235, 138, 0.1)',
      },
      
      // Background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #0B1F3A 0%, #12325A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #38A169 0%, #4FD1C5 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #77EB8A 0%, #BDFFDC 100%)',
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'hero-fallback': "linear-gradient(135deg, #0B1F3A 0%, #12325A 100%)",
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(119, 235, 138, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(119, 235, 138, 0.6)' },
        },
      },
      
      // Extended utilities
      backdropBlur: {
        xs: '2px',
      },
      
      // Custom gradients
      gradientColorStops: {
        'brand-start': '#0B1F3A',
        'brand-end': '#12325A',
        'accent-start': '#38A169',
        'accent-end': '#4FD1C5',
        'cyan-start': '#77EB8A',
        'cyan-end': '#BDFFDC',
      },
    },
  },
  plugins: [],
}

export default config
