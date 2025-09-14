import React from 'react';

const StrategyOverview = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Vision Statement */}
      <section className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Vision Statement</h1>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
          <p className="text-2xl text-slate-200 leading-relaxed mb-8">
            Finance will be <strong className="text-indigo-400">reimagined through the rise of GenAI agents</strong> that act as intelligent partners across core functions. These agents will start as copilots, guiding teams with natural-language insights and automating routine tasks.
          </p>
          <p className="text-2xl text-slate-200 leading-relaxed mb-8">
            Over time, copilots will continuously learn and evolve, becoming smarter and more capable with each cycle.
          </p>
          <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border-l-8 border-indigo-400 p-8 rounded-r-xl backdrop-blur-sm">
            <p className="text-xl text-indigo-300 font-medium leading-relaxed">
              <strong className="text-indigo-400 text-2xl">Long-term Vision:</strong> A near-autonomous agent ecosystem, where finance agents collaborate with each other — seamlessly passing data, context, and actions — to handle end-to-end workflows across Tax, Treasury, Controllership, and FP&A.
            </p>
            <p className="text-xl text-indigo-200 mt-6 leading-relaxed">
              Humans remain in the loop as overseers and decision-makers, while agents take on the heavy lifting of execution, analysis, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Shift */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🔄</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Strategic Shift</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-red-300 mb-6">From: Scattered Use Cases</h3>
            <ul className="text-xl text-red-200 space-y-4">
              <li>• Isolated AI experiments</li>
              <li>• Manual data extraction</li>
              <li>• Bespoke queries & reports</li>
              <li>• Disconnected workflows</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-300 mb-6">To: Data Products + AI Agents</h3>
            <ul className="text-xl text-green-200 space-y-4">
              <li>• Governed, trusted data assets</li>
              <li>• Intelligent agent stewards</li>
              <li>• Natural-language access</li>
              <li>• Audit-ready outputs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
          <h3 className="text-2xl font-semibold text-slate-200 mb-8">Core Data Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Trial Balance', 'General Ledger', 'AR/AP', 'Treasury', 'Tax Data', 'Reconciliations'].map((product) => (
              <div key={product} className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center hover:border-blue-300/50 transition-colors">
                <div className="text-blue-300 font-medium text-lg">{product}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-300 mt-8 italic text-lg leading-relaxed">
            Each data product has an intelligent steward that knows schema, lineage, business meaning, and provides natural-language access.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">🗺️</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Roadmap to Near Autonomous Finance</h2>
        </div>
        
        <div className="space-y-10">
          {/* Phase 1 */}
          <div className="relative group">
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-4 mr-8 mt-2 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8 hover:border-blue-300/50 transition-all">
                  <h3 className="text-3xl font-bold text-blue-300 mb-4">Phase 1 – Foundation</h3>
                  <p className="text-blue-200 font-medium mb-6 text-xl">0–6 months</p>
                  <ul className="text-blue-100 space-y-3 text-lg">
                    <li>• Identify and productize 3–4 datasets</li>
                    <li>• Define metadata, lineage, ontologies, knowledge graphs</li>
                    <li>• Establish governance framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative group">
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-4 mr-8 mt-2 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 hover:border-purple-300/50 transition-all">
                  <h3 className="text-3xl font-bold text-purple-300 mb-4">Phase 2 – Copilot Stage</h3>
                  <p className="text-purple-200 font-medium mb-6 text-xl">6–12 months</p>
                  <ul className="text-purple-100 space-y-3 text-lg">
                    <li>• Launch copilots for each dataset (Trial Balance, Tax Audit Management)</li>
                    <li>• Capabilities: plain-language queries, variance commentary</li>
                    <li>• Anomaly detection, compliance narratives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative group">
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mr-8 mt-2 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-300/50 transition-all">
                  <h3 className="text-3xl font-bold text-green-300 mb-4">Phase 3 – Agent Ecosystem</h3>
                  <p className="text-green-200 font-medium mb-6 text-xl">12–18 months</p>
                  <ul className="text-green-100 space-y-3 text-lg">
                    <li>• Interconnect agents into near-autonomous ecosystems</li>
                    <li>• Agents collaborate across functions (TB → Tax → Treasury → FP&A)</li>
                    <li>• Launch Enterprise Finance Copilot to orchestrate requests</li>
                    <li>• Humans focus on oversight, strategy, and judgment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Outcomes */}
      <section className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
        <div className="flex items-center mb-10">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mr-6">
            <span className="text-white text-2xl">📈</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transformation Outcomes</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:bg-white/10 hover:border-green-300/50 transition-all group">
            <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">50-90%</div>
            <div className="text-xl font-medium text-green-300 mb-3">Efficiency</div>
            <div className="text-lg text-green-200">Cycle time reduction</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8 hover:bg-white/10 hover:border-blue-300/50 transition-all group">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-xl font-medium text-blue-300 mb-3">Compliance</div>
            <div className="text-lg text-blue-200">Audit-ready, proactive anomaly detection</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 hover:bg-white/10 hover:border-purple-300/50 transition-all group">
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">2x</div>
            <div className="text-xl font-medium text-purple-300 mb-3">Value-add</div>
            <div className="text-lg text-purple-200">Time on strategy vs. compliance</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/30 rounded-xl p-8 hover:bg-white/10 hover:border-indigo-300/50 transition-all group">
            <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">∞</div>
            <div className="text-xl font-medium text-indigo-300 mb-3">Future-ready</div>
            <div className="text-lg text-indigo-200">Reusable data products & connected agents</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyOverview;