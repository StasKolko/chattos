import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  render: function Render(args) {
    const { t } = useTranslation();

    const isIcon = args.option === 'icon';

    return (
      <Button {...args}>
        {isIcon ? <GitHubLogoIcon /> : t('кнопка')}
      </Button>
    );
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    option: {
      options: ['btn', 'icon', 'link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'successful'],
      control: { type: 'radio' },
    },
    underline: {
      if: { arg: 'option', eq: 'link' },
      control: 'boolean'
    }
  },
  tags: ['!autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    option: 'btn',
    variant: 'primary',
    size: 'md',
  },
};

export const SecondaryButton: Story = {
  args: {
    option: 'btn',
    variant: 'secondary',
    size: 'md'
  },
};

export const OutlineButton: Story = {
  args: {
    option: 'btn',
    variant: 'outline',
    size: 'md'
  },
};

export const GhostButton: Story = {
  args: {
    option: 'btn',
    variant: 'ghost',
    size: 'md'
  },
};

export const DestructiveButton: Story = {
  args: {
    option: 'btn',
    variant: 'destructive',
    size: 'md'
  },
};

export const SuccessfulButton: Story = {
  args: {
    option: 'btn',
    variant: 'successful',
    size: 'md'
  },
};

export const LgButton: Story = {
  args: {
    option: 'btn',
    variant: 'outline',
    size: 'lg'
  },
};

export const MdButton: Story = {
  args: {
    option: 'btn',
    variant: 'outline',
    size: 'md'
  },
};

export const SmButton: Story = {
  args: {
    option: 'btn',
    variant: 'outline',
    size: 'sm'
  },
};

export const XsButton: Story = {
  args: {
    option: 'btn',
    variant: 'outline',
    size: 'xs'
  },
};

export const PrimaryIcon: Story = {
  args: {
    option: 'icon',
    variant: 'primary',
    size: 'md',
  },
};

export const SecondaryIcon: Story = {
  args: {
    option: 'icon',
    variant: 'secondary',
    size: 'md'
  },
};

export const OutlineIcon: Story = {
  args: {
    option: 'icon',
    variant: 'outline',
    size: 'md'
  },
};

export const GhostIcon: Story = {
  args: {
    option: 'icon',
    variant: 'ghost',
    size: 'md'
  },
};

export const DestructiveIcon: Story = {
  args: {
    option: 'icon',
    variant: 'destructive',
    size: 'md'
  },
};

export const SuccessfulIcon: Story = {
  args: {
    option: 'icon',
    variant: 'successful',
    size: 'md'
  },
};

export const LgIcon: Story = {
  args: {
    option: 'icon',
    variant: 'outline',
    size: 'lg'
  },
};

export const MdIcon: Story = {
  args: {
    option: 'icon',
    variant: 'outline',
    size: 'md'
  },
};

export const SmIcon: Story = {
  args: {
    option: 'icon',
    variant: 'outline',
    size: 'sm'
  },
};

export const XsIcon: Story = {
  args: {
    option: 'icon',
    variant: 'outline',
    size: 'xs'
  },
};

export const PrimaryLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'md',
  },
};

export const SecondaryLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'secondary',
    size: 'md',
  },
};

export const PrimaryLinkUnderline: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'md',
    underline: true
  },
};

export const SecondaryLinkUnderline: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'secondary',
    size: 'md',
    underline: true
  },
};


export const LgLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'lg',
  },
};

export const MdLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'md',
  },
};

export const SmLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'sm',
  },
};

export const XsLink: Story = {
  argTypes: {
    option: {
      options: ['link'],
      control: { type: 'radio' }
    },
    variant: {
      options: [
        'primary',
        'secondary'],
      control: { type: 'radio' },
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    option: 'link',
    variant: 'primary',
    size: 'xs',
  },
};