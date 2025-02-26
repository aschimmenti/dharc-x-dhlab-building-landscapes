# DH Seminars Website

This repository contains the source code for the "Building Knowledge Landscapes Across the Digital Humanities" seminar website, showcasing the collaboration between DHLab (Amsterdam) and DH.ARC (Bologna).

## Overview

This website provides information about the Digital Humanities seminars taking place in Bologna, featuring:

- Keynote speeches and presentations from leading scholars
- Interactive workshops on digital humanities methodologies
- Multilingual support (English and Italian)
- Information about research centers and organizers

Built with Next.js and deployed via GitHub Pages.

## Project Structure

```
dh-seminars/
├── public/               # Static assets (images, etc.)
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── components/   # UI components
│   │   ├── data/         # Content data (seminarData.json)
│   │   ├── globals.css   # Global styles
│   │   ├── page.js       # Main page component
│   │   └── SeminarContent.js  # Main content handler (with language support)
├── .github/workflows/    # GitHub Actions workflows
├── next.config.mjs       # Next.js configuration
└── README.md
```

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dh-seminars.git
   cd dh-seminars
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the website**  
   Open http://localhost:3000 in your browser

## Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Requirements

1. **GitHub Repository**
   - Make sure your code is in a GitHub repository
   - You need admin access to the repository

2. **Configure GitHub Pages in Repository Settings**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **Update next.config.mjs (if needed)**
   - If deploying to a custom domain, no changes needed
   - If deploying to GitHub Pages (username.github.io/repo-name), uncomment and update the basePath:
     ```javascript
     basePath: '/your-repo-name',
     ```

### Automatic Deployment

The repository is configured with GitHub Actions workflows that automatically:
- Build the Next.js application as a static site
- Deploy it to GitHub Pages

The workflow runs whenever you:
- Push to the main branch
- Manually trigger the workflow from the Actions tab

#### Workflow Details

The deployment workflow:
1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Builds the Next.js site with static export
5. Uploads the built site
6. Deploys to GitHub Pages

You can view the deployment status in the Actions tab of your repository.

### Manual Deployment (if needed)

If you need to deploy manually:

1. **Build the site locally**
   ```bash
   npm run build
   ```

2. **Install gh-pages package (if not already installed)**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add a deploy script to package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Customizing Content

The website content is stored in `src/app/data/seminarData.json` and includes:
- English and Italian translations
- Event details, schedules, and descriptions
- Workshop information and speaker details

To update content, edit this file and commit your changes. The site will automatically rebuild and deploy.

## Troubleshooting

### Deployment Issues

If your deployment fails:
1. Check GitHub Actions logs
   - Go to the Actions tab in your repository
   - Click on the most recent workflow run
   - Examine the logs for error messages

#### Common Issues
- Permission errors: Ensure repository permissions are set correctly
- Build failures: Verify there are no coding errors by building locally first
- Deployment path issues: Check that basePath is configured correctly in next.config.mjs

#### Force a Clean Rebuild
- You can manually trigger a new build from the Actions tab

### Content Not Updating

If your content changes don't appear after deployment:
- Clear your browser cache
- Check if the build completed successfully
- Verify the JSON syntax is valid in your content files