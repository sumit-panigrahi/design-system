import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import storybookTheme from './storybook-theme';
addons.setConfig({
  theme: storybookTheme
});