/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",     // For App Router structures
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // For Pages Router setups
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // For reusable components folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // If using a custom src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotBGimg: {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
      animation: {
        rotBGimg: 'rotBGimg 3s linear infinite',
      },
    },
  },
}