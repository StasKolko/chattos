import type { Meta, StoryObj } from '@storybook/react';

import { ReloadButton } from './ReloadButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/ReloadButton',
  component: ReloadButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
} satisfies Meta<typeof ReloadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};