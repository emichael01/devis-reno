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
      DEFAULT: "0.5rem", // 8px (default for all screen sizes)
      sm: "2rem",       // 32px (small screens, 640px)
      md: "3rem",       // 64px (medium screens, 768px)
      lg: "4rem",      // 192px (large screens, 1024px)
      xl: "10rem",      // 288px (extra-large screens, 1280px)
      '2xl': "14rem",   // 320px (2x-large screens, 1536px)
      '3xl': "18rem",   // 384px (3x-large screens, 1700px)
      '4xl': "30rem",   // 480px (4x-large screens, 1920px)
      '5xl': "36rem",   // 576px (5x-large screens, 2560px)
      '6xl': "42rem",   // 672px (6x-large screens, 3072px)
      '7xl': "48rem",   // 768px (7x-large screens, 3584px)
      '8xl': "54rem",   // 864px (8x-large screens, 4096px)
      '9xl': "60rem",   // 960px (9x-large screens, 4608px)
      '10xl': "66rem",  // 1056px (10x-large screens, 5120px)
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
          orange:'#E9523D',
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
        '6xl': '3072px',
        '7xl': '3584px',
        '8xl': '4096px',
      },
    },

  plugins: [
      require('@tailwindcss/forms'),
  ],
};

