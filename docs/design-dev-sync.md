# Design-to-Development Sync Process

A practical guide for syncing designs from Figma to code in AfterDS 2.0.

## Quick Reference

```
Figma → Code Workflow
======================

1. Design in Figma
   ↓
2. Create component with variables
   ↓
3. Document usage & specs
   ↓
4. Share with developers
   ↓
5. Developers inspect in Dev Mode
   ↓
6. Fetch tokens via MCP
   ↓
7. Implement in React/TypeScript
   ↓
8. Designer reviews
   ↓
9. Iterate if needed
   ↓
10. Merge & document
```

## Detailed Workflow

### Phase 1: Design (Figma)

**Designer Tasks:**

```
□ Create component in Figma
  □ Use local variables for all colors
  □ Use text styles for typography
  □ Set up auto-layout
  □ Add component properties
  □ Create all variants
  □ Design all states (hover, focus, disabled, etc.)

□ Document component
  □ Add usage guidelines
  □ Show examples in context
  □ Note accessibility requirements
  □ Specify interactive behaviors

□ Prepare for handoff
  □ Enable Dev Mode
  □ Annotate important details
  □ Export necessary assets
  □ Note special cases
```

**Figma Dev Mode Settings:**

1. Right-click component → Plugins → Dev Mode → Mark as ready for dev
2. Add annotations for:
   - Interactive states
   - Animation timings
   - Responsive behavior
   - Edge cases

### Phase 2: Developer Handoff

**Designer provides:**

1. **Figma Link**
   ```
   Component: Button
   Node ID: 2814-11937
   Link: https://www.figma.com/design/.../node-id=2814-11937
   ```

2. **Specifications Document**
   ```markdown
   # Button Component Specs

   ## Variants
   - Primary, Secondary, Outline, Ghost, Link, Link-Secondary

   ## Sizes
   - Small (32px), Medium (40px), Large (48px)

   ## States
   - Default, Hover, Focus, Active, Disabled, Loading

   ## Properties
   - variant: string
   - size: string
   - isLoading: boolean
   - disabled: boolean
   - iconBefore/After: ReactNode

   ## Interactions
   - Hover: Darken background by 10%
   - Focus: 2px primary ring
   - Press: Scale down 0.98
   - Disabled: 50% opacity

   ## Accessibility
   - Minimum tap target: 40px
   - Contrast ratio: 4.5:1 minimum
   - Focus visible: Always
   - ARIA: Proper labels
   ```

3. **GitHub Issue**
   ```markdown
   Title: Implement Button component

   **Figma:** [Link](...)
   **Node ID:** 2814-11937
   **Priority:** High
   **Estimate:** 2-3 days

   ## Requirements
   - [ ] All 6 variants
   - [ ] All 3 sizes
   - [ ] All states (hover, focus, disabled, loading)
   - [ ] Dark mode support
   - [ ] TypeScript types
   - [ ] Storybook stories
   - [ ] Accessibility (WCAG AA)
   - [ ] Documentation

   ## Design Tokens Used
   - Colors: primary, primary-foreground, secondary, destructive
   - Spacing: px-4, py-2, gap-2
   - Typography: text-base, font-medium
   - Radius: rounded-md

   ## Notes
   - Loading state shows spinner
   - Icons should accept ReactNode
   - Support fullWidth prop
   ```

### Phase 3: Development (Code)

**Developer Process:**

**Step 1: Inspect in Figma Dev Mode**

```
1. Open Figma link
2. Toggle Dev Mode (Shift + D)
3. Select component
4. View:
   - CSS properties
   - Spacing measurements
   - Color tokens
   - Text styles
   - Export assets
```

**Step 2: Fetch Design Tokens via MCP**

```typescript
// Using Figma Dev Mode MCP Server
const tokens = await mcp.getVariableDefs({
  nodeId: '2814-11937',
  clientLanguages: 'typescript',
  clientFrameworks: 'react'
});

// Output:
{
  "rounded-md": "6px",
  "var(--primary)": "#ff6b00",
  "var(--primary-foreground)": "#ffffff",
  "px-4": "16px",
  "py-2": "8px",
  // ...
}
```

**Step 3: Get Generated Code**

```typescript
const code = await mcp.getCode({
  nodeId: '2814-11937',
  forceCode: true
});

// Returns React component structure with Tailwind classes
```

**Step 4: Implement Component**

```typescript
// src/components/Button/Button.tsx
import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'link-secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  destructive?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    destructive = false,
    iconBefore,
    iconAfter,
    fullWidth = false,
    disabled,
    children,
    className,
    ...props
  }, ref) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          // Base styles (from Figma)
          'inline-flex items-center justify-center',
          'font-sans text-base font-medium leading-6',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

          // Size variants (from Figma)
          size === 'sm' && 'h-8 px-3 py-1 text-sm',
          size === 'md' && 'h-10 px-4 py-2',
          size === 'lg' && 'h-12 px-5 py-3',

          // Color variants (from Figma variables)
          variant === 'primary' && !destructive && [
            'bg-primary text-primary-foreground rounded-md',
            'hover:bg-[#e65100]',
            'focus-visible:ring-primary',
            'dark:bg-primary dark:hover:bg-[#d96200]',
          ],

          // ... other variants

          // Full width
          fullWidth && 'w-full',

          // Disabled state
          isDisabled && 'opacity-50 cursor-not-allowed',

          // Custom className
          className
        )}
        {...props}
      >
        {/* Loading spinner */}
        {isLoading && <LoadingSpinner className="mr-2" />}

        {/* Icon before */}
        {!isLoading && iconBefore && (
          <span className="mr-2">{iconBefore}</span>
        )}

        {/* Children */}
        {children}

        {/* Icon after */}
        {iconAfter && <span className="ml-2">{iconAfter}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
```

**Step 5: Create Storybook Stories**

```typescript
// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    iconBefore: <PlusIcon />,
    iconAfter: <ArrowIcon />,
    children: 'Button',
  },
};

// ... more stories
```

**Step 6: Document Component**

```markdown
# Button Component

See: docs/components/button.md

- Import statement
- All variants with examples
- Props table
- Usage guidelines
- Accessibility notes
- Design tokens used
```

**Step 7: Create Pull Request**

```markdown
Title: feat(Button): implement button component with all variants

## Changes
- ✅ Implemented Button component
- ✅ All 6 variants (primary, secondary, outline, ghost, link, link-secondary)
- ✅ All 3 sizes (sm, md, lg)
- ✅ All states (hover, focus, disabled, loading)
- ✅ Dark mode support
- ✅ TypeScript with full typing
- ✅ Storybook stories
- ✅ Component documentation

## Figma Reference
Node ID: 2814-11937
Link: [Button in Figma](https://www.figma.com/design/...)

## Screenshots
[Light Mode] [Dark Mode]

## Testing
- [ ] Visual match with Figma
- [ ] All variants render correctly
- [ ] Dark mode works
- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Storybook loads

## Designer Review Required
@designer-username please review implementation
```

### Phase 4: Design QA

**Designer Review Process:**

**Visual Comparison:**

```
□ Open Storybook
□ Compare each variant with Figma
□ Check measurements with DevTools
□ Verify colors match exactly
□ Test dark mode
□ Check responsive behavior
□ Test all states (hover, focus, etc.)
```

**Token Validation:**

```
□ Colors use correct variables
□ Spacing matches Figma
□ Typography matches text styles
□ Border radius correct
□ Shadows/effects match
```

**Checklist:**

```
Visual Accuracy:
□ Colors match Figma exactly
□ Spacing is pixel-perfect
□ Typography matches text styles
□ Border radius correct
□ States look correct (hover, focus, disabled)

Dark Mode:
□ Colors match Figma dark mode
□ Contrast is sufficient
□ All variants work
□ States visible in dark mode

Responsiveness:
□ Scales correctly
□ Maintains proportions
□ Readable at all sizes

Accessibility:
□ Focus indicator visible
□ Contrast ratios meet WCAG AA
□ Touch targets minimum 40px
□ Keyboard navigation works
```

**Feedback Format:**

```markdown
## Design Review: Button Component

### ✅ Approved Aspects
- Colors match perfectly
- Spacing is correct
- Dark mode looks great
- All variants present

### ❌ Issues Found

1. **Hover state too subtle**
   - Location: Primary button hover
   - Expected: Darken by 10%
   - Actual: Only 5% darker
   - Fix: Update hover:bg-[#e65100] to hover:bg-[#d96200]

2. **Focus ring too thin**
   - Location: All buttons on focus
   - Expected: 2px ring
   - Actual: 1px ring
   - Fix: Update focus-visible:ring-2

### 📝 Suggestions
- Consider adding subtle shadow on hover
- Loading spinner could be slightly smaller

### Next Steps
- [ ] Fix hover state color
- [ ] Increase focus ring width
- [ ] Update and re-request review
```

### Phase 5: Iteration & Approval

**If changes needed:**

```
Developer:
1. Address feedback
2. Update code
3. Test changes
4. Re-request review

Designer:
1. Review updates
2. Verify fixes
3. Approve or request more changes
```

**Final approval:**

```
Designer comments on PR:
"✅ Design approved! All variants match Figma specs. Ready to merge."

Developer:
1. Merges PR
2. Updates changelog
3. Closes related issues
4. Announces in team channel
```

## Automated Sync with Figma Tokens Plugin

### Setup Figma Tokens Plugin

**In Figma:**

1. Install "Figma Tokens" plugin
2. Configure token sets
3. Map Figma variables to tokens
4. Export tokens as JSON

**Token Structure:**

```json
{
  "color": {
    "primary": {
      "value": "#ff6b00",
      "type": "color"
    },
    "background": {
      "value": {
        "light": "#fcfaf8",
        "dark": "#181818"
      },
      "type": "color"
    }
  },
  "spacing": {
    "4": {
      "value": "16px",
      "type": "spacing"
    }
  },
  "typography": {
    "base": {
      "value": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": "24px"
      },
      "type": "typography"
    }
  }
}
```

### Sync to GitHub

**GitHub Actions Workflow:**

```yaml
# .github/workflows/sync-tokens.yml
name: Sync Design Tokens

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * 1' # Every Monday

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Fetch tokens from Figma
        uses: figma-tokens/sync-action@v1
        with:
          figma-file-key: ${{ secrets.FIGMA_FILE_KEY }}
          figma-token: ${{ secrets.FIGMA_TOKEN }}

      - name: Transform tokens
        run: npm run tokens:transform

      - name: Create PR
        uses: peter-evans/create-pull-request@v3
        with:
          title: 'chore: update design tokens from Figma'
          body: 'Automated sync of design tokens from Figma'
          branch: tokens/sync
```

### Transform Tokens to Code

**Using Style Dictionary:**

```javascript
// style-dictionary.config.js
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/data/',
      files: [{
        destination: 'designTokens.ts',
        format: 'javascript/es6'
      }]
    }
  }
};
```

**Output:**

```css
/* src/tokens.css */
:root {
  --color-primary: #ff6b00;
  --color-background-light: #fcfaf8;
  --spacing-4: 16px;
}

.dark {
  --color-background: #181818;
}
```

```typescript
// src/data/designTokens.ts
export const tokens = {
  color: {
    primary: '#ff6b00',
    background: {
      light: '#fcfaf8',
      dark: '#181818'
    }
  },
  spacing: {
    4: '16px'
  }
};
```

## Tools & Resources

### Essential Tools

| Tool | Purpose | Link |
|------|---------|------|
| **Figma Dev Mode** | Inspect designs, get specs | Built into Figma |
| **Figma Tokens Plugin** | Sync tokens to code | [figmatokens.com](https://www.figmatokens.com/) |
| **Style Dictionary** | Transform tokens | [amzn.github.io/style-dictionary](https://amzn.github.io/style-dictionary/) |
| **Chromatic** | Visual testing | [chromatic.com](https://www.chromatic.com/) |
| **Percy** | Visual diff testing | [percy.io](https://percy.io/) |

### Communication Channels

```
Design Proposals → GitHub Discussions
Implementation Feedback → PR Comments
Quick Questions → Slack/Discord
Documentation → /docs folder
Specifications → Figma + GitHub Issues
```

### Meeting Cadence

```
Weekly Design System Sync (1 hour)
- Review new components
- Discuss proposals
- Plan next sprint
- Address blockers

Bi-weekly Design Review (30 min)
- Review implementations
- QA components
- Approve releases

Monthly Retrospective (1 hour)
- What worked well
- What needs improvement
- Process updates
- Roadmap review
```

## Success Metrics

### Track These Metrics

**Design:**
- Time from design to implementation
- Number of design iterations needed
- Component reuse rate
- Design token consistency

**Development:**
- Implementation time per component
- Bug rate post-launch
- Storybook coverage
- Documentation completeness

**Collaboration:**
- Designer-developer handoff smoothness
- Feedback cycle time
- Review approval rate
- Team satisfaction

### Goals

```
Design to Code Time: < 1 week
First-pass Approval Rate: > 80%
Design Token Usage: 100%
Documentation Coverage: 100%
WCAG AA Compliance: 100%
```

---

**Questions?** Check [Designer Workflow](./designer-workflow.md) or [Contributing Guide](./contributing.md)

**Last Updated:** 2025-10-16
