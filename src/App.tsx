
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
import SUPYoga from "./pages/services/SUPYoga";
import SUPYogaKlasser from "./pages/services/SUPYogaKlasser";
import SUPYogaVillkor from "./pages/services/SUPYogaVillkor";
import HonsYoga from "./pages/services/HonsYoga";
import PrivataEvent from "./pages/services/PrivataEvent";
import UtomhusRetreatStockholm from "./pages/services/UtomhusRetreatStockholm";

const queryClient = new QueryClient();

function ScrollToTopOnNav() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Allow the page to render, then scroll to the hash target
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
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
          <Route path="/tjanster/sup-yoga" element={<SUPYoga />} />
          <Route path="/tjanster/sup-yoga-klasser" element={<SUPYogaKlasser />} />
          <Route path="/tjanster/sup-yoga/villkor" element={<SUPYogaVillkor />} />
          <Route path="/tjanster/honsyoga" element={<HonsYoga />} />
          <Route path="/tjanster/privata-event" element={<PrivataEvent />} />
          <Route path="/tjanster/utomhusretreat-stockholm" element={<UtomhusRetreatStockholm />} />

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
