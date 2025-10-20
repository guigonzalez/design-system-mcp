import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Allow one or multiple items to be open at once',
      table: {
        type: { summary: "'single' | 'multiple'" },
        defaultValue: { summary: 'single' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'Default open items (uncontrolled)',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    value: {
      control: 'text',
      description: 'Controlled open items',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback when items change',
      table: {
        type: { summary: '(value: string | string[]) => void' },
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single Accordion (only one item open at a time)
export const Single: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the design system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Multiple Accordion (multiple items can be open)
export const Multiple: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the design system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// With Default Open Item
export const DefaultOpen: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the design system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// FAQ Example
export const FAQ: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single">
        <AccordionItem value="q1">
          <AccordionTrigger>What is AfterDS?</AccordionTrigger>
          <AccordionContent>
            AfterDS is a comprehensive design system built with React, TypeScript, and Tailwind CSS.
            It provides a collection of reusable components that follow best practices and accessibility standards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            Simply install the package using npm install, then import the components you need.
            Each component is fully typed with TypeScript for a great developer experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>
            Yes! All components use Tailwind CSS classes, making it easy to customize colors,
            spacing, and other design tokens through the tailwind.config.js file.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Is it mobile-friendly?</AccordionTrigger>
          <AccordionContent>
            Absolutely. All components are fully responsive and work great on mobile, tablet,
            and desktop devices. They also support touch interactions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>What about browser support?</AccordionTrigger>
          <AccordionContent>
            AfterDS supports all modern browsers including Chrome, Firefox, Safari, and Edge.
            We ensure compatibility with the latest versions of these browsers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Long Content Example
export const LongContent: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Terms and Conditions</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Privacy Policy</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Disabled Item
export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Is it styled? (Disabled)</AccordionTrigger>
          <AccordionContent>
            This item is disabled and cannot be opened.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
