
import { useState } from 'react';
import Logo from './Logo';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('Contact@ai-webtools.com');
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <footer className="relative pt-16 pb-8 bg-ubi-darker border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Small disclaimer notice */}
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            This tool is provided for informational, educational, and research purposes only. 
            All analyses and recommendations should be verified independently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <Logo size={36} />
            <p className="mt-4 text-gray-400 text-sm">
              Analyze economic trends, individual skills, and societal needs to design optimal UBI models
              and transition strategies for different regions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our AI Tools</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  UBI Strategist GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://worldpeacegpt.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  World Peace GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  (475) 800-8096
                </a>
              </li>
              <li className="relative">
                <a 
                  href="#"
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  Contact@ai-webtools.com
                </a>
                {showMessage && (
                  <span className="absolute top-0 left-full ml-2 px-2 py-1 text-xs bg-ubi-accent rounded animate-fade-in">
                    Copied!
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="mt-4 sm:mt-0 flex gap-4">
            <a 
              href="https://worldpeacegpt.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-full px-5 py-2 flex items-center gap-2 text-sm hover:bg-white/10 transition-colors"
            >
              World Peace GPT
              <ExternalLink size={14} />
            </a>
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-full px-5 py-2 flex items-center gap-2 text-sm hover:bg-white/10 transition-colors"
            >
              More AI Tools
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
