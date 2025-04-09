
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Hacktoberfest Workshop",
      date: "October 15, 2023",
      location: "Main Auditorium, MEC",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A workshop to help students get started with open source contributions during Hacktoberfest."
    },
    {
      id: 2,
      title: "Linux Installation Fest",
      date: "August 20, 2023",
      location: "Computer Labs, MEC",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Helped students install and configure Linux distributions on their laptops."
    },
    {
      id: 3,
      title: "Git & GitHub Masterclass",
      date: "July 5, 2023",
      location: "Online (Zoom)",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A comprehensive session on version control and collaboration using Git and GitHub."
    }
  ];

  return (
    <section id="events" className="relative bg-gray-50 dark:bg-fossnavy/95 py-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-fossnavy dark:text-white mb-4">Past <span className="text-fossorange">Events</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore our recent events and workshops that have helped students learn and grow in the open source ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white dark:bg-fossnavy/40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fossnavy dark:text-white mb-3">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="foss-btn-outline inline-flex items-center gap-2">
            View All Events <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute bottom-10 right-10 grid grid-cols-3 gap-3">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-fossorange/60"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Events;
