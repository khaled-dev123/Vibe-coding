import './Navigation.css';

function Navigation({ currentView, onNavigate }) {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="nav-logo-icon">🚗</span>
                    <span>Auto-École Interactive</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <button
                            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                            onClick={() => onNavigate('home')}
                        >
                            Accueil
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${currentView === 'lessons' ? 'active' : ''}`}
                            onClick={() => onNavigate('lessons')}
                        >
                            Leçons
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${currentView === 'quiz' ? 'active' : ''}`}
                            onClick={() => onNavigate('quiz')}
                        >
                            Quiz
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
