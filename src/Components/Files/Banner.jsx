import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0e0e0e] min-h-screen  pt-14 flex items-center">



      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

          {/* Text Section */}
          <div
            className={`flex-1 text-left max-w-2xl ml-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent block">
                Collaborate
              </span>
              <span className="bg-gradient-to-r from-pink-400 via-blue-200 to-white bg-clip-text text-transparent block">
                Code. Compile in Real Time.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed font-light">
              Experience seamless collaboration with your team — edit, run, and debug code in real-time.
              <br className="hidden md:block" />
              <span className="text-yellow-300 font-medium">No setup needed.</span> Just share a link and start building together in a live environment.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/enter"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
               Enter Code Room
                 
                </span>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div
            className={`flex-1 flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
          >
            {/* Outer Glow */}
            {/* insert means it work on the inner section. if insert value is more big the it show the box or container more small in size */}
            <div className="absolute inset-16 bg-purple-500 opacity-30 blur-3xl rounded-full group-hover:opacity-70 transition-opacity duration-500 z-0" />

            <div className="relative group max-w-[600px] w-full h-auto rounded-lg overflow-hidden">
              {/* Main Image */}
              <img
                src="/assets/2.png"
                alt="Banner"
                className="w-80% h-80% object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>





        </div>
      </div>


    </div>
  );
};

export default Banner;