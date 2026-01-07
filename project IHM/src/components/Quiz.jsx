import { useState } from 'react';
import './Quiz.css';
import quizQuestions from '../data/quizQuestions';
import Results from './Results';

function Quiz({ onNavigate }) {
    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    const handleStart = () => {
        setStarted(true);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setQuizCompleted(false);
    };

    const handleAnswerSelect = (optionIndex) => {
        if (!showExplanation) {
            setSelectedAnswer(optionIndex);
        }
    };

    const handleConfirm = () => {
        if (selectedAnswer !== null) {
            setAnswers([...answers, selectedAnswer]);
            setShowExplanation(true);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRetake = () => {
        setStarted(false);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        return (
            <Results
                answers={answers}
                questions={quizQuestions}
                onRetake={handleRetake}
                onHome={() => onNavigate('home')}
                onLessons={() => onNavigate('lessons')}
            />
        );
    }

    if (!started) {
        return (
            <div className="quiz-container fade-in">
                <div className="container">
                    <div className="quiz-intro">
                        <h1>✍️ Quiz d'Évaluation</h1>
                        <p className="quiz-intro-text">
                            Testez vos connaissances du code de la route avec notre quiz de 20 questions
                        </p>

                        <div className="quiz-info-card card">
                            <h3>📋 Informations sur le Quiz</h3>
                            <ul className="quiz-info-list">
                                <li>✅ <strong>20 questions</strong> à choix multiples</li>
                                <li>🎯 Score minimum de <strong>70%</strong> pour réussir</li>
                                <li>💡 Explications détaillées après chaque réponse</li>
                                <li>📊 Analyse de performance par catégorie</li>
                                <li>🔁 Possibilité de repasser le quiz</li>
                            </ul>

                            <div className="quiz-categories">
                                <h4>Catégories couvertes :</h4>
                                <div className="category-badges">
                                    <span className="badge badge-primary">🚦 Signalisation</span>
                                    <span className="badge badge-primary">🔄 Priorité</span>
                                    <span className="badge badge-primary">🅿️ Stationnement</span>
                                    <span className="badge badge-primary">⚡ Vitesse</span>
                                    <span className="badge badge-primary">📏 Sécurité</span>
                                    <span className="badge badge-primary">🛡️ Équipements</span>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-large" onClick={handleStart}>
                            🚀 Commencer le Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    return (
        <div className="quiz-container fade-in">
            <div className="container">
                <div className="quiz-header">
                    <div className="quiz-progress-info">
                        <span>Question {currentQuestionIndex + 1} / {quizQuestions.length}</span>
                        <span className="quiz-category-badge badge badge-primary">
                            {currentQuestion.category}
                        </span>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="quiz-question-card card">
                    <h2 className="quiz-question">{currentQuestion.question}</h2>

                    <div className="quiz-options">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrectAnswer = index === currentQuestion.correctAnswer;

                            let optionClass = 'quiz-option';
                            if (showExplanation) {
                                if (isCorrectAnswer) {
                                    optionClass += ' correct';
                                } else if (isSelected && !isCorrect) {
                                    optionClass += ' incorrect';
                                }
                            } else if (isSelected) {
                                optionClass += ' selected';
                            }

                            return (
                                <button
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={showExplanation}
                                >
                                    <span className="option-letter">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="option-text">{option}</span>
                                    {showExplanation && isCorrectAnswer && (
                                        <span className="option-icon">✓</span>
                                    )}
                                    {showExplanation && isSelected && !isCorrect && (
                                        <span className="option-icon">✗</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className={`explanation ${isCorrect ? 'correct-explanation' : 'incorrect-explanation'}`}>
                            <div className="explanation-header">
                                {isCorrect ? (
                                    <>
                                        <span className="explanation-icon">🎉</span>
                                        <strong>Bonne réponse !</strong>
                                    </>
                                ) : (
                                    <>
                                        <span className="explanation-icon">💡</span>
                                        <strong>Pas tout à fait...</strong>
                                    </>
                                )}
                            </div>
                            <p>{currentQuestion.explanation}</p>
                        </div>
                    )}

                    <div className="quiz-actions">
                        {!showExplanation ? (
                            <button
                                className="btn btn-primary"
                                onClick={handleConfirm}
                                disabled={selectedAnswer === null}
                            >
                                Confirmer ma Réponse
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={handleNext}>
                                {currentQuestionIndex < quizQuestions.length - 1
                                    ? 'Question Suivante →'
                                    : 'Voir mes Résultats 🏆'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
