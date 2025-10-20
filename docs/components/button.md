# Button Component

A versatile button component with multiple variants, sizes, and states for various use cases.

## Import

```tsx
import { Button } from './components/Button';
import type { ButtonProps } from './components/Button';
```

## Basic Usage

```tsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

## Variants

### Primary

The primary action button with orange background.

```tsx
<Button variant="primary">
  Primary Button
</Button>
```

**Dark Mode:**
- Background: `#ff6b00` → `#ff6b00`
- Hover: `#e65100` → `#d96200`
- Text: White

### Secondary

Secondary action button with light orange background.

```tsx
<Button variant="secondary">
  Secondary Button
</Button>
```

**Dark Mode:**
- Background: `#ffe5cc` → `#3d2517`
- Hover: `#ffd399` → `#4d2f1c`
- Text: Orange

### Outline

Button with transparent background and border.

```tsx
<Button variant="outline">
  Outline Button
</Button>
```

**Dark Mode:**
- Background: Transparent
- Border: `#e7e5e4` → `#ff6b00` (orange)
- Text: `#0c0a09` → `#ff6b00`

### Ghost

Minimal button with transparent background.

```tsx
<Button variant="ghost">
  Ghost Button
</Button>
```

**Dark Mode:**
- Background: Transparent → Transparent
- Hover: `#ffe5cc` → `#2a2a2a`
- Text: Orange

### Link

Text-only button with underline on hover.

```tsx
<Button variant="link">
  Link Button
</Button>
```

### Link Secondary

Secondary link style.

```tsx
<Button variant="link-secondary">
  Link Secondary
</Button>
```

## Sizes

### Small

```tsx
<Button variant="primary" size="sm">
  Small Button
</Button>
```

- Height: `32px`
- Padding: `8px 12px`
- Font size: `14px`

### Medium (Default)

```tsx
<Button variant="primary" size="md">
  Medium Button
</Button>
```

- Height: `40px`
- Padding: `8px 16px`
- Font size: `16px`

### Large

```tsx
<Button variant="primary" size="lg">
  Large Button
</Button>
```

- Height: `48px`
- Padding: `12px 20px`
- Font size: `16px`

## States

### Destructive

For dangerous actions like delete or remove.

```tsx
<Button variant="primary" destructive>
  Delete
</Button>

<Button variant="link" destructive>
  Remove
</Button>
```

All variants support the `destructive` prop which changes the color scheme to red.

### Loading

Shows a spinner and disables interaction.

```tsx
<Button variant="primary" isLoading>
  Loading...
</Button>
```

The button becomes disabled and displays a spinner animation.

### Disabled

```tsx
<Button variant="primary" disabled>
  Disabled
</Button>
```

Reduces opacity and prevents interaction.

## Icons

### Icon Before

```tsx
<Button
  variant="primary"
  iconBefore={<PlusIcon />}
>
  Add Item
</Button>
```

### Icon After

```tsx
<Button
  variant="primary"
  iconAfter={<ChevronRightIcon />}
>
  Continue
</Button>
```

### Both Icons

```tsx
<Button
  variant="primary"
  iconBefore={<DownloadIcon />}
  iconAfter={<ExternalLinkIcon />}
>
  Download
</Button>
```

### Icon Only

```tsx
<Button
  variant="ghost"
  iconBefore={<SettingsIcon />}
  aria-label="Settings"
/>
```

Use `aria-label` for accessibility when the button has no text.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link' \| 'link-secondary'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `destructive` | `boolean` | `false` | Destructive/danger style |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `iconBefore` | `React.ReactNode` | - | Icon before text |
| `iconAfter` | `React.ReactNode` | - | Icon after text |
| `fullWidth` | `boolean` | `false` | Take full container width |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `() => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

Extends all standard HTML button attributes.

## Examples

### Full Width Button

```tsx
<Button variant="primary" fullWidth>
  Submit Form
</Button>
```

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary" isLoading={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </Button>
</form>
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Save</Button>
</div>
```

### With Custom Styling

```tsx
<Button
  variant="primary"
  className="mt-4 shadow-lg"
>
  Custom Button
</Button>
```

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Enter/Space)
- Focus visible indicators
- Disabled state prevents interaction
- Loading state announced to screen readers
- Icon-only buttons require `aria-label`

## Design Tokens

Button uses these design tokens:

**Colors:**
- `--primary`: `#ff6b00`
- `--primary-foreground`: `#ffffff`
- `--secondary`: `#ffe5cc` / `#3d2517` (dark)
- `--destructive`: `#dc2626`

**Spacing:**
- `px-4`: `16px` horizontal padding
- `py-2`: `8px` vertical padding
- `gap-2`: `8px` gap between icon and text

**Typography:**
- `text-base`: `16px` font size
- `font-medium`: `500` font weight
- `leading-6`: `24px` line height

**Border:**
- `rounded-md`: `6px` border radius

See [Design Tokens](../design-tokens.md) for complete reference.

## Best Practices

### Do's ✅

- Use primary buttons for main actions
- Use secondary for less important actions
- Use outline or ghost for tertiary actions
- Provide loading state for async actions
- Use descriptive button text
- Add icons to enhance meaning
- Use full width on mobile forms

### Don'ts ❌

- Don't use multiple primary buttons in the same context
- Don't use destructive casually
- Don't make buttons too small (min size sm)
- Don't omit aria-label on icon-only buttons
- Don't disable buttons without explanation
- Don't use link buttons for critical actions

## Related Components

- [Input](./input.md) - For form fields
- [Badge](./badge.md) - For status indicators
- [Alert](./alert.md) - For notifications

## Figma Reference

- **Node ID:** `2814-11937`
- **File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0?node-id=2814-11937)

---

**Component File:** `src/components/Button/Button.tsx`
**Storybook:** [View in Storybook](http://localhost:6006/?path=/story/button)
