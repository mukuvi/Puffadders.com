import React from "react";
import { FaGithub, FaDiscord, FaLinkedin, FaRocket, FaUsers, FaTrophy, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaGithub className="text-6xl" />,
    name: "GitHub",
    description: "Explore our projects and repositories",
    url: "https://github.com/puffadders",
    color: "hover:text-white",
    bgColor: "hover:bg-white/20",
  },
  {
    icon: <FaDiscord className="text-6xl" />,
    name: "Discord",
    description: "Connect with the student community",
    url: "https://discord.gg/SdnKjuN2Ny",
    color: "hover:text-white",
    bgColor: "hover:bg-white/20",
  },
  {
    icon: <FaLinkedin className="text-6xl" />,
    name: "LinkedIn",
    description: "Professional network and updates",
    url: "https://www.linkedin.com/company/puffadders",
    color: "hover:text-white",
    bgColor: "hover:bg-white/20",
  },
];

const teamValues = [
  {
    icon: <FaRocket className="text-4xl" />,
    title: "Innovation First",
    description: "We empower students to build real-world solutions that make a difference."
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Community Driven",
    description: "A collaborative space where developers, designers and innovators come together."
  },
  {
    icon: <FaLightbulb className="text-4xl" />,
    title: "Talent Discovery",
    description: "Identifying and nurturing the next generation of problem-solvers."
  },
  {
    icon: <FaTrophy className="text-4xl" />,
    title: "Excellence",
    description: "Pushing boundaries through hackathons and innovative projects."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            About Puffadders
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Build. Solve. Impact.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Puffadders is a university-focused innovation community dedicated to empowering 
            students to build real-world solutions through hackathons, technology and collaboration.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To discover talent, support innovation and build the next generation of problem-solvers 
            in Health, Agriculture, Education and Fintech sectors.
          </p>
        </div>

        {/* Team Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up border border-white/10"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-white mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Through Our Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-3">For Students</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Build real solutions through hands-on hackathons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Work with industry mentors and experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Access career opportunities with leading companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Launch startups from hackathon projects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-3">For Partners</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Connect with top student talent across Kenya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Support innovation in key sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Sponsor hackathons and events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Mentor the next generation of innovators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Connect With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 group animate-fade-in-up`}
                style={{ animationDelay: `${1.1 + index * 0.1}s` }}
              >
                <div className={`text-gray-400 transition-colors duration-300 group-hover:text-white mb-4 flex justify-center`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {social.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Kenya's fastest-growing student innovation community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/joinus" className="bg-white text-[#0A1929] font-bold text-lg px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center">
              Join Puffadders
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0A1929]">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;