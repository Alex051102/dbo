import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser, // ← теперь объект
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
