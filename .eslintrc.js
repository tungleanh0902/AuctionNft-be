module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        semi: ['error', 'always'],
    },
};
