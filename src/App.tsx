
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OmMig from "./pages/OmMig";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";

// Original service pages
import MohenNatt from "./pages/services/MohenNatt";
import BrollopYoga from "./pages/services/BrollopYoga";
import FodelsedagYoga from "./pages/services/FodelsedagYoga";
import ForetagsYoga from "./pages/services/ForetagsYoga";
import Privatlektioner from "./pages/services/Privatlektioner";
import MiniRetreat from "./pages/services/MiniRetreat";
import SUPYoga from "./pages/services/SUPYoga";
import SUPYogaVillkor from "./pages/services/SUPYogaVillkor";
import AdventurePackage from "./pages/services/AdventurePackage";

// New service pages
import YogaForRunners from "./pages/services/YogaForRunners";
import YogaWorkshops from "./pages/services/YogaWorkshops";
import OnlineYoga from "./pages/services/OnlineYoga";
import YogaTurister from "./pages/services/YogaTurister";
import TrailRunYoga from "./pages/services/TrailRunYoga";
import HonsYoga from "./pages/services/HonsYoga";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Service Pages */}
          <Route path="/tjanster/mohippa-yoga" element={<MohenNatt />} />
          <Route path="/tjanster/brollopsyoga" element={<BrollopYoga />} />
          <Route path="/tjanster/fodelsedag-yoga" element={<FodelsedagYoga />} />
          <Route path="/tjanster/foretagsyoga" element={<ForetagsYoga />} />
          <Route path="/tjanster/privatlektioner" element={<Privatlektioner />} />
          <Route path="/tjanster/mini-retreat" element={<MiniRetreat />} />
          <Route path="/tjanster/sup-yoga" element={<SUPYoga />} />
          <Route path="/tjanster/sup-yoga/villkor" element={<SUPYogaVillkor />} />
          <Route path="/tjanster/adventure-paket" element={<AdventurePackage />} />
          <Route path="/tjanster/yoga-for-lopare" element={<YogaForRunners />} />
          <Route path="/tjanster/yoga-workshop" element={<YogaWorkshops />} />
          <Route path="/tjanster/online-yoga" element={<OnlineYoga />} />
          <Route path="/tjanster/yoga-dalarna-turister" element={<YogaTurister />} />
          <Route path="/tjanster/trail-run-yoga" element={<TrailRunYoga />} />
          <Route path="/tjanster/honsyoga" element={<HonsYoga />} />

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
