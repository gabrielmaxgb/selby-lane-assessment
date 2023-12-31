module.exports = {
  env: {
    browser: true,
    es2020: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
