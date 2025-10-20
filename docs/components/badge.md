# Badge Component

A compact status indicator and label component with multiple variants and shapes.

## Import

```tsx
import { Badge } from './components/Badge';
import type { BadgeProps } from './components/Badge';
```

## Basic Usage

```tsx
<Badge variant="default">
  New
</Badge>
```

## Variants

### Default

Primary orange badge.

```tsx
<Badge variant="default">New</Badge>
```

- Background: `#ff6b00`
- Text: White
- Dark mode: Same colors

### Secondary

Light orange badge.

```tsx
<Badge variant="secondary">Beta</Badge>
```

- Background: `#ffe5cc` / `#331200` (dark)
- Text: Orange / `#d4a574` (dark)

### Outline

Transparent with border.

```tsx
<Badge variant="outline">Draft</Badge>
```

- Background: Transparent
- Border: `#e7e5e4` / `#353535` (dark)
- Text: Foreground color

### Destructive

Red badge for errors/warnings.

```tsx
<Badge variant="destructive">Error</Badge>
```

- Background: `#dc2626`
- Text: White

## Shapes

### Rounded (Default)

Fully rounded pill shape.

```tsx
<Badge rounded>Rounded</Badge>
```

### Square

Slightly rounded corners.

```tsx
<Badge rounded={false}>Square</Badge>
```

## Use Cases

### Status Indicators

```tsx
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="outline">Draft</Badge>
```

### Count Badges

```tsx
<Badge variant="default">1</Badge>
<Badge variant="destructive">99+</Badge>
<Badge variant="secondary">12</Badge>
```

### Inline Usage

```tsx
<p>
  This is a new feature <Badge variant="default">New</Badge>
</p>

<p>
  You have <Badge variant="destructive">3</Badge> errors
</p>
```

### With Icons

```tsx
<Badge variant="default">
  <CheckIcon className="w-3 h-3 mr-1" />
  Verified
</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Badge style |
| `rounded` | `boolean` | `true` | Fully rounded vs square |
| `className` | `string` | - | Additional CSS classes |

Extends all standard HTML span attributes.

## Accessibility

- Uses semantic `<span>` element
- Keyboard focusable with tabIndex
- Focus visible indicators
- Sufficient color contrast

## Design Tokens

**Colors:**
- Default: `#ff6b00` background, white text
- Secondary: `#ffe5cc` / `#331200` (dark) background
- Destructive: `#dc2626` background
- Outline: Transparent background, border color

**Spacing:**
- Padding X: `10px`
- Padding Y: `2px`

**Typography:**
- Font size: `12px`
- Font weight: `600` (semibold)
- Line height: `16px`

**Border:**
- `rounded-full`: `9999px` (pill shape)
- `rounded-md`: `6px` (square variant)

See [Design Tokens](../design-tokens.md) for complete reference.

## Best Practices

### Do's ✅

- Use for status indicators
- Use for counts/numbers
- Keep text short (1-2 words)
- Use consistent colors for status
- Use inline with text when appropriate

### Don'ts ❌

- Don't use for actionable items (use Button)
- Don't put long text in badges
- Don't overuse multiple badges
- Don't use as primary navigation

## Related Components

- [Button](./button.md) - For actionable items
- [Alert](./alert.md) - For larger notifications

## Figma Reference

- **Node ID:** `2835-1370`
- **File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0?node-id=2835-1370)

---

**Component File:** `src/components/Badge/Badge.tsx`
**Storybook:** [View in Storybook](http://localhost:6006/?path=/story/badge)
