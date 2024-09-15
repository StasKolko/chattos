import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  render: () => <MainPage />,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
