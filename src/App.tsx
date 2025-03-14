
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// For custom domain, we want an empty base path
// For GitHub Pages, we need the repository name as the base path
const hostname = window.location.hostname;
const isCustomDomain = hostname === 'tailwind-theme.lovable.app' || 
                       hostname.includes('preview--tailwind-theme.lovable.app') ||
                       hostname.endsWith('.lovable.app');
const basename = isCustomDomain ? '/' : (import.meta.env.BASE_URL || "/tailwind-theme/");

console.log('Using basename:', basename, 'for hostname:', hostname);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
