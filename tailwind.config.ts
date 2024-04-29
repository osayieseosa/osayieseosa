import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    colors: {
      text:{light:'#050315',dark:'#eae9fc'},
      primary: {light:'#2f27ce',dark:'#3a31d8'},
      background: {light:'#fbfbfe', dark: '#010104'},
      secondary: {light:'#dedcff',dark:'#020024'},
      accent:{light:'#433bff',dark:"#0600c2"}
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
