
import { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const links = [
    { name: 'UBI Strategist GPT', href: 'https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt' },
    { name: 'World Peace GPT', href: 'https://worldpeacegpt.lovable.app/?via=aiwebtools' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="z-50 shrink-0">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white link-highlight text-sm font-medium transition-colors whitespace-nowrap"
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
              className="primary-button text-sm px-4 py-2"
            >
              Try Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 text-white p-2 -mr-2 touch-manipulation"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - using CSS transform for instant feel */}
      <div 
        className={`fixed inset-0 bg-ubi-darker/98 z-40 flex flex-col items-center justify-center transition-all duration-200 lg:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-5 w-full px-8 max-w-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white text-lg font-medium transition-colors w-full text-center py-2 touch-manipulation"
              onClick={closeMenu}
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
            className="primary-button mt-4 w-full text-center"
            onClick={closeMenu}
          >
            Try Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
