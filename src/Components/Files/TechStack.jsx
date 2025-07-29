import React, { useState } from "react";
import {
  Code,
  Cpu,
  Server,
  Wifi,
  GitBranch,
  Zap,
} from "lucide-react";

const techStack = [
  {
    icon: <Cpu className="text-cyan-400 text-5xl" />,
    name: "React",
    description: "Frontend framework for building responsive UI.",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/25"
  },
  {
    icon: <Code className="text-indigo-400 text-5xl" />,
    name: "Monaco Editor",
    description: "Powerful VSCode-like code editor integration.",
    color: "indigo",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/25"
  },
  {
    icon: <Server className="text-green-400 text-5xl" />,
    name: "FastAPI",
    description: "High-performance backend API using Python.",
    color: "green",
    gradient: "from-green-500/20 to-teal-500/20",
    border: "border-green-500/30",
    glow: "shadow-green-500/25"
  },
  {
    icon: <Wifi className="text-yellow-400 text-5xl" />,
    name: "WebSocket",
    description: "Enables real-time collaboration and communication.",
    color: "yellow",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/25"
  },
  {
    icon: <GitBranch className="text-purple-400 text-5xl" />,
    name: "Yjs (CRDT)",
    description: "Conflict-free real-time data sync using CRDT.",
    color: "purple",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/25"
  },
  {
    icon: <Zap className="text-pink-400 text-5xl" />,
    name: "Judge0 API",
    description: "Online compiler to compile and execute code instantly.",
    color: "pink",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
    glow: "shadow-pink-500/25"
  },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0e0e0e] text-white overflow-hidden relative" id="tech-stack">
      
    

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technologies powering our platform
          </p>
        </div>

        {/* Enhanced grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${tech.gradient} backdrop-blur-sm p-8 rounded-2xl border ${tech.border} shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl ${hoveredIndex === index ? `shadow-2xl ${tech.glow}` : ''} transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with animation */}
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="w-20 h-20 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-black/40 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>

                {/* Text content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
                  {tech.description}
                </p>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-2xl transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TechStack;