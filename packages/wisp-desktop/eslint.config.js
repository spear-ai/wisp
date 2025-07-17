import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

const eslintConfig = [...baseEslintConfig, prettierConfig];

export default eslintConfig;
