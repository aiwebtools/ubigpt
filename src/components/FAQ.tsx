
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-medium focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown 
          size={20} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
        ref={contentRef}
      >
        <div className="p-5 pt-0 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What is UBI Strategist GPT?",
      answer: "UBI Strategist GPT is an AI tool that analyzes economic trends, individual skills, and societal needs to design optimal Universal Basic Income models and implementation strategies tailored to specific regions and contexts."
    },
    {
      question: "How accurate are the economic analyses?",
      answer: "The economic analyses are based on data-driven approaches using real-world economic indicators. The tool combines established economic principles with advanced AI modeling. However, as with any economic forecasting, results should be considered as informed projections rather than absolute predictions."
    },
    {
      question: "Can I use this for official policy development?",
      answer: "UBI Strategist GPT provides valuable insights and frameworks that can inform policy discussions. However, any official policy development should involve professional economists, legal experts, and other relevant stakeholders. The tool is best used as a complementary resource in the policy development process."
    },
    {
      question: "What regions can be analyzed?",
      answer: "UBI Strategist GPT can analyze any country, state, city, or region worldwide. The tool accesses real-time economic and social data to provide region-specific insights and recommendations."
    },
    {
      question: "How do I get started with UBI Strategist GPT?",
      answer: (
        <>
          To get started, simply <a 
            href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ubi-accent hover:underline"
          >
            access the UBI Strategist GPT
          </a> through ChatGPT. Once there, you'll be guided through a series of questions to define your region of interest, timeframe, and desired outcomes for the UBI model.
        </>
      )
    },
    {
      question: "What data sources are used for the analysis?",
      answer: "UBI Strategist GPT uses a combination of publicly available economic data, research studies, and real-time information gathered through web searches. The exact data sources used may vary depending on the region being analyzed and the specific aspects of the UBI model being developed."
    },
    {
      question: "Is my data secure when using UBI Strategist GPT?",
      answer: "UBI Strategist GPT operates within OpenAI's ChatGPT platform, which is subject to OpenAI's privacy policy. No personal data beyond what you explicitly provide is required for the analysis. For specific privacy concerns, please refer to OpenAI's privacy policy."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="section-spacing relative bg-ubi-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about UBI Strategist GPT and how it can help you develop
            effective Universal Basic Income strategies.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
