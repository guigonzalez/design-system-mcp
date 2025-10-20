# Getting Started with AfterDS 2.0

This guide will help you get up and running with the AfterDS 2.0 design system.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 16.x or later
- **npm** 7.x or later (or yarn/pnpm)
- A code editor (VS Code recommended)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/afterds-2.0.git
cd afterds-2.0
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies:
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.15
- Vite 5.4.11
- Storybook 8.3.5
- clsx for className utilities

### 3. Start Development Server

```bash
npm run dev
```

The app will open at [http://localhost:5173](http://localhost:5173)

### 4. Launch Storybook (Optional)

```bash
npm run storybook
```

Storybook will open at [http://localhost:6006](http://localhost:6006)

## Project Structure

```
afterds-2.0/
├── src/
│   ├── components/          # Component library
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Alert/
│   │   └── Accordion/
│   ├── data/               # Design tokens data
│   │   └── designTokens.ts
│   ├── pages/              # App pages
│   │   └── DesignTokens.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── docs/                   # Documentation
├── scripts/                # Utility scripts
├── .storybook/             # Storybook configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Using Components

### Basic Import

```tsx
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Badge } from './components/Badge';
```

### Basic Usage

```tsx
function MyApp() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click Me
      </Button>

      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
      />

      <Badge variant="default">
        New
      </Badge>
    </div>
  );
}
```

### With TypeScript

All components are fully typed with TypeScript:

```tsx
import { Button, ButtonProps } from './components/Button';

const MyButton: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <Button
      variant="primary"
      size="md"
      onClick={handleClick}
      disabled={false}
    >
      Click Me
    </Button>
  );
};
```

## Styling with Tailwind

### Using Design Tokens

```tsx
// Always use design tokens from Tailwind classes
<div className="bg-background dark:bg-[#181818]">
  <p className="text-foreground dark:text-[#fcfaf8]">
    Hello World
  </p>
</div>
```

### Custom Styling

```tsx
// You can add custom classes alongside component styles
<Button
  variant="primary"
  className="mt-4 w-full"
>
  Full Width Button
</Button>
```

## Dark Mode Setup

### 1. Enable Dark Mode Class

Dark mode is already configured in `tailwind.config.js`:

```js
export default {
  darkMode: 'class',
  // ...
}
```

### 2. Toggle Dark Mode

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

### 3. Use Dark Mode Classes

```tsx
// All components automatically support dark mode
<div className="bg-white dark:bg-[#1f1f1f]">
  <h1 className="text-foreground dark:text-[#fcfaf8]">
    Title
  </h1>
</div>
```

See [Dark Mode Guide](./dark-mode.md) for more details.

## Development Workflow

### 1. Component Development

Use Storybook for isolated component development:

```bash
npm run storybook
```

- View all component variants
- Test different props
- Check dark mode appearance
- Use the background toolbar to switch themes

### 2. Local Testing

Run the development server:

```bash
npm run dev
```

- Hot module replacement (HMR) for instant updates
- Test components in context
- Verify interactions
- Test responsive behavior

### 3. Building for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deploying.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run docs:tokens` | Generate design token documentation |

## Next Steps

Now that you're set up, explore these resources:

1. **[Component Documentation](./components/)** - Learn about each component
2. **[Design Tokens](./design-tokens.md)** - Understand the design system foundation
3. **[Storybook](http://localhost:6006)** - Interactive component explorer
4. **[Architecture Guide](./architecture.md)** - Technical deep dive

## Common Issues

### Port Already in Use

If port 5173 or 6006 is already in use:

```bash
# For Vite (dev server)
PORT=3000 npm run dev

# For Storybook
npm run storybook -- -p 6007
```

### TypeScript Errors

Make sure you're using TypeScript 5.6.3 or later:

```bash
npm install typescript@latest --save-dev
```

### Tailwind Not Working

Ensure Tailwind is properly configured:

1. Check `tailwind.config.js` exists
2. Verify `@tailwind` directives in `src/index.css`
3. Restart the development server

### Dark Mode Not Working

1. Verify `darkMode: 'class'` in `tailwind.config.js`
2. Ensure `dark:` classes are applied correctly
3. Check that `document.documentElement.classList` is being toggled

## Getting Help

- **Documentation**: Check [docs/](./README.md)
- **Storybook**: See component examples
- **Issues**: [GitHub Issues](https://github.com/yourusername/afterds-2.0/issues)
- **Community**: [GitHub Discussions](https://github.com/yourusername/afterds-2.0/discussions)

## What's Next?

Ready to start building? Here are some suggested next steps:

1. **Explore Components** - Browse the [component documentation](./components/)
2. **Build Something** - Create a simple form or page using the components
3. **Customize** - Modify components to match your needs
4. **Contribute** - Read the [contributing guide](./contributing.md) and help improve the system

---

**Need help?** Open an issue or start a discussion on GitHub!
