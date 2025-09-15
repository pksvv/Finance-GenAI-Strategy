import React, { useState } from 'react';
import HeroSection from './HeroSection';
import StrategyOverview from './StrategyOverview';
import LearningHub from './LearningHub';
import AgentShowcase from './AgentShowcase';
import ArchitectureView from './ArchitectureView';
import ErrorBoundary from './shared/ErrorBoundary';

const MainApplication = () => {
  const [activePage, setActivePage] = useState('hero');
  const [discoveryState, setDiscoveryState] = useState({
    currentPage: 'landing',
    searchQuery: '',
    selectedDatasetId: null
  });
  const [contractContext, setContractContext] = useState(null);

  const navigationItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
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
      case 'hero':
        return <HeroSection onNavigate={handleNavigation} />;
      case 'strategy':
        return <StrategyOverview />;
      case 'learning':
        return <LearningHub />;
      case 'showcase':
        return <AgentShowcase />;
      case 'architecture':
        return <ArchitectureView />;
      default:
        return <HeroSection onNavigate={handleNavigation} />;
    }
  };

  // Show full-screen hero without navigation
  if (activePage === 'hero') {
    return (
      <ErrorBoundary>
        {renderActivePage()}
      </ErrorBoundary>
    );
  }

  // Show navigation layout for other pages
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header - Fixed */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Finance GenAI Strategy Portal
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-300">
                Near-Autonomous Finance Vision
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Sidebar Navigation - Fixed */}
        <nav className="w-64 bg-slate-800/30 backdrop-blur-sm border-r border-slate-700/50 h-full fixed left-0 top-16 overflow-y-auto">
          <div className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                      activePage === item.id
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 text-indigo-300 font-medium'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
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
          <div className="p-4 mt-8 border-t border-slate-700/50">
            <h3 className="text-sm font-medium text-slate-200 mb-3">Key Metrics</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 p-3 rounded-lg">
                <div className="text-lg font-bold text-green-400">50-90%</div>
                <div className="text-xs text-green-300">Cycle Time Reduction</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 p-3 rounded-lg">
                <div className="text-lg font-bold text-blue-400">18 months</div>
                <div className="text-xs text-blue-300">To Agent Ecosystem</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 p-3 rounded-lg">
                <div className="text-lg font-bold text-purple-400">2x</div>
                <div className="text-xs text-purple-300">Strategic Focus</div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content - Scrollable with left margin for fixed sidebar */}
        <main className="flex-1 ml-64 p-8 h-full overflow-y-auto">
          <ErrorBoundary>
            {renderActivePage()}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default MainApplication;