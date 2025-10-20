import { useState } from 'react';
import { Badge } from '../components/Badge';
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  borderRadiusTokens,
  components,
  type ColorToken,
  type SpacingToken,
  type TypographyToken,
  type BorderRadiusToken,
  type Component
} from '../data/designTokens';

interface DesignTokensProps {
  isDarkMode: boolean;
}

const DesignTokens: React.FC<DesignTokensProps> = ({ isDarkMode }) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const ColorSwatch: React.FC<{ token: ColorToken }> = ({ token }) => {
    const color = isDarkMode ? token.dark : token.light;
    return (
      <div className="flex items-start gap-4 p-4 bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] transition-colors duration-200">
        <div
          className="w-16 h-16 rounded-lg border border-border dark:border-[#353535] shrink-0 shadow-sm"
          style={{ backgroundColor: color }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-base text-foreground dark:text-[#fcfaf8] mb-1">
            {token.name}
          </h4>
          <div className="space-y-1">
            <button
              onClick={() => copyToClipboard(token.variable)}
              className="flex items-center gap-2 text-sm text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
            >
              <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-0.5 rounded text-xs">
                {token.variable}
              </code>
              {copiedToken === token.variable && (
                <span className="text-xs text-success">Copied!</span>
              )}
            </button>
            <button
              onClick={() => copyToClipboard(color)}
              className="flex items-center gap-2 text-sm text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
            >
              <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-0.5 rounded text-xs font-mono">
                {color}
              </code>
              {copiedToken === color && (
                <span className="text-xs text-success">Copied!</span>
              )}
            </button>
          </div>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3] mt-2">
            {token.usage}
          </p>
        </div>
      </div>
    );
  };

  const SpacingExample: React.FC<{ token: SpacingToken }> = ({ token }) => {
    const numericValue = parseInt(token.value);
    return (
      <div className="p-4 bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] transition-colors duration-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-sm text-foreground dark:text-[#fcfaf8]">
            {token.name}
          </h4>
          <button
            onClick={() => copyToClipboard(token.token)}
            className="text-xs text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
          >
            <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-0.5 rounded">
              {token.token}
            </code>
            {copiedToken === token.token && (
              <span className="ml-2 text-success">✓</span>
            )}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="bg-primary dark:bg-primary h-8"
            style={{ width: `${numericValue}px` }}
          />
          <span className="text-sm font-mono text-muted-foreground dark:text-[#b3b3b3]">
            {token.value}
          </span>
        </div>
        <p className="text-xs text-muted-foreground dark:text-[#b3b3b3] mt-2">
          {token.usage}
        </p>
      </div>
    );
  };

  const TypographyExample: React.FC<{ token: TypographyToken }> = ({ token }) => {
    return (
      <div className="p-4 bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] transition-colors duration-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-sm text-foreground dark:text-[#fcfaf8]">
            {token.name}
          </h4>
          <button
            onClick={() => copyToClipboard(token.token)}
            className="text-xs text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
          >
            <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-0.5 rounded">
              {token.token}
            </code>
            {copiedToken === token.token && (
              <span className="ml-2 text-success">✓</span>
            )}
          </button>
        </div>
        <p
          className="text-foreground dark:text-[#fcfaf8] mb-3"
          style={{
            fontFamily: token.family,
            fontSize: token.size,
            fontWeight: token.weight,
            lineHeight: token.lineHeight
          }}
        >
          The quick brown fox jumps over the lazy dog
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground dark:text-[#b3b3b3]">
          <span>Size: {token.size}</span>
          <span>Weight: {token.weight}</span>
          <span>Line: {token.lineHeight}</span>
        </div>
        <p className="text-xs text-muted-foreground dark:text-[#b3b3b3] mt-2">
          {token.usage}
        </p>
      </div>
    );
  };

  const BorderRadiusExample: React.FC<{ token: BorderRadiusToken }> = ({ token }) => {
    return (
      <div className="p-4 bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] transition-colors duration-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-sm text-foreground dark:text-[#fcfaf8]">
            {token.name}
          </h4>
          <button
            onClick={() => copyToClipboard(token.token)}
            className="text-xs text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
          >
            <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-0.5 rounded">
              {token.token}
            </code>
            {copiedToken === token.token && (
              <span className="ml-2 text-success">✓</span>
            )}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 bg-primary dark:bg-primary"
            style={{ borderRadius: token.value }}
          />
          <span className="text-sm font-mono text-muted-foreground dark:text-[#b3b3b3]">
            {token.value}
          </span>
        </div>
        <p className="text-xs text-muted-foreground dark:text-[#b3b3b3] mt-2">
          {token.usage}
        </p>
      </div>
    );
  };

  const ComponentTokenTable: React.FC<{ component: Component }> = ({ component }) => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const variant = component.variants[selectedVariant];

    return (
      <div className="bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] overflow-hidden transition-colors duration-200">
        <div className="p-6 border-b border-border dark:border-[#353535]">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground dark:text-[#fcfaf8]">
              {component.name}
            </h3>
            <Badge variant="outline" rounded={false}>
              <code className="text-xs">{component.nodeId}</code>
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3] mb-3">
            {component.description}
          </p>
          <code className="text-xs text-muted-foreground dark:text-[#b3b3b3] bg-muted/30 dark:bg-[#2a2a2a] px-2 py-1 rounded">
            {component.file}
          </code>
        </div>

        {/* Variant Tabs */}
        <div className="flex gap-2 px-6 pt-4 border-b border-border dark:border-[#353535]">
          {component.variants.map((v, index) => (
            <button
              key={v.name}
              onClick={() => setSelectedVariant(index)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                selectedVariant === index
                  ? 'bg-muted/30 dark:bg-[#2a2a2a] text-primary border-b-2 border-primary'
                  : 'text-muted-foreground dark:text-[#b3b3b3] hover:text-foreground dark:hover:text-[#fcfaf8]'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* Token Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border dark:border-[#353535] bg-muted/20 dark:bg-[#181818]">
                <th className="text-left p-4 text-sm font-semibold text-foreground dark:text-[#fcfaf8]">
                  Property
                </th>
                <th className="text-left p-4 text-sm font-semibold text-foreground dark:text-[#fcfaf8]">
                  Light Mode
                </th>
                <th className="text-left p-4 text-sm font-semibold text-foreground dark:text-[#fcfaf8]">
                  Dark Mode
                </th>
              </tr>
            </thead>
            <tbody>
              {variant.tokens.map((token, index) => (
                <tr
                  key={index}
                  className="border-b border-border dark:border-[#353535] hover:bg-muted/10 dark:hover:bg-[#2a2a2a] transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-foreground dark:text-[#fcfaf8]">
                    {token.property}
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <button
                        onClick={() => copyToClipboard(token.lightToken)}
                        className="block text-xs text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
                      >
                        <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-1 rounded">
                          {token.lightToken}
                        </code>
                        {copiedToken === token.lightToken && (
                          <span className="ml-2 text-success">✓</span>
                        )}
                      </button>
                      <span className="block text-xs font-mono text-muted-foreground dark:text-[#b3b3b3]">
                        {token.lightValue}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <button
                        onClick={() => copyToClipboard(token.darkToken)}
                        className="block text-xs text-muted-foreground dark:text-[#b3b3b3] hover:text-primary transition-colors"
                      >
                        <code className="bg-muted/30 dark:bg-[#2a2a2a] px-2 py-1 rounded">
                          {token.darkToken}
                        </code>
                        {copiedToken === token.darkToken && (
                          <span className="ml-2 text-success">✓</span>
                        )}
                      </button>
                      <span className="block text-xs font-mono text-muted-foreground dark:text-[#b3b3b3]">
                        {token.darkValue}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground dark:text-[#fcfaf8] mb-3">
          Design Tokens
        </h1>
        <p className="text-lg text-muted-foreground dark:text-[#b3b3b3]">
          Visual reference for all design tokens in AfterDS 2.0. Click any token to copy to clipboard.
        </p>
      </div>

      {/* Colors Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
            Color Tokens
          </h2>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3]">
            Core color palette with light and dark mode values
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colorTokens.map((token) => (
            <ColorSwatch key={token.variable} token={token} />
          ))}
        </div>
      </section>

      {/* Spacing Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
            Spacing Tokens
          </h2>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3]">
            Consistent spacing scale for gaps, padding, and margins
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spacingTokens.map((token) => (
            <SpacingExample key={token.token} token={token} />
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
            Typography Tokens
          </h2>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3]">
            Type scale with size, weight, and line height combinations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {typographyTokens.map((token) => (
            <TypographyExample key={token.token} token={token} />
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
            Border Radius Tokens
          </h2>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3]">
            Rounded corner scale for different component sizes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {borderRadiusTokens.map((token) => (
            <BorderRadiusExample key={token.token} token={token} />
          ))}
        </div>
      </section>

      {/* Component Tokens Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
            Component Token Mappings
          </h2>
          <p className="text-sm text-muted-foreground dark:text-[#b3b3b3]">
            Detailed token mappings for each component variant
          </p>
        </div>
        <div className="space-y-6">
          {components.map((component) => (
            <ComponentTokenTable key={component.name} component={component} />
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="bg-white dark:bg-[#1f1f1f] rounded-lg border border-border dark:border-[#353535] p-8 transition-colors duration-200">
        <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-4">
          Usage Guidelines
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground dark:text-[#b3b3b3]">
          <div>
            <h3 className="font-semibold text-foreground dark:text-[#fcfaf8] mb-2">
              1. Always use design tokens
            </h3>
            <p>
              Reference these tokens instead of hardcoding values to maintain consistency across the design system.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground dark:text-[#fcfaf8] mb-2">
              2. Include both light and dark modes
            </h3>
            <p>
              Always specify dark mode variants using the <code className="bg-muted/30 dark:bg-[#2a2a2a] px-1 py-0.5 rounded">dark:</code> prefix for proper theme support.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground dark:text-[#fcfaf8] mb-2">
              3. Test in both themes
            </h3>
            <p>
              Verify components appear correctly in both light and dark modes before shipping.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground dark:text-[#fcfaf8] mb-2">
              4. Copy tokens, not values
            </h3>
            <p>
              Click to copy the Tailwind class names, not the hex values, to maintain the design token reference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignTokens;
