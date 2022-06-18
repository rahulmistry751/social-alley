module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'fira':['"Fira Sans"','sans-serif']
      },
      colors:{
        background:'var(--bg-color)',
        backgroundBase:'var(--base-bg)',
        primary:'var(--primary)',
        primaryAccent:'var(--primary-accent)',
      }
    },
  },
  plugins: [],
}
