
import { Github, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer id="contact" className="bg-fossnavy text-white">
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="col-span-4 md:col-span-1">
            <div className="mb-6">
              {/* Dark mode logo for dark theme */}
              <img 
                src="/uploads/light-mode.png"
                alt="FOSSMEC Logo" 
                className="h-12 hidden dark:block" 
              />
              {/* Light mode logo for light theme */}
              <img 
                src="/uploads/light-mode.png"
                alt="FOSSMEC Logo" 
                className="h-12 block dark:hidden" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Empowering students through open source collaboration, knowledge sharing, and innovation at Model Engineering College.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/fossmec" className="text-gray-300 hover:text-fossorange transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/fossmec" className="text-gray-300 hover:text-fossorange transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/foss_mec/" className="text-gray-300 hover:text-fossorange transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/fossmec" className="text-gray-300 hover:text-fossorange transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-fossorange transition-colors">About Us</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-fossorange transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-fossorange transition-colors">Gallery</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-fossorange transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://github.com/fossmec" className="text-gray-300 hover:text-fossorange transition-colors">GitHub Organization</a></li>
              <li><a href="https://discord.com" className="text-gray-300 hover:text-fossorange transition-colors">Discord Server</a></li>
              <li><a href="https://docs.kernel.org/" className="text-gray-300 hover:text-fossorange transition-colors">Linux Guide</a></li>
              <li><a href="https://github.com/dearabhin/foss-mec" className="text-gray-300 hover:text-fossorange transition-colors">Contributing Guide</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <Mail size={18} />
                <a href="mailto:fossmec@mec.ac.in" className="hover:text-fossorange transition-colors">fossmec@mec.ac.in</a>
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-fossorange text-white"
                />
                <button type="submit" className="foss-btn w-full">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} FOSS MEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
