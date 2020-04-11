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
      ignoreComments: false
    }],
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