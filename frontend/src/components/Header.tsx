import React from 'react';
import { Home, Info, FileText, Users, GraduationCap, Brain } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: NavigationTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'project-info', label: 'Project Info', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <header className="header-bg border-b border-blue-200/70 shadow-sm relative overflow-hidden">
      {/* Top right subtle graduation cap watermark */}
      <GraduationCap className="absolute -right-6 -bottom-6 w-36 h-36 text-blue-400/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Left branding area */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
              <Brain className="w-7 h-7" />
            </div>

            <div className="flex flex-col border-l border-blue-300/60 pl-4">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
                  RiskSense AI
                </span>
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-tight">
                  Academic Intelligence
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-[#0f2942] tracking-tight leading-tight">
                ACADEMIC PERFORMANCE RISK PREDICTION SYSTEM
              </h2>
              <p className="text-xs font-medium text-slate-600 mt-0.5">
                Machine Learning Project | Department of Computer Science and Engineering
              </p>
              <p className="text-xs font-semibold text-blue-800">
                Chennai Institute of Technology
              </p>
            </div>
          </div>

          {/* Right Navigation Menu */}
          <nav className="flex items-center gap-1 sm:gap-2 self-end lg:self-center bg-white/60 backdrop-blur-sm p-1.5 rounded-xl border border-blue-200/50 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col sm:flex-row items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
