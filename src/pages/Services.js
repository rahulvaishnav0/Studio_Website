import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Our Services</span>
            <span className="block text-primary-600">Tailored Solutions for Your Success</span>
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{index + 1}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: "🚀",
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies and best practices.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful and intuitive designs that enhance user experience.",
  },
  {
    icon: "📊",
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
  },
  {
    icon: "🎯",
    title: "SEO Optimization",
    description: "Optimize your website for search engines to increase visibility.",
  },
  {
    icon: "⚙️",
    title: "Maintenance",
    description: "Ongoing support and maintenance to keep your website running smoothly.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your needs and goals.",
  },
  {
    title: "Planning",
    description: "Creating a detailed project roadmap.",
  },
  {
    title: "Development",
    description: "Building your solution with care.",
  },
  {
    title: "Launch",
    description: "Deploying and optimizing your project.",
  },
];

export default Services;
