import './Results.css';
import { calculateScore, getScoreByCategory, getPerformanceLevel, getRecommendations } from '../utils/scoring';

function Results({ answers, questions, onRetake, onHome, onLessons }) {
    const scoreData = calculateScore(answers, questions);
    const categoryScores = getScoreByCategory(answers, questions);
    const performance = getPerformanceLevel(scoreData.percentage);
    const recommendations = getRecommendations(categoryScores);

    return (
        <div className="results-container fade-in">
            <div className="container">
                <div className="results-header">
                    <h1>🏆 Résultats du Quiz</h1>
                </div>

                {/* Score Principal */}
                <div className="score-card card">
                    <div className="score-main">
                        <div className="score-icon" style={{ fontSize: '5rem' }}>
                            {performance.emoji}
                        </div>
                        <div className="score-details">
                            <div className="score-percentage" style={{ color: performance.color }}>
                                {scoreData.percentage}%
                            </div>
                            <div className="score-label">{performance.level}</div>
                            <div className="score-fraction">
                                {scoreData.correct} / {scoreData.total} réponses correctes
                            </div>
                        </div>
                    </div>

                    <div className="score-status">
                        {scoreData.passed ? (
                            <div className="pass-message">
                                <div className="pass-icon">✅</div>
                                <div>
                                    <strong>Félicitations ! Vous avez réussi le quiz</strong>
                                    <p>Vous avez dépassé le seuil de 70% requis</p>
                                </div>
                            </div>
                        ) : (
                            <div className="fail-message">
                                <div className="fail-icon">📚</div>
                                <div>
                                    <strong>Continuez à apprendre</strong>
                                    <p>Il vous faut au moins 70% pour réussir. Révisez les leçons et réessayez !</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Performance par Catégorie */}
                <div className="categories-section mt-3">
                    <h2 className="text-center">📊 Performance par Catégorie</h2>
                    <div className="categories-grid grid grid-2">
                        {Object.entries(categoryScores).map(([category, data]) => {
                            const isGood = data.percentage >= 70;
                            return (
                                <div key={category} className="category-card card">
                                    <div className="category-header">
                                        <h3>{category}</h3>
                                        <span className={`badge ${isGood ? 'badge-success' : 'badge-error'}`}>
                                            {data.percentage}%
                                        </span>
                                    </div>
                                    <div className="category-progress">
                                        <div className="progress-container">
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${data.percentage}%`,
                                                    background: isGood
                                                        ? 'linear-gradient(90deg, var(--color-success), #34d399)'
                                                        : 'linear-gradient(90deg, var(--color-error), #f87171)'
                                                }}
                                            ></div>
                                        </div>
                                        <div className="category-score-text">
                                            {data.correct} / {data.total} correct
                                            {isGood ? ' ✓' : ' ✗'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recommandations */}
                <div className="recommendations-section mt-3">
                    <h2 className="text-center">💡 Recommandations</h2>
                    <div className="recommendations-card card">
                        {recommendations.map((rec, index) => (
                            <div key={index} className="recommendation-item">
                                <span className="recommendation-icon">📌</span>
                                <p>{rec.message}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="results-actions mt-3">
                    <button className="btn btn-primary" onClick={onRetake}>
                        🔁 Repasser le Quiz
                    </button>
                    <button className="btn btn-secondary" onClick={onLessons}>
                        📚 Réviser les Leçons
                    </button>
                    <button className="btn btn-secondary" onClick={onHome}>
                        🏠 Retour à l'Accueil
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Results;
