# Changelog

All notable changes to AfterDS 2.0 will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-10-16

### Added

#### Components
- **Button Component** - Multi-variant button with 6 variants (primary, secondary, outline, ghost, link, link-secondary)
  - Multiple sizes (sm, md, lg)
  - Loading state with spinner
  - Destructive variant for dangerous actions
  - Icon support (before/after)
  - Full width option
  - Complete dark mode support

- **Input Component** - Form input with validation states
  - Label and helper text support
  - Required and optional field indicators
  - Error and success states
  - Disabled state
  - Multiple input types (text, email, password, number, tel, url, date)
  - Full width option
  - Complete dark mode support

- **Badge Component** - Status indicators and labels
  - 4 variants (default, secondary, destructive, outline)
  - Rounded and square shapes
  - Inline usage support
  - Complete dark mode support

- **Alert Component** - Notification messages
  - 2 variants (default, destructive)
  - Title and description support
  - Custom icon support
  - Complete dark mode support

- **Accordion Component** - Collapsible content sections
  - Single and multiple modes
  - Controlled and uncontrolled modes
  - Smooth animations
  - Keyboard navigation
  - Complete dark mode support

#### Design System
- **Design Tokens System** - Centralized design tokens
  - Color tokens (10 colors with light/dark modes)
  - Spacing tokens (13 spacing values)
  - Typography tokens (5 type scales)
  - Border radius tokens (6 scales)
  - Component-specific token mappings

- **Dark Mode Support** - Class-based dark mode
  - Tailwind CSS dark mode configuration
  - All components support dark/light modes
  - Storybook dark mode decorator
  - Interactive theme toggle in demo app

- **Design Tokens Page** - Interactive documentation
  - Visual color swatches with hex values
  - Spacing examples with pixel values
  - Typography samples with live preview
  - Border radius demonstrations
  - Component token mapping tables
  - Click-to-copy for all tokens
  - Tab-based variant switching

#### Documentation
- **Comprehensive Documentation Folder** (`/docs`)
  - README with overview and quick links
  - Getting Started guide with installation and setup
  - Component documentation (Button, Input, Badge, Alert, Accordion)
  - Design Tokens reference
  - Dark Mode implementation guide
  - Contributing guidelines
  - Architecture documentation
  - Changelog (this file)

- **Storybook Integration**
  - Stories for all 5 components
  - Dark mode support with background toolbar
  - Interactive controls for props
  - Component examples and variants

#### Developer Tools
- **Token Documentation Generator** (`scripts/generate-token-docs.ts`)
  - Automated token documentation generation
  - Centralized token definitions
  - Extensible for Figma integration
  - npm script: `npm run docs:tokens`

- **Figma Integration** (MCP Server)
  - Fetch design specifications from Figma
  - Variable definitions extraction
  - Code generation from designs
  - Screenshot generation
  - Code Connect mapping

#### Configuration
- **TypeScript** - Full type safety
  - Strict mode enabled
  - All components fully typed
  - Exported type definitions

- **Tailwind CSS** - Utility-first styling
  - Custom color palette
  - Dark mode configuration
  - Responsive design utilities

- **Vite** - Modern build tool
  - Fast HMR (< 100ms)
  - Optimized production builds
  - ESM-first approach

### Project Structure
```
afterds-2.0/
├── src/
│   ├── components/          # 5 production-ready components
│   ├── data/               # Design tokens data
│   ├── pages/              # Design Tokens page
│   └── App.tsx             # Demo application
├── docs/                   # Comprehensive documentation
├── scripts/                # Automation scripts
├── .storybook/             # Storybook configuration
└── DESIGN_TOKENS.md        # Token reference (root)
```

### Technical Details
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.15
- Vite 5.4.11
- Storybook 8.3.5
- clsx 2.1.1

### Design Principles
- Consistency across all components
- Accessibility (WCAG AA compliant)
- Dark mode support for all components
- Type-safe with TypeScript
- Customizable with Tailwind classes
- Responsive design
- Performance optimized

## [Unreleased]

### Planned Features

#### Components
- Modal/Dialog component
- Dropdown Menu component
- Tabs component
- Tooltip component
- Select component
- Checkbox component
- Radio component
- Toggle/Switch component

#### Testing
- Jest + React Testing Library setup
- Unit tests for all components
- Integration tests
- Visual regression testing with Chromatic
- Accessibility testing with axe-core

#### Automation
- Automated Figma token sync
- CI/CD with GitHub Actions
- Automated releases with semantic versioning
- Changelog automation

#### Documentation
- Interactive code playground
- Video tutorials
- Advanced usage examples
- Migration guides

#### Developer Experience
- CLI for component generation
- VS Code snippets
- ESLint plugin for design system rules
- Component templates

---

## Version History

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for new features (backwards compatible)
- **PATCH** version for bug fixes (backwards compatible)

### Release Notes Format

Each release includes:
- **Added** - New features
- **Changed** - Changes to existing features
- **Deprecated** - Features marked for removal
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security updates

---

**Last Updated:** 2025-10-16
**Current Version:** 2.0.0
**Maintainer:** AfterDS Team
