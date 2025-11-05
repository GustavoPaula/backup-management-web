import { defineConfig } from "eslint/config";

export default defineConfig([
  // matches all files ending with .js
  {
    files: ["**/*.js", "**/*.tsx"],
    rules: {
      semi: "error",
    },
  },

  // matches all files ending with .js except those in __tests
  {
    files: ["**/*.js", "**/*.tsx"],
    ignores: ["__tests/**"],
    rules: {
      "no-console": "error",
    },
  },
]);