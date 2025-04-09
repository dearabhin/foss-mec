
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Open Source Contributions",
      excerpt: "A beginner's guide to making your first open source contribution on GitHub.",
      author: "Arun Kumar",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      category: "Guides"
    },
    {
      id: 2,
      title: "Linux for College Students: A Practical Approach",
      excerpt: "How Linux can improve your workflow and help you become a better developer.",
      author: "Sneha Rajesh",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      category: "Linux"
    },
    {
      id: 3,
      title: "Web Development with Open Source Tools",
      excerpt: "Exploring the best open source frameworks and libraries for modern web development.",
      author: "Rahul Sharma",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Web Dev"
    }
  ];

  return (
    <section id="blog" className="relative bg-gray-50 dark:bg-fossnavy/95 py-16">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fossnavy dark:text-white mb-4">Tech <span className="text-fossorange">Blog</span></h2>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              Insights, tutorials, and stories from our community members.
            </p>
          </div>
          <a href="#" className="foss-btn inline-flex items-center gap-2 whitespace-nowrap">
            All Posts <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white dark:bg-fossnavy/40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs font-medium bg-fossorange/10 text-fossorange px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-fossnavy dark:text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    By {blog.author}
                  </span>
                  <a href="#" className="text-fossorange hover:underline text-sm font-medium">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="w-full h-full border-t-4 border-r-4 border-fossorange/30 rounded-tr-xl"></div>
      </div>
    </section>
  );
};

export default Blog;
