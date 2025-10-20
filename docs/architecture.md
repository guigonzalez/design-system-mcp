# Architecture

This document explains the technical architecture and design decisions behind AfterDS 2.0.

## Overview

AfterDS 2.0 is a modern React component library built with TypeScript and Tailwind CSS, designed for production applications with dark mode support and comprehensive documentation.

## Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI library |
| TypeScript | 5.6.3 | Type safety |
| Tailwind CSS | 3.4.15 | Utility-first styling |
| Vite | 5.4.11 | Build tool and dev server |
| Storybook | 8.3.5 | Component development |
| clsx | 2.1.1 | className utilities |

### Why These Technologies?

**React 18:**
- Modern hooks API
- Concurrent features
- Wide ecosystem support
- Industry standard

**TypeScript:**
- Type safety and autocomplete
- Better developer experience
- Catch errors at compile time
- Self-documenting code

**Tailwind CSS:**
- Utility-first approach
- Consistent design tokens
- Built-in dark mode
- No CSS-in-JS overhead

**Vite:**
- Fast HMR (< 100ms)
- Optimized production builds
- ESM-first approach
- Excellent DX

**Storybook:**
- Isolated component development
- Interactive documentation
- Visual testing
- Design system showcase

## Project Structure

```
afterds-2.0/
├── src/
│   ├── components/          # Component library
│   │   ├── Button/
│   │   │   ├── Button.tsx           # Component implementation
│   │   │   ├── Button.stories.tsx   # Storybook stories
│   │   │   └── index.ts             # Barrel export
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Alert/
│   │   └── Accordion/
│   ├── data/                # Data and configuration
│   │   └── designTokens.ts  # Centralized design tokens
│   ├── pages/               # Application pages
│   │   └── DesignTokens.tsx # Interactive token documentation
│   ├── App.tsx              # Main application
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and Tailwind
├── docs/                    # Documentation
│   ├── README.md
│   ├── getting-started.md
│   ├── components/          # Component docs
│   ├── design-tokens.md
│   ├── dark-mode.md
│   ├── contributing.md
│   ├── architecture.md
│   └── changelog.md
├── scripts/                 # Utility scripts
│   ├── generate-token-docs.ts
│   └── README.md
├── .storybook/              # Storybook configuration
│   ├── main.ts
│   └── preview.tsx          # Dark mode decorator
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Design Patterns

### Component Pattern

All components follow a consistent structure:

```tsx
import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface ComponentProps extends HTMLAttributes<HTMLElement> {
  // Component-specific props
  variant?: 'default' | 'custom';
  // ...
}

const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={clsx(
          // Base styles
          'base-classes',

          // Variant styles
          variant === 'default' && 'default-classes dark:dark-classes',

          // Custom className
          className
        )}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';

export default Component;
```

**Key aspects:**
- Uses `forwardRef` for ref forwarding
- Extends native HTML props
- Type-safe with TypeScript
- Supports custom className
- Dark mode with `dark:` prefix
- Uses `clsx` for conditional classes

### State Management

**Component-Level State:**
- React hooks (`useState`, `useEffect`)
- Props for controlled/uncontrolled modes
- Context API for compound components (e.g., Accordion)

**Example (Accordion):**
```tsx
const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

export const Accordion: React.FC<AccordionProps> = ({ children, type = 'single' }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    // Toggle logic
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      {children}
    </AccordionContext.Provider>
  );
};
```

### Styling Strategy

**Tailwind-First:**
- All styling done with Tailwind utilities
- No CSS modules or styled-components
- Design tokens as Tailwind classes

**Dark Mode:**
- Class-based (`darkMode: 'class'`)
- `dark:` prefix for dark variants
- Applied at document root

**Component Composition:**
```tsx
<div className={clsx(
  // Layout
  'flex items-center justify-between',

  // Spacing
  'px-4 py-2 gap-2',

  // Colors (with dark mode)
  'bg-background dark:bg-[#181818]',
  'text-foreground dark:text-[#fcfaf8]',
  'border-border dark:border-[#353535]',

  // Typography
  'text-base font-medium leading-6',

  // Interactions
  'hover:bg-muted/30 dark:hover:bg-[#2a2a2a]',
  'transition-colors duration-200',

  // Custom
  className
)}>
```

## Design Tokens

### Token Architecture

Design tokens are organized in three layers:

1. **Global Tokens** (foundation)
   - Colors, spacing, typography
   - Defined in `tailwind.config.js` and `/src/data/designTokens.ts`

2. **Semantic Tokens** (purpose)
   - Primary, secondary, destructive
   - Derived from global tokens

3. **Component Tokens** (specific)
   - Component-specific variations
   - Mapped to global/semantic tokens

### Token Flow

```
Figma Variables
      ↓
/src/data/designTokens.ts
      ↓
Tailwind Config (if needed)
      ↓
Component Styles (dark: variants)
      ↓
Design Tokens Page (documentation)
```

## Component API Design

### Principles

1. **Consistent Naming**
   - Props use camelCase
   - Common props have standard names (`variant`, `size`, `disabled`)

2. **Sensible Defaults**
   - Most props have default values
   - Components work with minimal configuration

3. **Flexible Control**
   - Uncontrolled by default
   - Controlled mode available
   - Both modes supported

4. **TypeScript First**
   - All props typed
   - Intellisense support
   - Type safety guaranteed

5. **Composition Over Configuration**
   - Small, focused components
   - Combine for complex UIs
   - Flexible and reusable

### Example API

```tsx
// Simple usage (uncontrolled)
<Button variant="primary" size="md">
  Click Me
</Button>

// Advanced usage (controlled, with all options)
<Button
  variant="primary"
  size="lg"
  destructive={false}
  isLoading={isSubmitting}
  disabled={!formValid}
  iconBefore={<Icon />}
  iconAfter={<Arrow />}
  fullWidth
  onClick={handleClick}
  className="mt-4"
>
  Submit Form
</Button>
```

## Build and Bundle

### Development

```bash
npm run dev
```

- Vite dev server with HMR
- Fast rebuilds (< 100ms)
- Source maps enabled
- TypeScript checking

### Production

```bash
npm run build
```

- TypeScript compilation
- Vite optimized build
- Minification and tree-shaking
- CSS optimization
- Asset hashing

**Output:**
```
dist/
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── index.html
```

### Bundle Analysis

Key optimizations:
- React and ReactDOM (shared chunks)
- Tailwind CSS purged (only used classes)
- Tree-shaking (unused exports removed)
- Code splitting (dynamic imports)

## Development Workflow

### Local Development

1. **Start dev server:** `npm run dev`
2. **Make changes:** Edit component files
3. **See updates:** HMR updates in < 100ms
4. **Test:** Manual testing in browser

### Component Development

1. **Start Storybook:** `npm run storybook`
2. **Create component:** In `src/components/`
3. **Add stories:** Test variants and states
4. **Iterate:** Develop in isolation
5. **Document:** Add to `/docs/components/`

### Quality Checks

Before committing:
- ✅ TypeScript compiles (`npm run build`)
- ✅ Components work in dev server
- ✅ Storybook stories load
- ✅ Dark mode looks correct
- ✅ Documentation updated

## Performance Considerations

### Bundle Size

Current bundle (production):
- **JS:** ~150KB (gzipped)
- **CSS:** ~10KB (gzipped)
- **Total:** ~160KB

Optimization strategies:
- Tree-shaking unused components
- Lazy loading pages
- CSS purging (only used classes)
- Shared vendor chunks

### Runtime Performance

- Minimal re-renders (React.memo where needed)
- Efficient state updates
- No unnecessary effects
- Optimized animations (GPU-accelerated)

### Loading Performance

- Fast First Contentful Paint (FCP)
- Optimized asset loading
- Preload critical resources
- Lazy load non-critical components

## Testing Strategy

### Manual Testing

- Visual inspection in dev server
- Storybook for component variants
- Browser DevTools for debugging
- Cross-browser testing (Chrome, Firefox, Safari)

### Automated Testing (Future)

Planned testing setup:
- **Unit tests:** Jest + React Testing Library
- **Integration tests:** Testing user flows
- **Visual regression:** Chromatic
- **Accessibility:** axe-core

## Deployment

### Build Process

```bash
npm run build
npm run preview  # Test production build locally
```

### Hosting Options

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

### CI/CD (Recommended)

```yaml
# Example GitHub Actions workflow
name: Build and Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm run build-storybook
```

## Future Enhancements

### Planned Features

1. **More Components**
   - Modal/Dialog
   - Dropdown Menu
   - Tabs
   - Tooltip
   - Select

2. **Testing**
   - Unit test coverage
   - E2E tests
   - Visual regression tests

3. **Automation**
   - Figma token sync
   - Automated releases
   - Changelog generation

4. **Documentation**
   - Interactive examples
   - Code playground
   - Video tutorials

5. **Developer Experience**
   - CLI for component generation
   - VS Code snippets
   - ESLint plugin

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Storybook Docs](https://storybook.js.org/docs)

---

**Last Updated:** 2025-10-16
**Maintainer:** AfterDS Team
