/**
 * Utility function to get the correct image path for both development and production
 * Handles the basePath prefix needed for GitHub Pages deployment
 */
export function getImagePath(path) {
  // Extract repository name from package.json homepage or use a default
  // For dharc-x-dhlab-seminars.github.io, we don't need a basePath
  // For other repos, we need the repo name as basePath
  
  // Check if we're in production and if we need a basePath
  // If the site is deployed to username.github.io (no repo name in URL), no basePath is needed
  const isGitHubPages = process.env.NODE_ENV === 'production';
  
  // No basePath needed for custom domains or username.github.io sites
  // You can hardcode your repo name here if needed
  const basePath = isGitHubPages ? '' : '';
  
  // Ensure path starts with a slash and doesn't duplicate slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
} 