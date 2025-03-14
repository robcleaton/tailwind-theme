
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Always force GitHub Pages base path for production builds
  const repoName = 'tailwind-theme';
  const base = mode === 'production' ? `/${repoName}/` : '/';
  
  console.log('Building with base path:', base, 'Mode:', mode);
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    base, // This ensures all asset paths are prefixed correctly
    build: {
      cssCodeSplit: false, // Generate a single CSS file to avoid issues
      assetsInlineLimit: 0, // Don't inline any assets as base64
      outDir: 'dist',
      sourcemap: true, // Enable sourcemaps for debugging
    },
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
