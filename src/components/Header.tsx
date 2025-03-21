
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'UBI Strategist GPT', href: 'https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="z-50">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white link-highlight text-sm font-medium transition-colors"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Try Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-ubi-darker/95 z-40 flex flex-col items-center justify-center animate-scale-in">
          <nav className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
