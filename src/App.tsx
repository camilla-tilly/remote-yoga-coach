
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OmMig from "./pages/OmMig";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";

import ForetagsYoga from "./pages/services/ForetagsYoga";
import ForetagsYogaEvent from "./pages/services/ForetagsYogaEvent";
import SUPYoga from "./pages/services/SupYoga";
import SUPYogaKlasser from "./pages/services/SUPYogaKlasser";
import SUPYogaVillkor from "./pages/services/SUPYogaVillkor";


const queryClient = new QueryClient();

function ScrollToTopOnNav() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // Second attempt after drawer close animation finishes on mobile
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    }
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Active Service Pages */}
          <Route path="/tjanster/foretagsyoga" element={<ForetagsYoga />} />
          <Route path="/tjanster/foretagsyoga-event" element={<ForetagsYogaEvent />} />
          <Route path="/tjanster/sup-yoga" element={<SUPYoga />} />
          <Route path="/tjanster/sup-yoga-klasser" element={<SUPYogaKlasser />} />
          <Route path="/tjanster/sup-yoga/villkor" element={<SUPYogaVillkor />} />


          {/* Note: 301 redirects for old service URLs are handled at the Netlify edge
              via public/_redirects. Do NOT add client-side <Navigate> for those paths —
              it creates a redirect chain that Google reports as "Redirect error". */}

          {/* About */}
          <Route path="/om-mig" element={<OmMig />} />

          {/* Blog */}
          <Route path="/blogg" element={<Blog />} />
          <Route path="/blogg/:slug" element={<BlogPostPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
