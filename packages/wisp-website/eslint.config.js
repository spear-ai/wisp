import {
  baseEslintConfig,
  nextEslintConfig,
  prettierConfig,
} from "@spear-ai/eslint-config";

const eslintConfig = [
  {
    ignores: [
      "**/.next/*",
      "**/dist/*",
      "**/public/*",
      "next-env.d.ts",
      "**/__generated__",
      "**/sentry-example-api/**",
      "**/sentry-example-page/**",
    ],
  },
  ...baseEslintConfig,
  ...nextEslintConfig,
  prettierConfig,
  {
    rules: {
      "no-void": "off",
    },
  },
];

export default eslintConfig;
