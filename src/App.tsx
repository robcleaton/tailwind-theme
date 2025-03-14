
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Check if we're on GitHub Pages (not a custom domain)
const hostname = window.location.hostname;
const isGitHubPages = hostname === 'robcleaton.github.io';

// Determine which router to use based on the hosting environment
// Use HashRouter for GitHub Pages to avoid 404 issues with client-side routing
// Use BrowserRouter for all other environments
const Router = isGitHubPages ? HashRouter : BrowserRouter;

// Only add basename for GitHub Pages if we're using BrowserRouter
const routerProps = isGitHubPages && Router === BrowserRouter ? { basename: "/tailwind-theme" } : {};

console.log('Hosting environment:', isGitHubPages ? 'GitHub Pages' : 'Custom domain');
console.log('Using router:', Router.name, 'with props:', JSON.stringify(routerProps));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router {...routerProps}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
