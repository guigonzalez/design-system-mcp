# Dark Mode Guide

AfterDS 2.0 has comprehensive dark mode support across all components. This guide explains how dark mode is implemented and how to use it effectively.

## How It Works

Dark mode in AfterDS 2.0 uses **Tailwind CSS's class-based dark mode**. When the `dark` class is present on the `<html>` element, all components automatically switch to their dark variants.

### Configuration

Tailwind is configured to use class-based dark mode:

```js
// tailwind.config.js
export default {
  darkMode: 'class', // Use class-based dark mode
  // ...
}
```

## Implementing Dark Mode Toggle

### Basic Toggle

```tsx
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle Dark Mode
    </button>
  );
}
```

### With Local Storage Persistence

```tsx
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

### With System Preference Detection

```tsx
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }

    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

## Using Dark Mode in Components

### Built-in Components

All AfterDS components automatically support dark mode:

```tsx
import { Button, Input, Badge } from './components';

function MyComponent() {
  // No additional props needed - components adapt automatically
  return (
    <>
      <Button variant="primary">Click Me</Button>
      <Input label="Email" />
      <Badge variant="default">New</Badge>
    </>
  );
}
```

### Custom Components

When creating custom components, use `dark:` prefix for dark mode styles:

```tsx
function CustomCard() {
  return (
    <div className="
      bg-white dark:bg-[#1f1f1f]
      border border-border dark:border-[#353535]
      p-4 rounded-lg
    ">
      <h2 className="
        text-foreground dark:text-[#fcfaf8]
        text-lg font-semibold
      ">
        Card Title
      </h2>
      <p className="
        text-muted-foreground dark:text-[#b3b3b3]
        text-sm
      ">
        Card content
      </p>
    </div>
  );
}
```

## Dark Mode Color Palette

### Background Colors

| Purpose | Light | Dark |
|---------|-------|------|
| Main background | `#fcfaf8` | `#181818` |
| Card/section background | `#ffffff` | `#1f1f1f` |
| Hover background | `rgba(231,229,228,0.3)` | `#2a2a2a` |

### Text Colors

| Purpose | Light | Dark |
|---------|-------|------|
| Primary text | `#0c0a09` | `#fcfaf8` |
| Secondary text | `#78716c` | `#b3b3b3` |
| Muted text | `#78716c` | `#757575` |

### Border Colors

| Purpose | Light | Dark |
|---------|-------|------|
| Default border | `#e7e5e4` | `#353535` |
| Focus border | `#ff6b00` | `#ff6b00` |

### Accent Colors

| Purpose | Light | Dark | Notes |
|---------|-------|------|-------|
| Primary | `#ff6b00` | `#ff6b00` | Same in both modes |
| Destructive | `#dc2626` | `#dc2626` | Same in both modes |
| Success | `#16a34a` | `#16a34a` | Same in both modes |

## Best Practices

### Do's ✅

1. **Always include dark mode variants** for colors
2. **Test in both modes** before committing
3. **Use design tokens** instead of arbitrary colors
4. **Maintain contrast ratios** (WCAG AA minimum)
5. **Keep accent colors** consistent across modes
6. **Save user preference** to localStorage

### Don'ts ❌

1. Don't hardcode colors without dark variants
2. Don't use pure black (#000) or pure white (#fff)
3. Don't assume users will use one mode
4. Don't forget to style ::placeholder text
5. Don't use low contrast colors in dark mode
6. Don't override user's system preference without asking

## Storybook Dark Mode

Storybook has a custom decorator for dark mode support:

```tsx
// .storybook/preview.tsx
import { useEffect } from 'react';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === '#181818';

      useEffect(() => {
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDark]);

      return <Story />;
    },
  ],
};
```

Use the **background toolbar** in Storybook to switch between light and dark modes.

## Testing Dark Mode

### Visual Testing

1. **Toggle to dark mode** in your app
2. **Check all components** appear correctly
3. **Verify text is readable** on all backgrounds
4. **Test hover states** are visible
5. **Check focus indicators** are clear

### Automated Testing

```tsx
import { render } from '@testing-library/react';

describe('Dark Mode', () => {
  it('applies dark class correctly', () => {
    // Add dark class
    document.documentElement.classList.add('dark');

    const { container } = render(<MyComponent />);

    // Check computed styles match dark mode
    const element = container.firstChild as HTMLElement;
    const styles = window.getComputedStyle(element);

    expect(styles.backgroundColor).toBe('rgb(24, 24, 24)'); // #181818

    // Cleanup
    document.documentElement.classList.remove('dark');
  });
});
```

## Accessibility Considerations

### Contrast Ratios

All dark mode colors maintain WCAG AA contrast requirements:

- **Normal text (16px+)**: 4.5:1 minimum
- **Large text (18px+)**: 3:1 minimum
- **UI components**: 3:1 minimum

### Motion Sensitivity

Respect user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### High Contrast Mode

Components should work with OS high contrast modes.

## Troubleshooting

### Dark Mode Not Working

**Issue:** Dark mode classes don't apply.

**Solutions:**
1. Check `darkMode: 'class'` in `tailwind.config.js`
2. Verify `dark` class is on `<html>` element
3. Restart development server
4. Clear browser cache

### Colors Look Wrong

**Issue:** Dark mode colors don't match design.

**Solutions:**
1. Check you're using correct color values
2. Verify Tailwind is processing dark: prefixes
3. Check CSS specificity isn't overriding
4. Review design tokens documentation

### Storybook Not Switching

**Issue:** Storybook background changes but components don't.

**Solutions:**
1. Check `.storybook/preview.tsx` decorator is present
2. Verify file is `.tsx` not `.ts`
3. Restart Storybook
4. Check browser console for errors

## Resources

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Design Tokens](./design-tokens.md) - All color values
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

---

**Last Updated:** 2025-10-16
**Maintainer:** AfterDS Team
