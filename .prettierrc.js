module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
