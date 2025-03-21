
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Chen",
    title: "Economic Policy Advisor",
    content: "UBI Strategist GPT provided invaluable insights for our regional economic development plan. The data analysis and policy recommendations were thorough and well-researched.",
    stars: 5
  },
  {
    name: "Michael Rodriguez",
    title: "City Planning Director",
    content: "We used UBI Strategist GPT to model different basic income scenarios for our city. The detailed forecasting and implementation roadmaps were extremely helpful for our policy discussions.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    title: "Nonprofit Executive",
    content: "The socioeconomic impact analysis from UBI Strategist GPT helped us secure funding for our pilot program. The depth of analysis was impressive and exactly what we needed.",
    stars: 5
  },
  {
    name: "David Kim",
    title: "Economic Researcher",
    content: "As a researcher focusing on economic inequality, UBI Strategist GPT has become an essential tool. The ability to model different UBI frameworks and their impacts is extremely powerful.",
    stars: 5
  },
  {
    name: "Aisha Patel",
    title: "Policy Consultant",
    content: "The transition strategies and funding source analysis provided by UBI Strategist GPT were comprehensive and realistic. This is a game-changer for policy development.",
    stars: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section ref={elementRef} className="section-spacing relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how UBI Strategist GPT is helping policy advisors, researchers, and organizations
            develop impactful UBI strategies.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].stars)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-light italic mb-8 text-white">
              "{testimonials[current].content}"
            </blockquote>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ubi-accent to-ubi-secondary flex items-center justify-center text-white font-bold">
                {testimonials[current].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{testimonials[current].name}</div>
                <div className="text-sm text-gray-400">{testimonials[current].title}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? 'bg-ubi-accent w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
