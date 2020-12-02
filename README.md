# Tailwind CSS Variable Colors Demo

This is an example of how CSS variables can be used for Tailwind colors.

Currently this requires [a patch](./patches/tailwindcss+2.0.1.patch) to `tailwindcss`.

Color variables are defined in the main CSS file:

```css
:root {
  --twc-foreground: 0, 0, 0;
  --twc-background: 255, 255, 255;
  --twc-accent: 255, 0, 0;
  --twc-gray-50: 250, 250, 250;
  --twc-gray-100: 244, 244, 245;
  --twc-gray-200: 228, 228, 231;
  --twc-gray-300: 212, 212, 216;
  --twc-gray-400: 161, 161, 170;
  --twc-gray-500: 113, 113, 122;
  --twc-gray-600: 82, 82, 91;
  --twc-gray-700: 63, 63, 70;
  --twc-gray-800: 39, 39, 42;
  --twc-gray-900: 24, 24, 27;
}
```

Then referenced in `tailwind.config.js`:

```js
const color = (name) => `rgb(var(--twc-${name}))`

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
```

We can use our CSS variables to implement themes:

```css
:root.pdm-light {
  --twc-foreground: 0, 0, 0;
  --twc-background: 255, 255, 255;
  --twc-accent: 255, 0, 0;
  --twc-gray-50: 250, 250, 250;
  --twc-gray-100: 244, 244, 245;
  --twc-gray-200: 228, 228, 231;
  --twc-gray-300: 212, 212, 216;
  --twc-gray-400: 161, 161, 170;
  --twc-gray-500: 113, 113, 122;
  --twc-gray-600: 82, 82, 91;
  --twc-gray-700: 63, 63, 70;
  --twc-gray-800: 39, 39, 42;
  --twc-gray-900: 24, 24, 27;
}

:root.pdm-dark {
  --twc-foreground: 255, 255, 255;
  --twc-background: 0, 0, 0;
  --twc-accent: 0, 0, 255;
  --twc-gray-50: 24, 24, 27;
  --twc-gray-100: 39, 39, 42;
  --twc-gray-200: 63, 63, 70;
  --twc-gray-300: 82, 82, 91;
  --twc-gray-400: 113, 113, 122;
  --twc-gray-500: 161, 161, 170;
  --twc-gray-600: 212, 212, 216;
  --twc-gray-700: 228, 228, 231;
  --twc-gray-800: 244, 244, 245;
  --twc-gray-900: 250, 250, 250;
}
```

This will work with something like [`perfect-dark-mode`](https://perfect-dark-mode.netlify.app/).
