
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('ubiDisclaimerAgreed');
    
    if (!hasAgreed) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('ubiDisclaimerAgreed', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-scale-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleAgree}></div>
      
      <div className="glass-panel rounded-2xl p-6 max-w-md w-full z-10 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Important Notice</h3>
          <button onClick={handleAgree} className="p-1 text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="text-gray-300 text-sm space-y-4 mb-6">
          <p>
            UBI Strategist GPT is provided for educational and informational purposes only. 
            The analyses, recommendations, and projections should not be considered as 
            professional financial, economic, legal, or policy advice.
          </p>
          <p>
            By continuing to use this tool, you acknowledge that you have read and 
            understood our full disclaimer and agree to our terms of service.
          </p>
        </div>
        
        <button 
          onClick={handleAgree}
          className="primary-button w-full"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
