module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // Desabilite as regras que você deseja aqui
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "react/react-in-jsx-scope": "off"
        ,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/member-delimiter-style": "off"
    }
}


