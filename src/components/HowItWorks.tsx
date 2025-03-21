
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Mission Setup & User Input",
    description: "Define the region, timeframe, and desired outcomes for your UBI model. Real-time data gathering ensures accurate analysis.",
    delay: 0
  },
  {
    number: "02",
    title: "Economic & Social Data Analysis",
    description: "Comprehensive analysis of macroeconomic indicators, fiscal capacity, workforce assessment, and societal needs.",
    delay: 100
  },
  {
    number: "03",
    title: "UBI Framework Simulation",
    description: "Simulate multiple UBI frameworks including flat, means-tested, or conditional models with projected impacts.",
    delay: 200
  },
  {
    number: "04",
    title: "Transition Strategy Design",
    description: "Create multi-phase roadmaps with funding sources, political feasibility assessments, and integration strategies.",
    delay: 300
  },
  {
    number: "05",
    title: "Impact Forecasting & Scenario Planning",
    description: "Project societal, economic, and psychological impacts across multiple time horizons with different scenarios.",
    delay: 400
  },
  {
    number: "06",
    title: "Document Compilation",
    description: "Generate a well-formatted, downloadable document containing all analysis, frameworks, and recommendations.",
    delay: 500
  },
  {
    number: "07",
    title: "Total Flexibility & Full Recall",
    description: "Revise, compare, and simulate alternatives with full memory of previous inputs and analyses.",
    delay: 600
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="section-spacing relative bg-ubi-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            UBI Strategist GPT follows a systematic approach to develop comprehensive UBI strategies
            tailored to your specific region and requirements.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-ubi-accent via-ubi-secondary to-ubi-tertiary"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-ubi-dark border-2 border-white z-10 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-ubi-accent animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`glass-panel rounded-2xl p-6 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl font-bold text-ubi-accent">{step.number}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button inline-block"
          >
            Start Your UBI Strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
