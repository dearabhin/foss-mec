
import { Code, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} className="text-fossorange" />,
      title: "Open Source Projects",
      description: "Contribute to and develop open source projects that solve real-world problems and help students gain practical experience."
    },
    {
      icon: <Users size={32} className="text-fossorange" />,
      title: "Community Learning",
      description: "Foster a collaborative environment where members can learn from each other through workshops, hackathons, and study groups."
    },
    {
      icon: <Award size={32} className="text-fossorange" />,
      title: "Industry Recognition",
      description: "Build portfolios with meaningful projects and connect with industry professionals through our network."
    }
  ];

  return (
    <section id="about" className="relative bg-white dark:bg-fossnavy py-16">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-fossnavy dark:text-white mb-4">About <span className="text-fossorange">FOSSMEC</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            The Free and Open Source Software community at Model Engineering College is dedicated to promoting the culture of open source software and collaborative development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              Established in 2015, FOSSMEC has grown into a vibrant community of developers, designers, and tech enthusiasts who believe in the power of open source. Our mission is to introduce students to the world of Free and Open Source Software and help them become active contributors.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We organize workshops, hackathons, and technical talks to spread awareness about open source technologies and encourage students to contribute to various projects. We also provide mentorship to help students navigate the open source ecosystem.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Join us in our journey to build a strong open source culture at Model Engineering College!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-fossnavy/40 p-6 rounded-lg border border-gray-100 dark:border-fossnavy/70 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-fossorange/10 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-fossnavy dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute top-0 right-0 -mt-10 mr-10 w-32 h-32">
        <div className="w-full h-full border-t-4 border-r-4 border-fossorange/30 rounded-tr-xl"></div>
      </div>
    </section>
  );
};

export default About;
