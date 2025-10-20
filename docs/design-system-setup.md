# Setting Up AfterDS 2.0 as a Full Design System

A step-by-step guide to implementing AfterDS 2.0 as a complete design system for your organization.

## Quick Setup Checklist

```
□ Phase 1: Foundation (Week 1)
  □ Set up Figma file structure
  □ Create design tokens as variables
  □ Establish component library
  □ Set up development environment

□ Phase 2: Core Components (Weeks 2-4)
  □ Migrate existing components to library
  □ Implement in code with design tokens
  □ Create Storybook documentation
  □ Set up dark mode

□ Phase 3: Collaboration (Week 5)
  □ Establish designer-developer workflow
  □ Set up sync process
  □ Create communication channels
  □ Define governance model

□ Phase 4: Documentation (Week 6)
  □ Complete component documentation
  □ Write usage guidelines
  □ Create contribution guide
  □ Set up onboarding materials

□ Phase 5: Adoption (Ongoing)
  □ Train team members
  □ Migrate existing projects
  □ Gather feedback
  □ Iterate and improve
```

## Phase 1: Foundation Setup

### 1.1 Figma Organization

**Create main design system file:**

```
File Structure:
├── 🎨 Design Tokens (Page)
│   ├── Colors (Variables)
│   ├── Typography (Variables)
│   ├── Spacing (Variables)
│   └── Radius (Variables)
│
├── 📦 Components (Page)
│   ├── Button
│   ├── Input
│   ├── Badge
│   ├── Alert
│   └── Accordion
│
├── 🎭 Patterns (Page)
├── 📱 Templates (Page)
└── 📐 Guidelines (Page)
```

**Set up Figma Teams:**

```
Design System Team
├── Design Lead
├── Accessibility Lead
├── Developer Lead
└── Product Manager

Contributors
├── Product Designers
├── Frontend Developers
└── UX Writers
```

### 1.2 Design Tokens

**Create variable collections:**

```javascript
// Colors
const colorVariables = {
  primitives: {
    'orange-500': '#ff6b00',
    'orange-600': '#e65100',
    'stone-100': '#fcfaf8',
    // ...
  },
  semantic: {
    'primary': '{orange-500}',
    'background': {
      light: '{stone-100}',
      dark: '#181818'
    },
    // ...
  }
};

// Typography
const typographyVariables = {
  family: { sans: 'Inter' },
  size: { sm: 14, base: 16, lg: 18 },
  weight: { normal: 400, medium: 500, bold: 700 },
  lineHeight: { tight: 20, normal: 24, relaxed: 28 }
};

// Spacing
const spacingVariables = {
  'gap-2': 8,
  'gap-4': 16,
  'gap-6': 24,
  // ...
};
```

### 1.3 Development Setup

**Initialize repository:**

```bash
# Create new repository
git init afterds-2.0
cd afterds-2.0

# Initialize package.json
npm init -y

# Install dependencies
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npm install -D storybook @storybook/react @storybook/react-vite
npm install clsx

# Initialize configurations
npx tailwindcss init -p
npx tsc --init
npx storybook init
```

**Configure Tailwind:**

```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b00',
        // ... design tokens
      }
    }
  }
};
```

## Phase 2: Component Implementation

### 2.1 Component Migration Strategy

**Priority levels:**

```
Priority 1 (Week 2):
- Button
- Input
- Typography components

Priority 2 (Week 3):
- Badge
- Alert
- Card

Priority 3 (Week 4):
- Accordion
- Modal
- Dropdown
```

### 2.2 Implementation Process

**For each component:**

1. **Design in Figma** (Designer - 1-2 days)
   - Create component with variables
   - All variants and states
   - Document usage
   - Mark ready for dev

2. **Implement in Code** (Developer - 2-3 days)
   - Fetch specs from Figma
   - Build with TypeScript
   - Use design tokens
   - Support dark mode
   - Add Storybook stories

3. **Review & Iterate** (Both - 1 day)
   - Designer reviews implementation
   - Provide feedback
   - Fix issues
   - Final approval

4. **Document** (Both - 1 day)
   - Write component docs
   - Add usage examples
   - Note accessibility
   - Update changelog

### 2.3 Quality Standards

**Every component must have:**

```
✓ TypeScript types
✓ All variants implemented
✓ Dark mode support
✓ Storybook stories
✓ Component documentation
✓ Accessibility tested (WCAG AA)
✓ Keyboard navigation
✓ Focus indicators
✓ Responsive design
✓ Error handling
```

## Phase 3: Collaboration Framework

### 3.1 Team Structure

```
Design System Core Team (3-5 people)
├── Design Lead - Visual design, Figma library
├── Developer Lead - Code implementation, architecture
├── Accessibility Lead - WCAG compliance, testing
└── Product Manager - Roadmap, priorities

Contributors (Entire Team)
├── Product Designers - Component proposals, feedback
├── Frontend Devs - Implementation, code review
└── QA Engineers - Testing, bug reports
```

### 3.2 Workflow Establishment

**Designer Workflow:**

```
1. Propose component → GitHub Discussion
2. Design in Figma → All variants & states
3. Document specs → Usage & guidelines
4. Share with devs → Figma link + GitHub issue
5. Review implementation → Visual QA
6. Iterate if needed → Feedback loop
7. Approve & release → Update library
```

**Developer Workflow:**

```
1. Pick up issue → Assigned from backlog
2. Inspect Figma → Dev Mode specifications
3. Fetch tokens → MCP server integration
4. Implement component → TypeScript + React
5. Create Storybook → All variants
6. Write docs → Component guide
7. Submit PR → Request designer review
8. Address feedback → Iterate
9. Merge & deploy → Release
```

### 3.3 Communication Setup

**Tools:**

```
├── Figma - Design source of truth
├── GitHub - Code, issues, discussions
├── Storybook - Component showcase
├── Slack/Discord - Quick communication
└── Meetings - Syncs & reviews
```

**Channels:**

```
#design-system
├── Announcements
├── Proposals
├── Questions
└── Feedback

#design-system-dev
├── Implementation
├── Code reviews
└── Technical discussions
```

**Meeting Schedule:**

```
Weekly: Design System Sync (1 hour)
- Review proposals
- Discuss implementations
- Plan sprint
- Remove blockers

Bi-weekly: Design QA (30 min)
- Review implementations
- Visual comparison
- Approve or feedback

Monthly: Retrospective (1 hour)
- What worked
- What needs improvement
- Process updates
- Roadmap review
```

## Phase 4: Documentation

### 4.1 Documentation Structure

Already created in `/docs`:

```
docs/
├── README.md - Overview & quick start
├── getting-started.md - Setup guide
├── components/ - Component docs
│   ├── button.md
│   ├── input.md
│   └── ...
├── design-tokens.md - Token reference
├── dark-mode.md - Dark mode guide
├── designer-workflow.md - For designers
├── design-dev-sync.md - Collaboration process
├── contributing.md - Contribution guide
├── architecture.md - Technical docs
├── design-system-setup.md - This file
└── changelog.md - Version history
```

### 4.2 Documentation Standards

**Every component doc includes:**

```markdown
# Component Name

## Import
## Basic Usage
## Variants (with code examples)
## Props Table
## Accessibility Notes
## Design Tokens Used
## Best Practices (Do's & Don'ts)
## Related Components
## Figma Reference
```

### 4.3 Living Documentation

**Keep docs updated:**

```
□ Update on every component change
□ Add examples for new features
□ Document breaking changes
□ Include migration guides
□ Screenshot updates
□ Video tutorials (optional)
```

## Phase 5: Adoption & Growth

### 5.1 Team Training

**Onboarding checklist:**

```
For Designers:
□ Figma file access
□ Design tokens training
□ Component creation guide
□ Workflow walkthrough
□ Tools & plugins setup

For Developers:
□ Repository access
□ Local setup
□ Design tokens integration
□ Component implementation guide
□ Storybook usage
□ PR process

For Product Managers:
□ Design system overview
□ Component catalog
□ When to use vs build
□ Contribution process
□ Roadmap access
```

### 5.2 Adoption Strategy

**Phase 1: New projects** (Immediate)
- All new features use design system
- No custom components without approval
- Training for new team members

**Phase 2: Active projects** (Month 2-3)
- Migrate high-traffic pages first
- Replace custom components gradually
- Measure adoption metrics

**Phase 3: Legacy projects** (Month 4-6)
- Assess migration effort
- Prioritize by business value
- Gradual component replacement

### 5.3 Metrics & KPIs

**Track these metrics:**

```
Adoption Metrics:
□ % of projects using design system
□ Number of components implemented
□ Design token consistency rate
□ Component reuse rate

Quality Metrics:
□ WCAG AA compliance rate
□ Bug rate per component
□ Time to implement components
□ First-pass approval rate

Velocity Metrics:
□ Design-to-code time
□ PR review time
□ Release frequency
□ Documentation coverage

Satisfaction Metrics:
□ Team satisfaction surveys
□ Contribution rate
□ Feedback sentiment
□ Adoption willingness
```

### 5.4 Continuous Improvement

**Quarterly reviews:**

```
Q1: Foundation
- Core components implemented
- Workflow established
- Documentation complete
- Team trained

Q2: Expansion
- Additional components added
- Patterns documented
- Templates created
- Adoption at 50%

Q3: Optimization
- Performance improvements
- Accessibility audit
- Token refinement
- Adoption at 75%

Q4: Maturity
- Full adoption
- Advanced patterns
- Design system v2 planning
- Community building
```

## Tools & Integrations

### Design Tools

```
Primary: Figma
Plugins:
- Figma Tokens (token sync)
- A11y Color Contrast (accessibility)
- Stark (accessibility suite)
- Component Inspector (auditing)
- Design Lint (consistency)
- Iconify (icon library)
```

### Development Tools

```
Core:
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.15
- Vite 5.4.11
- Storybook 8.3.5

Integrations:
- Figma Dev Mode MCP
- Style Dictionary (token transform)
- Chromatic (visual testing)
- GitHub Actions (CI/CD)
```

### Automation

```
Automated Workflows:
□ Token sync from Figma
□ Component generation
□ Screenshot comparison
□ Accessibility testing
□ Documentation generation
□ Release notes
```

## Common Pitfalls & Solutions

### Pitfall 1: Too Many Components

**Problem:** Creating a component for every use case
**Solution:** Start with core primitives, compose for complex UIs

### Pitfall 2: Tight Coupling

**Problem:** Components too specific to one use case
**Solution:** Design for flexibility, support customization

### Pitfall 3: Poor Documentation

**Problem:** Components exist but no one knows how to use them
**Solution:** Document everything, provide examples

### Pitfall 4: No Governance

**Problem:** Everyone adds components without review
**Solution:** Establish approval process and guidelines

### Pitfall 5: Ignoring Feedback

**Problem:** Design system doesn't meet user needs
**Solution:** Regular feedback loops, listen to users

## Success Checklist

Your design system is successful when:

```
✓ Team members reach for design system first
✓ New features use existing components
✓ Custom one-offs are rare
✓ Implementation time decreases
✓ Visual consistency across products
✓ Accessibility is built-in
✓ Onboarding is smooth
✓ Documentation is trusted
✓ Contributions are regular
✓ Adoption is growing
```

## Resources

### Learning Resources

- [Design Systems Handbook](https://www.designbetter.co/design-systems-handbook)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Design Systems Repo](https://designsystemsrepo.com/)
- [A11y Project](https://www.a11yproject.com/)

### Example Design Systems

- [Material Design 3](https://m3.material.io/)
- [Carbon (IBM)](https://carbondesignsystem.com/)
- [Polaris (Shopify)](https://polaris.shopify.com/)
- [Ant Design](https://ant.design/)
- [Atlassian Design System](https://atlassian.design/)

### Community

- [Design Systems Slack](https://design.systems/slack)
- [Figma Community](https://www.figma.com/community)
- [Storybook Discord](https://discord.gg/storybook)

---

**Need help?** Refer to:
- [Designer Workflow](./designer-workflow.md) - Figma setup
- [Design-Dev Sync](./design-dev-sync.md) - Collaboration process
- [Contributing](./contributing.md) - How to contribute
- [Architecture](./architecture.md) - Technical details

**Last Updated:** 2025-10-16
