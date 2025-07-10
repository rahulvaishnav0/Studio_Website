import React from 'react';
import heroImage from '../assets/images/about-hero.jpg';
import johnDoe from '../assets/images/john-doe.jpg';
import janeSmith from '../assets/images/jane-smith.jpg';
import mikeJohnson from '../assets/images/mike-johnson.jpg';
import sarahWilson from '../assets/images/sarah-wilson.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">About StudioPro</span>{' '}
                  <span className="block text-primary-600">Your Creative Partner</span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={heroImage}
            alt="Studio workspace"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We are dedicated to creating exceptional digital experiences that help businesses grow and succeed.
              Our mission is to combine creativity, technology, and strategy to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading digital studio that transforms businesses through innovative solutions.
              We strive to set new standards in digital excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
              src={member.image}
              alt={member.name}
              className="aspect-w-1/2 aspect-h-1/2 rounded-full mb-4 object-cover"
            />
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "John Doe",
    role: "Creative Director",
    image: johnDoe
  },
  {
    name: "Jane Smith",
    role: "Technical Lead",
    image: janeSmith
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    image: mikeJohnson
  },
  {
    name: "Sarah Wilson",
    role: "Project Manager",
    image: sarahWilson
  }
];

export default About;
