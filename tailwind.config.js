/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#dc4492",
        yellow:"#FFDc49",
        grey:"#ededed",
        "deep-blue":"#010026",
        "deep-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
    },
            backgroundImage: (theme)=>( {
              "gradient-rainbow": "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 79.07%)",
              "gradient-rainblue": "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)"
            }),
            fontFamily: {
              playfair: ["Playfair Display", "serif"],
              opensans: ["Open Sans", "sans-serif"],
            },
            content: {
              brush: "url('/src/assets/brush.png')",
              junaid: "url('/src/assets/junaid.png')",
              ateeq: "url('/src/assets/ateeq.png')",
              ankit: "url('/src/assets/ankit.png')",
              menu: "url('/src/assets/menu-icon.svg')",
             
            },
            screens: {
              xs: "480px",
              sm: "768px",
              md: "1060px"
            },
        },
        plugins: [],
      }
    
