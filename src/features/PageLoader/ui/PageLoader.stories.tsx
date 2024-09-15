import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],

} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};