import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'link-secondary'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Button size',
    },
    destructive: {
      control: 'boolean',
      description: 'Destructive action styling',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Primary Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const PrimaryDestructive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// Secondary Variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const SecondaryDestructive: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// Outline Variants
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const OutlineSmall: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const OutlineDestructive: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// Ghost Variants
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const GhostSmall: Story = {
  args: {
    variant: 'ghost',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const GhostDestructive: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// Link Variants
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const LinkSmall: Story = {
  args: {
    variant: 'link',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const LinkDestructive: Story = {
  args: {
    variant: 'link',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// Link Secondary Variants
export const LinkSecondary: Story = {
  args: {
    variant: 'link-secondary',
    size: 'md',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const LinkSecondarySmall: Story = {
  args: {
    variant: 'link-secondary',
    size: 'sm',
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

export const LinkSecondaryDestructive: Story = {
  args: {
    variant: 'link-secondary',
    size: 'md',
    destructive: true,
    children: 'Button',
    iconBefore: <PlusIcon />,
    iconAfter: <PlusIcon />,
  },
};

// All Variants Overview
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="primary" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="primary" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="primary" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="primary" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="secondary" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="secondary" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="secondary" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="secondary" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outline</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="outline" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="outline" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="outline" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="outline" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Ghost</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="ghost" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="ghost" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="ghost" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="ghost" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Link</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="link" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Link Secondary</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="link-secondary" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link-secondary" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link-secondary" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link-secondary" size="md" disabled iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
            Button
          </Button>
          <Button variant="link-secondary" size="md" isLoading>
            Button
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Icon Only Buttons
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" size="md">
        <CircleIcon />
      </Button>
      <Button variant="secondary" size="md">
        <CircleIcon />
      </Button>
      <Button variant="outline" size="md">
        <CircleIcon />
      </Button>
      <Button variant="ghost" size="md">
        <CircleIcon />
      </Button>
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
