import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#301536d3] via-[#37016a] to-[#0f1f60] min-h-screen flex items-center">



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
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-white bg-clip-text text-transparent block">
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
                to="/AboutUs"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  About Us
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>


          {/* Image Section */}
          <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group w-[400px] h-[400px]">

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-500 opacity-30 blur-3xl group-hover:opacity-80 transition-opacity duration-500 animate-pulse z-0" />

              {/* Main Image (no round) */}
              <div className="relative z-10  group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/banner-2.png"
                  alt="Banner"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>



        </div>
      </div>


    </div>
  );
};

export default Banner;