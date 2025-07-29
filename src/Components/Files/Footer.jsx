import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={24} />, 
      url: 'https://github.com/symadev',
      color: 'hover:text-gray-300',
      bgColor: 'group-hover:bg-gray-800/50'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      url: 'https://linkedin.com/in/symasultana',
      color: 'hover:text-blue-400',
      bgColor: 'group-hover:bg-blue-500/20'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={24} />, 
      url: 'https://x.com/home',
      color: 'hover:text-cyan-400',
      bgColor: 'group-hover:bg-cyan-500/20'
    },
    { 
      name: 'Email', 
      icon: <Mail size={24} />, 
      url: 'mailto:symasultana02@gmail.com',
      color: 'hover:text-pink-400',
      bgColor: 'group-hover:bg-pink-500/20'
    },
  ];

  const services = [
    'Real-time Code Collaboration',
    'Team Workspace Management',
    'Live Debugging Sessions',
    'Instant Code Execution',
    'Version Control Integration'
  ];

  

  return (
    <footer className="relative bg-[#0e0e0e] text-white overflow-hidden">
     

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-2">
                RealCodeLab
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering developers worldwide with real-time collaborative coding experiences. Build, debug, and deploy together.
              </p>
            </div>

            {/* Live Status */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-300">Live from Bangladesh</span>
                </div>
                <MapPin size={16} className="text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gray-400" />
                <span className="font-mono text-sm text-white">
                  {currentTime.toLocaleTimeString('en-US', { 
                    timeZone: 'Asia/Dhaka',
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${link.color}`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${link.bgColor}`}></div>
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap transition-all duration-300 ${hoveredSocial === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      {link.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest updates on new features and collaboration tools.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/50 focus:bg-white/10 transition-all duration-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2025 RealCodeLab — Made with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>by</span>
              <span className="text-pink-300 font-semibold">Syma Sultana</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg text-purple-300 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;