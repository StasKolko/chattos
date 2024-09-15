import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md'
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md'
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md'
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'md'
  },
};

export const Successful: Story = {
  args: {
    variant: 'successful',
    size: 'md'
  },
};

export const Lg: Story = {
  args: {
    variant: 'outline',
    size: 'lg'
  },
};

export const Md: Story = {
  args: {
    variant: 'outline',
    size: 'md'
  },
};

export const Sm: Story = {
  args: {
    variant: 'outline',
    size: 'sm'
  },
};

export const Xs: Story = {
  args: {
    variant: 'outline',
    size: 'xs'
  },
};