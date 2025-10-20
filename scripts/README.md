# AfterDS 2.0 - Documentation Scripts

This directory contains automation scripts for maintaining the AfterDS 2.0 design system documentation.

## Scripts

### `generate-token-docs.ts`

Automated token documentation generator that creates comprehensive component-specific token mapping documentation from Figma design specifications.

#### Usage

```bash
# Generate documentation and output to terminal
tsx scripts/generate-token-docs.ts

# Generate and save to file
tsx scripts/generate-token-docs.ts > DESIGN_TOKENS.md
```

#### What It Does

1. **Fetches design tokens** from the Figma design system
2. **Generates comprehensive documentation** for all components
3. **Creates token mapping tables** showing light/dark mode values
4. **Provides usage guidelines** for developers

#### Benefits

- ✅ **Single Source of Truth**: Keeps documentation in sync with Figma
- ✅ **Automated Updates**: Regenerate docs when design changes
- ✅ **Comprehensive**: Documents all variants and states
- ✅ **Developer-Friendly**: Easy-to-read tables and references
- ✅ **Version Controlled**: Track token changes over time

## Component Configuration

To add a new component to the documentation generator, add it to the `COMPONENTS` array in `generate-token-docs.ts`:

```typescript
{
  name: 'YourComponent',
  nodeId: '1234-5678',  // From Figma URL
  file: 'src/components/YourComponent/YourComponent.tsx',
  description: 'Brief description of the component'
}
```

## Token Structure

The generator uses this token structure:

```typescript
interface TokenMapping {
  property: string;        // CSS property name
  lightToken: string;      // Tailwind class for light mode
  lightValue: string;      // Hex/px value for light mode
  darkToken: string;       // Tailwind class for dark mode
  darkValue: string;       // Hex/px value for dark mode
}
```

## Global Tokens

Global design tokens are defined in the script and include:

- **Colors**: Primary, secondary, destructive, success, etc.
- **Spacing**: Gap, padding, margin values
- **Border Radius**: Rounded corners for different component sizes
- **Typography**: Font families, sizes, weights, line heights

## Figma Integration

The script is designed to integrate with Figma Dev Mode MCP server to fetch:

- Variable definitions (`get_variable_defs`)
- Component code (`get_code`)
- Component metadata (`get_metadata`)
- Screenshots for visual reference

### Example Figma Integration

```typescript
// Pseudo-code for Figma integration
const variables = await mcp.getVariableDefs({
  nodeId: '2814-11937',
  clientLanguages: 'typescript',
  clientFrameworks: 'react'
});

const code = await mcp.getCode({
  nodeId: '2814-11937',
  forceCode: true
});
```

## Maintaining Token Documentation

### When to Regenerate

Regenerate the documentation when:

1. Design tokens change in Figma
2. New components are added
3. Component variants are modified
4. Dark mode colors are updated
5. Spacing or typography scales change

### Documentation Workflow

1. **Update Figma** - Make design changes in Figma
2. **Run Generator** - Execute the script to regenerate docs
3. **Review Changes** - Check git diff for token updates
4. **Update Components** - Apply token changes to React components
5. **Commit** - Version control both docs and code changes

## Best Practices

### 1. Keep Tokens Centralized

All token definitions should be in one place:
- Figma variables for design
- Script configuration for documentation
- Tailwind config for implementation

### 2. Document All States

Include token mappings for:
- Default state
- Hover state
- Focus state
- Active state
- Disabled state
- Error state
- Success state

### 3. Include Context

For each token, document:
- What it controls (background, border, text, etc.)
- When to use it (variants, states)
- Both light and dark mode values
- Usage guidelines

### 4. Test Thoroughly

After regenerating documentation:
- ✅ Compare components against Figma
- ✅ Test in light and dark modes
- ✅ Verify all variants render correctly
- ✅ Check responsive behavior
- ✅ Validate accessibility (contrast ratios)

## Future Enhancements

Potential improvements for the generator:

1. **Automatic Figma Sync** - Fetch tokens directly from Figma API
2. **Component Screenshots** - Embed visual examples in docs
3. **Interactive Preview** - Generate HTML documentation with live examples
4. **Token Validation** - Compare code implementation against Figma
5. **Change Detection** - Highlight what changed between versions
6. **JSON Export** - Generate machine-readable token files
7. **TypeScript Types** - Auto-generate type definitions from tokens
8. **CSS Variables** - Export as CSS custom properties

## Example Output

The generator creates documentation like:

```markdown
## Button Component

**Figma Reference:** `node-id=2814-11937`
**Component File:** `src/components/Button/Button.tsx`

### Token Mapping - Primary Variant

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
| Background | `bg-primary` | `#ff6b00` | `dark:bg-primary` | `#ff6b00` |
| Text | `text-primary-foreground` | `#ffffff` | `dark:text-primary-foreground` | `#ffffff` |
```

## Contributing

When adding new features to the generator:

1. Update the TypeScript interfaces
2. Add new token categories to `GLOBAL_TOKENS`
3. Update table generation functions
4. Test with all existing components
5. Update this README with new capabilities

## Support

For questions or issues with the documentation generator:
- Check existing component implementations
- Review Figma design specifications
- Consult the main `DESIGN_TOKENS.md` documentation
- Refer to Tailwind CSS documentation for class mappings

---

**Maintained by:** AfterDS Team
**Last Updated:** 2025-10-16
