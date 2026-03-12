
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import DisclaimerModal from '../components/DisclaimerModal';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

const Index = () => {
  useEffect(() => {
    // Set comprehensive page title for SEO
    document.title = "AI WEB TOOLS | UBI Strategist GPT - Universal Basic Income Planning Tool";
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AI WEB TOOLS",
      "url": "https://aiwebtools.lovable.app/?via=aiwebtools",
      "description": "Leading AI tools platform featuring UBI Strategist GPT for Universal Basic Income planning and World Peace GPT for global solutions",
      "publisher": {
        "@type": "Organization",
        "name": "AI WEB TOOLS LLC"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aiwebtools.ai/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI WEB TOOLS - Your premier destination for AI tools. Featuring UBI Strategist GPT for Universal Basic Income planning, World Peace GPT, and cutting-edge AI solutions for economic modeling and policy analysis.');
    }
    
    // IntersectionObserver for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-ubi-dark overflow-x-hidden">
      {/* SEO-optimized header structure */}
      <Header />
      
      {/* Main content with semantic HTML5 structure */}
      <main>
        <Hero />
        
        {/* AI Tools Showcase Section - SEO optimized */}
        <section className="py-16 flex justify-center" aria-label="AI Tools Showcase">
          <a 
            href="https://ideogram.ai/assets/image/lossless/response/22t4n_ZYRHm_ZgeY_0ANAg"
            target="_blank"
            rel="noopener noreferrer" 
            className="perspective max-w-2xl w-full px-4 animate-float"
            title="AI WEB TOOLS - UBI Strategist GPT Visualization"
          >
            <div className="glass-panel p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/22t4n_ZYRHm_ZgeY_0ANAg" 
                alt="AI WEB TOOLS UBI Strategist GPT - Universal Basic Income Planning Visualization powered by advanced AI technology" 
                className="w-full h-auto rounded-lg"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">Powered by AI WEB TOOLS GPT Technology</p>
              </div>
            </div>
          </a>
        </section>
        
        <Features />
        <HowItWorks />
        <Testimonials />
        <YouMayAlsoLike />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
      <DisclaimerModal />
      
      {/* Hidden SEO content for additional keyword targeting */}
      <div className="sr-only" aria-hidden="true">
        <h1>AI WEB TOOLS - Premier AI Tools Platform</h1>
        <p>AI WEB TOOLS offers the most advanced AI tools including UBI Strategist GPT for Universal Basic Income planning, World Peace GPT for global solutions, and innovative AI web tools for businesses and researchers.</p>
        <p>Our AI tools platform provides cutting-edge artificial intelligence solutions for economic modeling, policy analysis, and strategic planning.</p>
      </div>
    </div>
  );
};

export default Index;
