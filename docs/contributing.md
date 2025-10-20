# Contributing to AfterDS 2.0

Thank you for your interest in contributing to AfterDS 2.0! This guide will help you get started.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

If you find a bug:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

For feature requests:

1. **Check existing discussions** for similar ideas
2. **Open a discussion** or issue explaining:
   - The problem you're solving
   - Proposed solution
   - Alternative approaches considered
   - Impact on existing users

### Contributing Code

#### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/afterds-2.0.git
cd afterds-2.0
npm install
```

#### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding tests

#### 3. Make Your Changes

Follow these guidelines:

**Code Style:**
- Use TypeScript for all new code
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Run `npm run build` to check for errors

**Component Guidelines:**
- Create in `src/components/ComponentName/`
- Include TypeScript types
- Export all props interfaces
- Add Storybook stories
- Support dark mode
- Document with JSDoc comments

**Example Component Structure:**
```
src/components/NewComponent/
├── NewComponent.tsx        # Main component
├── NewComponent.stories.tsx # Storybook stories
└── index.ts                # Barrel export
```

#### 4. Test Your Changes

```bash
# Run development server
npm run dev

# Run Storybook
npm run storybook

# Build for production (checks for errors)
npm run build
```

Manual testing checklist:
- ✅ Component renders correctly
- ✅ All variants work as expected
- ✅ Dark mode looks correct
- ✅ Responsive on mobile
- ✅ Keyboard navigation works
- ✅ Focus indicators visible
- ✅ No console errors

#### 5. Update Documentation

If your contribution affects usage:

- Update relevant `/docs` files
- Add examples to component documentation
- Update design tokens if needed
- Add Storybook stories

#### 6. Commit Your Changes

Use conventional commit messages:

```bash
git add .
git commit -m "feat: add new Button size variant"
```

**Commit Message Format:**
```
<type>(<scope>): <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process, dependencies, etc.

**Examples:**
```bash
git commit -m "feat(Button): add xl size variant"
git commit -m "fix(Input): correct error state border color"
git commit -m "docs: update Button component examples"
git commit -m "refactor(Badge): simplify variant logic"
```

#### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- **Clear title** describing the change
- **Description** explaining:
  - What changes were made
  - Why they were needed
  - How to test them
- **Screenshots** for visual changes
- **Link to related issue** if applicable

## Component Development Guidelines

### Creating a New Component

1. **Check if it exists** - Can existing components be composed?
2. **Design first** - Create Figma mockup following design system
3. **Get feedback** - Discuss in GitHub Discussions
4. **Create component** following the structure above
5. **Add dark mode** support from the start
6. **Write Storybook stories** for all variants
7. **Document thoroughly** in `/docs/components/`

### Component Checklist

Before submitting a component PR:

- [ ] TypeScript with proper typing
- [ ] Follows existing patterns
- [ ] All props documented
- [ ] Dark mode support
- [ ] Accessible (WCAG AA)
- [ ] Responsive design
- [ ] Storybook stories
- [ ] Component documentation
- [ ] Design tokens used
- [ ] No hardcoded values
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Error states handled
- [ ] Loading states (if applicable)
- [ ] Disabled states (if applicable)

### Accessibility Requirements

All components must:

- Use semantic HTML
- Include proper ARIA attributes
- Support keyboard navigation
- Have visible focus indicators
- Maintain proper contrast ratios
- Work with screen readers
- Respect `prefers-reduced-motion`

### Design Token Guidelines

When adding styles:

1. **Use existing tokens** when possible
2. **Check design-tokens.md** for available tokens
3. **Create new tokens** only when necessary
4. **Follow naming conventions** (semantic, not appearance)
5. **Add to `/src/data/designTokens.ts`**
6. **Document new tokens** in design-tokens.md
7. **Include dark mode** variants

## Pull Request Process

### Review Process

1. **Automated checks** must pass:
   - Build succeeds
   - TypeScript compiles
   - No linting errors

2. **Code review** by maintainers:
   - Code quality
   - Follows guidelines
   - Proper documentation
   - Tests pass

3. **Changes requested** may need:
   - Code improvements
   - Additional tests
   - Documentation updates
   - Design adjustments

4. **Approval and merge**:
   - At least one maintainer approval required
   - Squash and merge preferred
   - Branch deleted after merge

### After Your PR is Merged

- Your contribution will be included in the next release
- You'll be added to contributors list
- Close related issues
- Update discussions if applicable

## Development Setup

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- Git
- Code editor (VS Code recommended)

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### Project Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook |
| `npm run build-storybook` | Build Storybook |
| `npm run docs:tokens` | Generate token documentation |

## Design System Principles

When contributing, keep these principles in mind:

### 1. Consistency

- Follow existing patterns
- Use established design tokens
- Maintain component API consistency

### 2. Accessibility

- Design for all users
- Follow WCAG AA guidelines
- Test with assistive technologies

### 3. Flexibility

- Components should be customizable
- Support common use cases
- Allow composition

### 4. Performance

- Minimize bundle size
- Optimize re-renders
- Use lazy loading when appropriate

### 5. Documentation

- Document all props
- Provide usage examples
- Explain edge cases

## Getting Help

Need help with your contribution?

- **Documentation**: Check the `/docs` folder
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/afterds-2.0/discussions)
- **Issues**: Search existing issues
- **Storybook**: See component examples

## Recognition

Contributors are recognized in:

- `CONTRIBUTORS.md` file
- Release notes
- Project README

Thank you for contributing to AfterDS 2.0! 🎉

---

**Questions?** Open a discussion or reach out to maintainers.
