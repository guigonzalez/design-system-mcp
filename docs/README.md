# AfterDS 2.0 Documentation

Welcome to the AfterDS 2.0 design system documentation. This comprehensive guide covers everything you need to know about building with our component library.

## 📚 Table of Contents

- [Getting Started](./getting-started.md) - Installation and setup guide
- [Components](./components/) - Detailed component documentation
  - [Button](./components/button.md)
  - [Input](./components/input.md)
  - [Badge](./components/badge.md)
  - [Alert](./components/alert.md)
  - [Accordion](./components/accordion.md)
- [Design Tokens](./design-tokens.md) - Color, spacing, typography reference
- [Dark Mode](./dark-mode.md) - Implementing dark mode support
- [Design System Setup](./design-system-setup.md) - Full implementation guide
- [Designer Workflow](./designer-workflow.md) - How designers work with Figma
- [Design-Dev Sync](./design-dev-sync.md) - Design to code workflow
- [Contributing](./contributing.md) - How to contribute to the design system
- [Architecture](./architecture.md) - Technical architecture and design decisions
- [Changelog](./changelog.md) - Version history and updates

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## 🎨 Design System Overview

AfterDS 2.0 is a comprehensive design system built with:

- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe component development
- **Tailwind CSS 3.4.15** - Utility-first styling
- **Storybook 8.3.5** - Component development and documentation
- **Vite** - Fast development and build tooling

## 🌟 Key Features

### Component Library
- 5 production-ready components
- Fully typed with TypeScript
- Accessible (WCAG AA compliant)
- Customizable with props
- Dark mode support

### Design Tokens
- Consistent color palette
- Spacing scale
- Typography system
- Border radius scale
- Component-specific token mappings

### Developer Experience
- Interactive Storybook documentation
- Live design tokens page in the app
- Copy-to-clipboard for all tokens
- Hot module replacement (HMR)
- TypeScript IntelliSense

## 📦 Components

| Component | Description | Status |
|-----------|-------------|--------|
| Button | Multi-variant button with loading states | ✅ Complete |
| Input | Form input with validation states | ✅ Complete |
| Badge | Status indicators and labels | ✅ Complete |
| Alert | Notification messages | ✅ Complete |
| Accordion | Collapsible content sections | ✅ Complete |

## 🎯 Design Principles

### 1. Consistency
All components follow the same design language, using shared design tokens for colors, spacing, and typography.

### 2. Accessibility
Every component is built with accessibility in mind:
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

### 3. Flexibility
Components are designed to be flexible:
- Multiple variants
- Customizable props
- Composable patterns
- Extension points

### 4. Performance
Optimized for production:
- Tree-shakeable exports
- Minimal bundle size
- Efficient re-renders
- CSS optimization

## 🌓 Dark Mode

AfterDS 2.0 has full dark mode support:

- Toggle between light and dark themes
- All components adapt automatically
- Consistent color contrast ratios
- Matches Figma design specifications

See [Dark Mode Guide](./dark-mode.md) for implementation details.

## 🔗 Links

- [Figma Design File](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0)
- [GitHub Repository](https://github.com/yourusername/afterds-2.0)
- [Storybook Demo](http://localhost:6006)
- [Live App](http://localhost:5173)

## 📖 Documentation Guide

### For Developers
1. Start with [Getting Started](./getting-started.md)
2. Explore [Components](./components/)
3. Reference [Design Tokens](./design-tokens.md)
4. Read [Architecture](./architecture.md) for technical details

### For Designers
1. Check [Design Tokens](./design-tokens.md) for the design system foundation
2. Review component documentation for usage guidelines
3. View live examples in Storybook
4. Reference the [Figma file](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0)

### For Contributors
1. Read [Contributing Guidelines](./contributing.md)
2. Understand the [Architecture](./architecture.md)
3. Follow component patterns
4. Submit pull requests

## 🎨 Designer-Developer Collaboration

AfterDS 2.0 is built for seamless collaboration between designers and developers:

### For Designers

**Working with Figma:**
1. Read [Designer Workflow](./designer-workflow.md) - Complete Figma guide
2. Learn [Design-Dev Sync](./design-dev-sync.md) - How designs become code
3. Use Figma variables for all design tokens
4. Create components with proper variants and states
5. Document components thoroughly
6. Use Dev Mode for developer handoff

**Key Responsibilities:**
- Define and maintain design tokens in Figma
- Create component designs with all variants
- Document usage guidelines and specifications
- Review developer implementations
- Ensure visual consistency
- Maintain Figma component library

**Tools & Plugins:**
- Figma Tokens - Sync design tokens
- A11y Color Contrast - Check accessibility
- Stark - Comprehensive accessibility testing
- Component Inspector - Audit component usage
- Design Lint - Check consistency

### For Developers

**Working with Designs:**
1. Access Figma Dev Mode for specifications
2. Use MCP server to fetch design tokens
3. Implement components following exact specs
4. Use design tokens (never hardcode values)
5. Support dark mode from the start
6. Request designer review before merging

**Key Responsibilities:**
- Implement components from Figma
- Sync design tokens to code
- Maintain type safety with TypeScript
- Write Storybook stories
- Ensure accessibility (WCAG AA)
- Document component APIs

**Sync Process:**
```
Figma Design → Dev Mode Inspect → Fetch Tokens →
Implement Component → Designer Review → Iterate →
Merge → Deploy
```

### Collaboration Tools

| Tool | Purpose | Who Uses |
|------|---------|----------|
| **Figma** | Design source of truth | Designers |
| **Figma Dev Mode** | Design handoff | Both |
| **MCP Server** | Token extraction | Developers |
| **Storybook** | Component showcase | Both |
| **GitHub** | Code & discussions | Both |
| **Design Tokens Page** | Live token reference | Both |

### Workflow Overview

```
┌─────────────┐
│   Designer  │
│  (Figma)    │
└──────┬──────┘
       │ 1. Creates component
       │ 2. Documents specs
       │ 3. Marks ready for dev
       ↓
┌─────────────┐
│  Handoff    │
│ (Dev Mode)  │
└──────┬──────┘
       │ 4. Shares Figma link
       │ 5. Creates GitHub issue
       │ 6. Provides specifications
       ↓
┌─────────────┐
│  Developer  │
│   (Code)    │
└──────┬──────┘
       │ 7. Inspects in Figma
       │ 8. Fetches tokens
       │ 9. Implements component
       │ 10. Creates PR
       ↓
┌─────────────┐
│ Design QA   │
│  (Review)   │
└──────┬──────┘
       │ 11. Designer reviews
       │ 12. Provides feedback
       │ 13. Approves or requests changes
       ↓
┌─────────────┐
│   Merge &   │
│   Deploy    │
└─────────────┘
```

### Success Metrics

We track:
- **Design-to-code time**: Target < 1 week
- **First-pass approval rate**: Target > 80%
- **Design token consistency**: 100%
- **Component reuse**: Maximize across projects
- **WCAG AA compliance**: 100%

### Communication

**Regular Syncs:**
- Weekly design system review (1 hour)
- Bi-weekly design QA (30 minutes)
- Monthly retrospectives (1 hour)

**Async Channels:**
- GitHub Discussions - Component proposals
- PR Comments - Implementation feedback
- Slack/Discord - Quick questions
- Documentation - Specifications and guidelines

## 🆘 Support

Need help? Here's how to get support:

1. **Documentation** - Check these docs first
2. **Storybook** - Interactive component examples
3. **Issues** - [Open an issue](https://github.com/yourusername/afterds-2.0/issues)
4. **Discussions** - [GitHub Discussions](https://github.com/yourusername/afterds-2.0/discussions)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Acknowledgments

Built with inspiration from:
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Version:** 2.0.0
**Last Updated:** 2025-10-16
**Maintainers:** AfterDS Team
