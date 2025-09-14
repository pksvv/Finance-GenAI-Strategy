import React from 'react';

const StrategyOverview = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Vision Statement */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-600 rounded-full p-2 mr-4">
            <span className="text-white text-xl">🎯</span>
          </div>
          <h1 className="text-3xl font-bold text-indigo-900">Vision Statement</h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Finance will be <strong className="text-indigo-900">reimagined through the rise of GenAI agents</strong> that act as intelligent partners across core functions. These agents will start as copilots, guiding teams with natural-language insights and automating routine tasks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Over time, copilots will continuously learn and evolve, becoming smarter and more capable with each cycle.
          </p>
          <div className="bg-indigo-100 border-l-4 border-indigo-600 p-4 rounded-r-lg">
            <p className="text-indigo-900 font-medium">
              <strong>Long-term Vision:</strong> A near-autonomous agent ecosystem, where finance agents collaborate with each other — seamlessly passing data, context, and actions — to handle end-to-end workflows across Tax, Treasury, Controllership, and FP&A.
            </p>
            <p className="text-indigo-800 mt-2">
              Humans remain in the loop as overseers and decision-makers, while agents take on the heavy lifting of execution, analysis, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Shift */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-purple-100 rounded-full p-2 mr-3 text-purple-800">🔄</span>
          Strategic Shift
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">From: Scattered Use Cases</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Isolated AI experiments</li>
              <li>• Manual data extraction</li>
              <li>• Bespoke queries & reports</li>
              <li>• Disconnected workflows</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">To: Data Products + AI Agents</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Governed, trusted data assets</li>
              <li>• Intelligent agent stewards</li>
              <li>• Natural-language access</li>
              <li>• Audit-ready outputs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Data Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Trial Balance', 'General Ledger', 'AR/AP', 'Treasury', 'Tax Data', 'Reconciliations'].map((product) => (
              <div key={product} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-600 font-medium">{product}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4 italic">
            Each data product has an intelligent steward that knows schema, lineage, business meaning, and provides natural-language access.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-blue-100 rounded-full p-2 mr-3 text-blue-800">🗺️</span>
          Roadmap to Near Autonomous Finance
        </h2>
        
        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Phase 1 – Foundation</h3>
                  <p className="text-blue-800 font-medium mb-3">0–6 months</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Identify and productize 3–4 datasets</li>
                    <li>• Define metadata, lineage, ontologies, knowledge graphs</li>
                    <li>• Establish governance framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="bg-purple-600 rounded-full p-2 mr-4 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Phase 2 – Copilot Stage</h3>
                  <p className="text-purple-800 font-medium mb-3">6–12 months</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Launch copilots for each dataset (Trial Balance, Tax Audit Management)</li>
                    <li>• Capabilities: plain-language queries, variance commentary</li>
                    <li>• Anomaly detection, compliance narratives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="bg-green-600 rounded-full p-2 mr-4 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">Phase 3 – Agent Ecosystem</h3>
                  <p className="text-green-800 font-medium mb-3">12–18 months</p>
                  <ul className="text-green-700 space-y-1">
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
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-green-100 rounded-full p-2 mr-3 text-green-800">📈</span>
          Transformation Outcomes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">50-90%</div>
            <div className="text-sm font-medium text-gray-900 mb-1">Efficiency</div>
            <div className="text-xs text-gray-600">Cycle time reduction</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm font-medium text-gray-900 mb-1">Compliance</div>
            <div className="text-xs text-gray-600">Audit-ready, proactive anomaly detection</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">2x</div>
            <div className="text-sm font-medium text-gray-900 mb-1">Value-add</div>
            <div className="text-xs text-gray-600">Time on strategy vs. compliance</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
            <div className="text-sm font-medium text-gray-900 mb-1">Future-ready</div>
            <div className="text-xs text-gray-600">Reusable data products & connected agents</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyOverview;