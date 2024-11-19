import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the `pages` directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the `components` directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the `app` directory (for Next.js app router)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom CSS variables for background
        foreground: "var(--foreground)", // Custom CSS variables for foreground
      },
    },
  },
  plugins: [], // Add Tailwind plugins here if needed (e.g., forms, typography)
} satisfies Config;
