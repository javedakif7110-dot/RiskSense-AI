import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProjectInfo } from './pages/ProjectInfo';
import { Team } from './pages/Team';
import { NavigationTab } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'project-info' && <ProjectInfo />}
        {activeTab === 'team' && <Team />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
