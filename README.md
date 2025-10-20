# AfterDS 2.0 Component Library

A fully-featured, accessible component library built with React, TypeScript, and Tailwind CSS, based on the AfterDS 2.0 design system.

## Components

- **Input** - Text input with multiple states and validation
- **Button** - Button component with multiple variants and states
- **Badge** - Small status indicator with multiple variants
- **Accordion** - Collapsible content sections with smooth animations
- **Alert** - Notification messages with variants for different contexts

## Features

### Input Component
- **Multiple States**: Default, hover, focus, error, success, and disabled states
- **Flexible Labels**: Support for required and optional field indicators
- **Helper Text**: Display helper text, error messages, or success messages

### Button Component
- **6 Variants**: Primary, Secondary, Outline, Ghost, Link, and Link Secondary
- **2 Sizes**: Small (sm) and Medium (md)
- **States**: Normal, Hover, Focused, Disabled, and Loading
- **Destructive Mode**: Red styling for destructive actions
- **Icons**: Support for icons before and after button text
- **Loading State**: Built-in loading spinner

### Badge Component
- **4 Variants**: Default, Secondary, Destructive, and Outline
- **2 Shapes**: Rounded (pill) and Square (slightly rounded)
- **States**: Normal, Hover, and Focus
- **Compact Design**: Small, lightweight status indicators
- **Flexible Content**: Works with text, numbers, or icons

### Accordion Component
- **2 Modes**: Single (one item open) or Multiple (multiple items open)
- **Smooth Animations**: Animated expand/collapse transitions
- **States**: Closed, Open, and Hover
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage
- **Accessible**: Full keyboard navigation and ARIA support
- **Flexible Content**: Can contain any content (text, images, forms, etc.)

### Alert Component
- **2 Variants**: Default and Destructive
- **Flexible Structure**: Title, description, or custom content
- **Icons**: Default icons or custom icon support
- **ARIA Support**: Proper role="alert" for accessibility
- **Responsive**: Adapts to different screen sizes

### General
- **Accessible**: Built with accessibility best practices
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- **Storybook**: Interactive component documentation and testing
- **Inter Font**: Professional typography with Inter font family

## Design Tokens

The component uses AfterDS 2.0 design tokens:

- **Colors**: Custom color palette matching the design system
- **Typography**: Inter font family with defined font sizes and weights
- **Spacing**: Consistent spacing scale (2, 2.5, 3, 4, etc.)
- **Border Radius**: Defined border radius values (sm, md, lg)

## Installation

```bash
# Install dependencies
npm install
```

## Usage

### Input Component

#### Basic Example

```tsx
import { Input } from './components/Input';

function MyForm() {
  const [email, setEmail] = useState('');

  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      helperText="We'll never share your email"
    />
  );
}
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `isRequired` | `boolean` | `false` | Shows required asterisk (*) |
| `isOptional` | `boolean` | `false` | Shows "(Optional)" text |
| `helperText` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message (activates error state) |
| `success` | `string` | - | Success message (activates success state) |
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Input variant |
| `fullWidth` | `boolean` | `false` | Full width input |
| `disabled` | `boolean` | `false` | Disabled state |

All standard HTML input attributes are also supported.

### Examples

#### Required Field

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  isRequired
  helperText="This field is required"
/>
```

#### Optional Field

```tsx
<Input
  label="Phone Number"
  placeholder="Optional phone"
  isOptional
  helperText="For account recovery"
/>
```

#### Error State

```tsx
<Input
  label="Email"
  placeholder="user@example.com"
  error="Please enter a valid email address"
/>
```

#### Success State

```tsx
<Input
  label="Username"
  placeholder="Choose username"
  success="This username is available!"
/>
```

#### Disabled State

```tsx
<Input
  label="Username"
  placeholder="Cannot edit"
  disabled
  helperText="This field is disabled"
/>
```

### Button Component

#### Basic Example

```tsx
import { Button } from './components/Button';

function MyApp() {
  return (
    <>
      <Button variant="primary" size="md">
        Click Me
      </Button>

      <Button variant="secondary" size="sm" isLoading>
        Loading...
      </Button>
    </>
  );
}
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link' \| 'link-secondary'` | `'primary'` | Button variant style |
| `size` | `'sm' \| 'md'` | `'md'` | Button size |
| `destructive` | `boolean` | `false` | Destructive action styling (red) |
| `isLoading` | `boolean` | `false` | Loading state with spinner |
| `iconBefore` | `ReactNode` | - | Icon before button text |
| `iconAfter` | `ReactNode` | - | Icon after button text |
| `fullWidth` | `boolean` | `false` | Full width button |
| `disabled` | `boolean` | `false` | Disabled state |

All standard HTML button attributes are also supported.

#### Button Examples

**With Icons**

```tsx
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

<Button variant="primary" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
  Add Item
</Button>
```

**Destructive Action**

```tsx
<Button variant="primary" destructive>
  Delete Account
</Button>
```

**Loading State**

```tsx
<Button variant="secondary" isLoading>
  Processing...
</Button>
```

**Link Button**

```tsx
<Button variant="link" size="md">
  Learn More
</Button>
```

### Badge Component

#### Basic Example

```tsx
import { Badge } from './components/Badge';

function MyApp() {
  return (
    <>
      <Badge variant="default">New</Badge>
      <Badge variant="secondary">Beta</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </>
  );
}
```

#### Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Badge variant style |
| `rounded` | `boolean` | `true` | Fully rounded (pill) or slightly rounded corners |

All standard HTML span attributes are also supported.

#### Badge Examples

**Rounded vs Square**

```tsx
<Badge variant="default" rounded>Rounded</Badge>
<Badge variant="default" rounded={false}>Square</Badge>
```

**Status Indicators**

```tsx
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="outline">Draft</Badge>
```

**With Numbers**

```tsx
<Badge variant="default">1</Badge>
<Badge variant="secondary">12</Badge>
<Badge variant="destructive">99+</Badge>
```

**Inline Usage**

```tsx
<p>
  New feature <Badge variant="default">New</Badge>
</p>
<p>
  You have <Badge variant="destructive">3</Badge> errors
</p>
```

### Accordion Component

#### Basic Example

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/Accordion';

function FAQ() {
  return (
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
          Yes. It comes with default styles that match the design system.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

#### Accordion Props

**Accordion (Container)**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Allow one or multiple items to be open |
| `defaultValue` | `string \| string[]` | - | Default open items (uncontrolled) |
| `value` | `string \| string[]` | - | Controlled open items |
| `onValueChange` | `(value) => void` | - | Callback when items change |

**AccordionItem**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Unique value for this item (required) |
| `disabled` | `boolean` | `false` | Disable the item |

#### Accordion Examples

**Single Mode (only one item open)**

```tsx
<Accordion type="single">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Multiple Mode (multiple items open)**

```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

**With Default Open Item**

```tsx
<Accordion type="single" defaultValue="item-1">
  {/* items... */}
</Accordion>
```

**Controlled Accordion**

```tsx
const [value, setValue] = useState('item-1');

<Accordion type="single" value={value} onValueChange={setValue}>
  {/* items... */}
</Accordion>
```

### Alert Component

#### Basic Example

```tsx
import { Alert } from './components/Alert';

function MyApp() {
  return (
    <>
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
    </>
  );
}
```

#### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | Alert variant style |
| `title` | `string` | - | Alert title |
| `description` | `string` | - | Alert description/message |
| `icon` | `ReactNode` | - | Custom icon (uses default if not provided) |

All standard HTML div attributes are also supported.

#### Alert Examples

**Default Alert**

```tsx
<Alert
  variant="default"
  title="Heads up!"
  description="You can add components to your app using the cli."
/>
```

**Destructive Alert**

```tsx
<Alert
  variant="destructive"
  title="Error"
  description="Your session has expired. Please log in again."
/>
```

**Title Only**

```tsx
<Alert variant="default" title="Update Available" />
```

**Description Only**

```tsx
<Alert
  variant="destructive"
  description="Something went wrong. Please try again."
/>
```

**Custom Icon**

```tsx
<Alert
  variant="default"
  title="Custom"
  description="Alert with custom icon"
  icon={<CustomIcon />}
/>
```

**With Custom Content**

```tsx
<Alert variant="default" title="Markdown Support">
  <p>You can use custom content:</p>
  <ul>
    <li>Bullet points</li>
    <li>Links and buttons</li>
  </ul>
</Alert>
```

## Live Demos

### Deployed Sites

- **Main App**: [https://guigonzalez.github.io/design-system-mcp/](https://guigonzalez.github.io/design-system-mcp/)
- **Storybook**: [https://guigonzalez.github.io/design-system-mcp/storybook/](https://guigonzalez.github.io/design-system-mcp/storybook/)

Both sites are automatically deployed via GitHub Actions on every push to the `main` branch.

## Development

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the demo.

### Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Build

```bash
npm run build
```

### Build Storybook

```bash
npm run build-storybook
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a deployment workflow that:

1. Builds the main application
2. Builds Storybook
3. Deploys both to GitHub Pages

For detailed deployment documentation, see [docs/deployment.md](docs/deployment.md).

## Component Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Input.tsx          # Input component
│   │   ├── Input.stories.tsx  # Input Storybook stories
│   │   └── index.ts           # Exports
│   ├── Button/
│   │   ├── Button.tsx         # Button component
│   │   ├── Button.stories.tsx # Button Storybook stories
│   │   └── index.ts           # Exports
│   ├── Badge/
│   │   ├── Badge.tsx          # Badge component
│   │   ├── Badge.stories.tsx  # Badge Storybook stories
│   │   └── index.ts           # Exports
│   ├── Accordion/
│   │   ├── Accordion.tsx      # Accordion component
│   │   ├── Accordion.stories.tsx # Accordion Storybook stories
│   │   └── index.ts           # Exports
│   └── Alert/
│       ├── Alert.tsx          # Alert component
│       ├── Alert.stories.tsx  # Alert Storybook stories
│       └── index.ts           # Exports
├── index.css                  # Global styles & Tailwind
├── App.tsx                    # Demo app
└── main.tsx                   # Entry point
```

## Customization

### Tailwind Configuration

The component uses custom Tailwind configuration defined in `tailwind.config.js`. You can customize colors, spacing, and other design tokens there.

### Color Tokens

```js
colors: {
  background: '#fcfaf8',
  foreground: '#181818',
  primary: { DEFAULT: '#ef6c00', foreground: '#ffffff' },
  secondary: { DEFAULT: '#ffefd9', foreground: '#ef6c00' },
  muted: { DEFAULT: '#f5f5f5', foreground: '#353535' },
  destructive: { DEFAULT: '#dc2626', foreground: '#ffffff' },
  success: { DEFAULT: '#16a34a', foreground: '#ffffff' },
  accent: { DEFAULT: '#ffffff', foreground: '#181818' },
  input: '#353535',
  border: '#e7e5e4',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
