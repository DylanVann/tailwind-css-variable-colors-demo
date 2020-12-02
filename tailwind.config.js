const color = (name) => ({ opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(--twc-${name}), ${opacityValue})`
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(--twc-${name}), var(${opacityVariable}, 1))`
  }
  return `rgb(var(--twc-${name}))`
}

const colorScale = (name) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (acc, step) => ({
      ...acc,
      [step]: color(`${name}-${step}`),
    }),
    {},
  )

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foreground: color('foreground'),
        background: color('background'),
        accent: color('accent'),
        gray: colorScale('gray'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
