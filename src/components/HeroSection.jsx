import React from 'react';

const HeroSection = ({ onNavigate }) => {
  const keyMetrics = [
    {
      value: "50-90%",
      label: "Cycle Time Reduction",
      description: "Efficiency gains through automation",
      icon: "⚡"
    },
    {
      value: "18",
      label: "Months to Agent Ecosystem",
      description: "Foundation → Copilot → Autonomous",
      icon: "🚀"
    },
    {
      value: "2x",
      label: "Strategic Focus",
      description: "More time on strategy vs compliance",
      icon: "🎯"
    }
  ];

  const ctaButtons = [
    {
      text: "Explore Strategy",
      action: () => onNavigate('strategy'),
      primary: true,
      icon: "🎯"
    },
    {
      text: "View Roadmap",
      action: () => onNavigate('strategy'),
      primary: false,
      icon: "🗺️"
    },
    {
      text: "See E-invoicing Case",
      action: () => onNavigate('showcase'),
      primary: false,
      icon: "📄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Transforming Enterprise Finance
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
              Finance GenAI
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Strategy Portal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Reimagining finance through <span className="text-indigo-400 font-semibold">intelligent GenAI agents</span> that evolve from 
            copilots to near-autonomous ecosystems, transforming Tax, Treasury, Controllership, and FP&A workflows.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-indigo-400/50">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{metric.icon}</div>
                  <div className="text-5xl md:text-6xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {metric.value}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">The Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            <div className="text-lg text-slate-200 leading-relaxed space-y-6">
              <p>
                A <strong className="text-indigo-400">near-autonomous agent ecosystem</strong> where finance agents collaborate 
                seamlessly — passing data, context, and actions across Tax, Treasury, Controllership, and FP&A functions.
              </p>
              <p>
                Humans remain as <strong className="text-purple-400">strategic overseers and decision-makers</strong>, while 
                agents handle the heavy lifting of execution, analysis, and compliance with audit-ready, explainable outputs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {ctaButtons.map((cta, index) => (
              <button
                key={index}
                onClick={cta.action}
                className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  cta.primary
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-2xl hover:shadow-indigo-500/25'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white'
                }`}
              >
                <span className="text-xl group-hover:animate-pulse">{cta.icon}</span>
                <span className="text-lg">{cta.text}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-12">
            <button
              onClick={() => onNavigate('strategy')}
              className="group flex items-center gap-2 mx-auto text-slate-400 hover:text-indigo-400 transition-colors duration-300"
            >
              <span>Scroll to explore</span>
              <div className="transform group-hover:translate-y-1 transition-transform duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;