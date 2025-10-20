# Alert Component

A notification component for displaying important messages to users.

## Import

```tsx
import { Alert } from './components/Alert';
import type { AlertProps } from './components/Alert';
```

## Basic Usage

```tsx
<Alert
  variant="default"
  title="Heads up!"
  description="You can add components to your app using the cli."
/>
```

## Variants

### Default

Informational alert with light background.

```tsx
<Alert
  variant="default"
  title="New Feature"
  description="Check out our new dashboard for better insights."
/>
```

- Background: `#fcfaf8` / `#1f1f1f` (dark)
- Border: `#e7e5e4` / `#353535` (dark)
- Icon: Chevron right

### Destructive

Error or warning alert with red accent.

```tsx
<Alert
  variant="destructive"
  title="Error"
  description="Your session has expired. Please log in again."
/>
```

- Background: `rgba(254,202,202,0.5)` / `#3d1717` (dark)
- Border: `rgba(220,38,38,0.5)` / `#dc2626` (dark)
- Text: Red
- Icon: Circle with exclamation

## With Title Only

```tsx
<Alert
  variant="default"
  title="Success!"
/>
```

## With Description Only

```tsx
<Alert
  variant="destructive"
  description="Something went wrong. Please try again."
/>
```

## With Custom Icon

```tsx
<Alert
  variant="default"
  icon={<CustomIcon />}
  title="Custom Alert"
  description="This uses a custom icon."
/>
```

## With Children

```tsx
<Alert variant="default" title="Update Available">
  <p>A new version is available.
    <a href="/update" className="underline">Update now</a>
  </p>
</Alert>
```

## Use Cases

### Success Message

```tsx
<Alert
  variant="default"
  title="Success!"
  description="Your changes have been saved successfully."
/>
```

### Error Message

```tsx
<Alert
  variant="destructive"
  title="Error"
  description="Failed to save changes. Please try again."
/>
```

### Warning

```tsx
<Alert
  variant="destructive"
  title="Warning"
  description="This action cannot be undone."
/>
```

### Information

```tsx
<Alert
  variant="default"
  title="Did you know?"
  description="You can customize components using Tailwind classes."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | Alert style |
| `title` | `string` | - | Alert title (optional) |
| `description` | `string` | - | Alert description (optional) |
| `icon` | `React.ReactNode` | - | Custom icon (uses default if not provided) |
| `children` | `React.ReactNode` | - | Custom content |
| `className` | `string` | - | Additional CSS classes |

Extends all standard HTML div attributes.

## Accessibility

- Uses `role="alert"` for screen readers
- Proper semantic structure
- Sufficient color contrast
- Icon has proper aria labeling

## Design Tokens

**Colors:**
- Default background: `#fcfaf8` / `#1f1f1f` (dark)
- Default border: `#e7e5e4` / `#353535` (dark)
- Destructive background: `rgba(254,202,202,0.5)` / `#3d1717` (dark)
- Destructive border: `rgba(220,38,38,0.5)` / `#dc2626` (dark)
- Destructive text: `#dc2626`

**Spacing:**
- Padding: `16px`
- Gap (icon to text): `12px`

**Typography:**
- Title: `16px` / `500` / `1` line height
- Description: `14px` / `400` / `24px` line height

**Border:**
- `rounded-lg`: `8px` border radius

See [Design Tokens](../design-tokens.md) for complete reference.

## Best Practices

### Do's ✅

- Use for important messages
- Provide clear, actionable text
- Use appropriate variant for context
- Keep messages concise
- Place at top of relevant section

### Don'ts ❌

- Don't use for every message
- Don't hide critical errors in default variant
- Don't make alerts dismissible if action is required
- Don't overuse destructive variant
- Don't put complex content in alerts

## Related Components

- [Badge](./badge.md) - For inline status
- [Button](./button.md) - For alert actions

## Figma Reference

- **Node ID:** `2813-9376`
- **File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0?node-id=2813-9376)

---

**Component File:** `src/components/Alert/Alert.tsx`
**Storybook:** [View in Storybook](http://localhost:6006/?path=/story/alert)
