module.exports = {
  // content: ["./src/**/*.{js,ts,jsx,tsx}"],
  content: [],
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "false",
  },
  safelist: [
    {
      pattern: /./,
    },
  ],
};
