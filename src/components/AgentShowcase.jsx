import React from 'react';

const AgentShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-green-600 rounded-full p-2 mr-4">
            <span className="text-white text-xl">🤖</span>
          </div>
          <h1 className="text-3xl font-bold text-green-900">Agent Showcase</h1>
        </div>
        <p className="text-lg text-gray-700">
          Priority problem areas and use cases for Controllers, Tax, Treasury, and FP&A agents will be showcased here.
        </p>
      </section>
    </div>
  );
};

export default AgentShowcase;