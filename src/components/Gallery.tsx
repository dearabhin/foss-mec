
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const gallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Hacktoberfest Workshop"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Code Review Session"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team Collaboration"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Linux Installation Fest"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Git Workshop"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team Meeting"
    }
  ];

  return (
    <section id="gallery" className="relative bg-white dark:bg-fossnavy py-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-fossnavy dark:text-white mb-4">Our <span className="text-fossorange">Gallery</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Glimpses of FOSSMEC activities and events that showcase our community spirit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                <p className="text-white font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-fossorange"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-fossorange/10"></div>
    </section>
  );
};

export default Gallery;
