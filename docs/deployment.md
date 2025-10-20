# Deployment Guide

This guide covers the deployment process for AfterDS 2.0 to GitHub Pages.

## Live Sites

- **Main Application**: [https://guigonzalez.github.io/design-system-mcp/](https://guigonzalez.github.io/design-system-mcp/)
- **Storybook**: [https://guigonzalez.github.io/design-system-mcp/storybook/](https://guigonzalez.github.io/design-system-mcp/storybook/)

## Overview

AfterDS 2.0 uses GitHub Actions for continuous deployment to GitHub Pages. Every push to the `main` branch automatically triggers a build and deployment workflow.

## Deployment Architecture

```
┌─────────────────┐
│   Push to Main  │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ GitHub Actions  │
│   Workflow      │
└────────┬────────┘
         │
    ┌────┴────┐
    ↓         ↓
┌───────┐ ┌──────────┐
│ Build │ │  Build   │
│  App  │ │Storybook │
└───┬───┘ └────┬─────┘
    │          │
    └────┬─────┘
         ↓
┌─────────────────┐
│ Organize Output │
│   /public/      │
│   /storybook/   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Deploy to      │
│ GitHub Pages    │
└─────────────────┘
```

## GitHub Actions Workflow

The deployment workflow is defined in `.github/workflows/deploy.yml`:

### Workflow Configuration

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false
```

### Build Job

The workflow consists of two jobs: `build` and `deploy`.

#### Build Steps

1. **Checkout**: Clones the repository
2. **Setup Node**: Installs Node.js 20
3. **Install Dependencies**: Runs `npm ci` for clean install
4. **Build Main App**: Runs `npm run build`
5. **Build Storybook**: Runs `npm run build-storybook`
6. **Organize Outputs**:
   - Copies `dist/*` to `public/`
   - Copies `storybook-static/*` to `public/storybook/`
7. **Upload Artifact**: Prepares files for deployment

#### Deploy Steps

1. **Deploy to GitHub Pages**: Uses `actions/deploy-pages@v4`
2. **Output URL**: Provides the deployed site URL

## Project Configuration

### Vite Configuration

The Vite configuration in `vite.config.ts` sets the base path for GitHub Pages:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/design-system-mcp/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Key Points:**
- `base: '/design-system-mcp/'` ensures all assets are loaded from the correct subdirectory
- This matches the GitHub repository name

### Storybook Configuration

The Storybook configuration in `.storybook/main.cjs` uses CommonJS format for better compatibility:

```javascript
const path = require('path');

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // ... other config
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    // Set base path for GitHub Pages
    config.base = '/design-system-mcp/storybook/';
    return config;
  },
};

module.exports = config;
```

**Key Points:**
- Uses `.cjs` extension for CommonJS module
- Sets `config.base` to include the `/storybook/` subdirectory
- Ensures Storybook assets are loaded correctly

## Dependencies

### Version Requirements

The project uses specific versions to ensure compatibility:

- **Vite**: `^6.0.0` (downgraded from 7.x for Storybook compatibility)
- **Storybook**: `^8.3.5` (requires Vite ^4.0.0 || ^5.0.0 || ^6.0.0)
- **Node.js**: `20` (specified in GitHub Actions)

### Why Vite 6?

Storybook 8.3.5's `@storybook/react-vite` requires Vite versions 4.x, 5.x, or 6.x. Vite 7.x is not yet supported, so we use Vite 6.x to maintain compatibility.

## Manual Deployment

While automatic deployment is configured, you can manually trigger a deployment:

### Option 1: Push to Main

```bash
git push origin main
```

This automatically triggers the deployment workflow.

### Option 2: Manual Workflow Dispatch

1. Go to the [Actions tab](https://github.com/guigonzalez/design-system-mcp/actions)
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow"

### Option 3: Local Build & Manual Deploy

```bash
# Build both apps
npm run build
npm run build-storybook

# Organize files
mkdir -p public
cp -r dist/* public/
mkdir -p public/storybook
cp -r storybook-static/* public/storybook/

# (Manual upload to hosting service)
```

## Troubleshooting

### Common Issues

#### 1. Build Fails with Module Errors

**Issue**: `ReferenceError: require is not defined in ES module scope`

**Solution**: Ensure `.storybook/main.cjs` uses CommonJS format:
- File extension must be `.cjs`
- Use `require()` instead of `import`
- Use `module.exports` instead of `export default`

#### 2. Dependency Version Conflicts

**Issue**: `npm ci` fails with peer dependency errors

**Solution**: Check Vite version compatibility:
```bash
npm install vite@^6.0.0
npm install
```

#### 3. Assets Not Loading (404 errors)

**Issue**: Main app loads but images/CSS return 404

**Solution**: Verify base path in `vite.config.ts`:
```typescript
base: '/design-system-mcp/'  // Must match repo name
```

#### 4. Storybook Blank Page

**Issue**: Storybook deploys but shows blank page

**Solution**: Check Storybook base path in `.storybook/main.cjs`:
```javascript
config.base = '/design-system-mcp/storybook/'
```

#### 5. GitHub Pages Not Enabled

**Issue**: Workflow succeeds but site not accessible

**Solution**: Enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages section
3. Under "Build and deployment"
4. Set Source to "GitHub Actions"

## Monitoring Deployments

### GitHub Actions

Monitor deployment status at:
[https://github.com/guigonzalez/design-system-mcp/actions](https://github.com/guigonzalez/design-system-mcp/actions)

### Deployment Times

- **Build time**: ~2-3 minutes
- **Deployment time**: ~30 seconds
- **Total time**: ~3-4 minutes

### Build Logs

To view detailed build logs:
1. Go to Actions tab
2. Click on the latest workflow run
3. Expand job steps to see detailed output

## Environment Variables

Currently, no environment variables are required for deployment. All configuration is done through:

- `vite.config.ts` - Vite configuration
- `.storybook/main.cjs` - Storybook configuration
- `.github/workflows/deploy.yml` - Deployment workflow

## Security

### Permissions

The workflow requires these permissions:
- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for deployment

### Secrets

No secrets are required for deployment. GitHub automatically provides:
- `GITHUB_TOKEN` - Authentication token
- Repository context variables

## Best Practices

### Before Pushing

1. **Test locally**:
   ```bash
   npm run build
   npm run build-storybook
   ```

2. **Check for errors**: Ensure both builds complete without errors

3. **Test built files**:
   ```bash
   npm run preview  # Test Vite build
   npx http-server storybook-static  # Test Storybook build
   ```

### After Deployment

1. **Verify main app**: Check that all pages load correctly
2. **Verify Storybook**: Ensure all stories render
3. **Test navigation**: Check that internal links work
4. **Check assets**: Verify images, fonts, and styles load
5. **Test dark mode**: Ensure theme switching works

### Rollback Strategy

If a deployment breaks the site:

1. **Quick rollback**: Revert the problematic commit
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

2. **Alternative**: Redeploy previous working version
   ```bash
   git reset --hard <working-commit>
   git push origin main --force
   ```

**Note**: Force push requires appropriate permissions and should be used carefully.

## Future Improvements

### Planned Enhancements

1. **Preview Deployments**: Deploy PR previews to unique URLs
2. **Performance Monitoring**: Add Lighthouse CI checks
3. **Visual Regression Testing**: Compare screenshots before/after
4. **Deployment Notifications**: Slack/Discord notifications on deploy
5. **Cache Optimization**: Cache node_modules between runs
6. **Multi-Environment**: Add staging and production environments

### Progressive Web App (PWA)

Consider adding PWA features:
- Service worker for offline support
- Web app manifest
- Install prompts
- Push notifications (optional)

## Support

For deployment issues:

1. Check [GitHub Actions logs](https://github.com/guigonzalez/design-system-mcp/actions)
2. Review this documentation
3. Open an issue on GitHub
4. Contact the maintainers

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Storybook Deployment Guide](https://storybook.js.org/docs/react/sharing/publish-storybook)

---

**Last Updated**: 2025-10-20
**Workflow Version**: 1.0
**Maintainer**: AfterDS Team
