
import React from 'react';
import { DollarSign, Globe, Shield } from 'lucide-react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = true, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-fit h-fit perspective preserve-3d animate-float">
        <div className="relative">
          {/* Logo shape with all three elements */}
          <div className="absolute inset-0 text-ubi-tertiary animate-pulse-soft">
            <DollarSign size={size} strokeWidth={2} />
          </div>
          <div className="absolute inset-0 text-ubi-secondary opacity-80">
            <Shield size={size} strokeWidth={2} />
          </div>
          <div className="absolute inset-0 text-ubi-accent">
            <Globe size={size} strokeWidth={2} />
          </div>
          {/* Actual visible icon with combined effect */}
          <div className="relative text-white">
            <DollarSign size={size} strokeWidth={2} />
          </div>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-lg sm:text-xl tracking-tight">UBI Strategist GPT</span>
          <span className="text-xs text-gray-400">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-ubi-accent hover:text-ubi-secondary transition-colors">AiWebTools.Ai</a></span>
        </div>
      )}
    </div>
  );
};

export default Logo;
