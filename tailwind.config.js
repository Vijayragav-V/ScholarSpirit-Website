/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',      // Black
        secondary: '#d9d9d9',    // Slate Gray
        accent: '#138D75',       // Oasis Green
        background: '#FFFFFF',   // Lightened Desert Sand
        text: '#34495E',         // Darkened Slate Gray for better contrast
        link: '#FFFFFF',         // Saharan Orange for links
        muted: '#7F8C8D',        // Slightly darker Subdued Silver for secondary text
        border: '#D5CBA8',       // Antique White for borders
        hover: '#073763',        // Lightened Sunflower Yellow for hover states
      },
      fontFamily: {
        body: ['Verdana', 'sans-serif'],
        heading: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
