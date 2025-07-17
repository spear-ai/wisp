import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

const eslintConfig = [
  {
    ignores: ["packages/**", "pnpm-lock.yaml"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
