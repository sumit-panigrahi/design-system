// /** @type { import('@storybook/web-components-vite').StorybookConfig } */
// const config = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   framework: {
//     name: '@storybook/web-components-vite',
//     options: {},
//   },
//   docs: {
//     autodocs: 'tag',
//   },
// };
// export default config;
import type { StorybookConfig } from '@storybook/web-components-vite';
const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  // [{ titlePrefix:'wc',directory}],//
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
}
export default config;