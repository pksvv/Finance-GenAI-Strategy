import React, { useState } from 'react';

const ArchitectureView = () => {
  const [selectedUseCase, setSelectedUseCase] = useState('tax-copilot');

  const architectureLayers = [
    {
      layer: "Data Sources",
      description: "Enterprise systems feeding the GenAI ecosystem",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-400/30",
      components: [
        { name: "Oracle ERP", icon: "🏢", description: "Core financial data" },
        { name: "Tax Systems", icon: "⚖️", description: "Tax compliance data" },
        { name: "Treasury", icon: "💰", description: "Cash & liquidity" },
        { name: "Concur", icon: "💳", description: "Expense management" },
        { name: "Legacy Systems", icon: "🗄️", description: "Historical data" }
      ]
    },
    {
      layer: "Core Data Products",
      description: "Governed, trusted data assets with intelligent stewards",
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-400/30",
      components: [
        { name: "Trial Balance", icon: "📊", description: "Account balances" },
        { name: "General Ledger", icon: "📋", description: "Transaction details" },
        { name: "Reconciliations", icon: "🔄", description: "Matching data" },
        { name: "FP&A Models", icon: "📈", description: "Planning data" },
        { name: "Tax Records", icon: "📄", description: "Compliance data" }
      ]
    },
    {
      layer: "Agent/Copilot Layer",
      description: "Intelligent GenAI agents with specialized domain knowledge",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30",
      components: [
        { name: "Tax Copilot", icon: "🤖", description: "Audit & compliance" },
        { name: "Controllers Copilot", icon: "🤖", description: "Close automation" },
        { name: "Treasury Copilot", icon: "🤖", description: "Liquidity management" },
        { name: "FP&A Copilot", icon: "🤖", description: "Forecasting" },
        { name: "Reconciliation Agent", icon: "🤖", description: "Matching engine" }
      ]
    },
    {
      layer: "User/Experience Layer",
      description: "Interfaces for business users to interact with agents",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-400/30",
      components: [
        { name: "Executive Dashboards", icon: "📊", description: "KPI monitoring" },
        { name: "Chat Interfaces", icon: "💬", description: "Natural language" },
        { name: "Self-Service Portals", icon: "🌐", description: "User workflows" },
        { name: "Mobile Apps", icon: "📱", description: "On-the-go access" },
        { name: "API Gateway", icon: "🔌", description: "System integration" }
      ]
    }
  ];

  const governanceOverlay = [
    { name: "Metadata Management", icon: "📖", description: "Schema, lineage tracking" },
    { name: "Audit Trails", icon: "📝", description: "Complete decision history" },
    { name: "Security Controls", icon: "🛡️", description: "Access & encryption" },
    { name: "Compliance Framework", icon: "✅", description: "Regulatory adherence" }
  ];

  const useCases = {
    'tax-copilot': {
      name: "Tax Copilot Use Case Flow",
      description: "End-to-end audit preparation and compliance workflow",
      flow: [
        { 
          step: "Data Sources", 
          detail: "Oracle ERP + Tax Systems",
          highlight: true,
          connections: ["Trial Balance", "Tax Records"]
        },
        { 
          step: "Data Products", 
          detail: "Trial Balance + Tax Records",
          highlight: true,
          connections: ["Tax Copilot"]
        },
        { 
          step: "Tax Copilot", 
          detail: "Evidence linking, risk assessment",
          highlight: true,
          connections: ["Executive Dashboards", "Chat Interfaces"]
        },
        { 
          step: "User Experience", 
          detail: "Audit-ready reports + natural language Q&A",
          highlight: true,
          connections: []
        }
      ]
    },
    'reconciliation-agent': {
      name: "Reconciliation Agent Flow",
      description: "Automated account matching and exception handling",
      flow: [
        { 
          step: "Data Sources", 
          detail: "Oracle ERP + Legacy Systems",
          highlight: true,
          connections: ["General Ledger", "Reconciliations"]
        },
        { 
          step: "Data Products", 
          detail: "GL + Reconciliation data",
          highlight: true,
          connections: ["Reconciliation Agent"]
        },
        { 
          step: "Reconciliation Agent", 
          detail: "Entity resolution, anomaly detection",
          highlight: true,
          connections: ["Self-Service Portals", "Executive Dashboards"]
        },
        { 
          step: "User Experience", 
          detail: "Exception dashboards + automated matching",
          highlight: true,
          connections: []
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🏗️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Enterprise Finance Architecture</h1>
        </div>
        <p className="text-2xl text-slate-200 leading-relaxed">
          Comprehensive layered architecture enabling near-autonomous finance through intelligent agents and governed data products.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <h2 className="text-4xl font-bold text-white mb-10">Layered Architecture Diagram</h2>
        
        <div className="space-y-8">
          {architectureLayers.map((layer, layerIndex) => (
            <div key={layerIndex} className={`bg-gradient-to-r ${layer.bgColor} backdrop-blur-sm border ${layer.borderColor} rounded-2xl p-8`}>
              {/* Layer Header */}
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-r ${layer.color} rounded-full p-3 mr-6`}>
                  <span className="text-white text-xl font-bold">{layerIndex + 1}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{layer.layer}</h3>
                  <p className="text-xl text-slate-200">{layer.description}</p>
                </div>
              </div>

              {/* Layer Components */}
              <div className="grid md:grid-cols-5 gap-6">
                {layer.components.map((component, componentIndex) => (
                  <div key={componentIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 transition-all group">
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{component.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{component.name}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flow Arrows */}
              {layerIndex < architectureLayers.length - 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-white/20"></div>
                    <div className="text-white/50">⬇</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Governance Overlay */}
      <section className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🛡️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Governance & Compliance Overlay</h2>
        </div>
        
        <p className="text-xl text-slate-200 mb-10 leading-relaxed">
          Cross-cutting concerns ensuring security, compliance, and auditability across all layers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {governanceOverlay.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 hover:border-purple-300/50 transition-all">
              <div className="text-center">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">{item.name}</h3>
                <p className="text-lg text-purple-200 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Case Flow Mapping */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🔄</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Priority Use Case Flows</h2>
        </div>

        {/* Use Case Selector */}
        <div className="flex gap-4 mb-10">
          {Object.entries(useCases).map(([key, useCase]) => (
            <button
              key={key}
              onClick={() => setSelectedUseCase(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedUseCase === key
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              {useCase.name}
            </button>
          ))}
        </div>

        {/* Selected Use Case Flow */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm border border-indigo-400/30 rounded-xl p-10">
          <h3 className="text-3xl font-bold text-indigo-300 mb-4">{useCases[selectedUseCase].name}</h3>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">{useCases[selectedUseCase].description}</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {useCases[selectedUseCase].flow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm border border-indigo-400/40 rounded-xl p-8 hover:border-indigo-300/60 transition-all">
                  <div className="text-center">
                    <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-indigo-300 mb-4">{step.step}</h4>
                    <p className="text-lg text-slate-200 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
                
                {/* Flow Arrow */}
                {index < useCases[selectedUseCase].flow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                    <div className="absolute right-0 top-0 transform translate-x-1 -translate-y-1">
                      <div className="w-0 h-0 border-l-4 border-l-cyan-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">⚙️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Technology Stack Integration</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">Oracle Cloud Foundation</h3>
            <ul className="space-y-3 text-lg text-blue-200">
              <li>• Fusion Financials core</li>
              <li>• Standard reporting capabilities</li>
              <li>• XML processing for structured data</li>
              <li>• Basic workflow automation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">GenAI Enhancement Layer</h3>
            <ul className="space-y-3 text-lg text-purple-200">
              <li>• LLMs for natural language processing</li>
              <li>• RAG for contextual responses</li>
              <li>• ML for anomaly detection</li>
              <li>• OCR for document processing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Integration & Orchestration</h3>
            <ul className="space-y-3 text-lg text-green-200">
              <li>• API-first architecture</li>
              <li>• Event-driven workflows</li>
              <li>• Real-time data streaming</li>
              <li>• Microservices deployment</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitectureView;