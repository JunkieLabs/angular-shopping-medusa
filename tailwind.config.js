/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '88': '5.5rem',
        '418': '26rem',
      },
      width: {
        '270': '17rem',
      },
      padding: {
        '4.75rem': '4.75rem',
      },
      fontFamily: {
        'urban': ['Urbanist'],
      },
      borderRadius: {
        '32': '2rem'
      },
    },
    inset: {
      '41rem': '41rem',
    },
  },
  plugins: [],
}

