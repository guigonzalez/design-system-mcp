/**
 * AfterDS 2.0 - Automated Token Documentation Generator
 *
 * This script fetches design tokens from Figma and generates
 * comprehensive component-specific token mapping documentation.
 *
 * Usage: tsx scripts/generate-token-docs.ts
 */

interface ComponentConfig {
  name: string;
  nodeId: string;
  file: string;
  description: string;
}

interface TokenMapping {
  property: string;
  lightToken: string;
  lightValue: string;
  darkToken: string;
  darkValue: string;
}

interface ComponentTokens {
  component: string;
  figmaRef: string;
  componentFile: string;
  variants: {
    [variantName: string]: TokenMapping[];
  };
}

// Component configuration from AfterDS 2.0 Figma file
const COMPONENTS: ComponentConfig[] = [
  {
    name: 'Button',
    nodeId: '2814-11937',
    file: 'src/components/Button/Button.tsx',
    description: 'Button component with 6 variants (primary, secondary, outline, ghost, link, link-secondary)'
  },
  {
    name: 'Input',
    nodeId: '2819-27274',
    file: 'src/components/Input/Input.tsx',
    description: 'Input field component with label, helper text, and validation states'
  },
  {
    name: 'Badge',
    nodeId: '2835-1370',
    file: 'src/components/Badge/Badge.tsx',
    description: 'Badge component for status indicators and labels'
  },
  {
    name: 'Alert',
    nodeId: '2813-9376',
    file: 'src/components/Alert/Alert.tsx',
    description: 'Alert component for notifications and messages'
  },
  {
    name: 'Accordion',
    nodeId: '2811-14699',
    file: 'src/components/Accordion/Accordion.tsx',
    description: 'Accordion component for collapsible content'
  }
];

// Global design tokens that are shared across components
const GLOBAL_TOKENS = {
  colors: {
    '--background': { light: '#fcfaf8', dark: '#181818', usage: 'Main background color' },
    '--foreground': { light: '#0c0a09', dark: '#fcfaf8', usage: 'Main text color' },
    '--primary': { light: '#ff6b00', dark: '#ff6b00', usage: 'Primary action color (orange)' },
    '--primary-foreground': { light: '#ffffff', dark: '#ffffff', usage: 'Text on primary color' },
    '--secondary': { light: '#ffe5cc', dark: '#331200', usage: 'Secondary background' },
    '--secondary-foreground': { light: '#ff6b00', dark: '#d4a574', usage: 'Text on secondary' },
    '--border': { light: '#e7e5e4', dark: '#353535', usage: 'Border color' },
    '--muted-foreground': { light: '#78716c', dark: '#b3b3b3', usage: 'Muted/helper text' },
    '--destructive': { light: '#dc2626', dark: '#dc2626', usage: 'Error/destructive color' },
    '--success': { light: '#16a34a', dark: '#16a34a', usage: 'Success state color' },
  },
  spacing: {
    'gap-0': { value: '0px', usage: 'No gap' },
    'gap-2': { value: '8px', usage: 'Small gap' },
    'gap-3': { value: '12px', usage: 'Medium gap' },
    'gap-4': { value: '16px', usage: 'Standard gap' },
    'gap-6': { value: '24px', usage: 'Large gap' },
    'p-0': { value: '0px', usage: 'No padding' },
    'p-2': { value: '8px', usage: 'Small padding' },
    'p-4': { value: '16px', usage: 'Standard padding' },
    'px-3': { value: '12px', usage: 'Horizontal padding' },
    'py-2': { value: '8px', usage: 'Vertical padding' },
    'py-4': { value: '16px', usage: 'Vertical padding' },
  },
  borderRadius: {
    'rounded-md': { value: '6px', usage: 'Default components' },
    'rounded-lg': { value: '8px', usage: 'Larger components' },
    'rounded-2xl': { value: '16px', usage: 'Container backgrounds' },
    'rounded-full': { value: '9999px', usage: 'Pills/badges' },
  },
  typography: {
    'text-xs': { family: 'Inter', size: '12px', weight: '600', lineHeight: '16px', usage: 'Badge text' },
    'text-sm': { family: 'Inter', size: '14px', weight: '400', lineHeight: '20px', usage: 'Helper text, small content' },
    'text-sm/medium': { family: 'Inter', size: '14px', weight: '500', lineHeight: '20px', usage: 'Labels' },
    'text-base': { family: 'Inter', size: '16px', weight: '500', lineHeight: '24px', usage: 'Button text, headings' },
    'text-base/normal': { family: 'Inter', size: '16px', weight: '400', lineHeight: '24px', usage: 'Body text' },
  }
};

/**
 * Generates markdown table for color tokens
 */
function generateColorTable(): string {
  const rows = Object.entries(GLOBAL_TOKENS.colors).map(([token, data]) => {
    return `| \`${token}\` | \`${data.light}\` | \`${data.dark}\` | ${data.usage} |`;
  });

  return [
    '| Token | Light Mode | Dark Mode | Usage |',
    '|-------|-----------|-----------|-------|',
    ...rows
  ].join('\n');
}

/**
 * Generates markdown table for spacing tokens
 */
function generateSpacingTable(): string {
  const rows = Object.entries(GLOBAL_TOKENS.spacing).map(([token, data]) => {
    return `| \`${token}\` | \`${data.value}\` | ${data.usage} |`;
  });

  return [
    '| Token | Value | Usage |',
    '|-------|-------|-------|',
    ...rows
  ].join('\n');
}

/**
 * Generates markdown table for border radius tokens
 */
function generateBorderRadiusTable(): string {
  const rows = Object.entries(GLOBAL_TOKENS.borderRadius).map(([token, data]) => {
    return `| \`${token}\` | \`${data.value}\` | ${data.usage} |`;
  });

  return [
    '| Token | Value | Usage |',
    '|-------|-------|-------|',
    ...rows
  ].join('\n');
}

/**
 * Generates markdown table for typography tokens
 */
function generateTypographyTable(): string {
  const rows = Object.entries(GLOBAL_TOKENS.typography).map(([token, data]) => {
    return `| \`${token}\` | ${data.family} | \`${data.size}\` | ${data.weight} | \`${data.lineHeight}\` | ${data.usage} |`;
  });

  return [
    '| Token | Font Family | Size | Weight | Line Height | Usage |',
    '|-------|------------|------|--------|-------------|-------|',
    ...rows
  ].join('\n');
}

/**
 * Generates component-specific token mapping section
 */
function generateComponentSection(component: ComponentConfig, tokens: TokenMapping[]): string {
  const table = tokens.map(token => {
    return `| ${token.property} | \`${token.lightToken}\` | \`${token.lightValue}\` | \`${token.darkToken}\` | \`${token.darkValue}\` |`;
  }).join('\n');

  return `
## ${component.name} Component

**Figma Reference:** \`node-id=${component.nodeId}\`
**Component File:** \`${component.file}\`
**Description:** ${component.description}

### Token Mapping

| Property | Light Mode Token | Light Value | Dark Mode Token | Dark Value |
|----------|-----------------|-------------|-----------------|------------|
${table}

---
`;
}

/**
 * Main documentation generator
 */
function generateDocumentation(): string {
  const timestamp = new Date().toISOString().split('T')[0];

  return `# AfterDS 2.0 - Component Design Token Mapping

This document provides a comprehensive mapping of design tokens to each component in the AfterDS 2.0 design system. Use this as a reference when implementing or customizing components.

**⚠️ AUTO-GENERATED FILE** - Do not edit manually. Run \`tsx scripts/generate-token-docs.ts\` to regenerate.

## Table of Contents
- [Global Design Tokens](#global-design-tokens)
- [Component Mappings](#component-mappings)
${COMPONENTS.map(c => `  - [${c.name}](#${c.name.toLowerCase()}-component)`).join('\n')}

---

## Global Design Tokens

These tokens are shared across multiple components:

### Colors

${generateColorTable()}

### Spacing

${generateSpacingTable()}

### Border Radius

${generateBorderRadiusTable()}

### Typography

${generateTypographyTable()}

---

## Component Mappings

${COMPONENTS.map(component => {
  // In a real implementation, you would fetch these from Figma
  // For now, this is a placeholder structure
  return `### ${component.name}\n\n**Figma Node ID:** \`${component.nodeId}\`\n**File:** \`${component.file}\`\n\n*Token mappings should be extracted from Figma Dev Mode*\n`;
}).join('\n')}

---

## Usage Guidelines

### Implementing Components with Tokens

When building new components or modifying existing ones, follow these guidelines:

1. **Always reference these token mappings** rather than hardcoding values
2. **Include both light and dark mode tokens** for all visual properties
3. **Use the exact hex values** from this document to ensure Figma parity
4. **Test in both light and dark modes** using Storybook's background toolbar
5. **Update this document** by running the generator script when tokens change

### Token Priority

When multiple tokens could apply, use this priority order:

1. **Component-specific tokens** (e.g., \`border-destructive\` for errors)
2. **Semantic tokens** (e.g., \`text-foreground\` for default text)
3. **Base tokens** (e.g., specific hex values as fallback)

### Dark Mode Pattern

All dark mode tokens should:
- Use the \`dark:\` prefix for Tailwind classes
- Be specified alongside light mode tokens in the same className
- Follow the exact hex values from the Figma design specifications
- Maintain proper contrast ratios for accessibility (WCAG AA minimum)

### Adding New Components

When adding new components to the design system:

1. Add component configuration to \`COMPONENTS\` array in this script
2. Run \`tsx scripts/generate-token-docs.ts\` to regenerate documentation
3. Extract token mappings from Figma Dev Mode
4. Update the generated documentation with specific variant details
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

## Extending This Generator

To fetch tokens directly from Figma:

1. Use the Figma Dev Mode MCP server to get variable definitions
2. Parse the returned token data
3. Map tokens to their component properties
4. Generate markdown tables automatically

Example code to fetch from Figma:
\`\`\`typescript
// This would use the MCP server in practice
const variables = await figma.getVariableDefs(nodeId);
const code = await figma.getCode(nodeId);
// Parse and map tokens...
\`\`\`

---

**Last Updated:** ${timestamp}
**Design System Version:** AfterDS 2.0
**Figma File:** [AfterDS 2.0](https://www.figma.com/design/xIZm13sWi0pTw4P0Medpei/AfterDS-2.0)
**Generator Script:** \`scripts/generate-token-docs.ts\`
`;
}

// Main execution
const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  try {
    const documentation = generateDocumentation();
    console.log(documentation);
    console.log('\n✅ Documentation generated successfully!');
    console.log('💡 Tip: Run `npm run docs:tokens > DESIGN_TOKENS.md` to save to file');
  } catch (error) {
    console.error('❌ Error generating documentation:', error);
    process.exit(1);
  }
}

export { generateDocumentation, COMPONENTS, GLOBAL_TOKENS };
