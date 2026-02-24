import React from "react";
import { Link } from "react-router-dom";

const timelineEvents = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Puffadders was founded with a simple idea: create a space where university students could come together to build real solutions."
  },
  {
    year: "2024",
    title: "First Hackathon",
    description: "Our inaugural hackathon brought together 100+ students from 5 universities, resulting in 20+ prototypes addressing local challenges."
  },
  {
    year: "2025",
    title: "Expanding Impact",
    description: "Now active in 10+ universities with 500+ community members, 50+ solutions built, and 20+ startups launched."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      {/* Hero Section - Minimal */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            About Puffadders
          </h1>
          <div className="w-24 h-1 bg-white/20 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            We believe that the brightest ideas come from students who are given 
            the right environment, mentorship, and support to bring them to life.
          </p>
        </div>
      </section>

      {/* Our Story - Narrative Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Puffadders started in a small classroom with a handful of students 
                  who shared one thing in common: a desire to build things that matter.
                </p>
                <p>
                  What began as informal meetups evolved into something bigger. We 
                  realized that across Kenyan universities, there were countless students 
                  with brilliant ideas but no platform to develop them.
                </p>
                <p>
                  Today, we've grown into a community that spans multiple campuses, 
                  connecting developers, designers, and innovators who are passionate 
                  about solving real problems in health, agriculture, education, and fintech.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <blockquote className="text-xl text-gray-300 italic">
                  "The energy and creativity we see from students never ceases to amaze us. 
                  Every hackathon brings new ideas that have the potential to transform communities."
                </blockquote>
                <div className="mt-6 text-white font-medium">
                  — The Puffadders Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Journey Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-3xl font-bold text-white/30">{event.year}</span>
                </div>
                <div className="flex-grow border-l-2 border-white/10 pl-8 pb-8 relative">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white/20 border-2 border-white"></div>
                  <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Text Only */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We empower students to build real-world solutions that make a difference, 
                not just for grades, but for communities.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A collaborative space where developers, designers, and innovators come 
                together to learn from each other.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Talent Discovery</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Identifying and nurturing the next generation of problem-solvers who will 
                shape Kenya's future.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pushing boundaries through hackathons and innovative projects that set 
                new standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Minimal */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you're a student with an idea, a mentor with experience, or a partner 
            looking to support innovation, there's a place for you at Puffadders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/joinus" className="bg-white text-[#0A1929] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              Join the Community
            </Link>
            <Link to="/partner" className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;