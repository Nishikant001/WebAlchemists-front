module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-modern': 'linear-gradient(to right, #4facfe, #00f2fe)', // Custom gradient
        'gradient-dark': 'linear-gradient(to right, #232526, #414345)', // Dark modern gradient
        'gradient-purple': 'linear-gradient(to right, #7F00FF, #E100FF)', // Example vibrant gradient
      },
    },
  },
  plugins: [],
};
