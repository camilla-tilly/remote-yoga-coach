import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import TeamWellness from "./pages/services/TeamWellness";
import ChairYogaForTeams from "./pages/services/ChairYogaForTeams";
import MindfulnessAtWork from "./pages/guides/MindfulnessAtWork";
import RemoteWorkBurnout from "./pages/guides/RemoteWorkBurnout";
import DeskYoga from "./pages/guides/DeskYoga";
import CostOfBurnout from "./pages/guides/CostOfBurnout";

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

          {/* Services */}
          <Route path="/services/team-wellness" element={<TeamWellness />} />
          <Route path="/services/chair-yoga-for-teams" element={<ChairYogaForTeams />} />

          {/* Pillar guides */}
          <Route path="/guides/mindfulness-at-work" element={<MindfulnessAtWork />} />
          <Route path="/guides/remote-work-burnout" element={<RemoteWorkBurnout />} />
          <Route path="/guides/desk-yoga" element={<DeskYoga />} />
          <Route path="/guides/cost-of-employee-burnout" element={<CostOfBurnout />} />

          {/* Pricing & booking */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
