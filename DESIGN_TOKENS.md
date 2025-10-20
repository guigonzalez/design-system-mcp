# AfterDS 2.0 - Component Design Token Mapping

This document provides a comprehensive mapping of design tokens to each component in the AfterDS 2.0 design system. Use this as a reference when implementing or customizing components.

## Table of Contents
- [Global Design Tokens](#global-design-tokens)
- [Button Component](#button-component)
- [Input Component](#input-component)
- [Badge Component](#badge-component)
- [Alert Component](#alert-component)
- [Accordion Component](#accordion-component)

---

## Global Design Tokens

These tokens are shared across multiple components:

### Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | `#fcfaf8` | `#181818` | Main background color |
| `--foreground` | `#0c0a09` | `#fcfaf8` | Main text color |
| `--primary` | `#ff6b00` | `#ff6b00` | Primary action color (orange) |
| `--primary-foreground` | `#ffffff` | `#ffffff` | Text on primary color |
| `--secondary` | `#ffe5cc` | `#331200` | Secondary background |
| `--secondary-foreground` | `#ff6b00` | `#d4a574` | Text on secondary |
| `--border` | `#e7e5e4` | `#353535` | Border color |
| `--muted-foreground` | `#78716c` | `#b3b3b3` | Muted/helper text |
| `--destructive` | `#dc2626` | `#dc2626` | Error/destructive color |
| `--success` | `#16a34a` | `#16a34a` | Success state color |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `gap-0` | `0px` | No gap |
| `gap-2` | `8px` | Small gap |
| `gap-3` | `12px` | Medium gap |
| `gap-4` | `16px` | Standard gap |
| `gap-6` | `24px` | Large gap |
| `p-0` | `0px` | No padding |
| `p-2` | `8px` | Small padding |
| `p-4` | `16px` | Standard padding |
| `px-3` | `12px` | Horizontal padding |
| `py-2` | `8px` | Vertical padding |
| `py-4` | `16px` | Vertical padding |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-md` | `6px` | Default components |
| `rounded-lg` | `8px` | Larger components |
| `rounded-2xl` | `16px` | Container backgrounds |
| `rounded-full` | `9999px` | Pills/badges |

### Typography

| Token | Font Family | Size | Weight | Line Height | Usage |
|-------|------------|------|--------|-------------|-------|
| `text-xs` | Inter | `12px` | 600 | `16px` | Badge text |
| `text-sm` | Inter | `14px` | 400 | `20px` | Helper text, small content |
| `text-sm/medium` | Inter | `14px` | 500 | `20px` | Labels |
| `text-base` | Inter | `16px` | 500 | `24px` | Button text, headings |
| `text-base/normal` | Inter | `16px` | 400 | `24px` | Body text |

---

## Button Component

**Figma Reference:** `node-id=2814-11937`
**Component File:** `src/components/Button/Button.tsx`

### Token Mapping

#### Primary Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-primary` | `#ff6b00` | `dark:bg-primary` | `#ff6b00` |
| Background (Hover) | `hover:bg-[#e65100]` | `#e65100` | `dark:hover:bg-[#d96200]` | `#d96200` |
| Text | `text-primary-foreground` | `#ffffff` | `dark:text-primary-foreground` | `#ffffff` |
| Border Radius | `rounded-md` | `6px` | `rounded-md` | `6px` |
| Padding X | `px-4` | `16px` | `px-4` | `16px` |
| Padding Y | `py-2` | `8px` | `py-2` | `8px` |
| Font Size | `text-base` | `16px` | `text-base` | `16px` |
| Font Weight | `font-medium` | `500` | `font-medium` | `500` |
| Line Height | `leading-6` | `24px` | `leading-6` | `24px` |
| Gap (Icons) | `gap-2` | `8px` | `gap-2` | `8px` |

#### Secondary Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-secondary` | `#ffe5cc` | `dark:bg-[#3d2517]` | `#3d2517` |
| Background (Hover) | `hover:bg-[#ffd399]` | `#ffd399` | `dark:hover:bg-[#4d2f1c]` | `#4d2f1c` |
| Text | `text-primary` | `#ff6b00` | `dark:text-primary` | `#ff6b00` |

#### Outline Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-accent` | `transparent` | `dark:bg-transparent` | `transparent` |
| Border | `border-border` | `#e7e5e4` | `dark:border-primary` | `#ff6b00` |
| Text | `text-foreground` | `#0c0a09` | `dark:text-primary` | `#ff6b00` |
| Background (Hover) | `hover:bg-secondary` | `#ffe5cc` | `dark:hover:bg-[#3d2517]` | `#3d2517` |

#### Ghost Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `transparent` | `transparent` | `dark:bg-transparent` | `transparent` |
| Background (Hover) | `hover:bg-secondary` | `#ffe5cc` | `dark:hover:bg-[#2a2a2a]` | `#2a2a2a` |
| Text | `text-primary` | `#ff6b00` | `dark:text-primary` | `#ff6b00` |

#### Link Variants

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Text | `text-primary` | `#ff6b00` | `dark:text-primary` | `#ff6b00` |
| Text (Hover) | `hover:text-[#e65100]` | `#e65100` | `dark:hover:text-[#d96200]` | `#d96200` |
| Text Decoration | `underline-offset-4` | `4px` | `underline-offset-4` | `4px` |

#### Destructive State (All Variants)

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-destructive` | `#dc2626` | `dark:bg-destructive` | `#dc2626` |
| Background (Hover) | `hover:bg-[#b91c1c]` | `#b91c1c` | `dark:hover:bg-[#991b1b]` | `#991b1b` |
| Text | `text-destructive-foreground` | `#ffffff` | `dark:text-destructive-foreground` | `#ffffff` |

---

## Input Component

**Figma Reference:** `node-id=2819-27274`
**Component File:** `src/components/Input/Input.tsx`

### Token Mapping

#### Input Field - Default State

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-background` | `#fcfaf8` | `dark:bg-[#1f1f1f]` | `#1f1f1f` |
| Border | `border-input` | `#e7e5e4` | `dark:border-[#353535]` | `#353535` |
| Border (Hover) | `hover:border-foreground` | `#0c0a09` | `dark:hover:border-[#fcfaf8]` | `#fcfaf8` |
| Border (Focus) | `focus:border-primary` | `#ff6b00` | `dark:focus:border-primary` | `#ff6b00` |
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Placeholder | `placeholder:text-muted-foreground` | `#78716c` | `dark:placeholder:text-[#757575]` | `#757575` |
| Border Radius | `rounded-md` | `6px` | `rounded-md` | `6px` |
| Height | `h-10` | `40px` | `h-10` | `40px` |
| Padding X | `px-3` | `12px` | `px-3` | `12px` |
| Padding Y | `py-2` | `8px` | `py-2` | `8px` |
| Font Size | `text-sm` | `14px` | `text-sm` | `14px` |
| Font Weight | `font-normal` | `400` | `font-normal` | `400` |
| Line Height | `leading-5` | `20px` | `leading-5` | `20px` |

#### Label

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Font Size | `text-sm` | `14px` | `text-sm` | `14px` |
| Font Weight | `font-medium` | `500` | `font-medium` | `500` |
| Line Height | `leading-5` | `20px` | `leading-5` | `20px` |
| Gap | `gap-2` | `8px` | `gap-2` | `8px` |

#### Error State

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Border | `border-destructive` | `#dc2626` | `dark:border-destructive` | `#dc2626` |
| Border (Focus) | `focus:border-destructive` | `#dc2626` | `dark:focus:border-destructive` | `#dc2626` |
| Ring | `focus:ring-destructive/20` | `rgba(220,38,38,0.2)` | `dark:focus:ring-destructive/20` | `rgba(220,38,38,0.2)` |
| Message Text | `text-destructive` | `#dc2626` | `dark:text-destructive` | `#dc2626` |

#### Success State

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Border | `border-success` | `#16a34a` | `dark:border-success` | `#16a34a` |
| Border (Focus) | `focus:border-success` | `#16a34a` | `dark:focus:border-success` | `#16a34a` |
| Ring | `focus:ring-success/20` | `rgba(22,163,74,0.2)` | `dark:focus:ring-success/20` | `rgba(22,163,74,0.2)` |
| Message Text | `text-success` | `#16a34a` | `dark:text-success` | `#16a34a` |

#### Disabled State

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-muted/50` | `rgba(231,229,228,0.5)` | `dark:bg-[#2a2a2a]` | `#2a2a2a` |
| Opacity | `opacity-50` | `0.5` | `opacity-50` | `0.5` |
| Label Text | `text-muted-foreground` | `#78716c` | `dark:text-[#b3b3b3]` | `#b3b3b3` |

#### Helper Text

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Text | `text-muted-foreground` | `#78716c` | `dark:text-[#b3b3b3]` | `#b3b3b3` |
| Font Size | `text-sm` | `14px` | `text-sm` | `14px` |
| Font Weight | `font-normal` | `400` | `font-normal` | `400` |
| Line Height | `leading-5` | `20px` | `leading-5` | `20px` |

---

## Badge Component

**Figma Reference:** `node-id=2835-1370`
**Component File:** `src/components/Badge/Badge.tsx`

### Token Mapping

#### Default Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-primary` | `#ff6b00` | `dark:bg-primary` | `#ff6b00` |
| Background (Hover) | `hover:bg-[#e65100]` | `#e65100` | `dark:hover:bg-[#d96200]` | `#d96200` |
| Text | `text-primary-foreground` | `#ffffff` | `dark:text-primary-foreground` | `#ffffff` |
| Border Radius | `rounded-full` | `9999px` | `rounded-full` | `9999px` |
| Padding X | `px-2.5` | `10px` | `px-2.5` | `10px` |
| Padding Y | `py-0.5` | `2px` | `py-0.5` | `2px` |
| Font Size | `text-xs` | `12px` | `text-xs` | `12px` |
| Font Weight | `font-semibold` | `600` | `font-semibold` | `600` |
| Line Height | `leading-4` | `16px` | `leading-4` | `16px` |

#### Secondary Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-secondary` | `#ffe5cc` | `dark:bg-[#331200]` | `#331200` |
| Background (Hover) | `hover:bg-[#ffd399]` | `#ffd399` | `dark:hover:bg-[#4d1b00]` | `#4d1b00` |
| Text | `text-secondary-foreground` | `#ff6b00` | `dark:text-[#d4a574]` | `#d4a574` |

**Note:** Secondary dark background uses exact Figma color: `HSBA(21, 100%, 20%, 1)` = `#331200`

#### Outline Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-background` | `#fcfaf8` | `dark:bg-transparent` | `transparent` |
| Border | `border-border` | `#e7e5e4` | `dark:border-[#353535]` | `#353535` |
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Background (Hover) | `hover:bg-secondary` | `#ffe5cc` | `dark:hover:bg-[#1f1f1f]` | `#1f1f1f` |

#### Destructive Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-destructive` | `#dc2626` | `dark:bg-destructive` | `#dc2626` |
| Background (Hover) | `hover:bg-[#ef4444]` | `#ef4444` | `dark:hover:bg-[#b91c1c]` | `#b91c1c` |
| Text | `text-destructive-foreground` | `#ffffff` | `dark:text-destructive-foreground` | `#ffffff` |

---

## Alert Component

**Figma Reference:** `node-id=2813-9376`
**Component File:** `src/components/Alert/Alert.tsx`

### Token Mapping

#### Default Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-background` | `#fcfaf8` | `dark:bg-[#1f1f1f]` | `#1f1f1f` |
| Border | `border-border` | `#e7e5e4` | `dark:border-[#353535]` | `#353535` |
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Border Radius | `rounded-lg` | `8px` | `rounded-lg` | `8px` |
| Padding | `p-4` | `16px` | `p-4` | `16px` |
| Gap | `gap-3` | `12px` | `gap-3` | `12px` |

#### Title

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Font Size | `text-base` | `16px` | `text-base` | `16px` |
| Font Weight | `font-medium` | `500` | `font-medium` | `500` |
| Line Height | `leading-none` | `1` | `leading-none` | `1` |

#### Description

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Font Size | `text-sm` | `14px` | `text-sm` | `14px` |
| Font Weight | `font-normal` | `400` | `font-normal` | `400` |
| Line Height | `leading-6` | `24px` | `leading-6` | `24px` |

#### Destructive Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-[#fecaca]/50` | `rgba(254,202,202,0.5)` | `dark:bg-[#3d1717]` | `#3d1717` |
| Border | `border-destructive/50` | `rgba(220,38,38,0.5)` | `dark:border-destructive` | `#dc2626` |
| Text | `text-destructive` | `#dc2626` | `dark:text-destructive` | `#dc2626` |

---

## Accordion Component

**Figma Reference:** `node-id=2811-14699`
**Component File:** `src/components/Accordion/Accordion.tsx`

### Token Mapping

#### Accordion Item

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Border Bottom | `border-border` | `#e7e5e4` | `dark:border-[#353535]` | `#353535` |
| Border Width | `border-b` | `1px` | `border-b` | `1px` |

#### Accordion Trigger

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background (Hover) | `hover:bg-muted/30` | `rgba(231,229,228,0.3)` | `dark:hover:bg-[#2a2a2a]` | `#2a2a2a` |
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Padding Y | `py-4` | `16px` | `py-4` | `16px` |
| Padding X | `px-4` | `16px` | `px-4` | `16px` |
| Font Size | `text-base` | `16px` | `text-base` | `16px` |
| Font Weight | `font-medium` | `500` | `font-medium` | `500` |
| Line Height | `leading-6` | `24px` | `leading-6` | `24px` |
| Gap | `gap-4` | `16px` | `gap-4` | `16px` |

#### Accordion Content

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Text | `text-foreground` | `#0c0a09` | `dark:text-[#fcfaf8]` | `#fcfaf8` |
| Padding X | `px-4` | `16px` | `px-4` | `16px` |
| Padding Bottom | `pb-4` | `16px` | `pb-4` | `16px` |
| Font Size | `text-sm` | `14px` | `text-sm` | `14px` |
| Font Weight | `font-normal` | `400` | `font-normal` | `400` |
| Line Height | `leading-5` | `20px` | `leading-5` | `20px` |

#### Chevron Icon

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Size | `h-4 w-4` | `16px × 16px` | `h-4 w-4` | `16px × 16px` |
| Rotation (Open) | `rotate-180` | `180deg` | `rotate-180` | `180deg` |
| Transition | `duration-200` | `200ms` | `duration-200` | `200ms` |

---

## Usage Guidelines

### Implementing Components with Tokens

When building new components or modifying existing ones, follow these guidelines:

1. **Always reference these token mappings** rather than hardcoding values
2. **Include both light and dark mode tokens** for all visual properties
3. **Use the exact hex values** from this document to ensure Figma parity
4. **Test in both light and dark modes** using Storybook's background toolbar
5. **Update this document** when adding new components or modifying tokens

### Token Priority

When multiple tokens could apply, use this priority order:

1. **Component-specific tokens** (e.g., `border-destructive` for errors)
2. **Semantic tokens** (e.g., `text-foreground` for default text)
3. **Base tokens** (e.g., specific hex values as fallback)

### Dark Mode Pattern

All dark mode tokens should:
- Use the `dark:` prefix for Tailwind classes
- Be specified alongside light mode tokens in the same className
- Follow the exact hex values from the Figma design specifications
- Maintain proper contrast ratios for accessibility (WCAG AA minimum)

### Adding New Components

When adding new components to the design system:

1. Fetch design specifications from Figma using the MCP server
2. Document all tokens used in this file following the same format
3. Include Figma node-id reference and component file path
4. Provide token mappings for all variants and states
5. Test and verify against Figma designs

---

## Token Validation

To ensure your implementation matches the design:

1. **Visual Comparison**: Compare your component against Figma screenshots
2. **Token Audit**: Verify all properties use documented tokens
3. **Dark Mode Check**: Test appearance in both light and dark backgrounds
4. **Responsive Behavior**: Ensure spacing and sizing work across viewports
5. **State Testing**: Verify hover, focus, active, and disabled states

---

**Last Updated:** 2025-10-16
**Design System Version:** AfterDS 2.0
**Figma File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0)
