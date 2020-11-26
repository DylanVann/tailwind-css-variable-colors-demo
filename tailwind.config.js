const getColor = (name) => ({ opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(--twc-${name}), ${opacityValue})`
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(--twc-${name}), var(${opacityVariable}, 1))`
  }
  return `rgb(var(--twc-${name}))`
}

const getColorScale = (name) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (acc, step) => ({
      ...acc,
      [step]: getColor(`${name}-${step}`),
    }),
    {},
  )

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foreground: getColor('foreground'),
        background: getColor('background'),
        accent: getColor('accent'),
        gray: getColorScale('gray'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
