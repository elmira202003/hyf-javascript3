{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "no-var": "warn",
        "prefer-const": "warn",
        "no-multiple-empty-lines": "warn",
        "eol-last": [
            "error",
            "always"
        ],
        "no-console": "off",
        "camelcase": "warn",
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
}