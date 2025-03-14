
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're building for GitHub Pages
  const isGitHubPages = !process.env.VITE_CUSTOM_DOMAIN && 
                       !process.env.VITE_PREVIEW_DOMAIN && 
                       process.env.NODE_ENV !== 'development';
  
  const base = isGitHubPages ? '/tailwind-theme/' : '/';
  
  console.log('Building with base path:', base, 'for env:', 
    process.env.NODE_ENV, 
    'Custom domain:', !!process.env.VITE_CUSTOM_DOMAIN,
    'Preview domain:', !!process.env.VITE_PREVIEW_DOMAIN);
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base,
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
