import React, { useState, useEffect } from "react";
import { Zap, Users, Code, GitBranch, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Zap className="text-yellow-400 text-4xl" />,
    title: "Real-Time Code Sharing",
    description: "Collaborate instantly using WebSocket-based live code synchronization with zero latency.",
    color: "from-yellow-400 to-orange-500",
    bgGlow: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    delay: "delay-100"
  },
  {
    icon: <Users className="text-blue-400 text-4xl" />,
    title: "Multi-User Support",
    description: "Multiple users can join the same session and code together in real-time seamlessly.",
    color: "from-blue-400 to-cyan-500",
    bgGlow: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    delay: "delay-200"
  },
  {
    icon: <Code className="text-green-400 text-4xl" />,
    title: "Built-In Compiler",
    description: "Run and test your code instantly with integrated Judge0 compiler support for 60+ languages.",
    color: "from-green-400 to-emerald-500",
    bgGlow: "bg-green-400/10",
    borderColor: "border-green-400/20",
    delay: "delay-300"
  },
  {
    icon: <GitBranch className="text-purple-400 text-4xl" />,
    title: "CRDT Support (Yjs)",
    description: "Conflict-free collaboration powered by Yjs and advanced CRDT algorithms for seamless merging.",
    color: "from-purple-400 to-pink-500",
    bgGlow: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    delay: "delay-400"
  },
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(features.map((_, index) => index));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#0e0e0e] text-white overflow-hidden" id="features">
      {/* Animated Background Elements */}
     

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-200">Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-cyan-300 bg-clip-text text-transparent block mb-2">
               Key Features
            </span>
           
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of collaborative coding with cutting-edge features designed for modern development teams.
          </p>
        </div>

        {/* Enhanced Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } ${feature.delay}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl`} />
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-opacity-50 overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-4.5z'/%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                </div>
                
                
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.bgGlow} border ${feature.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude'
                  }} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                 
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative overflow-hidden bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-green-500/20  border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                 Create The Room  To Try All Features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;