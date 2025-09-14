import React, { useState } from 'react';
import StrategyOverview from './StrategyOverview';
import LearningHub from './LearningHub';
import AgentShowcase from './AgentShowcase';
import ArchitectureView from './ArchitectureView';
import ErrorBoundary from './shared/ErrorBoundary';

const MainApplication = () => {
  const [activePage, setActivePage] = useState('strategy');
  const [discoveryState, setDiscoveryState] = useState({
    currentPage: 'landing',
    searchQuery: '',
    selectedDatasetId: null
  });
  const [contractContext, setContractContext] = useState(null);

  const navigationItems = [
    { id: 'strategy', label: 'Strategy Overview', icon: '🎯' },
    { id: 'learning', label: 'Learning Hub', icon: '📚' },
    { id: 'showcase', label: 'Agent Showcase', icon: '🤖' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' }
  ];

  const handleNavigation = (pageId) => {
    setActivePage(pageId);
    setDiscoveryState({
      currentPage: 'landing',
      searchQuery: '',
      selectedDatasetId: null
    });
    setContractContext(null);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'strategy':
        return <StrategyOverview />;
      case 'learning':
        return <LearningHub />;
      case 'showcase':
        return <AgentShowcase />;
      case 'architecture':
        return <ArchitectureView />;
      default:
        return <StrategyOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-900">
                Finance GenAI Strategy Portal
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Near-Autonomous Finance Vision
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                      activePage === item.id
                        ? 'bg-indigo-100 text-indigo-900 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Metrics */}
          <div className="p-4 mt-8 border-t">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Key Metrics</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-green-800">50-90%</div>
                <div className="text-xs text-green-600">Cycle Time Reduction</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-blue-800">18 months</div>
                <div className="text-xs text-blue-600">To Agent Ecosystem</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-lg font-bold text-purple-800">2x</div>
                <div className="text-xs text-purple-600">Strategic Focus</div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <ErrorBoundary>
            {renderActivePage()}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default MainApplication;