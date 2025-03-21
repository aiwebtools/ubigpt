
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const YouMayAlsoLike = () => {
  return (
    <section className="py-16 bg-ubi-darker/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient">You May Also Like</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-ubi-accent">UBI Strategist GPT</h3>
            <p className="text-gray-300 mb-4">
              Design optimal UBI models and transition strategies tailored to different regions, 
              economic trends, and societal needs.
            </p>
            <Button 
              className="w-full bg-ubi-accent hover:bg-ubi-accent/80"
              onClick={() => window.open('https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt', '_blank')}
            >
              Try UBI Strategist <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="glass-panel p-6 rounded-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-ubi-secondary">World Peace GPT</h3>
            <p className="text-gray-300 mb-4">
              Explore solutions for global peace and cooperation with advanced AI assistance 
              designed to promote harmony across nations.
            </p>
            <Button 
              className="w-full bg-ubi-secondary hover:bg-ubi-secondary/80"
              onClick={() => window.open('https://worldpeacegpt.lovable.app/?via=aiwebtools', '_blank')}
            >
              Try World Peace GPT <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
