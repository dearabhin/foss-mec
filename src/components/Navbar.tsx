
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-8 lg:px-12',
        scrolled
          ? 'bg-white/90 dark:bg-fossnavy/90 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          {/* Logo - using correct logo variants based on current theme */}
          <img
            alt="FOSSMEC Logo"
            className="h-10 md:h-12 hidden dark:block"
            src="/uploads/light-mode.png" // foss-dark-mode.png for dark mode
          />
          <img
            src="/uploads/dark-mode.png" // foss-light-mode.png for light mode
            alt="FOSSMEC Logo"
            className="h-10 md:h-12 block dark:hidden"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-fossnavy dark:text-fossgray hover:text-fossorange dark:hover:text-fossorange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="foss-btn">Join Us</a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-fossnavy dark:text-fossgray"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-fossnavy shadow-lg p-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-fossnavy dark:text-fossgray hover:text-fossorange dark:hover:text-fossorange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="foss-btn text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
