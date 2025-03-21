
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
    // Set page title
    document.title = "UBI Strategist GPT | Universal Basic Income Planning Tool";
    
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
      <Header />
      <Hero />
      
      {/* Embedded Image */}
      <div className="py-16 flex justify-center">
        <a 
          href="https://ideogram.ai/assets/image/lossless/response/22t4n_ZYRHm_ZgeY_0ANAg"
          target="_blank"
          rel="noopener noreferrer" 
          className="perspective max-w-2xl w-full px-4 animate-float"
        >
          <div className="glass-panel p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <img 
              src="https://ideogram.ai/assets/image/lossless/response/22t4n_ZYRHm_ZgeY_0ANAg" 
              alt="UBI Strategist Visualization" 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">Powered by GPT Technology</p>
            </div>
          </div>
        </a>
      </div>
      
      <Features />
      <HowItWorks />
      <Testimonials />
      <YouMayAlsoLike />
      <FAQ />
      <Disclaimer />
      <Footer />
      <DisclaimerModal />
    </div>
  );
};

export default Index;
