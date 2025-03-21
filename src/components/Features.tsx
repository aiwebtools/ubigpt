
import { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  Globe, 
  Code, 
  PieChart, 
  LineChart, 
  TimerReset, 
  Users 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
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
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={elementRef}
      className={`feature-card animate-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-ubi-accent/20 text-ubi-accent">
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "Economic Analysis",
      description: "Comprehensive analysis of GDP, inflation, cost of living, employment rates, and inequality indicators for your region."
    },
    {
      icon: <BookOpen size={24} />,
      title: "UBI Framework Design",
      description: "Create customized UBI frameworks that align with regional economic conditions and social objectives."
    },
    {
      icon: <Globe size={24} />,
      title: "Regional Customization",
      description: "Develop tailored UBI solutions for any country, state, or city with location-specific considerations."
    },
    {
      icon: <Code size={24} />,
      title: "Python-Based Modeling",
      description: "Advanced calculations, statistical modeling, and data visualization powered by Python."
    },
    {
      icon: <PieChart size={24} />,
      title: "Funding Source Analysis",
      description: "Evaluate potential funding mechanisms including carbon taxes, VAT, sovereign wealth funds, and automation taxes."
    },
    {
      icon: <LineChart size={24} />,
      title: "Impact Forecasting",
      description: "Project long-term societal and economic impacts across 1-year, 5-year, and 10-year time horizons."
    },
    {
      icon: <TimerReset size={24} />,
      title: "Transition Strategy",
      description: "Multi-phase implementation roadmaps from pilot programs to full-scale deployment."
    },
    {
      icon: <Users size={24} />,
      title: "Societal Needs Assessment",
      description: "Analysis of housing, food security, healthcare access, and digital inclusion requirements."
    }
  ];

  return (
    <section id="features" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            UBI Strategist GPT combines economic expertise with AI-powered analysis to
            deliver comprehensive UBI planning tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
