import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    plugins: pluginReact.configs.flat.recommended.plugins,
    languageOptions: pluginReact.configs.flat.recommended.languageOptions,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    rules: {
      "max-len": ["warn", { "code": 120 }],
      "semi": ["warn", "always"],
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "indent": ["warn", 2, { "SwitchCase": 1, "MemberExpression": 1 }],
      "comma-style": ["warn", "last"],
      "comma-dangle": ["warn", "always-multiline"],
      "quotes": ["warn", "double"],
      "jsx-quotes": ["warn", "prefer-double"],
      "camelcase": "off",
      "no-trailing-spaces": "warn",
      "space-before-blocks": "warn",
      "space-in-parens": "warn",
      "space-before-function-paren": [
        "warn",
        { "anonymous": "always", "named": "never", "asyncArrow": "always" },
      ],
      "object-curly-spacing": ["warn", "always"],
      "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 0 }],
      "no-multi-spaces": "warn",
      "multiline-ternary": "off",
      "no-irregular-whitespace": "warn",
      "no-case-declarations": "warn",
      "prefer-const": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "default-case-last": "off",
      "spaced-comment": "warn",
      "no-duplicate-imports": "warn",
      "no-template-curly-in-string": "error",
    },
  },
]);
