import '@/app/styles/index.css';

import type { Preview } from '@storybook/react';
import i18n from '@/shared/config/i18n/i18nForStorybook';

import { getDecorators } from './config/getDecorators';
import { getGlobalTypes } from './config/getGlobalTypes';
import { getInitialGlobals } from './config/getInitialGlobals';

const preview: Preview = {
  parameters: {
    i18n,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: getDecorators(),
  globalTypes: getGlobalTypes(),
  initialGlobals: getInitialGlobals(),
};

export default preview;
