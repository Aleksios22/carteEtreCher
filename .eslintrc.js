module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prettier/prettier': ['error'],
        'vue/no-multiple-template-root': 'off'
    }
}
