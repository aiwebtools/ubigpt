
import { useEffect, useRef } from 'react';
import Logo from './Logo';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Currency symbols for background
    const symbols = ['$', '€', '¥', '£', '₿', '₹', '¢'];
    
    class Symbol {
      x: number;
      y: number;
      fontSize: number;
      text: string;
      speed: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.fontSize = Math.random() * 20 + 10;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.speed = Math.random() * 2 + 0.5;
        
        // Colors matching our theme
        const colors = ['#00b8d4', '#9333ea', '#ff4081'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.font = `${this.fontSize}px Inter`;
        ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.fillText(this.text, this.x, this.y);
      }
      
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }
    }
    
    // Create symbols
    const symbolsArray: Symbol[] = [];
    for (let i = 0; i < 50; i++) {
      symbolsArray.push(new Symbol());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      symbolsArray.forEach(symbol => {
        symbol.draw();
        symbol.update();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Animation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      
      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 cyberpunk-grid"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI WEB TOOLS</span><br />
              <span className="text-white">Universal Basic Income</span><br />
              <span className="text-white">For The AI Era</span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Design optimal UBI models and transition strategies with AI WEB TOOLS. 
              Our advanced AI tools analyze economic trends, regional data, and societal needs 
              to create comprehensive Universal Basic Income frameworks powered by cutting-edge artificial intelligence.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
                title="Try UBI Strategist GPT - AI WEB TOOLS"
              >
                Try UBI Strategist GPT
              </a>
              <a
                href="https://worldpeacegpt.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button bg-ubi-secondary hover:bg-ubi-secondary/80"
                title="Try World Peace GPT - AI WEB TOOLS"
              >
                Try World Peace GPT
              </a>
              <a href="#how-it-works" className="secondary-button" title="Learn More About AI WEB TOOLS">
                Learn More
              </a>
            </div>
            
            {/* SEO-friendly content */}
            <div className="mt-8 text-sm text-gray-400">
              <p>AI WEB TOOLS - Leading provider of AI tools for economic analysis and policy planning</p>
            </div>
          </div>
          
          <div className="flex-1 perspective max-w-md">
            <div className="relative w-full h-full preserve-3d animate-float">
              <div className="glass-panel rounded-3xl p-6 md:p-8 rotate-r transition-gpu">
                <div className="flex items-center justify-center mb-6">
                  <Logo size={60} />
                </div>
                <div className="space-y-4">
                  <div className="glass-panel rounded-lg p-4 bg-ubi-accent/10">
                    <h3 className="text-sm font-medium text-ubi-accent mb-1">AI-Powered Region Analysis</h3>
                    <p className="text-xs text-gray-300">Economic trends, workforce, and societal needs assessment using advanced AI tools</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 bg-ubi-secondary/10">
                    <h3 className="text-sm font-medium text-ubi-secondary mb-1">Smart UBI Framework</h3>
                    <p className="text-xs text-gray-300">AI-generated flat, means-tested, or conditional models with impact projections</p>
                  </div>
                  <div className="glass-panel rounded-lg p-4 bg-ubi-tertiary/10">
                    <h3 className="text-sm font-medium text-ubi-tertiary mb-1">AI Implementation Strategy</h3>
                    <p className="text-xs text-gray-300">Multi-phase roadmaps with AI-optimized funding sources and policy integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ubi-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
