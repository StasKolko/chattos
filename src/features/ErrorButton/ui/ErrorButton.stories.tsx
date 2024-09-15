import type { Meta, StoryObj } from '@storybook/react';

import { ErrorButton } from './ErrorButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/ErrorButton',
  component: ErrorButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
} satisfies Meta<typeof ErrorButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};