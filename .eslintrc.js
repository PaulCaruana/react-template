module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    jquery: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "semi": "error",
    "max-params": ["error", 4],
    "eqeqeq" : "error",
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    indent: ["error", 4],
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "no-throw-literal": "off",
    "react/prop-types": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "implicit-arrow-linebreak": "off",
    "class-methods-use-this": "off",
    "arrow-params": "off",
    quotes: ["error", "double"],
  },
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "16.0"
    }
  }
};
