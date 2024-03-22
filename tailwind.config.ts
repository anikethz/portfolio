import type { Config } from "tailwindcss";

const config: Config = {
  content: [ 
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
      
    // Or if using `src` directory: 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    
  // ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Font Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        primary: '#fcfcfc',
        secondary: '#00c04b',
        secondaryLight: "#83f28f",
        // Add more custom colors as needed
      },
      // Add more theme customizations as needed
    },
  },
  plugins: [],
};
export default config;
