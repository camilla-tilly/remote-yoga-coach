import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const UGCPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All work" },
    { id: "beauty", label: "Beauty & Skincare" },
    { id: "wellness", label: "Wellness & Yoga" },
    { id: "outdoor", label: "Outdoor & Sport" },
    { id: "lifestyle", label: "Lifestyle & Home" },
  ];

  const portfolioItems = [
    // Beauty & Skincare
    {
      id: 1,
      category: "beauty",
      type: "image",
      alt: "La Bruket skincare product styling",
      placeholder: "Beauty product flat lay - La Bruket",
    },
    {
      id: 2,
      category: "beauty",
      type: "image",
      alt: "Product integration - skincare in natural light",
      placeholder: "Skincare product in use",
    },
    // Wellness & Yoga
    {
      id: 3,
      category: "wellness",
      type: "image",
      alt: "Lululemon yoga pants in practice",
      placeholder: "Yoga apparel - Lululemon",
    },
    {
      id: 4,
      category: "wellness",
      type: "image",
      alt: "Yoga mat high-engagement content",
      placeholder: "Yoga mat (viral TikTok - high engagement)",
    },
    {
      id: 5,
      category: "wellness",
      type: "image",
      alt: "Yoga lifestyle content",
      placeholder: "Wellness lifestyle moment",
    },
    // Outdoor & Sport
    {
      id: 6,
      category: "outdoor",
      type: "image",
      alt: "Running gear and outdoor equipment",
      placeholder: "Outdoor sport gear flat lay",
    },
    {
      id: 7,
      category: "outdoor",
      type: "image",
      alt: "Outdoor lifestyle integration",
      placeholder: "Outdoor living - hammock",
    },
    // Lifestyle & Home
    {
      id: 8,
      category: "lifestyle",
      type: "image",
      alt: "Iris Hantverk dry brush lifestyle",
      placeholder: "Home wellness product",
    },
    {
      id: 8,
      category: "lifestyle",
      type: "image",
      alt: "Nordic home styling",
      placeholder: "Lifestyle home moment",
    },
    // Add more items as needed
  ];

  const videoExamples = [
    {
      id: 1,
      title: "Product Integration",
      category: "Skincare",
      placeholder: "Video placeholder - product demo",
    },
    {
      id: 2,
      title: "Lifestyle Moment",
      category: "Wellness",
      placeholder: "Video placeholder - lifestyle integration",
    },
    {
      id: 3,
      title: "Natural Styling",
      category: "Beauty",
      placeholder: "Video placeholder - beauty product",
    },
    {
      id: 4,
      title: "Outdoor Integration",
      category: "Sport",
      placeholder: "Video placeholder - outdoor gear",
    },
  ];

  const workflow = [
    {
      step: 1,
      title: "Brief & Consultation",
      description: "We discuss your brand, goals, product, and vision. Some clients have a specific brief; others prefer creative freedom.",
    },
    {
      step: 2,
      title: "Concept & Styling",
      description: "I develop the concept, mood, and styling aligned with your brand and my Nordic aesthetic.",
    },
    {
      step: 3,
      title: "Filming & Editing",
      description: "Content is filmed and edited to your specifications. I focus on authentic, natural integration.",
    },
    {
      step: 4,
      title: "Revisions",
      description: "One round of adjustments if needed to ensure you're completely happy.",
    },
    {
      step: 5,
      title: "Final Delivery",
      description: "Ready-to-use content delivered across your channels.",
    },
  ];

  const testimonials = [
    {
      quote: "Camilla creates content that feels effortlessly authentic. Her styling and eye for detail transformed how we present our products.",
      author: "Brand Partner",
    },
    {
      quote: "Working with Camilla was seamless. She understood our vision immediately and delivered content that exceeded expectations.",
      author: "Brand Client",
    },
  ];

  const brands = [
    { name: "La Bruket" },
    { name: "Iris Hantverk" },
    { name: "Yoga Brand 1" },
    { name: "Yoga Brand 2" },
  ];

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="UGC Portfolio - Camilla"
        description="Authentic lifestyle and yoga content for beauty, wellness, and outdoor brands. Nordic nature aesthetic."
        canonical="/ugc-portfolio"
      />
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-cormorant font-semibold mb-6 text-dalashala-earth leading-tight">
                Authentic UGC for Nordic Brands
              </h1>
              <p className="text-lg mb-4 text-dalashala-earth/90">
                Hi, I'm Camilla. I create organic, lifestyle-focused content that integrates your products naturally into real moments.
              </p>
              <p className="text-lg mb-8 text-dalashala-earth/90">
                My style: never talking-head, always authentic. Whether you have a specific brief or want creative freedom, I bring a Nordic aesthetic and genuine connection to everything I create.
              </p>
              <ul className="space-y-3 mb-8 text-dalashala-earth/85">
                <li className="flex items-start gap-3">
                  <span className="text-eucalyptus mt-1">✓</span>
                  <span>Organic, natural product integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-eucalyptus mt-1">✓</span>
                  <span>Nordic nature aesthetic and styling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-eucalyptus mt-1">✓</span>
                  <span>Both directed briefs and creative freedom</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-muted-foreground">Profile photo placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">(Camilla photo here)</p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Create */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-16 text-dalashala-earth text-center">
              What I Create
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.slice(1).map((cat) => (
                <div key={cat.id} className="bg-white rounded-lg overflow-hidden border border-border hover:border-eucalyptus transition-colors">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">Image placeholder<br/>{cat.label}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-cormorant font-semibold mb-2 text-dalashala-earth">
                      {cat.label}
                    </h3>
                    <p className="text-dalashala-earth/80 text-sm">
                      {cat.id === "beauty" && "Skincare routines, product integrations, and aesthetic flat lays that feel naturally curated."}
                      {cat.id === "wellness" && "Yoga apparel, wellness products, and lifestyle moments that inspire mindful living."}
                      {cat.id === "outdoor" && "Outdoor gear, sport equipment, and adventure moments in the Nordic forest."}
                      {cat.id === "lifestyle" && "Home styling, daily rituals, and mindful living moments integrated with beautiful products."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-12 text-dalashala-earth text-center">
              Featured Work
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === cat.id
                      ? "bg-eucalyptus text-white"
                      : "bg-muted text-dalashala-earth hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-muted rounded-lg overflow-hidden border border-border hover:border-eucalyptus transition-colors h-64"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">
                      {item.placeholder}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-16 text-dalashala-earth text-center">
              Video Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoExamples.map((video) => (
                <div key={video.id} className="bg-white rounded-lg overflow-hidden border border-border">
                  <div className="bg-muted h-64 flex items-center justify-center relative">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">{video.placeholder}</p>
                      <div className="w-16 h-16 bg-eucalyptus/20 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-eucalyptus text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-eucalyptus font-medium mb-1">{video.category}</p>
                    <h3 className="text-lg font-cormorant font-semibold text-dalashala-earth">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands I've Worked With */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-cormorant font-semibold mb-16 text-dalashala-earth text-center">
              Brands I've Worked With
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="w-32 h-32 bg-muted rounded-lg border border-border flex items-center justify-center hover:border-eucalyptus transition-colors"
                >
                  <p className="text-center text-muted-foreground font-medium">
                    {brand.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-16 text-dalashala-earth text-center">
              How I Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {workflow.map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-6 border border-border hover:border-eucalyptus transition-colors">
                  <div className="w-12 h-12 bg-eucalyptus/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-eucalyptus font-cormorant font-semibold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-cormorant font-semibold mb-3 text-dalashala-earth">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dalashala-earth/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-16 text-dalashala-earth text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-lg p-8 border border-border"
                >
                  <p className="text-dalashala-earth mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-cormorant font-semibold text-dalashala-earth">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA & Contact */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-eucalyptus text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-cormorant font-semibold mb-6">
              Let's Create Together
            </h2>
            <p className="text-lg mb-12 opacity-95">
              Whether you're looking for organic product integration, lifestyle content, or yoga-focused UGC, I'd love to chat about your brand.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@yogawithcamilla.se"
                className="inline-block px-8 py-4 bg-white text-eucalyptus font-cormorant font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                Email Me
              </a>
              <p className="text-sm opacity-90">
                Stockholm, Sweden
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UGCPortfolio;
