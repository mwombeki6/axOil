/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue
        secondary: '#10B981', // Green
        accent: '#8B5CF6', // Purple
        dark: '#1E293B',
        light: '#F8FAFC',
        gray: '#94A3B8',
        lightGray: '#E2E8F0',
        danger: '#EF4444',
        warning: '#F59E0B',
        white: '#FFFFFF',
        black: '#000000',
        background: '#F1F5F9',
        //primary: "#030014",
        //secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accentColor: "#AB8BFF"
      }

    },
  },
  plugins: [],
}
