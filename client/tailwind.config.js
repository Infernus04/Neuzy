/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  },
  plugins: [],
}


export default withMT(config)
