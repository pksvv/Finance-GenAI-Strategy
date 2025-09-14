import React from 'react';

const ArchitectureView = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 rounded-full p-2 mr-4">
            <span className="text-white text-xl">🏗️</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-900">Architecture View</h1>
        </div>
        <p className="text-lg text-gray-700">
          Technical visualization, flow diagrams, and ERP integration strategy content will be implemented here.
        </p>
      </section>
    </div>
  );
};

export default ArchitectureView;