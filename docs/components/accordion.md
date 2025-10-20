# Accordion Component

A collapsible content component for organizing information in expandable sections.

## Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from './components/Accordion';
```

## Basic Usage

```tsx
<Accordion type="single">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Types

### Single (Only one open at a time)

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

When you open one item, others automatically close.

### Multiple (Multiple items can be open)

```tsx
<Accordion type="multiple">
  <AccordionItem value="q1">
    <AccordionTrigger>What is AfterDS?</AccordionTrigger>
    <AccordionContent>
      AfterDS is a comprehensive design system.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="q2">
    <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
    <AccordionContent>
      Yes! All components use Tailwind CSS.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

Multiple items can be expanded simultaneously.

## Controlled State

### Single Mode (Controlled)

```tsx
import { useState } from 'react';

function ControlledAccordion() {
  const [value, setValue] = useState('item-1');

  return (
    <Accordion
      type="single"
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Multiple Mode (Controlled)

```tsx
import { useState } from 'react';

function ControlledMultipleAccordion() {
  const [values, setValues] = useState(['item-1']);

  return (
    <Accordion
      type="multiple"
      value={values}
      onValueChange={setValues}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Default Open Items

```tsx
<Accordion type="single" defaultValue="item-2">
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Item 2 (Open by default)</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Disabled Items

```tsx
<AccordionItem value="disabled" disabled>
  <AccordionTrigger>Disabled Item</AccordionTrigger>
  <AccordionContent>Cannot be opened</AccordionContent>
</AccordionItem>
```

## Use Cases

### FAQ Section

```tsx
<Accordion type="single">
  <AccordionItem value="faq-1">
    <AccordionTrigger>What is the return policy?</AccordionTrigger>
    <AccordionContent>
      You can return any item within 30 days of purchase.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="faq-2">
    <AccordionTrigger>How do I track my order?</AccordionTrigger>
    <AccordionContent>
      You'll receive a tracking number via email once your order ships.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Settings Panel

```tsx
<Accordion type="multiple" defaultValue={['general', 'privacy']}>
  <AccordionItem value="general">
    <AccordionTrigger>General Settings</AccordionTrigger>
    <AccordionContent>
      {/* General settings form */}
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="privacy">
    <AccordionTrigger>Privacy Settings</AccordionTrigger>
    <AccordionContent>
      {/* Privacy settings form */}
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Documentation Sections

```tsx
<Accordion type="multiple">
  <AccordionItem value="installation">
    <AccordionTrigger>Installation</AccordionTrigger>
    <AccordionContent>
      <code>npm install afterds</code>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="usage">
    <AccordionTrigger>Usage</AccordionTrigger>
    <AccordionContent>
      Import and use components in your app.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Single or multiple open items |
| `defaultValue` | `string \| string[]` | - | Default open items (uncontrolled) |
| `value` | `string \| string[]` | - | Controlled open items |
| `onValueChange` | `(value: string \| string[]) => void` | - | Callback when items change |
| `className` | `string` | - | Additional CSS classes |

### AccordionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Unique value for this item (required) |
| `disabled` | `boolean` | `false` | Disable the item |
| `className` | `string` | - | Additional CSS classes |

### AccordionTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

Extends all standard HTML button attributes.

### AccordionContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

Extends all standard HTML div attributes.

## Accessibility

- Uses semantic HTML with proper ARIA attributes
- `aria-expanded` indicates open/closed state
- Keyboard navigation (Enter/Space to toggle)
- Focus visible indicators
- Screen reader friendly

## Animation

Content smoothly expands/collapses with:
- `transition-all duration-300 ease-in-out`
- Height animation from 0 to content height
- Chevron icon rotates 180° when open

## Design Tokens

**Colors:**
- Border: `#e7e5e4` / `#353535` (dark)
- Trigger text: `#0c0a09` / `#fcfaf8` (dark)
- Trigger hover: `rgba(231,229,228,0.3)` / `#2a2a2a` (dark)
- Content text: `#0c0a09` / `#fcfaf8` (dark)

**Spacing:**
- Trigger padding: `16px` vertical, `16px` horizontal
- Content padding: `16px` horizontal, `16px` bottom
- Gap (trigger): `16px`

**Typography:**
- Trigger: `16px` / `500` / `24px` line height
- Content: `14px` / `400` / `20px` line height

See [Design Tokens](../design-tokens.md) for complete reference.

## Best Practices

### Do's ✅

- Use for FAQs and help content
- Group related content
- Use descriptive trigger text
- Keep content organized
- Use multiple mode for settings

### Don'ts ❌

- Don't nest accordions deeply
- Don't hide critical information
- Don't use for navigation
- Don't make triggers too small
- Don't put forms in single-mode accordions

## Related Components

- [Alert](./alert.md) - For notifications
- [Button](./button.md) - For actions

## Figma Reference

- **Node ID:** `2811-14699`
- **File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0?node-id=2811-14699)

---

**Component File:** `src/components/Accordion/Accordion.tsx`
**Storybook:** [View in Storybook](http://localhost:6006/?path=/story/accordion)
