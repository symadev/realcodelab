import React, { useState } from "react";
import { Users, Edit3, RotateCcw, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Users className="text-yellow-400 text-4xl" />,
    title: "Create or Join a Room",
    description: "Start a new collaboration room or join one using a unique link. No setup required.",
    color: "yellow",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/25",
    step: "01"
  },
  {
    icon: <Edit3 className="text-blue-400 text-4xl" />,
    title: "Write and Edit Code",
    description: "Write code together in real-time with syntax highlighting and intelligent suggestions.",
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/25",
    step: "02"
  },
  {
    icon: <RotateCcw className="text-purple-400 text-4xl" />,
    title: "Live Sync",
    description: "See changes as they happen. Everyone in the session stays perfectly in sync.",
    color: "purple",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/25",
    step: "03"
  },
  {
    icon: <Rocket className="text-green-400 text-4xl" />,
    title: "Compile and Run",
    description: "Execute code instantly and view results within the editor. Powered by secure sandboxed backend.",
    color: "green",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    glow: "shadow-green-500/25",
    step: "04"
  },
];

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#0e0e0e] text-white overflow-hidden relative" id="how-it-works">
      

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-blue-300 to-green-300 bg-clip-text text-transparent leading-tight">
            How It Works
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience seamless collaboration in just four simple steps
          </p>
        </div>

        {/* Process flow with connecting lines */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-blue-400 via-purple-400 to-green-400 opacity-30"></div>
          
          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${step.gradient} backdrop-blur-sm p-8 rounded-2xl border ${step.border} shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <span className="text-white/80 font-bold text-sm">{step.step}</span>
                </div>

                
               
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with enhanced animation */}
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="w-20 h-20 rounded-2xl bg-black/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-black/50 transition-all duration-300 relative overflow-hidden">
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-sm transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center space-x-2">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i <= index ? 'bg-white/60' : 'bg-white/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

             

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl transform -rotate-45 -translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-green-500/20 rounded-full border border-white/20 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Ready to collaborate?</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <span className="text-sm text-white font-semibold">Get started in seconds</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;