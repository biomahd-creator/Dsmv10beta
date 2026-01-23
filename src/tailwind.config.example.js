/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: Include the Design System in content paths
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include Design System components for proper class detection
    "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}",
  ],
  
  // Dark mode configuration
  darkMode: ["class"],
  
  theme: {
    extend: {
      // The Design System uses CSS variables for theming
      // You can extend or override these in your own CSS
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Add any custom extensions here
    },
  },
  
  plugins: [
    // Add Tailwind plugins here if needed
    // require("tailwindcss-animate"), // Optional: if you want animations
  ],
};
