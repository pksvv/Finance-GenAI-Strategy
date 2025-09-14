import React from 'react';

const LearningHub = () => {
  const evaluationDimensions = [
    {
      dimension: "Business Value & Strategy Alignment",
      description: "Ensures every agent supports finance's strategic goals and delivers measurable business value",
      criteria: ["Strategic goal alignment", "ROI potential", "Business impact measurement", "Value realization timeline"],
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-300",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      dimension: "Data & Infrastructure Readiness",
      description: "Validates whether high-quality, governed data and infrastructure exist before scaling AI",
      criteria: ["Data quality assessment", "Governance framework", "Infrastructure scalability", "Integration capabilities"],
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-300",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      dimension: "Model Feasibility",
      description: "Checks if the right AI approach (LLM, RAG, fine-tuning, ERP integration) is practical and sustainable",
      criteria: ["Technical feasibility", "Model complexity", "Training data availability", "Maintenance requirements"],
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-300",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      dimension: "Risk & Governance",
      description: "Ensures compliance, explainability, and audit readiness critical in regulated finance",
      criteria: ["Regulatory compliance", "Audit trail capability", "Explainable AI", "Security controls"],
      color: "from-red-500 to-orange-600",
      textColor: "text-red-300",
      bgColor: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/30"
    },
    {
      dimension: "Financial Impact & ROI",
      description: "Compares cost to expected business benefit, avoiding wasteful experiments",
      criteria: ["Implementation cost", "Expected savings", "Payback period", "Cost-benefit analysis"],
      color: "from-yellow-500 to-amber-600",
      textColor: "text-yellow-300",
      bgColor: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-400/30"
    },
    {
      dimension: "Change Management & Adoption",
      description: "Ensures teams are trained, onboarded, and trust the agents for successful implementation",
      criteria: ["User training programs", "Change readiness", "Adoption metrics", "Support systems"],
      color: "from-teal-500 to-cyan-600",
      textColor: "text-teal-300",
      bgColor: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-400/30"
    }
  ];

  const dependencies = [
    {
      title: "Trusted, Governed Data Products",
      description: "Single source of truth with established data lineage and quality controls",
      icon: "🗄️"
    },
    {
      title: "Documented SOPs & Workflows", 
      description: "Rules, approvals, and compliance embedded into agent decision-making",
      icon: "📋"
    },
    {
      title: "Baseline Metrics",
      description: "Cycle time, error rates, ROI, and compliance outcome measurements",
      icon: "📊"
    },
    {
      title: "Technology Stack",
      description: "LLMs, RAG, orchestration layer, and ERP integration capabilities",
      icon: "🛠️"
    },
    {
      title: "Knowledge Graphs & Ontologies",
      description: "Link business concepts across datasets for explainable reasoning",
      icon: "🕸️"
    },
    {
      title: "Governance & Security",
      description: "Audit trails, explainability, and compliance guardrails",
      icon: "🛡️"
    }
  ];

  const barriers = [
    { risk: "Data Quality & Accessibility", impact: "High", mitigation: "Data governance initiative" },
    { risk: "Talent Gaps", impact: "Medium", mitigation: "Training programs & external partnerships" },
    { risk: "Security & Privacy", impact: "High", mitigation: "Zero-trust architecture & encryption" },
    { risk: "Regulatory Compliance", impact: "High", mitigation: "Compliance-by-design approach" },
    { risk: "ROI Clarity", impact: "Medium", mitigation: "Pilot programs with clear metrics" },
    { risk: "Adoption Resistance", impact: "Medium", mitigation: "Change management & user involvement" }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">📚</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning Hub</h1>
        </div>
        <p className="text-2xl text-slate-200 leading-relaxed">
          Critical frameworks, dependencies, and evaluation criteria for successful GenAI implementation in enterprise finance.
        </p>
      </section>

      {/* Evaluation Dimensions */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">⚖️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Evaluation Dimensions</h2>
        </div>
        <p className="text-xl text-slate-200 mb-10 leading-relaxed">
          Why evaluation dimensions matter: They ensure GenAI initiatives deliver measurable value, reduce risks, and align with enterprise strategy rather than being built for hype.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {evaluationDimensions.map((dimension, index) => (
            <div key={index} className={`bg-gradient-to-br ${dimension.bgColor} backdrop-blur-sm border ${dimension.borderColor} rounded-xl p-8 hover:border-opacity-50 transition-all`}>
              <h3 className={`text-2xl font-bold ${dimension.textColor} mb-4`}>
                {dimension.dimension}
              </h3>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                {dimension.description}
              </p>
              <div className="space-y-3">
                <h4 className={`text-lg font-semibold ${dimension.textColor}`}>Key Criteria:</h4>
                <ul className="space-y-2">
                  {dimension.criteria.map((criterion, idx) => (
                    <li key={idx} className="text-slate-300 text-lg">• {criterion}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dependencies */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🏗️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Critical Dependencies</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dependencies.map((dependency, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 backdrop-blur-sm border border-slate-400/30 rounded-xl p-8 hover:border-slate-300/50 transition-all">
              <div className="text-4xl mb-6">{dependency.icon}</div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">
                {dependency.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {dependency.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Barriers & Risks */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">⚠️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">Barriers & Risk Mitigation</h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="grid gap-6">
            {barriers.map((barrier, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-500/10 to-red-500/10 backdrop-blur-sm border border-amber-400/30 rounded-xl p-6 hover:border-amber-300/50 transition-all">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2">{barrier.risk}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      barrier.impact === 'High' ? 'bg-red-500/20 text-red-300 border border-red-400/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                    }`}>
                      {barrier.impact} Impact
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-slate-200 leading-relaxed">
                      <strong className="text-green-400">Mitigation:</strong> {barrier.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningHub;