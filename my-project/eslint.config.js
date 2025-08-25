import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended, // ✅ JavaScript recommended rules
  pluginReact.configs.flat.recommended, // ✅ React recommended rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // ✅ auto-detect React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ no need to import React manually
    },
  },
]);
