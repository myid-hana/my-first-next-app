module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: ["error", "double"],
        "@typescript-eslint/quotes": ["error", "double"],
        "no-unused-vars": "off",
        "spaced-comment": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "jsx-ally/control-has-associated-label": "off",
    }
}
