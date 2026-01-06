import { useState, useEffect } from 'react';
import './App.css';
import { categories, lessons, getQuestionsByCategory, getRandomQuestions } from './data/questions';

// Components
function Header({ currentView, setCurrentView, userName }) {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo" onClick={() => setCurrentView('home')}>
          <span className="logo-icon">🚗</span>
          <span className="logo-text">Code<span className="text-gradient">Route</span></span>
        </div>
        <nav className="nav">
          <button
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            Accueil
          </button>
          <button
            className={`nav-link ${currentView === 'learn' ? 'active' : ''}`}
            onClick={() => setCurrentView('learn')}
          >
            Apprendre
          </button>
          <button
            className={`nav-link ${currentView === 'practice' ? 'active' : ''}`}
            onClick={() => setCurrentView('practice')}
          >
            S'entraîner
          </button>
          <button
            className={`nav-link ${currentView === 'exam' ? 'active' : ''}`}
            onClick={() => setCurrentView('exam')}
          >
            Examen
          </button>
          <button
            className={`nav-link ${currentView === 'results' ? 'active' : ''}`}
            onClick={() => setCurrentView('results')}
          >
            Résultats
          </button>
        </nav>
        {userName && (
          <div className="user-badge">
            <span className="user-avatar">👤</span>
            <span>{userName}</span>
          </div>
        )}
      </div>
    </header>
  );
}

function Home({ setCurrentView, setUserName, userName }) {
  const [inputName, setInputName] = useState(userName);

  const handleStart = () => {
    if (inputName.trim()) {
      setUserName(inputName.trim());
      setCurrentView('learn');
    }
  };

  return (
    <div className="home animate-fade-in">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Apprenez le <span className="text-gradient">Code de la Route</span>
          </h1>
          <p className="hero-subtitle">
            Une application interactive et moderne pour réussir votre examen du code de la route.
            Apprenez, pratiquez et testez vos connaissances.
          </p>

          <div className="hero-form glass-card">
            <div className="input-group">
              <label htmlFor="userName">Votre prénom</label>
              <input
                type="text"
                id="userName"
                className="input"
                placeholder="Entrez votre prénom..."
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStart()}
              />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleStart}>
              Commencer l'apprentissage 🚀
            </button>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-card">
              <span className="feature-icon">📚</span>
              <h3>Apprentissage</h3>
              <p>Cours complets sur tous les thèmes du code</p>
            </div>
            <div className="feature-card glass-card">
              <span className="feature-icon">✏️</span>
              <h3>Entraînement</h3>
              <p>Quiz par catégorie pour vous exercer</p>
            </div>
            <div className="feature-card glass-card">
              <span className="feature-icon">📝</span>
              <h3>Examen</h3>
              <p>Simulation d'examen en conditions réelles</p>
            </div>
            <div className="feature-card glass-card">
              <span className="feature-icon">📊</span>
              <h3>Suivi</h3>
              <p>Suivez votre progression et vos scores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Learn({ setCurrentView, setSelectedCategory }) {
  return (
    <div className="learn-page animate-fade-in">
      <div className="container">
        <div className="page-header">
          <h1>📚 Modules d'Apprentissage</h1>
          <p>Choisissez un thème pour commencer à apprendre</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="category-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentView('lesson');
              }}
            >
              <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}40, ${category.color}20)` }}>
                <span>{category.icon}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button className="btn btn-secondary btn-sm">
                Commencer →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Lesson({ selectedCategory, setCurrentView }) {
  const [currentSection, setCurrentSection] = useState(0);
  const lesson = lessons[selectedCategory];
  const category = categories.find(c => c.id === selectedCategory);

  if (!lesson) {
    return (
      <div className="container">
        <p>Leçon non trouvée</p>
        <button className="btn btn-primary" onClick={() => setCurrentView('learn')}>
          Retour
        </button>
      </div>
    );
  }

  const section = lesson.content[currentSection];
  const progress = ((currentSection + 1) / lesson.content.length) * 100;

  return (
    <div className="lesson-page animate-fade-in">
      <div className="container">
        <div className="lesson-header">
          <button className="btn btn-secondary" onClick={() => setCurrentView('learn')}>
            ← Retour aux modules
          </button>
          <div className="lesson-progress">
            <span>Section {currentSection + 1} / {lesson.content.length}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="lesson-content glass-card">
          <div className="lesson-badge" style={{ background: `linear-gradient(135deg, ${category?.color}40, ${category?.color}20)` }}>
            <span>{category?.icon}</span>
            <span>{category?.title}</span>
          </div>

          <h2>{lesson.title}</h2>

          <div className="section-content">
            <h3>{section.subtitle}</h3>
            <p className="section-text">{section.text}</p>

            <div className="tips-box">
              <h4>💡 Points clés à retenir</h4>
              <ul>
                {section.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lesson-navigation">
            <button
              className="btn btn-secondary"
              disabled={currentSection === 0}
              onClick={() => setCurrentSection(prev => prev - 1)}
            >
              ← Précédent
            </button>

            {currentSection < lesson.content.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentSection(prev => prev + 1)}
              >
                Suivant →
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => setCurrentView('learn')}
              >
                ✓ Terminer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Practice({ setCurrentView, setSelectedCategory }) {
  return (
    <div className="practice-page animate-fade-in">
      <div className="container">
        <div className="page-header">
          <h1>✏️ Mode Entraînement</h1>
          <p>Testez vos connaissances par catégorie sans pression</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="category-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentView('quiz');
              }}
            >
              <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}40, ${category.color}20)` }}>
                <span>{category.icon}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="badge badge-info">5 questions</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Quiz({ selectedCategory, setCurrentView, addResult }) {
  const [questions] = useState(() => getQuestionsByCategory(selectedCategory));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const category = categories.find(c => c.id === selectedCategory);
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === question.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { questionId: question.id, answer: index, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz terminé
      const finalScore = Math.round((score / questions.length) * 20);
      addResult({
        type: 'practice',
        category: selectedCategory,
        categoryName: category?.title,
        score: finalScore,
        correct: score,
        total: questions.length,
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      });
      setCurrentView('quiz-result');
    }
  };

  if (!question) {
    return (
      <div className="container">
        <p>Questions non disponibles</p>
        <button className="btn btn-primary" onClick={() => setCurrentView('practice')}>
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-page animate-fade-in">
      <div className="container">
        <div className="quiz-header">
          <button className="btn btn-secondary" onClick={() => setCurrentView('practice')}>
            ← Quitter
          </button>
          <div className="quiz-info">
            <span className="badge" style={{ background: `${category?.color}30`, color: category?.color }}>
              {category?.icon} {category?.title}
            </span>
          </div>
          <div className="quiz-score">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </div>
        </div>

        <div className="quiz-progress">
          <span>Question {currentQuestion + 1} / {questions.length}</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question-card glass-card">
          <h2 className="question-text">{question.question}</h2>

          <div className="options-list">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswer === index ? 'selected' : ''} 
                  ${showExplanation && index === question.correct ? 'correct' : ''}
                  ${showExplanation && selectedAnswer === index && index !== question.correct ? 'incorrect' : ''}`}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showExplanation && index === question.correct && <span className="option-icon">✓</span>}
                {showExplanation && selectedAnswer === index && index !== question.correct && <span className="option-icon">✗</span>}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className={`explanation-box ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}`}>
              <h4>{selectedAnswer === question.correct ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}</h4>
              <p>{question.explanation}</p>
            </div>
          )}

          {showExplanation && (
            <button className="btn btn-primary btn-lg" onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizResult({ lastResult, setCurrentView }) {
  const passed = lastResult?.score >= 14;

  return (
    <div className="result-page animate-fade-in">
      <div className="container">
        <div className={`result-card glass-card ${passed ? 'passed' : 'failed'}`}>
          <div className="result-icon">
            {passed ? '🎉' : '😔'}
          </div>
          <h1>{passed ? 'Félicitations !' : 'Continuez vos efforts'}</h1>
          <p className="result-message">
            {passed
              ? 'Vous avez réussi ce quiz avec brio !'
              : 'Ne vous découragez pas, la pratique fait le maître.'}
          </p>

          <div className="score-display">
            <div className="score-circle" style={{ '--score-color': passed ? '#10b981' : '#ef4444' }}>
              <span className="score-value">{lastResult?.score || 0}</span>
              <span className="score-max">/20</span>
            </div>
            <p>{lastResult?.correct || 0} bonnes réponses sur {lastResult?.total || 0}</p>
          </div>

          <div className="result-details">
            <div className="detail-item">
              <span className="detail-label">Catégorie</span>
              <span className="detail-value">{lastResult?.categoryName || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Date</span>
              <span className="detail-value">{lastResult?.date} à {lastResult?.time}</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-secondary" onClick={() => setCurrentView('practice')}>
              ← Retour aux quiz
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentView('learn')}>
              Réviser les cours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Exam({ setCurrentView, addResult, userName }) {
  const [examStarted, setExamStarted] = useState(false);
  const [questions] = useState(() => getRandomQuestions(10));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [examFinished, setExamFinished] = useState(false);

  useEffect(() => {
    if (examStarted && !examFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examStarted, examFinished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, {
      questionId: questions[currentQuestion].id,
      answer: selectedAnswer,
      correct: selectedAnswer === questions[currentQuestion].correct
    }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      finishExam(newAnswers);
    }
  };

  const finishExam = (finalAnswers = answers) => {
    setExamFinished(true);
    const correctCount = finalAnswers.filter(a => a.correct).length;
    const score = Math.round((correctCount / questions.length) * 20);

    addResult({
      type: 'exam',
      category: 'all',
      categoryName: 'Examen Complet',
      score: score,
      correct: correctCount,
      total: questions.length,
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      userName: userName
    });

    setCurrentView('exam-result');
  };

  if (!examStarted) {
    return (
      <div className="exam-intro animate-fade-in">
        <div className="container">
          <div className="exam-intro-card glass-card">
            <div className="exam-icon">📝</div>
            <h1>Examen du Code de la Route</h1>
            <p>Testez vos connaissances en conditions réelles d'examen</p>

            <div className="exam-rules">
              <h3>Règles de l'examen</h3>
              <ul>
                <li>⏱️ Durée : 10 minutes maximum</li>
                <li>❓ 10 questions aléatoires</li>
                <li>📊 Note sur 20 points</li>
                <li>✅ Seuil de réussite : 14/20</li>
                <li>⚠️ Pas de retour en arrière possible</li>
              </ul>
            </div>

            <div className="exam-actions">
              <button className="btn btn-secondary" onClick={() => setCurrentView('home')}>
                Retour
              </button>
              <button className="btn btn-primary btn-lg" onClick={() => setExamStarted(true)}>
                Commencer l'examen 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="exam-page animate-fade-in">
      <div className="container">
        <div className="exam-header">
          <div className="exam-timer" style={{ color: timeLeft < 60 ? '#ef4444' : 'inherit' }}>
            ⏱️ {formatTime(timeLeft)}
          </div>
          <div className="exam-progress-info">
            Question {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        <div className="quiz-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question-card glass-card">
          <h2 className="question-text">{question.question}</h2>

          <div className="options-list">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
                onClick={() => handleAnswer(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          <button
            className="btn btn-primary btn-lg"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion < questions.length - 1 ? 'Valider et continuer →' : 'Terminer l\'examen'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ExamResult({ lastResult, setCurrentView }) {
  const passed = lastResult?.score >= 14;

  return (
    <div className="result-page animate-fade-in">
      <div className="container">
        <div className={`result-card glass-card exam-result ${passed ? 'passed' : 'failed'}`}>
          <div className="result-badge">
            {passed ? '🏆 ADMIS' : '📚 AJOURNÉ'}
          </div>

          <div className="result-icon">
            {passed ? '🎓' : '📖'}
          </div>

          <h1>{passed ? 'Bravo, vous êtes admis !' : 'L\'examen est échoué'}</h1>
          <p className="result-message">
            {passed
              ? 'Vous avez démontré une excellente maîtrise du code de la route !'
              : 'Continuez à étudier et repassez l\'examen quand vous serez prêt.'}
          </p>

          <div className="score-display">
            <div className="score-circle" style={{ '--score-color': passed ? '#10b981' : '#ef4444' }}>
              <span className="score-value">{lastResult?.score || 0}</span>
              <span className="score-max">/20</span>
            </div>
            <p>{lastResult?.correct || 0} bonnes réponses sur {lastResult?.total || 0}</p>
            <p className="threshold-info">Seuil de réussite : 14/20</p>
          </div>

          <div className="result-details">
            <div className="detail-item">
              <span className="detail-label">Candidat</span>
              <span className="detail-value">{lastResult?.userName || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Date</span>
              <span className="detail-value">{lastResult?.date} à {lastResult?.time}</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-secondary" onClick={() => setCurrentView('home')}>
              ← Retour à l'accueil
            </button>
            {!passed && (
              <button className="btn btn-primary" onClick={() => setCurrentView('learn')}>
                Réviser les cours
              </button>
            )}
            <button className="btn btn-success" onClick={() => setCurrentView('exam')}>
              Repasser l'examen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results({ results }) {
  const examResults = results.filter(r => r.type === 'exam');
  const practiceResults = results.filter(r => r.type === 'practice');

  const averageScore = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    : 0;

  const passRate = examResults.length > 0
    ? Math.round((examResults.filter(r => r.score >= 14).length / examResults.length) * 100)
    : 0;

  return (
    <div className="results-page animate-fade-in">
      <div className="container">
        <div className="page-header">
          <h1>📊 Vos Résultats</h1>
          <p>Suivez votre progression et vos performances</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card glass-card">
            <span className="stat-icon">📝</span>
            <span className="stat-value">{results.length}</span>
            <span className="stat-label">Tests passés</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-icon">📈</span>
            <span className="stat-value">{averageScore}/20</span>
            <span className="stat-label">Score moyen</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">{passRate}%</span>
            <span className="stat-label">Taux de réussite</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-icon">🏆</span>
            <span className="stat-value">{examResults.filter(r => r.score >= 14).length}</span>
            <span className="stat-label">Examens réussis</span>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="no-results glass-card">
            <span className="no-results-icon">📭</span>
            <h3>Aucun résultat pour le moment</h3>
            <p>Commencez à vous entraîner ou passez un examen pour voir vos résultats ici.</p>
          </div>
        ) : (
          <div className="results-list">
            <h2>Historique des résultats</h2>
            {[...results].reverse().map((result, index) => (
              <div key={index} className="result-item glass-card">
                <div className="result-item-type">
                  <span className={`badge ${result.type === 'exam' ? 'badge-warning' : 'badge-info'}`}>
                    {result.type === 'exam' ? '📝 Examen' : '✏️ Quiz'}
                  </span>
                </div>
                <div className="result-item-info">
                  <h4>{result.categoryName}</h4>
                  <p>{result.date} à {result.time}</p>
                </div>
                <div className="result-item-score">
                  <span className={`score ${result.score >= 14 ? 'passed' : 'failed'}`}>
                    {result.score}/20
                  </span>
                  <span className="correct-count">{result.correct}/{result.total} correctes</span>
                </div>
                <div className="result-item-status">
                  {result.type === 'exam' && (
                    <span className={`badge ${result.score >= 14 ? 'badge-success' : 'badge-danger'}`}>
                      {result.score >= 14 ? '✓ Admis' : '✗ Ajourné'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [userName, setUserName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('codeRouteResults');
    return saved ? JSON.parse(saved) : [];
  });
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    localStorage.setItem('codeRouteResults', JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    const savedName = localStorage.getItem('codeRouteUserName');
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('codeRouteUserName', userName);
    }
  }, [userName]);

  const addResult = (result) => {
    setResults(prev => [...prev, result]);
    setLastResult(result);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home setCurrentView={setCurrentView} setUserName={setUserName} userName={userName} />;
      case 'learn':
        return <Learn setCurrentView={setCurrentView} setSelectedCategory={setSelectedCategory} />;
      case 'lesson':
        return <Lesson selectedCategory={selectedCategory} setCurrentView={setCurrentView} />;
      case 'practice':
        return <Practice setCurrentView={setCurrentView} setSelectedCategory={setSelectedCategory} />;
      case 'quiz':
        return <Quiz selectedCategory={selectedCategory} setCurrentView={setCurrentView} addResult={addResult} />;
      case 'quiz-result':
        return <QuizResult lastResult={lastResult} setCurrentView={setCurrentView} />;
      case 'exam':
        return <Exam setCurrentView={setCurrentView} addResult={addResult} userName={userName} />;
      case 'exam-result':
        return <ExamResult lastResult={lastResult} setCurrentView={setCurrentView} />;
      case 'results':
        return <Results results={results} />;
      default:
        return <Home setCurrentView={setCurrentView} setUserName={setUserName} userName={userName} />;
    }
  };

  return (
    <div className="app">
      <Header currentView={currentView} setCurrentView={setCurrentView} userName={userName} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
