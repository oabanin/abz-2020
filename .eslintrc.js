module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb', // один пресет может перекрывать другой
    // 'eslint:recommended',
    // 'plugin:react/recommended', // набор правил рекомендуемых сообществом
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: { //  здесь правила мож
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
