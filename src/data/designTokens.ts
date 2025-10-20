/**
 * Design Tokens Data Structure
 * Central source of truth for all design tokens in AfterDS 2.0
 */

export interface ColorToken {
  name: string;
  variable: string;
  light: string;
  dark: string;
  usage: string;
}

export interface SpacingToken {
  name: string;
  token: string;
  value: string;
  usage: string;
}

export interface TypographyToken {
  name: string;
  token: string;
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  usage: string;
}

export interface BorderRadiusToken {
  name: string;
  token: string;
  value: string;
  usage: string;
}

export interface ComponentToken {
  property: string;
  lightToken: string;
  lightValue: string;
  darkToken: string;
  darkValue: string;
}

export interface ComponentVariant {
  name: string;
  tokens: ComponentToken[];
}

export interface Component {
  name: string;
  nodeId: string;
  file: string;
  description: string;
  variants: ComponentVariant[];
}

// Color Tokens
export const colorTokens: ColorToken[] = [
  {
    name: 'Background',
    variable: '--background',
    light: '#fcfaf8',
    dark: '#181818',
    usage: 'Main background color'
  },
  {
    name: 'Foreground',
    variable: '--foreground',
    light: '#0c0a09',
    dark: '#fcfaf8',
    usage: 'Main text color'
  },
  {
    name: 'Primary',
    variable: '--primary',
    light: '#ff6b00',
    dark: '#ff6b00',
    usage: 'Primary action color (orange)'
  },
  {
    name: 'Primary Foreground',
    variable: '--primary-foreground',
    light: '#ffffff',
    dark: '#ffffff',
    usage: 'Text on primary color'
  },
  {
    name: 'Secondary',
    variable: '--secondary',
    light: '#ffe5cc',
    dark: '#331200',
    usage: 'Secondary background'
  },
  {
    name: 'Secondary Foreground',
    variable: '--secondary-foreground',
    light: '#ff6b00',
    dark: '#d4a574',
    usage: 'Text on secondary'
  },
  {
    name: 'Border',
    variable: '--border',
    light: '#e7e5e4',
    dark: '#353535',
    usage: 'Border color'
  },
  {
    name: 'Muted Foreground',
    variable: '--muted-foreground',
    light: '#78716c',
    dark: '#b3b3b3',
    usage: 'Muted/helper text'
  },
  {
    name: 'Destructive',
    variable: '--destructive',
    light: '#dc2626',
    dark: '#dc2626',
    usage: 'Error/destructive color'
  },
  {
    name: 'Success',
    variable: '--success',
    light: '#16a34a',
    dark: '#16a34a',
    usage: 'Success state color'
  }
];

// Spacing Tokens
export const spacingTokens: SpacingToken[] = [
  { name: 'None', token: 'gap-0', value: '0px', usage: 'No gap' },
  { name: 'XS', token: 'gap-1', value: '4px', usage: 'Extra small gap' },
  { name: 'Small', token: 'gap-2', value: '8px', usage: 'Small gap' },
  { name: 'Medium', token: 'gap-3', value: '12px', usage: 'Medium gap' },
  { name: 'Standard', token: 'gap-4', value: '16px', usage: 'Standard gap' },
  { name: 'Large', token: 'gap-6', value: '24px', usage: 'Large gap' },
  { name: 'XL', token: 'gap-8', value: '32px', usage: 'Extra large gap' },
  { name: 'Padding None', token: 'p-0', value: '0px', usage: 'No padding' },
  { name: 'Padding Small', token: 'p-2', value: '8px', usage: 'Small padding' },
  { name: 'Padding Standard', token: 'p-4', value: '16px', usage: 'Standard padding' },
  { name: 'Padding Horizontal', token: 'px-3', value: '12px', usage: 'Horizontal padding' },
  { name: 'Padding Vertical Small', token: 'py-2', value: '8px', usage: 'Vertical padding' },
  { name: 'Padding Vertical', token: 'py-4', value: '16px', usage: 'Vertical padding' }
];

// Typography Tokens
export const typographyTokens: TypographyToken[] = [
  {
    name: 'Extra Small',
    token: 'text-xs',
    family: 'Inter',
    size: '12px',
    weight: '600',
    lineHeight: '16px',
    usage: 'Badge text'
  },
  {
    name: 'Small',
    token: 'text-sm',
    family: 'Inter',
    size: '14px',
    weight: '400',
    lineHeight: '20px',
    usage: 'Helper text, small content'
  },
  {
    name: 'Small Medium',
    token: 'text-sm/medium',
    family: 'Inter',
    size: '14px',
    weight: '500',
    lineHeight: '20px',
    usage: 'Labels'
  },
  {
    name: 'Base',
    token: 'text-base',
    family: 'Inter',
    size: '16px',
    weight: '500',
    lineHeight: '24px',
    usage: 'Button text, headings'
  },
  {
    name: 'Base Normal',
    token: 'text-base/normal',
    family: 'Inter',
    size: '16px',
    weight: '400',
    lineHeight: '24px',
    usage: 'Body text'
  }
];

// Border Radius Tokens
export const borderRadiusTokens: BorderRadiusToken[] = [
  { name: 'Small', token: 'rounded-sm', value: '4px', usage: 'Subtle rounding' },
  { name: 'Medium', token: 'rounded-md', value: '6px', usage: 'Default components' },
  { name: 'Large', token: 'rounded-lg', value: '8px', usage: 'Larger components' },
  { name: 'XL', token: 'rounded-xl', value: '12px', usage: 'Large cards' },
  { name: '2XL', token: 'rounded-2xl', value: '16px', usage: 'Container backgrounds' },
  { name: 'Full', token: 'rounded-full', value: '9999px', usage: 'Pills/badges' }
];

// Component Token Mappings
export const components: Component[] = [
  {
    name: 'Button',
    nodeId: '2814-11937',
    file: 'src/components/Button/Button.tsx',
    description: 'Button component with multiple variants and states',
    variants: [
      {
        name: 'Primary',
        tokens: [
          { property: 'Background', lightToken: 'bg-primary', lightValue: '#ff6b00', darkToken: 'dark:bg-primary', darkValue: '#ff6b00' },
          { property: 'Background (Hover)', lightToken: 'hover:bg-[#e65100]', lightValue: '#e65100', darkToken: 'dark:hover:bg-[#d96200]', darkValue: '#d96200' },
          { property: 'Text', lightToken: 'text-primary-foreground', lightValue: '#ffffff', darkToken: 'dark:text-primary-foreground', darkValue: '#ffffff' },
          { property: 'Padding X', lightToken: 'px-4', lightValue: '16px', darkToken: 'px-4', darkValue: '16px' },
          { property: 'Padding Y', lightToken: 'py-2', lightValue: '8px', darkToken: 'py-2', darkValue: '8px' },
          { property: 'Border Radius', lightToken: 'rounded-md', lightValue: '6px', darkToken: 'rounded-md', darkValue: '6px' },
          { property: 'Font Size', lightToken: 'text-base', lightValue: '16px', darkToken: 'text-base', darkValue: '16px' },
          { property: 'Font Weight', lightToken: 'font-medium', lightValue: '500', darkToken: 'font-medium', darkValue: '500' }
        ]
      },
      {
        name: 'Secondary',
        tokens: [
          { property: 'Background', lightToken: 'bg-secondary', lightValue: '#ffe5cc', darkToken: 'dark:bg-[#3d2517]', darkValue: '#3d2517' },
          { property: 'Background (Hover)', lightToken: 'hover:bg-[#ffd399]', lightValue: '#ffd399', darkToken: 'dark:hover:bg-[#4d2f1c]', darkValue: '#4d2f1c' },
          { property: 'Text', lightToken: 'text-primary', lightValue: '#ff6b00', darkToken: 'dark:text-primary', darkValue: '#ff6b00' }
        ]
      },
      {
        name: 'Outline',
        tokens: [
          { property: 'Background', lightToken: 'bg-accent', lightValue: 'transparent', darkToken: 'dark:bg-transparent', darkValue: 'transparent' },
          { property: 'Border', lightToken: 'border-border', lightValue: '#e7e5e4', darkToken: 'dark:border-primary', darkValue: '#ff6b00' },
          { property: 'Text', lightToken: 'text-foreground', lightValue: '#0c0a09', darkToken: 'dark:text-primary', darkValue: '#ff6b00' }
        ]
      }
    ]
  },
  {
    name: 'Badge',
    nodeId: '2835-1370',
    file: 'src/components/Badge/Badge.tsx',
    description: 'Badge component for status indicators',
    variants: [
      {
        name: 'Default',
        tokens: [
          { property: 'Background', lightToken: 'bg-primary', lightValue: '#ff6b00', darkToken: 'dark:bg-primary', darkValue: '#ff6b00' },
          { property: 'Text', lightToken: 'text-primary-foreground', lightValue: '#ffffff', darkToken: 'dark:text-primary-foreground', darkValue: '#ffffff' },
          { property: 'Padding X', lightToken: 'px-2.5', lightValue: '10px', darkToken: 'px-2.5', darkValue: '10px' },
          { property: 'Padding Y', lightToken: 'py-0.5', lightValue: '2px', darkToken: 'py-0.5', darkValue: '2px' },
          { property: 'Font Size', lightToken: 'text-xs', lightValue: '12px', darkToken: 'text-xs', darkValue: '12px' },
          { property: 'Border Radius', lightToken: 'rounded-full', lightValue: '9999px', darkToken: 'rounded-full', darkValue: '9999px' }
        ]
      },
      {
        name: 'Secondary',
        tokens: [
          { property: 'Background', lightToken: 'bg-secondary', lightValue: '#ffe5cc', darkToken: 'dark:bg-[#331200]', darkValue: '#331200' },
          { property: 'Text', lightToken: 'text-secondary-foreground', lightValue: '#ff6b00', darkToken: 'dark:text-[#d4a574]', darkValue: '#d4a574' }
        ]
      }
    ]
  },
  {
    name: 'Input',
    nodeId: '2819-27274',
    file: 'src/components/Input/Input.tsx',
    description: 'Input field with validation states',
    variants: [
      {
        name: 'Default',
        tokens: [
          { property: 'Background', lightToken: 'bg-background', lightValue: '#fcfaf8', darkToken: 'dark:bg-[#1f1f1f]', darkValue: '#1f1f1f' },
          { property: 'Border', lightToken: 'border-input', lightValue: '#e7e5e4', darkToken: 'dark:border-[#353535]', darkValue: '#353535' },
          { property: 'Text', lightToken: 'text-foreground', lightValue: '#0c0a09', darkToken: 'dark:text-[#fcfaf8]', darkValue: '#fcfaf8' },
          { property: 'Height', lightToken: 'h-10', lightValue: '40px', darkToken: 'h-10', darkValue: '40px' },
          { property: 'Border Radius', lightToken: 'rounded-md', lightValue: '6px', darkToken: 'rounded-md', darkValue: '6px' }
        ]
      },
      {
        name: 'Error',
        tokens: [
          { property: 'Border', lightToken: 'border-destructive', lightValue: '#dc2626', darkToken: 'dark:border-destructive', darkValue: '#dc2626' },
          { property: 'Message', lightToken: 'text-destructive', lightValue: '#dc2626', darkToken: 'dark:text-destructive', darkValue: '#dc2626' }
        ]
      },
      {
        name: 'Success',
        tokens: [
          { property: 'Border', lightToken: 'border-success', lightValue: '#16a34a', darkToken: 'dark:border-success', darkValue: '#16a34a' },
          { property: 'Message', lightToken: 'text-success', lightValue: '#16a34a', darkToken: 'dark:text-success', darkValue: '#16a34a' }
        ]
      }
    ]
  }
];
