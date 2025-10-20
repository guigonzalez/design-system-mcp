# Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. This document provides a comprehensive reference for all design tokens in AfterDS 2.0.

## Interactive Reference

For an interactive, visual reference of all design tokens, visit the **Design Tokens** page in the live app:

- [View Design Tokens](http://localhost:5173) - Click the "Design Tokens" tab
- Copy any token with one click
- See live examples in both light and dark modes
- View component-specific token mappings

## Color Tokens

### Primary Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `#ff6b00` | `#ff6b00` | Primary action color (orange) |
| `--primary-foreground` | `#ffffff` | `#ffffff` | Text on primary color |

### Secondary Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--secondary` | `#ffe5cc` | `#331200` | Secondary background |
| `--secondary-foreground` | `#ff6b00` | `#d4a574` | Text on secondary |

### Background Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | `#fcfaf8` | `#181818` | Main background color |
| `--foreground` | `#0c0a09` | `#fcfaf8` | Main text color |

### Border & Muted

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--border` | `#e7e5e4` | `#353535` | Border color |
| `--muted-foreground` | `#78716c` | `#b3b3b3` | Muted/helper text |

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--destructive` | `#dc2626` | `#dc2626` | Error/destructive color |
| `--success` | `#16a34a` | `#16a34a` | Success state color |

## Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `gap-0` | `0px` | No gap |
| `gap-1` | `4px` | Extra small gap |
| `gap-2` | `8px` | Small gap |
| `gap-3` | `12px` | Medium gap |
| `gap-4` | `16px` | Standard gap |
| `gap-6` | `24px` | Large gap |
| `gap-8` | `32px` | Extra large gap |
| `p-0` | `0px` | No padding |
| `p-2` | `8px` | Small padding |
| `p-4` | `16px` | Standard padding |
| `px-3` | `12px` | Horizontal padding |
| `py-2` | `8px` | Vertical padding small |
| `py-4` | `16px` | Vertical padding |

## Typography Tokens

| Token | Family | Size | Weight | Line Height | Usage |
|-------|--------|------|--------|-------------|-------|
| `text-xs` | Inter | `12px` | 600 | `16px` | Badge text |
| `text-sm` | Inter | `14px` | 400 | `20px` | Helper text, small content |
| `text-sm/medium` | Inter | `14px` | 500 | `20px` | Labels |
| `text-base` | Inter | `16px` | 500 | `24px` | Button text, headings |
| `text-base/normal` | Inter | `16px` | 400 | `24px` | Body text |
| `text-lg` | Inter | `18px` | 600 | `28px` | Section headings |
| `text-2xl` | Inter | `24px` | 700 | `32px` | Page headings |

### Font Weights

- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

## Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | `4px` | Subtle rounding |
| `rounded-md` | `6px` | Default components |
| `rounded-lg` | `8px` | Larger components |
| `rounded-xl` | `12px` | Large cards |
| `rounded-2xl` | `16px` | Container backgrounds |
| `rounded-full` | `9999px` | Pills/badges |

## Component-Specific Tokens

### Button

**Primary Variant:**
- Background: `bg-primary` (`#ff6b00`)
- Background Hover: `hover:bg-[#e65100]` / `dark:hover:bg-[#d96200]`
- Text: `text-primary-foreground` (white)
- Padding: `px-4 py-2` (`16px 8px`)
- Border Radius: `rounded-md` (`6px`)

**Complete mappings:** See `/src/data/designTokens.ts` or the live Design Tokens page.

### Input

**Default State:**
- Background: `bg-background` / `dark:bg-[#1f1f1f]`
- Border: `border-input` (`#e7e5e4`) / `dark:border-[#353535]`
- Text: `text-foreground` / `dark:text-[#fcfaf8]`
- Height: `h-10` (`40px`)
- Padding: `px-3 py-2`

### Badge

**Default Variant:**
- Background: `bg-primary` (`#ff6b00`)
- Text: `text-primary-foreground` (white)
- Padding: `px-2.5 py-0.5` (`10px 2px`)
- Border Radius: `rounded-full`
- Font Size: `text-xs` (`12px`)

### Alert

**Default Variant:**
- Background: `bg-background` / `dark:bg-[#1f1f1f]`
- Border: `border-border` / `dark:border-[#353535]`
- Padding: `p-4` (`16px`)
- Border Radius: `rounded-lg` (`8px`)

### Accordion

**Trigger:**
- Padding: `py-4 px-4` (`16px`)
- Text: `text-base font-medium` (`16px / 500`)
- Hover: `hover:bg-muted/30` / `dark:hover:bg-[#2a2a2a]`

**Content:**
- Padding: `px-4 pb-4`
- Text: `text-sm font-normal` (`14px / 400`)

## Using Design Tokens

### In Components

Always reference design tokens, not raw values:

```tsx
// ✅ Good - Uses design tokens
<div className="bg-background text-foreground border-border">
  Content
</div>

// ❌ Bad - Hardcoded values
<div style={{ background: '#fcfaf8', color: '#0c0a09', border: '1px solid #e7e5e4' }}>
  Content
</div>
```

### With Dark Mode

Always include dark mode variants:

```tsx
// ✅ Good - Includes dark mode
<div className="bg-background dark:bg-[#181818]">
  <p className="text-foreground dark:text-[#fcfaf8]">
    Text
  </p>
</div>

// ❌ Bad - No dark mode
<div className="bg-white">
  <p className="text-black">Text</p>
</div>
```

### Custom Components

When creating new components:

1. **Use existing tokens** where possible
2. **Follow the patterns** of existing components
3. **Add dark mode support** for all color properties
4. **Document new tokens** if you create them
5. **Test in both themes** before committing

## Token Guidelines

### Naming Convention

- **Semantic names**: Use purpose-based names (e.g., `primary`, `destructive`)
- **Not appearance-based**: Avoid names like `orange` or `red-500`
- **Consistent prefix**: CSS variables use `--` prefix
- **Tailwind classes**: Use standard Tailwind naming

### Token Hierarchy

1. **Global tokens** - Foundation (colors, spacing, typography)
2. **Semantic tokens** - Purpose-specific (primary, secondary, destructive)
3. **Component tokens** - Component-specific variations

### Adding New Tokens

When you need to add new design tokens:

1. **Check if existing token works** - Reuse when possible
2. **Add to `/src/data/designTokens.ts`** - Centralized definition
3. **Update Tailwind config** - If needed for build
4. **Document the token** - Update this file
5. **Add to Design Tokens page** - For visual reference
6. **Update Figma** - Keep design files in sync

## Figma Integration

Design tokens are synced with Figma variables:

- **Figma File**: [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0)
- **Variables**: Defined in Figma and exported to code
- **Sync Tool**: Use `npm run docs:tokens` to regenerate documentation

## Resources

- **Live Examples**: [Design Tokens Page](http://localhost:5173) (click "Design Tokens" tab)
- **Token Data**: `/src/data/designTokens.ts`
- **Token Generator**: `/scripts/generate-token-docs.ts`
- **Figma Specs**: Use MCP server to fetch latest tokens

---

**Last Updated:** 2025-10-16
**Maintainer:** AfterDS Team
