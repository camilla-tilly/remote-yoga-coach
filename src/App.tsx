
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OmMig from "./pages/OmMig";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";

import ForetagsYoga from "./pages/services/ForetagsYoga";
import Privatlektioner from "./pages/services/Privatlektioner";
import MiniRetreat from "./pages/services/MiniRetreat";
import SUPYoga from "./pages/services/SUPYoga";
import SUPYogaVillkor from "./pages/services/SUPYogaVillkor";
import HonsYoga from "./pages/services/HonsYoga";
import PrivataEvent from "./pages/services/PrivataEvent";

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
          <Route path="/tjanster/privatlektioner" element={<Privatlektioner />} />
          <Route path="/tjanster/mini-retreat" element={<MiniRetreat />} />
          <Route path="/tjanster/sup-yoga" element={<SUPYoga />} />
          <Route path="/tjanster/sup-yoga/villkor" element={<SUPYogaVillkor />} />
          <Route path="/tjanster/honsyoga" element={<HonsYoga />} />
          <Route path="/tjanster/yoga-dalarna-turister" element={<Navigate to="/tjanster/privatlektioner" replace />} />
          <Route path="/tjanster/privata-event" element={<PrivataEvent />} />
          <Route path="/tjanster/private-events" element={<PrivataEvent />} />

          {/* Redirects — old service pages merged into consolidated pages */}
          <Route path="/tjanster/mohippa-yoga" element={<Navigate to="/tjanster/privata-event" replace />} />
          <Route path="/tjanster/brollopsyoga" element={<Navigate to="/tjanster/privata-event" replace />} />
          <Route path="/tjanster/fodelsedag-yoga" element={<Navigate to="/tjanster/privata-event" replace />} />
          <Route path="/tjanster/yoga-workshop" element={<Navigate to="/tjanster/foretagsyoga" replace />} />
          <Route path="/tjanster/yoga-for-lopare" element={<Navigate to="/tjanster/privatlektioner" replace />} />
          <Route path="/tjanster/online-yoga" element={<Navigate to="/tjanster/privatlektioner" replace />} />
          <Route path="/tjanster/adventure-paket" element={<Navigate to="/tjanster/mini-retreat" replace />} />
          <Route path="/tjanster/trail-run-yoga" element={<Navigate to="/tjanster/mini-retreat" replace />} />

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
