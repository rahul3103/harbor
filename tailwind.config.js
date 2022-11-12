const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          75: "#F6F8FA",
          125: "#F0F0F0",
          130: "#F6F6F6",
          135: "#D2D5DB",
          150: "#dddddd",
          175: "#aaaaaa",
          250: "#999999",
          275: "#666666",
        },
        white: "#ffffff",
        black: {
          0: "#000000",
          100: "#222222",
          125: "#333333",
          555: "#555555",
        },
        green: {
          50: "#509900",
        },
        blue: {
          50: "#2F80ED",
        },
        purple: {
          450: "#7B61FF",
        },
        amber: {
          450: "#DB9000",
        },
        red: {
          350: "#FDF7F8",
          450: "#CD3A4C",
        },
      },
      spacing: {
        5.5: "1.375rem",
        15: "3.75rem",
        50: "12.5rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        card: "0px 4px 6px rgba(0, 0, 0, 0.06)",
        menu: "0px 8px 24px rgba(0, 0, 0, 0.1);",
      },
      fontSize: {
        "xs+": ["13px", "1.5rem"],
        sm: ["0.875rem", "1.5rem"],
      },
      gridTemplateColumns: {
        panel: "300px auto",
      },
      gridTemplateRows: {
        layout: "60px auto",
      },
      height: {
        content: "calc(100vh - 60px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "flex",
          alignItems: "center",
          padding: ".25rem 0.5rem",
          borderRadius: ".25rem",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#dddddd",
          },
        },
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
