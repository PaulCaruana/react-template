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
    "max-params": ["error", 6],
    "eqeqeq" : "error",
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    indent: ['error', 4, {
      SwitchCase: 0,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: true
    }],
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
    "arrow-parens": "off",
    "comma-dangle": "off",
    quotes: ["error", "double"],
    "eol-last": "off",
    "import/no-extraneous-dependencies": "off",
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
