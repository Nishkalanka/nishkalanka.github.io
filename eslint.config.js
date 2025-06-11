// .eslintrc.cjs (или eslint.config.js, если у тебя Vite >= 5.0)

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Добавляем Prettier в конец
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Если используешь JSX (не TSX файлы), то можно добавить:
    // 'react/react-in-jsx-scope': 'off',
    // Правила Prettier обрабатываются 'plugin:prettier/recommended', но можно добавить свои
    'prettier/prettier': ['error', {
      'endOfLine': 'lf', // Для кросс-платформенной совместимости
      'singleQuote': true, // Использовать одинарные кавычки
      'semi': true, // Ставить точки с запятой
      'tabWidth': 2, // Ширина табуляции
      'trailingComma': 'es5', // Запятые в конце объектов/массивов
      // Добавь здесь другие правила Prettier, которые тебе нравятся
    }],
    '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
    '@typescript-eslint/no-explicit-any': 'off', // Отключить ошибку о 'any', если пока не хочешь строгой типизации
    // Добавь свои правила ESLint здесь
  },
};