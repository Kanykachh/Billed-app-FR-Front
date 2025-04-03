import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import eslintPluginJest from "eslint-plugin-jest";
import babelParser from "@babel/eslint-parser"; // ✅ importer le parser comme un objet

export default defineConfig({
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },
    parser: babelParser, // ✅ ici on utilise l'objet parser et non une string
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      requireConfigFile: false,
    },
  },
  plugins: {
    jest: eslintPluginJest, // ✅ plugin au format flat
  },
  rules: {
    "no-undef": "off",
    "no-unused-vars": "warn",
    "no-mocks-import": "off",
  },
});
