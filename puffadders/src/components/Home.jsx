import React from "react";
import { Link } from "react-router-dom";

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

// Reusable Program Card Component
const ProgramCard = ({ title, description, image, linkText, linkTo }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center text-white font-medium group/link"
      >
        <span>{linkText}</span>
        <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
      </Link>
    </div>
  </div>
);

const Home = () => {
  // Data for programs (similar to Eldohub's structure)
  const programs = [
    {
      title: "Hackathons",
      description:
        "Our flagship 48-hour events where students form teams to build real solutions for challenges in health, agriculture, education, and finance.",
      image: "/puffadders banner.jpeg",
      linkText: "Explore Hackathons",
      linkTo: "/hackathons",
    },
    {
      title: "Mentorship",
      description:
        "Connect with experienced professionals from leading tech companies who guide students through product development and career growth.",
      image: "/puffadders banner.jpeg",
      linkText: "Become a Mentor",
      linkTo: "/joinus",
    },
    {
      title: "Startup Launchpad",
      description:
        "From prototype to company. We provide resources, connections, and support for student teams ready to launch their ventures.",
      image: "/puffadders banner.jpeg",
      linkText: "Launch Your Idea",
      linkTo: "/joinus",
    },
    {
      title: "Career Access",
      description:
        "Connect with top employers through our network. Students gain internships, job opportunities, and a head start on their careers.",
      image: "/puffadders banner.jpeg",
      linkText: "Find Opportunities",
      linkTo: "/blog",
    },
  ];

  return (
    <div className="bg-[#0A1929] text-white">
      {/* Hero Section - Clean and Bold */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/puffadders banner.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/95 to-[#0A1929]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build. Solve. Impact.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A university-focused innovation community empowering students to build real-world solutions through hackathons, technology, and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/joinus" className="bg-white text-[#0A1929] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              Join the Community
            </Link>
            <Link to="/about" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar - Simple and Impactful (like Eldohub's partner logos) */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-4">
            <span className="text-2xl font-bold text-white">10+</span>
            <span className="text-gray-400">Universities</span>
            <span className="text-2xl font-bold text-white">500+</span>
            <span className="text-gray-400">Innovators</span>
            <span className="text-2xl font-bold text-white">50+</span>
            <span className="text-gray-400">Solutions</span>
            <span className="text-2xl font-bold text-white">20+</span>
            <span className="text-gray-400">Startups</span>
          </div>
        </div>
      </section>

      {/* Mission Section - Clear and Direct (like Eldohub's intro) */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-300 leading-relaxed">
            To discover talent, support innovation, and build the next generation of problem-solvers tackling real challenges in{" "}
            <span className="text-white font-semibold">Health, Agriculture, Education, and Fintech</span> across Kenya.
          </p>
        </div>
      </section>

      {/* Programs Grid - Core Offering (like Eldohub's SasaKazi, Academy, etc.) */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Programs"
            subtitle="We create opportunities for students to learn, build, and launch."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Focus - Text-First Approach (like Eldohub's Digital Transformation section) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Where We Focus"
            subtitle="We bring together developers, designers, and innovators to solve challenges in key sectors."
          />
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Health", desc: "Building digital solutions that improve healthcare access, patient monitoring, and medical data management." },
              { title: "Agriculture", desc: "Creating tech innovations for smart farming, crop management, and sustainable agricultural practices." },
              { title: "Education", desc: "Developing e-learning platforms, digital classrooms, and tools that make quality education accessible." },
              { title: "Fintech", desc: "Innovating financial solutions for payments, savings, lending, and financial inclusion." },
            ].map((sector, i) => (
              <div key={i} className="border-l-4 border-white/30 pl-6">
                <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Bold and Centered (like Eldohub's bottom CTA) */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join Kenya's fastest-growing student innovation community and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/joinus" className="bg-white text-[#0A1929] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
              Join Puffadders
            </Link>
            <Link to="/partner" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;