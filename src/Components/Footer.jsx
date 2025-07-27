import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';



const Footer = () => {
 
  const [currentTime, setCurrentTime] = useState(new Date());


  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track mouse position for interactive effects
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 text-orange-500" />,
      url: 'https://github.com/symadev',
      color: 'hover:text-gray-800',
      label: 'View my GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-orange-500" />,
      url: 'https://www.linkedin.com/in/symasultana/',
      color: 'hover:text-blue-700',
      label: 'Connect with me on LinkedIn',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5 text-orange-500" />,
      url: 'https://x.com/home',
      color: 'hover:text-sky-600',
      label: 'Follow me on Twitter',
    },
    {
      name: 'Email',
      icon: <Instagram className="w-5 h-5 text-orange-500" />,
      url: 'mailto:symasultana02@gmail.com',
      color: 'hover:text-red-600',
      label: 'Send me an email',
    },
  ];


  return (
    <footer
      id="unique-footer"
      className="relative bg-blue-950  text-white overflow-hidden"
    >
      {/* Interactive background */}
      <div className="absolute inset-0">


     

    

      <div className="relative z-10 px-6 py-12">
        {/* Main content */}
        <div className="max-w-7xl mx-auto">

          {/* Top section with social links */}
          <div className={`text-center mb-8 transform transition-all duration-1000 `}>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Let's Connect
            </h3>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition duration-300 ${link.color}`}
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left side - Creator info */}
            <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 delay-200 `}>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 font-light tracking-wide">Created By</span>
                  <span
                    className="text-xl lg:text-xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    Syma Sultana
                  </span>
                </div>

                <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
                <div className="lg:hidden w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

                <span className="text-gray-400 font-light">© 2025 All Rights Reserved</span>
              </div>
            </div>

            {/* Center - Live info */}
            <div className={`flex flex-col items-center gap-2 transform transition-all duration-1000 delay-400 `}>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live from Bangladesh</span>
              </div>
              <div className="text-xs text-gray-500 font-mono">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>

            {/* Right side - Back to top button */}
            <div className={`flex items-center gap-4 transform transition-all duration-1000 delay-600 `}>

            

              {/* Enhanced scroll button */}
              <button
                onClick={scrollToTop}
                className="group relative w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-orange-500/30"
                title="Back to top"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <svg
                  className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                </svg>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
              </button>
            </div>
          </div>

         
        </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;