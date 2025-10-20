import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'Alert variant style',
      table: {
        type: { summary: "'default' | 'destructive'" },
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    description: {
      control: 'text',
      description: 'Alert description/message',
    },
    icon: {
      control: false,
      description: 'Custom icon (ReactNode)',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Error',
    description: 'Your session has expired. Please log in again.',
  },
};

// Title only
export const TitleOnly: Story = {
  args: {
    variant: 'default',
    title: 'Update Available',
  },
};

// Description only
export const DescriptionOnly: Story = {
  args: {
    variant: 'default',
    description: 'This is a simple alert with just a description.',
  },
};

// With custom icon
export const CustomIcon: Story = {
  args: {
    variant: 'default',
    title: 'Custom Icon',
    description: 'This alert uses a custom icon.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    variant: 'default',
    title: 'No Icon',
    description: 'This alert has no icon.',
    icon: null,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4" style={{ width: '600px' }}>
      <Alert
        variant="default"
        title="Heads up!"
        description="You can add components to your app using the cli."
      />

      <Alert
        variant="destructive"
        title="Error"
        description="Your session has expired. Please log in again."
      />

      <Alert
        variant="default"
        title="Information"
        description="This is an informational message."
      />

      <Alert
        variant="destructive"
        description="Something went wrong. Please try again."
      />
    </div>
  ),
};

// Use cases
export const UseCases: Story = {
  render: () => (
    <div className="space-y-4" style={{ width: '600px' }}>
      <Alert
        variant="default"
        title="New Feature Available"
        description="We've added a new dashboard to help you track your progress."
      />

      <Alert
        variant="destructive"
        title="Payment Failed"
        description="We couldn't process your payment. Please update your payment method."
      />

      <Alert
        variant="default"
        title="Tip"
        description="Press Ctrl+K to quickly open the command palette."
      />

      <Alert
        variant="destructive"
        title="Authentication Error"
        description="Invalid credentials. Please check your username and password."
      />

      <Alert
        variant="default"
        description="Your changes have been saved successfully."
      />
    </div>
  ),
};

// With children (custom content)
export const WithChildren: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Alert variant="default" title="Markdown Support">
        <p className="mb-2">You can use custom content in alerts:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Bullet points</li>
          <li>Links and buttons</li>
          <li>Any React components</li>
        </ul>
      </Alert>
    </div>
  ),
};

// Long content
export const LongContent: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Alert
        variant="destructive"
        title="Connection Error"
        description="We're having trouble connecting to the server. This might be due to network issues, server maintenance, or firewall restrictions. Please check your internet connection and try again in a few moments. If the problem persists, contact support."
      />
    </div>
  ),
};
