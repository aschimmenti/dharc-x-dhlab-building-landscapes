/**
 * Get the correct path for images in both development and production
 * Using the static GitHub Pages URL for production
 */
export function getImagePath(path) {
  // Remove any leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is
  // In production, use the full GitHub Pages URL
  if (process.env.NODE_ENV === 'production') {
    // Replace with your actual GitHub Pages URL
    return `https://dharc-x-dhlab-seminars.github.io/${cleanPath}`;
  }
  
  // For local development
  return `/${cleanPath}`;
} 