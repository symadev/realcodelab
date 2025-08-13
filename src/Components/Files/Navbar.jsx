
import { useContext, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

import { AuthContext } from "../Provider/AuthContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { user, logOut } = useContext(AuthContext);




  const openLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const openRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };


  const closeLogin = () => setShowLoginModal(false);
  const closeRegister = () => setShowRegisterModal(false);



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
      <div className="navbar fixed bg-[#0e0e0e] backdrop-blur-md bg-opacity-95 text-white px-6 py-3 top-0 z-50 shadow-2xl">

        {/* Logo Section */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative group">
            <img
              className="w-10 h-10 object-cover  rounded-lg  transition-all duration-300  group-hover:scale-110 group-hover:rotate-6"
              src="/assets/logo.png"
              alt="Logo"
            />
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-200 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-100 transition-all duration-300">
            RCODELab
          </span>

          <button
           
            className="p-2 rounded dark:black text-purple-600 dark:text-white hover:scale-105 transition"
           
          >
             <Sun size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
      
          <li>

            {user ? (
              <>

                <button
                  onClick={handleLogout}
                  className="ml-2 px-4 py-2 bg-red-400 text-white rounded-full hover:bg-red-500 transition"
                >
                  Logout
                </button>

              
              </>
            ) : (
              <button
                onClick={openLogin}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-orange-600"
              >
                Login/SignUp
              </button>
            )}
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
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-6">
          <ul className="space-y-6">
            
            <li>

              {user ? (
                <>

                  <button
                    onClick={handleLogout}
                    className="ml-2 px-4 py-2 bg-red-400 text-white rounded-full hover:bg-red-500 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={openLogin}
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-orange-600"
                >
                  Login/SignUp
                </button>
              )}
            </li>
          </ul>

        </div>
      </div>

      {/* Modals */}
      <Login
        isOpen={showLoginModal}
        onRequestClose={closeLogin}
        openRegister={openRegister}
      />
      <SignUp
        isOpen={showRegisterModal}
        onRequestClose={closeRegister}
        openLogin={openLogin}
      />





    </nav>
  );
};

export default Navbar;
