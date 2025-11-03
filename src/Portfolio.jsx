import React, { useState } from 'react';
import { Menu, X, Code, Palette, Users, Lightbulb } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce platform with a focus on user experience and seamless transactions.',
      category: 'Web Design',
      color: 'bg-red-500'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application with advanced features.',
      category: 'Mobile Apps',
      color: 'bg-red-400'
    },
    {
      title: 'Corporate Branding',
      description: 'A complete branding package for a tech startup including logo, visual identity, and brand guidelines.',
      category: 'Branding',
      color: 'bg-red-400'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing design skills and projects with a clean and modern design.',
      category: 'Web Design',
      color: 'bg-gray-600'
    },
    {
      title: 'Social Media App',
      description: 'A social media application designed to connect users and facilitate community engagement.',
      category: 'Mobile Apps',
      color: 'bg-red-400'
    }
  ];

  const skills = [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Code },
    { name: 'Figma', icon: Palette },
    { name: 'Communication', icon: Users },
    { name: 'Creativity', icon: Lightbulb },
    { name: 'Teamwork', icon: Users },
    { name: 'VS Code', icon: Code },
    { name: 'Git', icon: Code },
    { name: 'Adobe XD', icon: Palette }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition">About</a>
              <a href="#projects" className="text-gray-700 hover:text-teal-600 transition">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-teal-600 transition">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition">Contact</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
                View My Work
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                Download CV
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-teal-600">Home</a>
                <a href="#about" className="text-gray-700 hover:text-teal-600">About</a>
                <a href="#projects" className="text-gray-700 hover:text-teal-600">Projects</a>
                <a href="#skills" className="text-gray-700 hover:text-teal-600">Skills</a>
                <a href="#contact" className="text-gray-700 hover:text-teal-600">Contact</a>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md">
                  View My Work
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md">
                  Download CV
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
            </div>
            <div className="text-center md:text-left md:ml-12">
              <h1 className="text-5xl font-bold mb-4">Armaan Memon</h1>
              <p className="text-xl mb-6">Crafting Digital Experiences with Design & Code</p>
              <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Armaan Memon</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a passionate developer and designer with a focus on creating intuitive and engaging digital experiences. With several years of experience, 
              I've honed my skills in both design and development, ensuring that I bring a unique perspective to every project. My goal is to blend creativity 
              with technical expertise to deliver solutions that not only look great but also function flawlessly. I thrive on challenges and am always eager to 
              learn new technologies and techniques to stay at the forefront of the industry. My work is driven by a desire to make a meaningful impact 
              through innovative design and robust code. I believe in the power of collaboration and enjoy working closely with clients to bring their visions to 
              life. My approach is detail-oriented, ensuring that every aspect of a project is carefully considered and executed to the highest standard. I am 
              committed to delivering quality work and take pride in seeing projects succeed. Whether it's a web application, mobile app, or branding project, 
              I bring a range of projects that highlight my versatility and dedication to quality. I am excited about the opportunity to contribute my skills and 
              passion to your next project.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
              <div className="text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🎓</div>
              <div>
                <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">University of Technology, 2016-2020</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">💻</div>
              <div>
                <h4 className="font-semibold text-lg">Web Development Bootcamp</h4>
                <p className="text-gray-600">Code Academy, 2020</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">🚀</div>
              <div>
                <h4 className="font-semibold text-lg">Freelance Developer & Designer</h4>
                <p className="text-gray-600">2020-Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Web Design', 'Mobile Apps', 'Branding', 'Other'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md transition ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className={`${project.color} h-48`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center"
                >
                  <Icon className="mx-auto mb-3 text-teal-600" size={32} />
                  <div className="font-semibold">{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Work Together</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-1">Email</div>
              <div className="font-medium">ethan.carter@email.com</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Phone</div>
              <div className="font-medium">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Location</div>
              <div className="font-medium">New York, NY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <div className="text-center text-gray-600 text-sm">
            © 2024 Ethan Carter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;