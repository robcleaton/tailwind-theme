
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Force GitHub Pages base path for production builds
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || mode === 'production';
  
  // Always use the repository name as the base path for GitHub Pages
  // This must match your GitHub repository name exactly
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
