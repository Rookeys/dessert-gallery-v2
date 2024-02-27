import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {},
    screens: {
      ["3xsm"]: "280px",
      ["2xsm"]: "320px",
      xsm: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      ["2xl"]: "1536px",
      ["3xl"]: "1920px",
      ["4xl"]: "2440px",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#FF8D00",
        10: "#FFF0D9",
        20: "#FFE7C4",
        30: "#FFE0B5",
        40: "#FED9A6",
        50: "#FDC886",
        60: "#FFC266",
        70: "#FFB54D",
        80: "#FFA733",
        90: "#FF9600",
        foreground: "#FFFDF9"
      },
      secondary: {
        DEFAULT: "#FCF0E1",
      },
      gray: {
        DEFAULT: "#ADADAD",
      },
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#010816",
      background: "#ffffff",
      foreground: "#010816",
      destructive: {
        DEFAULT: "#ee4444",
        foreground: "#f7f9fb",
      },
      muted: {
        DEFAULT: "#f1f5f9",
        foreground: "#64748b",
      },
      accent: {
        DEFAULT: "#f1f5f9",
        foreground: "#0f172a",
      },
      popover: {
        DEFAULT: "#ffffff",
        foreground: "#010816",
      },
      card: {
        DEFAULT: "#ffffff",
        foreground: "#010816",
      },
    },
    borderRadius: {
      xsm: "8px",
      sm: "12px",
      md: "24px",
      lg: "36px",
      xl: "48px",
      full: "9999px",
    },
    fontSize: {
      h1: "40px",
      h2: "32px",
      h3: "24px",
      h4: "20px",
      h5: "18px",
      h6: "16px",
      paragraph: "14px",
      small: "12px",
      hint: "10px",
    },
    fontWeight: {
      DEFAULT: "400",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
