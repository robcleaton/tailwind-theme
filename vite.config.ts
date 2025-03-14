
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're building for GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  
  // Set repository name explicitly for GitHub Pages - this must match the repository name exactly
  const base = isGitHubPages ? '/tailwind-theme/' : '/';
  
  console.log('Building with base path:', base, 'Mode:', mode, 'GitHub Pages:', isGitHubPages);
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base, // This ensures all asset paths are prefixed with /tailwind-theme/ on GitHub Pages
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
