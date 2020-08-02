module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        "'Rubik'",
        "Rubik",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "Noto Sans",
        "sans-serif",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      display: [
        "'Inter'",
        "Inter",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "Noto Sans",
        "sans-serif",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "'Inconsolata'",
        "Inconsolata",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      colors: {
        "bright-white": "#F8F8F2",
        "dark-violet": "#22212C",
        "soft-violet": "#B0A2FF",
        "bright-green": "#8AFF80",
        "bright-red": "#E95353",
        "bright-yellow": "#F6DF0B",
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/ui"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "1600px",
          },
        },
      })
    },
  ],
}
