# 🚀 GitHub Pages Deployment Guide

## 📋 Prerequisites

1. **GitHub Repository** - Your project must be on GitHub
2. **Node.js & npm** - For building the project
3. **Git** - For version control

## 🔧 Setup Instructions

### 1. Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### 2. Configure package.json

The following scripts have been added to your `package.json`:

```json
{
	"homepage": "https://ahmed-maher77.github.io/ProductHub___Modern-E-commerce-Product-Catalog",
	"scripts": {
		"predeploy": "npm run build",
		"deploy": "gh-pages -d dist"
	}
}
```

### 3. Configure Vite

The `vite.config.js` has been updated with:

```javascript
export default defineConfig({
	base: "/ProductHub___Modern-E-commerce-Product-Catalog/",
	// ... other config
});
```

## 🚀 Deployment Methods

### Method 1: Manual Deployment

```bash
# Build and deploy
npm run deploy
```

### Method 2: Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the Actions tab in your repository

## ⚙️ GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Set **Source** to **GitHub Actions**
5. Your site will be available at: `https://ahmed-maher77.github.io/ProductHub___Modern-E-commerce-Product-Catalog`

## 🔍 Troubleshooting

### Common Issues:

1. **404 Errors**: Make sure the `base` path in `vite.config.js` matches your repository name
2. **Assets not loading**: Check that all paths are relative to the base URL
3. **Build failures**: Ensure all dependencies are installed

### Build Commands:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📱 Custom Domain (Optional)

If you have a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure DNS settings with your domain provider
3. Add a `CNAME` file in the `public` folder with your domain

## 🔄 Continuous Deployment

The GitHub Actions workflow will automatically:

-   Build your project on every push to `main`
-   Deploy to GitHub Pages
-   Handle caching and optimization

## 📊 Performance Tips

-   The build is optimized with code splitting
-   Assets are cached for better performance
-   Source maps are disabled for production
-   Vendor chunks are separated for better caching

---

**Your ProductHub will be live at:** `https://ahmed-maher77.github.io/ProductHub___Modern-E-commerce-Product-Catalog`
