import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        sourceType: "module",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro,
      "@typescript-eslint": eslintPluginTypescript,
    },
    rules: {
      ...astro.configs.recommended.rules,
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "sort-imports": ["error"],
      "max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      "astro/astro": true,
      "import/resolver": {
        node: {
          extensions: [".js", ".ts", ".astro"],
        },
      },
    },
  },
];
