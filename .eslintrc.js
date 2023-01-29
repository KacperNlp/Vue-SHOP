module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {},
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/src/**/**/*.spec.{j,t}s?(x)",
        "**/src/**/**/*.spec.js",
        "**/src/**/**/*.spec.ts",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
