module.exports = {
    "extends": [
        "airbnb-base",
        'plugin:vue/recommended',
    ],
    "parserOptions": {
        "parser": "babel-eslint",
    },
    "env": {
        "browser": true,
        "es6": true,
    },
    "rules": {
        "no-loop-func" : "off",
        "max-len": ["error", { "code": 120 }],
        "no-new": "off",
        "global-require": "off",
        "no-trailing-spaces": "off",
        "indent": ["error", 4],
        "linebreak-style": 0,
        "arrow-body-style": ["error", "always"],
        "quote-props": ["error", "consistent"],
        "no-else-return": ["error", { "allowElseIf": true }],
        "no-shadow": ["error", { "allow": ["state"] }],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state",
                    "element",
                    "Vue",
                    "map"
                ],
            },
        ],
        "prefer-destructuring": ["error", {
            "array": false,
            "object": true
          }, {
            "enforceForRenamedProperties": false
        }],
        "consistent-return": "off",
        "no-console": "off",
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": [2, {
            "singleline": 2,
            "multiline": {
              "max": 1,
              "allowFirstLine": false
            }
          }]
    }
};