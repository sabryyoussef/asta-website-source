/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00897B',
        secondary: '#0E7490',
        tertiary: '#14B8A6',
        quaternary: '#4CAF50',
        quinary: '#2196F3',
        accent: '#FFD166',
        accent2: '#FF9E6D',
        dark_blue: '#0F766E',
        mid_blue: '#0E7490',
        light_blue: '#2196F3',
        teal: '#14B8A6',
        aqua: '#4CAF50',
      },
      fontFamily: {
        'arabic-heading': ['GE Dinar Two Light Italic', 'serif'],
        'arabic-body': ['GE Dinar Two Light Italic', 'sans-serif'],
        'english-heading': ['"Optima Medium"', 'serif'],
        'english-body': ['"Optima Medium"', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(135deg, #00897B 0%, #0E7490 25%, #2196F3 50%, #14B8A6 75%, #4CAF50 100%)',
        'gradient-line': 'linear-gradient(to right, #00897B, #0E7490, #2196F3, #14B8A6, #4CAF50)',
        'gradient-seal': 'linear-gradient(135deg, #00897B 0%, #0E7490 50%, #2196F3 100%)',
        'gradient-text': 'linear-gradient(to right, #FFD166, #FF9E6D)',
        'image-header': "linear-gradient(rgba(32, 44, 91, 0.85), rgba(34, 103, 150, 0.9)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
      }
    }
  },
  plugins: [],
}
