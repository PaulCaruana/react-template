module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "semi": "error",
    "max-params": ["error", 4],
    "eqeqeq" : "error",
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    indent: ['error', 4],
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-throw-literal': 'off',
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
}