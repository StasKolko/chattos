import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AboutPage from './AboutPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  render: () => <AboutPage />,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
