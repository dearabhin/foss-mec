
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-fossgray/20 dark:from-fossnavy dark:to-fossnavy/70 min-h-screen flex items-center">
      <div className="section-padding pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fossnavy dark:text-white">
              Free and Open Source Software
              <span className="text-fossorange"> Community</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Empowering students through open source collaboration, knowledge sharing, and innovation at Model Engineering College.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#about" className="foss-btn flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </a>
              <a href="#events" className="foss-btn-outline">
                Upcoming Events
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Abstract graphic elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-fossorange/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fossorange/30 rounded-full blur-xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-white dark:bg-fossnavy/80 p-1 rounded-lg shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="FOSSMEC Members Collaborating" 
                  className="w-full h-auto rounded object-cover max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute bottom-10 left-6 grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-fossorange"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
