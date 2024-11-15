/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      "red-500": "rgba(255, 9, 51, 1)",
      "red-400": "rgba(255, 56, 89, 1)",
      "red-300": "rgba(255, 107, 132, 1)",
      "red-200": "rgba(255, 158, 174, 1)",
      "red-100": "rgba(255, 204, 213, 1)",
      "red-50": "rgba(255, 229, 234, 1)",
      "red-600": "rgba(226, 0, 37, 1)",
      "red-700": "rgba(158, 0, 26, 1)",
      "red-800": "rgba(107, 0, 18, 1)",
      "red-900": "rgba(51, 0, 9, 1)",
      "yellow-500": "rgba(255, 223, 0, 1)",
      "yellow-600": "rgba(200, 177, 58, 1)",
      "yellow-700": "rgba(150, 133, 41, 1)",
      "yellow-800": "rgba(100, 88, 24, 1)",
      "yellow-900": "rgba(50, 44, 8, 1)",
      "yellow-400": "rgba(251, 227, 91, 1)",
      "yellow-300": "rgba(252, 234, 123, 1)",
      "yellow-200": "rgba(253, 241, 164, 1)",
      "yellow-100": "rgba(254, 248, 209, 1)",
      "yellow-50": "rgba(255, 252, 231, 1)",
      "grey-500": "rgba(77, 73, 65, 1)",
      "grey-600": "rgba(61, 58, 51, 1)",
      "grey-700": "rgba(47, 45, 40, 1)",
      "grey-800": "rgba(30, 29, 26, 1)",
      "grey-900": "rgba(17, 16, 14, 1)",
      "grey-400": "rgba(116, 110, 98, 1)",
      "grey-300": "rgba(155, 148, 136, 1)",
      "grey-200": "rgba(187, 183, 175, 1)",
      "grey-100": "rgba(222, 220, 216, 1)",
      "grey-50": "rgba(0, 0, 0, 1)",
      "blue-500": "rgba(25, 101, 114, 1)",
      "blue-600": "rgba(20, 81, 92, 1)",
      "blue-700": "rgba(15, 59, 67, 1)",
      "blue-800": "rgba(10, 41, 46, 1)",
      "blue-900": "rgba(5, 18, 21, 1)",
      "blue-400": "rgba(39, 155, 176, 1)",
      "blue-300": "rgba(71, 193, 215, 1)",
      "blue-200": "rgba(134, 214, 228, 1)",
      "blue-100": "rgba(192, 234, 241, 1)",
      "blue-50": "rgba(226, 245, 249, 1)",
    },
    //     'white': '#fff',
    //     'black': '#000',
    // },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "100px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "160px",
      "6xl": "208px",
      "7xl": "320px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
      display: ["Courier", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativ: ["0.688rem", { lineHeight: "1.0rem" }],
      body: ["0.813rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      small: ["1.5rem", { lineHeight: "2.25rem" }],
      medium: ["2rem", { lineHeight: "3rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      xlarge: ["3rem", { lineHeight: "4rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      light: "300px",
      regular: "400px",
      semibold: "600px",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      default: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      default: "20px",
      none: "0px",
      sm: "10px",
      md: "30px",
      lg: "40px",
      full: "9999px",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)",
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
      inner25: "0 4px 4px 5px rgb(0 0 0 / 0.25) inset",
      inner50: "0 4px 4px 5px rgb(0 0 0 / 0.25) inset",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};