import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Badge variant style',
    },
    rounded: {
      control: 'boolean',
      description: 'Fully rounded (pill shape) or slightly rounded corners',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variants
export const Default: Story = {
  args: {
    variant: 'default',
    rounded: true,
    children: 'Badge',
  },
};

export const DefaultSquare: Story = {
  args: {
    variant: 'default',
    rounded: false,
    children: 'Badge',
  },
};

// Secondary variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    rounded: true,
    children: 'Badge',
  },
};

export const SecondarySquare: Story = {
  args: {
    variant: 'secondary',
    rounded: false,
    children: 'Badge',
  },
};

// Destructive variants
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    rounded: true,
    children: 'Badge',
  },
};

export const DestructiveSquare: Story = {
  args: {
    variant: 'destructive',
    rounded: false,
    children: 'Badge',
  },
};

// Outline variants
export const Outline: Story = {
  args: {
    variant: 'outline',
    rounded: true,
    children: 'Badge',
  },
};

export const OutlineSquare: Story = {
  args: {
    variant: 'outline',
    rounded: false,
    children: 'Badge',
  },
};

// All variants overview
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Rounded Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default" rounded>Badge</Badge>
          <Badge variant="secondary" rounded>Badge</Badge>
          <Badge variant="outline" rounded>Badge</Badge>
          <Badge variant="destructive" rounded>Badge</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Square Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default" rounded={false}>Badge</Badge>
          <Badge variant="secondary" rounded={false}>Badge</Badge>
          <Badge variant="outline" rounded={false}>Badge</Badge>
          <Badge variant="destructive" rounded={false}>Badge</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">States (Hover & Focus)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Hover me</Badge>
          <Badge variant="secondary">Hover me</Badge>
          <Badge variant="destructive">Hover me</Badge>
          <Badge variant="outline">Hover me</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Different Content</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">New</Badge>
          <Badge variant="secondary">Beta</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge variant="outline">Draft</Badge>
          <Badge variant="default">In Progress</Badge>
          <Badge variant="secondary">Coming Soon</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Numbers</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">1</Badge>
          <Badge variant="secondary">12</Badge>
          <Badge variant="destructive">99+</Badge>
          <Badge variant="outline">5</Badge>
        </div>
      </div>
    </div>
  ),
};

// Usage examples
export const InlineUsage: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-base">
        This is a new feature <Badge variant="default">New</Badge>
      </p>
      <p className="text-base">
        Still in development <Badge variant="secondary">Beta</Badge>
      </p>
      <p className="text-base">
        You have <Badge variant="destructive">3</Badge> errors
      </p>
      <p className="text-base">
        Document status: <Badge variant="outline">Draft</Badge>
      </p>
    </div>
  ),
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="font-medium">Active:</span>
        <Badge variant="default" rounded>Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Pending:</span>
        <Badge variant="secondary" rounded>Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Error:</span>
        <Badge variant="destructive" rounded>Error</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Draft:</span>
        <Badge variant="outline" rounded>Draft</Badge>
      </div>
    </div>
  ),
};
