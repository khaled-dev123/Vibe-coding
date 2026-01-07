import './Home.css';

function Home({ onNavigate }) {
    return (
        <div className="home-container fade-in">
            <div className="container">
                <section className="hero">
                    <h1 className="hero-title">
                        Apprenez le Code de la Route
                    </h1>
                    <p className="hero-subtitle">
                        Une plateforme interactive pour maîtriser le code de la route avec des leçons complètes et des quiz d'évaluation
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => onNavigate('lessons')}>
                            📚 Commencer les Leçons
                        </button>
                        <button className="btn btn-secondary" onClick={() => onNavigate('quiz')}>
                            ✍️ Passer le Quiz
                        </button>
                    </div>
                </section>

                <section className="features-section mt-3">
                    <div className="grid grid-3">
                        <div className="feature-card card">
                            <div className="feature-icon">📖</div>
                            <h3>Leçons Complètes</h3>
                            <p>
                                6 modules d'apprentissage couvrant tous les aspects essentiels du code de la route :
                                signalisation, priorités, stationnement, vitesse, et bien plus.
                            </p>
                        </div>

                        <div className="feature-card card">
                            <div className="feature-icon">🎯</div>
                            <h3>Quiz Interactif</h3>
                            <p>
                                20 questions à choix multiples pour tester vos connaissances avec des explications
                                détaillées pour chaque réponse.
                            </p>
                        </div>

                        <div className="feature-card card">
                            <div className="feature-icon">📊</div>
                            <h3>Suivi de Progression</h3>
                            <p>
                                Analysez vos performances par catégorie et recevez des recommandations personnalisées
                                pour améliorer vos résultats.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="stats-section mt-3">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">6</div>
                            <div className="stat-label">Modules de Formation</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">20</div>
                            <div className="stat-label">Questions de Quiz</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">70%</div>
                            <div className="stat-label">Score Minimum</div>
                        </div>
                    </div>
                </section>

                <section className="cta-section mt-3">
                    <div className="cta-card card text-center">
                        <h2>Prêt à Commencer ?</h2>
                        <p>
                            Maîtrisez le code de la route à votre rythme avec notre plateforme interactive
                        </p>
                        <button className="btn btn-primary" onClick={() => onNavigate('lessons')}>
                            🚀 Commencer Maintenant
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
