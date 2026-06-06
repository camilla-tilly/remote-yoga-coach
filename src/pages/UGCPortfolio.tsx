import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const UGCPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "beauty", label: "Beauty" },
    { id: "wellness", label: "Wellness" },
    { id: "outdoor", label: "Outdoor" },
    { id: "lifestyle", label: "Lifestyle" },
  ];

  const portfolioItems = [
    { id: 1, category: "beauty", span: "md:col-span-1 md:row-span-1", placeholder: "La Bruket product" },
    { id: 2, category: "beauty", span: "md:col-span-1 md:row-span-1", placeholder: "Skincare moment" },
    { id: 3, category: "wellness", span: "md:col-span-1 md:row-span-2", placeholder: "Lululemon yoga" },
    { id: 4, category: "wellness", span: "md:col-span-2 md:row-span-1", placeholder: "Viral yoga mat (TikTok)" },
    { id: 5, category: "wellness", span: "md:col-span-1 md:row-span-1", placeholder: "Wellness lifestyle" },
    { id: 6, category: "outdoor", span: "md:col-span-1 md:row-span-1", placeholder: "Sport gear" },
    { id: 7, category: "outdoor", span: "md:col-span-1 md:row-span-1", placeholder: "Hammock moment" },
    { id: 8, category: "lifestyle", span: "md:col-span-2 md:row-span-1", placeholder: "Home wellness" },
    { id: 9, category: "lifestyle", span: "md:col-span-1 md:row-span-1", placeholder: "Lifestyle moment" },
  ];

  const videoExamples = [
    { id: 1, label: "Product demo", category: "Skincare" },
    { id: 2, label: "Lifestyle", category: "Wellness" },
    { id: 3, label: "Beauty integration", category: "Beauty" },
    { id: 4, label: "Outdoor moment", category: "Sport" },
  ];

  const brands = [
    "La Bruket",
    "Iris Hantverk",
    "Buddha Stones",
    "Silverwind",
  ];

  const testimonials = [
    "Camilla creates content that feels effortlessly authentic. Her eye for detail transformed how we present our products.",
    "Working with Camilla was seamless. She understood our vision and delivered content that exceeded expectations.",
  ];

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="UGC Portfolio - Camilla"
        description="Authentic lifestyle and yoga UGC for Nordic brands. Organic, natural content creation."
        canonical="/ugc-portfolio"
      />
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Minimal Hero */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-4 text-dalashala-earth">
            UGC Portfolio
          </h1>
          <p className="text-lg text-dalashala-earth/80 max-w-2xl mx-auto mb-2">
            Organic lifestyle content for beauty, wellness, and outdoor brands
          </p>
          <p className="text-base text-dalashala-earth/70 max-w-2xl mx-auto">
            Never talking-head. Always authentic. Nordic aesthetic.
          </p>
        </section>

        {/* Masonry Portfolio Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === cat.id
                    ? "bg-dalashala-earth text-white"
                    : "bg-white border border-dalashala-earth/20 text-dalashala-earth hover:border-dalashala-earth/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`${item.span} bg-muted rounded-2xl overflow-hidden flex items-center justify-center border border-dalashala-earth/10 hover:border-dalashala-earth/30 transition-all hover:shadow-sm cursor-pointer group`}
              >
                <div className="text-center px-4">
                  <p className="text-sm text-dalashala-earth/70 font-medium mb-1">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-base font-medium text-dalashala-earth">
                    {item.placeholder}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <h2 className="text-2xl font-cormorant font-semibold mb-10 text-dalashala-earth">
            Video Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {videoExamples.map((video) => (
              <div
                key={video.id}
                className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-dalashala-earth/10 hover:border-dalashala-earth/30 transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-black/5 transition-colors">
                  <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition-colors">
                    <span className="text-dalashala-earth text-xl">▶</span>
                  </div>
                  <p className="text-xs text-dalashala-earth/60 font-medium mb-1">{video.category}</p>
                  <p className="text-sm font-medium text-dalashala-earth">{video.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <h2 className="text-2xl font-cormorant font-semibold mb-10 text-dalashala-earth">
            Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-dalashala-earth/15 rounded-xl px-6 py-8 text-center hover:border-dalashala-earth/30 transition-all flex items-center justify-center min-h-[120px]"
              >
                <p className="font-medium text-dalashala-earth text-sm">{brand}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <h2 className="text-2xl font-cormorant font-semibold mb-10 text-dalashala-earth">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((quote, idx) => (
              <div
                key={idx}
                className="bg-white border border-dalashala-earth/15 rounded-xl p-8 hover:border-dalashala-earth/30 transition-all"
              >
                <p className="text-dalashala-earth/85 leading-relaxed text-sm">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Simple CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
          <div className="bg-eucalyptus text-white rounded-2xl px-8 py-16 text-center">
            <h2 className="text-3xl font-cormorant font-semibold mb-4">
              Let's Work Together
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Have a brief or want creative freedom? Let's chat about your brand.
            </p>
            <a
              href="mailto:hello@yogawithcamilla.se"
              className="inline-block px-6 py-3 bg-white text-eucalyptus font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Email Me
            </a>
            <p className="text-white/70 text-sm mt-6">Stockholm, Sweden</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UGCPortfolio;
