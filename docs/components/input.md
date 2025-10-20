# Input Component

A flexible form input component with label, validation states, and helper text support.

## Import

```tsx
import { Input } from './components/Input';
import type { InputProps } from './components/Input';
```

## Basic Usage

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
/>
```

## With Label and Helper Text

```tsx
<Input
  label="Email Address"
  placeholder="user@example.com"
  type="email"
  helperText="We'll never share your email with anyone else."
/>
```

## Required Field

```tsx
<Input
  label="Password"
  type="password"
  isRequired
  helperText="Must be at least 8 characters"
/>
```

Shows a red asterisk (*) next to the label.

## Optional Field

```tsx
<Input
  label="Phone Number"
  type="tel"
  isOptional
  helperText="We'll use this for account recovery"
/>
```

Shows "(Optional)" text next to the label.

## Validation States

### Error State

```tsx
<Input
  label="Email"
  placeholder="user@example"
  type="email"
  error="Please enter a valid email address"
/>
```

- Red border
- Error message displayed below
- Error icon (optional)

### Success State

```tsx
<Input
  label="Username"
  placeholder="Choose a username"
  success="This username is available!"
/>
```

- Green border
- Success message displayed below

### Default State

```tsx
<Input
  label="Name"
  placeholder="Enter your name"
  helperText="Your full legal name"
/>
```

- Gray border
- Helper text in muted color

## Disabled State

```tsx
<Input
  label="Disabled Input"
  placeholder="This field is disabled"
  disabled
  helperText="This field cannot be edited"
/>
```

- Reduced opacity
- No interaction
- Grayed out appearance

## Input Types

### Text

```tsx
<Input
  label="Name"
  type="text"
  placeholder="John Doe"
/>
```

### Email

```tsx
<Input
  label="Email"
  type="email"
  placeholder="user@example.com"
/>
```

### Password

```tsx
<Input
  label="Password"
  type="password"
  placeholder="••••••••"
/>
```

### Number

```tsx
<Input
  label="Age"
  type="number"
  placeholder="25"
  min={0}
  max={120}
/>
```

### Tel

```tsx
<Input
  label="Phone"
  type="tel"
  placeholder="+1 (555) 000-0000"
/>
```

### URL

```tsx
<Input
  label="Website"
  type="url"
  placeholder="https://example.com"
/>
```

### Date

```tsx
<Input
  label="Birth Date"
  type="date"
/>
```

## Full Width

```tsx
<Input
  label="Email"
  fullWidth
  placeholder="Takes full container width"
/>
```

## Controlled Component

```tsx
import { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');

  return (
    <Input
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
  );
}
```

## Form Example

```tsx
import { useState } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        isRequired
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        isRequired
      />

      <Button type="submit" variant="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `isRequired` | `boolean` | `false` | Shows required asterisk (*) |
| `isOptional` | `boolean` | `false` | Shows "(Optional)" text |
| `helperText` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message (sets error state) |
| `success` | `string` | - | Success message (sets success state) |
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Visual variant |
| `fullWidth` | `boolean` | `false` | Take full container width |
| `disabled` | `boolean` | `false` | Disable the input |
| `className` | `string` | - | Additional CSS classes |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `onChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - | Change handler |

Extends all standard HTML input attributes.

## Accessibility

- Uses semantic `<input>` element
- Label properly associated with input
- Required fields marked with asterisk and aria-required
- Error messages linked via aria-describedby
- Focus visible indicators
- Keyboard navigation support
- Proper contrast ratios in all states

## Design Tokens

Input uses these design tokens:

**Colors:**
- Border (default): `#e7e5e4` / `#353535` (dark)
- Border (hover): `#0c0a09` / `#fcfaf8` (dark)
- Border (focus): `#ff6b00` (primary)
- Border (error): `#dc2626` (destructive)
- Border (success): `#16a34a`
- Background: `#fcfaf8` / `#1f1f1f` (dark)
- Text: `#0c0a09` / `#fcfaf8` (dark)

**Spacing:**
- Height: `40px`
- Padding X: `12px`
- Padding Y: `8px`
- Gap (label to input): `8px`

**Typography:**
- Input text: `14px` / `400` / `20px` line height
- Label: `14px` / `500` / `20px` line height
- Helper text: `14px` / `400` / `20px` line height

**Border:**
- `rounded-md`: `6px` border radius

See [Design Tokens](../design-tokens.md) for complete reference.

## Best Practices

### Do's ✅

- Always provide a label
- Use helper text to guide users
- Show clear error messages
- Use appropriate input types
- Mark required fields clearly
- Provide instant validation feedback
- Use full width on mobile

### Don'ts ❌

- Don't use placeholder as label
- Don't make inputs too narrow
- Don't hide validation errors
- Don't disable without explanation
- Don't use vague error messages
- Don't validate on every keystroke (unless searching)

## Related Components

- [Button](./button.md) - For form submission
- [Alert](./alert.md) - For form-level errors

## Figma Reference

- **Node ID:** `2819-27274`
- **File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0?node-id=2819-27274)

---

**Component File:** `src/components/Input/Input.tsx`
**Storybook:** [View in Storybook](http://localhost:6006/?path=/story/input)
