
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're on any Lovable app domain
  const isCustomDomain = process.env.VITE_CUSTOM_DOMAIN || 
                        process.env.VITE_PREVIEW_DOMAIN || 
                        process.env.NODE_ENV === 'development';
  
  console.log('Building with base path:', isCustomDomain ? '/' : '/tailwind-theme/');
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    // Dynamically set the base path - empty for custom domains, /tailwind-theme/ for GitHub Pages
    base: isCustomDomain ? '/' : "/tailwind-theme/",
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
