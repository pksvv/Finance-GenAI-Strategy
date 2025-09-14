import React from 'react';

const AgentShowcase = () => {
  const agentCategories = [
    {
      category: "Finance & Controllership",
      icon: "📊",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-400/30",
      agents: [
        {
          name: "Reconciliation Agent",
          description: "Entity resolution, disambiguation, and anomaly detection for account reconciliations",
          capabilities: ["Automated matching algorithms", "Exception handling", "Variance analysis", "Audit trail generation"],
          impact: "85% reduction in manual effort"
        },
        {
          name: "Controllers Copilot",
          description: "Close variance analysis, flux analysis, and regulatory reporting automation",
          capabilities: ["Period-over-period analysis", "Management reporting", "Regulatory compliance", "Commentary generation"],
          impact: "70% faster month-end close"
        },
        {
          name: "FP&A Copilot",
          description: "Forecasting, sensitivity analysis, and management reporting commentary",
          capabilities: ["Predictive modeling", "Scenario planning", "Budget variance analysis", "Executive dashboards"],
          impact: "60% improvement in forecast accuracy"
        },
        {
          name: "Treasury Copilot",
          description: "Liquidity projections, balance sheet optimization, and ALM scenario analysis",
          capabilities: ["Cash flow forecasting", "Risk management", "Investment optimization", "Regulatory reporting"],
          impact: "50% better liquidity management"
        }
      ]
    },
    {
      category: "Tax & Compliance",
      icon: "⚖️",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      agents: [
        {
          name: "Tax Audit Management Agent",
          description: "Audit readiness, evidence linking, and compliance narrative generation",
          capabilities: ["Document automation", "Evidence correlation", "Risk assessment", "Compliance tracking"],
          impact: "90% reduction in audit preparation time"
        },
        {
          name: "E-Invoicing Agent",
          description: "Structured/unstructured invoice handling, validation, anomaly detection, compliance filing",
          capabilities: ["OCR processing", "Validation rules", "Anomaly detection", "Regulatory filing"],
          impact: "95% automation of invoice processing"
        },
        {
          name: "Indirect Tax Agent",
          description: "ITC eligibility, RCM liability, blocked credits evaluation",
          capabilities: ["Tax determination", "Credit optimization", "Liability calculation", "Compliance monitoring"],
          impact: "80% accuracy improvement"
        },
        {
          name: "Transfer Pricing Agent",
          description: "TP report automation, intercompany risk checks, and compliance monitoring",
          capabilities: ["Report generation", "Risk analysis", "Benchmarking", "Documentation"],
          impact: "75% reduction in TP preparation"
        },
        {
          name: "Regulatory Change Monitor",
          description: "Tracks global/regional tax rule changes and recommends configuration updates",
          capabilities: ["Change detection", "Impact analysis", "Update recommendations", "Implementation tracking"],
          impact: "100% compliance coverage"
        },
        {
          name: "Compliance Assistant",
          description: "Draft tax returns, reconcile with GL, highlight anomalies",
          capabilities: ["Return preparation", "GL reconciliation", "Anomaly flagging", "Review workflows"],
          impact: "60% faster return preparation"
        }
      ]
    },
    {
      category: "Broader Enterprise Finance",
      icon: "🏢",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30",
      agents: [
        {
          name: "Procure-to-Pay Agent",
          description: "Source-to-pay automation, AP helpdesk, and spend optimization",
          capabilities: ["Purchase automation", "Vendor management", "Spend analysis", "Exception handling"],
          impact: "70% P2P cycle reduction"
        },
        {
          name: "Product Control Agent",
          description: "P&L attribution, valuation model automation, and IPV processing",
          capabilities: ["Attribution analysis", "Model validation", "Risk metrics", "Performance reporting"],
          impact: "80% automation of control processes"
        },
        {
          name: "Investor Relations Copilot",
          description: "Analyst chatbot, automated investor communications, sentiment analysis",
          capabilities: ["Query automation", "Communication drafting", "Sentiment tracking", "Stakeholder engagement"],
          impact: "90% response time improvement"
        }
      ]
    }
  ];

  const eInvoicingCase = {
    title: "E-Invoicing Agent Deep Dive",
    processFlow: [
      { step: "Data Ingestion", description: "OCR for unstructured invoices, API for structured data" },
      { step: "Validation", description: "Business rules, tax compliance, vendor verification" },
      { step: "Rule Matching", description: "Automated GL coding, approval routing, exception handling" },
      { step: "Anomaly Detection", description: "ML-based fraud detection, duplicate identification" },
      { step: "Reporting", description: "Real-time dashboards, compliance reports, audit trails" },
      { step: "Compliance Filing", description: "Automated regulatory submissions, tax authority integration" }
    ],
    oracleOOTB: "XML processing, standard tax rules, outbound reporting capabilities",
    siPartnerRole: "Edge case handling, complex compliance scenarios, ERP integration",
    genAIGaps: "OCR for unstructured invoices, anomaly dashboards, predictive monitoring, natural-language Q&A on invoice validity"
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🤖</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Agent Showcase</h1>
        </div>
        <p className="text-2xl text-slate-200 leading-relaxed">
          Priority GenAI agents transforming Finance operations across Controllers, Tax, Treasury, and FP&A functions.
        </p>
      </section>

      {/* Agent Categories */}
      {agentCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="flex items-center mb-10">
            <div className={`bg-gradient-to-r ${category.color} rounded-full p-4 mr-6`}>
              <span className="text-white text-2xl">{category.icon}</span>
            </div>
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${category.color.replace('to-', 'to-').replace('500', '400').replace('600', '400')} bg-clip-text text-transparent`}>
              {category.category}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {category.agents.map((agent, agentIndex) => (
              <div key={agentIndex} className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-xl p-8 hover:border-opacity-50 transition-all group`}>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {agent.name}
                  </h3>
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg px-3 py-1">
                    <span className="text-green-300 text-sm font-medium">{agent.impact}</span>
                  </div>
                </div>
                
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-200">Key Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {agent.capabilities.map((capability, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-slate-300 text-sm">• {capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* E-Invoicing Case Study */}
      <section className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">📄</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {eInvoicingCase.title}
          </h2>
        </div>
        
        {/* Process Flow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">End-to-End Process Flow</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {eInvoicingCase.processFlow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl p-6 hover:border-indigo-300/50 transition-all">
                  <div className="text-center">
                    <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-indigo-300 mb-3">{step.step}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < eInvoicingCase.processFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-3 -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8">
            <h4 className="text-xl font-bold text-blue-300 mb-4">Oracle OOTB</h4>
            <p className="text-lg text-blue-200 leading-relaxed">{eInvoicingCase.oracleOOTB}</p>
          </div>
          
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h4 className="text-xl font-bold text-green-300 mb-4">SI Partner Role</h4>
            <p className="text-lg text-green-200 leading-relaxed">{eInvoicingCase.siPartnerRole}</p>
          </div>
          
          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8">
            <h4 className="text-xl font-bold text-purple-300 mb-4">GenAI Gaps to Fill</h4>
            <p className="text-lg text-purple-200 leading-relaxed">{eInvoicingCase.genAIGaps}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentShowcase;