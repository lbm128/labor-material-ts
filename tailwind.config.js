/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@prism/dropcloth/tailwind.preset')],
  mode: 'jit',
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      '../ui.apps/src/main/content/jcr_root/apps/**/*.html',
      './src/**/*.tsx',
      './src/**/*.scss',
    ],
  },
  theme: {
    extend: {
      fontSize: {
        clamp: 'clamp(12px, 1.75vw, 16px)',
      },
      backgroundImage: {
        'pd-custom': 'linear-gradient(to bottom, #107cca, #022966 100%)',
      },
    },
  },
  corePlugins: {
    float: true,
  },
  plugins: [],
};

