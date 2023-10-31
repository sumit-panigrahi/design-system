// import customElements from '../custom-elements.json';
import { themes } from '@storybook/theming';
import { Preview } from '@storybook/web-components';
// import { setCustomElementsManifest } from '@storybook/web-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import docTemplate from './docTemplate.mdx';
// import React from 'react';
// setCustomElementsManifest(customElements);
const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    // backgrounds:{
    //   default: 'black',
    //   values: [
    //     {
    //       name: 'black',
    //       value: '#000000',
    //     },
    //     {
    //       name: 'facebook',
    //       value: '#3b5998',
    //     },
    //   ]
    // }
  },
};

export default preview;