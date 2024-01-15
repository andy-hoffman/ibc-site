import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#EBBF0C",
          primaryContent: "#2F2F2E",
          secondary: "#D7989C",
          secondaryContent: "#FAF9F7",
          falseFace: "Roboto",
          roundedButton: "0.25rem"

        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "red-100": "#EA2E49",
        "red-300": "#ABC7C7",
        "red-500": "#D7989C",
        "text-red-500": "#D7989C",
        "yellow-100":"#EBD61E",
        "yellow-300":"#EBD61E",
        "yellow-500":"#EBBF0C",
        "neutral-100": "#FAF9F7",
        "neutral-300": "#E8E7E6",
        "neutral-500": "#C8C7C6",
        "type-100": "#1A1A18",
        "type-200": "#2F2F2E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"),  require('tailwind-clip-path')],
}
export default config

