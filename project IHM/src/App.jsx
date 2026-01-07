import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LessonsList from './components/LessonsList';
import Quiz from './components/Quiz';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />

      <main>
        {currentView === 'home' && <Home onNavigate={handleNavigate} />}
        {currentView === 'lessons' && <LessonsList />}
        {currentView === 'quiz' && <Quiz onNavigate={handleNavigate} />}
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>© 2025 Auto-École Interactive - Plateforme d'apprentissage du code de la route</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
