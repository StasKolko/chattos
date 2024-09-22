import type { Meta, StoryObj } from '@storybook/react';

import {
  Modal,
  ModalContent,
  ModalTrigger
} from './index';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { ModalPadding, ModalPosition } from './ModalContent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal,
  render: function Render(args) {
    const {
      isOpen,
      ...props
    } = args;
    const { t } = useTranslation();

    return (
      <Modal isOpen={isOpen}>
        <ModalTrigger>
          <Button
            option='btn'
            variant='outline'
            size='md'
          >
            {t('открыть')}
          </Button>
        </ModalTrigger>

        <ModalContent {...props}>
          <div>
            Какой-то контент
          </div>
          <ModalTrigger>
            <Button
              option='btn'
              variant='outline'
              size='md'
            >
              {t('закрыть')}
            </Button>
          </ModalTrigger>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean'
    },
    padding: {
      options: [
        'xs',
        'sm',
        'md',
        'lg'
      ],
      control: { type: 'radio' },
    },
    position: {
      options: [
        'left',
        'center',
        'right'
      ],
      control: { type: 'radio' },
    },
    alert: {
      control: 'boolean'
    },
    overlay: {
      control: 'boolean'
    },
  },
  tags: ['!autodocs'],
} satisfies Meta<ModalProps>;

type ModalProps = {
  isOpen?: boolean;
  children: ReactNode;
  overlay?: boolean;
  alert?: boolean;
  position?: ModalPosition;
  padding: ModalPadding;
}

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenCenterOverlay: Story = {
  args: {
    padding: 'md',
    position: 'center',
    isOpen: true,
    overlay: true,
  },
};

export const OpenLeftOverlay: Story = {
  args: {
    padding: 'md',
    position: 'left',
    isOpen: true,
    overlay: true,
  },
};

export const OpenRightOverlay: Story = {
  args: {
    padding: 'md',
    position: 'right',
    isOpen: true,
    overlay: true,
  },
};

export const OpenCenter: Story = {
  args: {
    padding: 'md',
    position: 'center',
    isOpen: true,
  },
};

export const OpenLeft: Story = {
  args: {
    padding: 'md',
    position: 'left',
    isOpen: true,
  },
};

export const OpenRight: Story = {
  args: {
    padding: 'md',
    position: 'right',
    isOpen: true,
  },
};

export const OpenCenterXs: Story = {
  args: {
    padding: 'xs',
    position: 'center',
    isOpen: true,
  },
};

export const OpenCenterSm: Story = {
  args: {
    padding: 'sm',
    position: 'center',
    isOpen: true,
  },
};

export const OpenCenterMd: Story = {
  args: {
    padding: 'md',
    position: 'center',
    isOpen: true,
  },
};

export const OpenCenterLg: Story = {
  args: {
    padding: 'lg',
    position: 'center',
    isOpen: true,
  },
};

export const OpenCenterAlert: Story = {
  args: {
    padding: 'md',
    position: 'center',
    isOpen: true,
    alert: true,
  },
};