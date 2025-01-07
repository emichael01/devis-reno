export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",

];
export const theme = {
  fontFamily: {
      sora: ["Sora", "sans-serif"],
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "0.5rem", // Default padding for all screen sizes
      sm: "2rem",      // Padding for small screens
      md: "4rem",      // Padding for medium screens
      lg: "12rem",      // Padding for large screens
      xl: "18rem",      // Padding for extra-large screens
    }
  },
  extend: {
      colors: {
          transparent: "transparent",
          current: "currentColor",
          coral: '#d1475a',
          purple: '#83005B',
          raspberry: '#A4123F',
          yellow: '#FDC84A',
          nightsky: '#071D49',
          gray: '#636363',
          lightgray: '#aeb2b1',
          lightpink:'#edd9e7',
          lighterpink:'#f9f2f7',
  
          purple: "#994FF5",
          yellow: "#FFC41F",
          light: "#F8F7F6",
          dark: "#050C17",
          gray: "#7780A1",
          white: "#FFFFFF",
          primary: {
              white: "#FFFFFF",
              gray1: "#D3D3D3",
              gray2: "#A9A9A9",
              gray3: "#696969",
              gray: "#7780A1",
              blue: "#3BA5BE",
              blue2: "#22464b",
              green: "#203a3a",
              green2:"#61a93a",
              yellow: "#FFC41F"
            }
      },   
      screens: {
        'usm': '280px',
        '3xsm': '375px',
        '2xsm': '400px',
        'xsm': '500px',
        'sm': '640px',
        'md': '768px',
        '2md': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1700px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },

  plugins: [
      require('@tailwindcss/forms'),
  ],
};

