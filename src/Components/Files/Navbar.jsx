import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative">
      {/* Top Navigation Bar */}
      <div className="navbar fixed bg-[#0e0e0e] backdrop-blur-md bg-opacity-95 text-white px-6 py-3 top-0 z-50 shadow-2xl border-b border-white/10">

        {/* Logo Section */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative group">
            <img
              className="w-12 h-12 object-cover  transition-all duration-300  group-hover:scale-110 group-hover:rotate-6"
              src="/assets/logo.png"
              alt="Logo"
            />
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-200 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-100 transition-all duration-300">
            RealCODELab
          </span>
        </div>

        {/* Desktop Menu */}
       <ul className="hidden lg:flex gap-8 items-center">
  <li>
    <a
      href="#home"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Home</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#how-it-works"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Workflow</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#features"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Features</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#testimonials"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Testimonials</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="/login"
      className="relative text-white btn bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-green-500/20 border border-white/20 px-10 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-yellow-500/25 hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Login</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
</ul>


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
        >
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#0f1f60] to-[#1a2b7a] transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-6">
          <ul className="space-y-6">
  <li>
    <a
      href="#home"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Home</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#how-it-works"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Workflow</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#features"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Features</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="#testimonials"
      className="relative text-white hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Testimonials</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
  <li>
    <a
      href="/login"
      className="relative text-white btn bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-green-500/20 border border-white/20 px-10 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-yellow-500/25 hover:text-yellow-400 text-[16px] font-medium transition-all duration-300 group"
    >
      <span className="relative z-10">Login</span>
      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
