import React from 'react';

const LearningHub = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-purple-600 rounded-full p-2 mr-4">
            <span className="text-white text-xl">📚</span>
          </div>
          <h1 className="text-3xl font-bold text-purple-900">Learning Hub</h1>
        </div>
        <p className="text-lg text-gray-700">
          Dependencies, evaluation dimensions, and barriers & risks content will be implemented here.
        </p>
      </section>
    </div>
  );
};

export default LearningHub;