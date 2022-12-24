module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "airbnb-base"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "import/prefer-default-export": "off",
    "no-new": "off",
    "no-plusplus": "off"
  },
};
