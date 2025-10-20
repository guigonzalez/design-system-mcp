# Designer Workflow & Figma Integration

This guide explains how designers can work with Figma to maintain and improve the AfterDS 2.0 design system, ensuring seamless collaboration with developers.

## Table of Contents

- [Overview](#overview)
- [Figma File Structure](#figma-file-structure)
- [Design System Foundation](#design-system-foundation)
- [Creating Components](#creating-components)
- [Design Tokens in Figma](#design-tokens-in-figma)
- [Designer-Developer Workflow](#designer-developer-workflow)
- [Figma Plugins](#figma-plugins)
- [Best Practices](#best-practices)
- [Governance & Maintenance](#governance--maintenance)

## Overview

### Design System Goals

A successful design system bridges design and development by:

1. **Single Source of Truth** - Figma is the source for visual design
2. **Automated Sync** - Design tokens sync from Figma to code
3. **Clear Handoff** - Developers get precise specifications
4. **Feedback Loop** - Changes flow both directions
5. **Living System** - Continuously evolves based on needs

### Roles & Responsibilities

**Designers:**
- Create and maintain components in Figma
- Define and update design tokens (colors, spacing, typography)
- Document usage guidelines
- Review developer implementations
- Propose new components

**Developers:**
- Implement components from Figma specs
- Sync design tokens to code
- Provide technical feedback on feasibility
- Report implementation challenges
- Contribute code components

**Design System Team:**
- Review proposed changes
- Maintain consistency
- Make final decisions
- Document updates
- Communicate changes

## Figma File Structure

### Recommended Organization

```
AfterDS 2.0 (Main File)
│
├── 📄 Cover Page
│   ├── System overview
│   ├── Getting started guide
│   ├── Links to documentation
│   └── Changelog
│
├── 🎨 Design Tokens
│   ├── Color Variables
│   │   ├── Primitives (base colors)
│   │   ├── Semantic tokens (primary, secondary, etc.)
│   │   └── Component tokens
│   ├── Typography Variables
│   │   ├── Font families
│   │   ├── Font sizes
│   │   ├── Font weights
│   │   └── Line heights
│   ├── Spacing Variables
│   │   ├── Gap scale
│   │   └── Padding scale
│   └── Radius Variables
│       └── Border radius scale
│
├── 📦 Components Library
│   ├── Button
│   │   ├── Component Set (all variants)
│   │   ├── Properties (variant, size, state)
│   │   ├── Documentation frame
│   │   └── Usage examples
│   ├── Input
│   ├── Badge
│   ├── Alert
│   ├── Accordion
│   └── [Future components]
│
├── 🎭 Patterns
│   ├── Form layouts
│   ├── Card patterns
│   ├── Navigation patterns
│   └── Modal patterns
│
├── 📱 Templates
│   ├── Login page
│   ├── Dashboard
│   ├── Settings
│   └── [App screens]
│
├── 🌓 Themes
│   ├── Light Mode
│   └── Dark Mode
│
├── 📐 Guidelines
│   ├── Spacing system
│   ├── Layout grids
│   ├── Responsive breakpoints
│   └── Accessibility guidelines
│
└── 🗃️ Archive
    └── Deprecated components
```

## Design System Foundation

### 1. Setting Up Variables (Design Tokens)

#### Color Variables

**Create a color system:**

```
Variables Collection: "Colors"

Modes:
├── Light (default)
└── Dark

Variables:
├── Primitives/
│   ├── orange-500: #ff6b00
│   ├── orange-600: #e65100
│   ├── orange-700: #d96200
│   ├── stone-100: #fcfaf8
│   ├── stone-900: #0c0a09
│   └── ...
│
├── Semantic/
│   ├── primary: {orange-500}
│   ├── primary-hover: {orange-600}
│   ├── background: {stone-100} / {gray-900}
│   ├── foreground: {stone-900} / {stone-100}
│   └── ...
│
└── Component/
    ├── button-primary-bg: {primary}
    ├── button-primary-fg: white
    └── ...
```

**Steps to create:**
1. Open Figma file
2. Right panel → Local variables
3. Create new collection "Colors"
4. Add modes: "Light" and "Dark"
5. Create variables following the structure above
6. Use aliases (reference other variables) for semantic tokens

#### Typography Variables

```
Variables Collection: "Typography"

├── Font Family/
│   └── sans: "Inter"
│
├── Font Size/
│   ├── xs: 12
│   ├── sm: 14
│   ├── base: 16
│   ├── lg: 18
│   └── ...
│
├── Font Weight/
│   ├── normal: 400
│   ├── medium: 500
│   ├── semibold: 600
│   └── bold: 700
│
└── Line Height/
    ├── tight: 16
    ├── normal: 20
    ├── relaxed: 24
    └── ...
```

#### Spacing Variables

```
Variables Collection: "Spacing"

├── gap-0: 0
├── gap-1: 4
├── gap-2: 8
├── gap-3: 12
├── gap-4: 16
├── gap-6: 24
└── gap-8: 32
```

#### Border Radius Variables

```
Variables Collection: "Radius"

├── sm: 4
├── md: 6
├── lg: 8
├── xl: 12
├── 2xl: 16
└── full: 9999
```

### 2. Creating Text Styles

Create text styles for all typography variants:

1. Select text layer
2. Right panel → Text properties
3. Click "+" next to "Text styles"
4. Name: "text-sm/normal" (size/weight)
5. Apply font family, size, weight, line height variables
6. Repeat for all combinations

**Text Style Naming:**
- `text-xs/semibold` - 12px / 600
- `text-sm/normal` - 14px / 400
- `text-sm/medium` - 14px / 500
- `text-base/medium` - 16px / 500
- `text-base/normal` - 16px / 400

### 3. Creating Color Styles (Optional)

For quick access to colors:

1. Select a shape
2. Right panel → Fill
3. Click "+" next to "Color styles"
4. Link to variable
5. Name matches variable name

## Creating Components

### Component Creation Workflow

#### 1. Research & Planning

**Before creating a component:**
- Check if it exists in the system
- Can existing components be composed?
- What are the use cases?
- Review similar patterns in other systems
- Gather examples from the app

**Document requirements:**
- List all variants needed
- Define all states (default, hover, focus, disabled, etc.)
- Identify properties (size, variant, icon position, etc.)
- Note accessibility requirements

#### 2. Design Component in Figma

**Step-by-step:**

1. **Create base component**
   ```
   Frame: "Button/Primary/Medium/Default"
   - Use variables for colors
   - Use text styles
   - Use spacing variables
   - Set auto-layout
   ```

2. **Add properties**
   - Click component
   - Right panel → Properties
   - Add properties:
     - `Variant`: Primary, Secondary, Outline, etc.
     - `Size`: Small, Medium, Large
     - `State`: Default, Hover, Focus, Disabled
     - `Icon Before`: Boolean
     - `Icon After`: Boolean

3. **Create variants**
   - Duplicate base component
   - Change visual properties
   - Keep structure consistent
   - Use variables throughout

4. **Set up auto-layout**
   - Use auto-layout for flexible sizing
   - Set padding with spacing variables
   - Set gaps with spacing variables
   - Configure resizing behavior

5. **Add interactive states**
   - Select component
   - Prototype tab → Interactions
   - Add "While hovering" → Change to hover state
   - Add "While pressing" → Change to active state

6. **Document the component**
   - Create documentation frame
   - Show all variants
   - Add usage guidelines
   - Include do's and don'ts
   - Link to code documentation

#### 3. Example: Creating a New Button Variant

```
1. Duplicate existing Button component
2. Rename: "Button/Ghost/Medium/Default"
3. Update properties:
   - Background: transparent → {transparent}
   - Text color: {primary}
   - Border: none
   - Hover background: {secondary}
4. Create hover state variant
5. Update component set properties
6. Test in different contexts
7. Document usage
8. Share with developers
```

### Component Best Practices

**Use Variables:**
- Always use color variables (never hardcode)
- Use spacing variables for padding/gaps
- Use text styles for typography
- Use radius variables for borders

**Auto-Layout:**
- Use auto-layout for all components
- Set appropriate resizing (hug/fill)
- Use spacing variables for padding/gaps
- Test resizing behavior

**Naming Convention:**
```
Component/Variant/Size/State

Examples:
- Button/Primary/Medium/Default
- Button/Primary/Medium/Hover
- Input/Default/Medium/Focus
- Badge/Secondary/Default
```

**Properties:**
- Add boolean properties for toggles
- Use variant properties for styles
- Add text properties for content
- Add instance swap for icons

**States:**
Always include:
- Default
- Hover
- Focus
- Active (pressed)
- Disabled
- Loading (if applicable)
- Error (if applicable)

## Design Tokens in Figma

### Creating Design Tokens

**Color Tokens:**

1. **Primitive Layer** (base colors)
   ```
   orange-50: #fff7ed
   orange-100: #ffedd5
   orange-500: #ff6b00
   orange-600: #e65100
   orange-700: #d96200
   ```

2. **Semantic Layer** (purpose-based)
   ```
   primary: {orange-500}
   primary-hover: {orange-600}
   secondary: {orange-100}
   destructive: {red-600}
   ```

3. **Component Layer** (specific usage)
   ```
   button-primary-bg: {primary}
   button-primary-text: white
   input-border: {border}
   ```

### Exporting Tokens to Code

**Using Figma Dev Mode MCP:**

Developers can fetch tokens using:
```typescript
// Fetch variable definitions
const variables = await mcp.getVariableDefs({
  nodeId: '2814-11937',
  clientLanguages: 'typescript',
  clientFrameworks: 'react'
});

// Output: { '--primary': '#ff6b00', ... }
```

**Manual Export Options:**

1. **Figma Tokens Plugin**
   - Export tokens as JSON
   - Transform to CSS variables
   - Sync to GitHub

2. **Style Dictionary**
   - Define tokens in JSON
   - Generate platform-specific files
   - Automate with CI/CD

3. **Design Tokens Plugin**
   - Export from Figma
   - Convert to various formats
   - Integrate with build process

## Designer-Developer Workflow

### 1. Proposing New Components

**Designer Process:**

1. **Create proposal**
   - Document use case
   - Show examples in context
   - List required variants
   - Note accessibility needs

2. **Design in Figma**
   - Create component following guidelines
   - Use design tokens
   - Create all variants and states
   - Add documentation

3. **Request review**
   - Share Figma link
   - Post in GitHub Discussions
   - Tag relevant developers
   - Explain rationale

4. **Iterate based on feedback**
   - Technical feasibility
   - API design
   - Accessibility considerations
   - Performance implications

5. **Get approval**
   - Design system team review
   - Developer feasibility check
   - Update component in Figma
   - Mark as "Ready for Development"

### 2. Developer Handoff

**What developers need:**

1. **Figma Link**
   - Component node ID
   - Direct link to component
   - Dev Mode enabled

2. **Specifications**
   - All variants documented
   - State transitions defined
   - Spacing and sizing exact
   - Color tokens specified

3. **Assets**
   - SVG icons exported
   - Images optimized
   - Illustrations prepared

4. **Documentation**
   - Usage guidelines
   - Edge cases noted
   - Accessibility requirements
   - Interactive behaviors

**Figma Dev Mode Features:**

- **Inspect**: View CSS properties
- **Code**: Get React/HTML code
- **Variables**: See token references
- **Measurements**: Spacing and sizing
- **Assets**: Export icons/images

### 3. Implementation Feedback Loop

**Developer to Designer:**

```
Developer implements → Finds issue → Reports to designer
Example issues:
- "This hover state is too subtle"
- "Disabled state needs more contrast"
- "Focus indicator not visible on dark backgrounds"
- "Animation is too slow/fast"
```

**Designer Response:**

1. Review the issue
2. Test in Figma
3. Update component
4. Notify developer
5. Document the change

**Iteration:**

```
Design → Develop → Test → Feedback → Refine → Repeat
```

### 4. Design QA Process

**Designer reviews implementation:**

1. **Visual Comparison**
   - Compare code vs Figma
   - Check all variants
   - Verify states (hover, focus, etc.)
   - Test dark mode

2. **Token Validation**
   - Colors match exactly
   - Spacing is correct
   - Typography matches
   - Borders and radius correct

3. **Behavior Check**
   - Animations smooth
   - Transitions correct
   - Interactive states work
   - Responsive behavior

4. **Approval or Feedback**
   - Approve if matches
   - Request changes if not
   - Document discrepancies
   - Work with developer to fix

## Figma Plugins

### Essential Plugins for Design Systems

#### 1. **Figma Tokens** (Design Tokens Sync)
- Export/import design tokens
- Sync with GitHub
- Transform to code formats
- Maintain token consistency

**Usage:**
```
1. Install Figma Tokens plugin
2. Define tokens in plugin
3. Apply to components
4. Export as JSON
5. Sync to repository
6. Transform to CSS/SCSS/JS
```

#### 2. **A11y - Color Contrast Checker**
- Check WCAG compliance
- Test contrast ratios
- Suggest accessible colors
- Report violations

**Usage:**
```
1. Select text and background
2. Run plugin
3. Check contrast ratio
4. Adjust if needed (AA: 4.5:1, AAA: 7:1)
```

#### 3. **Stark** (Accessibility Suite)
- Contrast checking
- Color blindness simulation
- Focus order verification
- Alt text suggestions

#### 4. **Content Reel**
- Generate realistic content
- Test with real data
- Placeholder text/images
- Multiple data types

#### 5. **Design Lint**
- Check design consistency
- Find errors automatically
- Enforce design rules
- Clean up files

#### 6. **Component Inspector**
- Audit component usage
- Find detached instances
- Track component versions
- Clean up unused

#### 7. **Iconify**
- Access icon libraries
- Search thousands of icons
- Import as vectors
- Customize easily

### Recommended Workflow with Plugins

**Daily Workflow:**
1. **Start**: Check with Design Lint for issues
2. **Design**: Use variables and components
3. **Test**: Run A11y checker on new designs
4. **Export**: Use Figma Tokens to sync tokens
5. **Review**: Component Inspector for consistency

## Best Practices

### Design Guidelines

#### 1. Consistency

**Always:**
- Use variables for colors
- Use text styles
- Use components from library
- Follow spacing system
- Maintain naming conventions

**Never:**
- Hardcode colors
- Create custom text formatting
- Detach from components
- Use arbitrary spacing
- Ignore guidelines

#### 2. Documentation

**Document everything:**
- Component usage
- Variant purposes
- State behaviors
- Edge cases
- Accessibility notes
- Code properties

**Format:**
```
Component: Button

Description:
Primary action buttons for forms and important actions.

Variants:
- Primary: Main CTA
- Secondary: Less important actions
- Outline: Tertiary actions
- Ghost: Minimal emphasis

States:
- Default: Normal state
- Hover: On mouse over
- Focus: Keyboard focus
- Disabled: Not interactive
- Loading: Processing

Usage:
✅ Use primary for main actions
✅ One primary per section
❌ Don't use for navigation
❌ Don't stack multiple primary buttons

Accessibility:
- Minimum height: 40px (md)
- Focus indicator: 2px ring
- Color contrast: 4.5:1 minimum
```

#### 3. Naming Conventions

**Components:**
```
[Component]/[Variant]/[Size]/[State]

Button/Primary/Medium/Default
Input/Error/Large/Focus
```

**Variables:**
```
[Category]/[Purpose]/[Property]

color/primary/base
spacing/gap/4
typography/size/base
```

**Frames:**
```
[Section] - [Description]

Components - Button Documentation
Patterns - Form Layout Example
Templates - Dashboard Light Mode
```

#### 4. File Organization

**Keep organized:**
- One component per section
- Group related components
- Use clear hierarchy
- Archive old versions
- Document changes

**Page structure:**
```
📄 Page: Components
  📦 Section: Button
    🔵 Frame: Component Set
    📋 Frame: Documentation
    🎨 Frame: Examples

📄 Page: Design Tokens
  🎨 Section: Colors
  📝 Section: Typography
  📏 Section: Spacing
```

### Collaboration Best Practices

#### 1. Communication

**Regular sync meetings:**
- Weekly design system review
- Component proposal discussions
- Implementation reviews
- Roadmap planning

**Async communication:**
- GitHub Discussions for proposals
- Figma comments for feedback
- Slack/Discord for quick questions
- Documentation for decisions

#### 2. Version Control

**Track changes:**
- Use Figma version history
- Document major changes
- Tag stable versions
- Create release notes

**Semantic versioning:**
```
Major.Minor.Patch

2.1.0 - Added new Button variant
2.0.1 - Fixed Input focus state
3.0.0 - Breaking: Redesigned Badge
```

#### 3. Review Process

**Design review:**
1. Designer proposes component
2. Team reviews in Figma
3. Discuss feasibility
4. Approve or request changes
5. Developer implements
6. Designer reviews implementation
7. Iterate if needed
8. Merge and release

## Governance & Maintenance

### Design System Roles

**Design Lead:**
- Final design decisions
- Maintains visual consistency
- Reviews proposals
- Updates guidelines

**Developer Lead:**
- Technical feasibility
- Code implementation
- Performance optimization
- API design

**Accessibility Lead:**
- WCAG compliance
- Contrast checking
- Screen reader testing
- Keyboard navigation

**Documentation Lead:**
- Keeps docs updated
- Examples and tutorials
- Onboarding materials
- Release notes

### Contribution Guidelines

**For designers:**

1. **Before proposing:**
   - Check existing components
   - Review guidelines
   - Gather use cases

2. **Creating proposal:**
   - Use proposal template
   - Show examples
   - Explain rationale
   - Consider alternatives

3. **During design:**
   - Use design tokens
   - Follow patterns
   - Document thoroughly
   - Test accessibility

4. **After approval:**
   - Update Figma library
   - Notify developers
   - Update documentation
   - Track implementation

### Release Process

**Quarterly releases:**

**Prepare release:**
1. Freeze new features (2 weeks before)
2. Review all changes
3. Update documentation
4. Test all components
5. Fix critical issues

**Release:**
1. Version bump in Figma
2. Tag version in Git
3. Publish components
4. Deploy documentation
5. Announce changes

**Post-release:**
1. Monitor for issues
2. Gather feedback
3. Plan next release
4. Update roadmap

### Metrics & Analytics

**Track:**
- Component usage in designs
- Adoption rate
- Time to implement
- Bug reports
- Feedback sentiment

**Review monthly:**
- Most used components
- Common issues
- Feature requests
- Documentation gaps

## Resources

### Figma Resources
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Design Systems in Figma](https://www.figma.com/resources/learn-design-systems/)
- [Variables Documentation](https://help.figma.com/hc/en-us/articles/15343816063383-Guide-to-variables-in-Figma)
- [Component Properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties)

### Design System Examples
- [Material Design 3](https://m3.material.io/)
- [Ant Design](https://ant.design/)
- [Carbon Design System](https://carbondesignsystem.com/)
- [Polaris (Shopify)](https://polaris.shopify.com/)

### Tools
- [Figma Tokens Plugin](https://www.figmatokens.com/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)

---

**Last Updated:** 2025-10-16
**Maintained by:** AfterDS Design Team
