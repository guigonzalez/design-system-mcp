import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    isRequired: {
      control: 'boolean',
      description: 'Shows required asterisk (*)',
    },
    isOptional: {
      control: 'boolean',
      description: 'Shows "(Optional)" text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    success: {
      control: 'text',
      description: 'Success message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    helperText: 'Enter your email address',
  },
};

// Required field
export const Required: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    isRequired: true,
    helperText: 'This field is required',
  },
};

// Optional field
export const Optional: Story = {
  args: {
    label: 'Label',
    placeholder: 'Optional No. (N/A)',
    isOptional: true,
    helperText: 'Enter your email address',
  },
};

// Error state
export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    error: 'Your email address must have 3-6 characters.',
  },
};

// Success state
export const Success: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    success: 'Your email address is valid',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    fullWidth: true,
    helperText: 'Enter your email address',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// With value
export const WithValue: Story = {
  args: {
    label: 'Label',
    placeholder: 'Email',
    value: 'user@example.com',
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8" style={{ width: '400px' }}>
      <Input
        label="Default"
        placeholder="Email"
        helperText="Enter your email address"
      />
      <Input
        label="Required"
        placeholder="Email"
        isRequired
        helperText="This field is required"
      />
      <Input
        label="Optional"
        placeholder="Optional No. (N/A)"
        isOptional
        helperText="Enter your email address"
      />
      <Input
        label="Error"
        placeholder="Email"
        error="Your email address must have 3-6 characters."
      />
      <Input
        label="Success"
        placeholder="Email"
        success="Your email address is valid"
      />
      <Input
        label="Disabled"
        placeholder="Email"
        disabled
        helperText="This field is disabled"
      />
    </div>
  ),
};
