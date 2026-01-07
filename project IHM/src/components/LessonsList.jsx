import { useState } from 'react';
import './LessonsList.css';
import lessons from '../data/lessons';
import LessonDetail from './LessonDetail';

function LessonsList() {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [completedLessons, setCompletedLessons] = useState([]);

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    const handleBack = () => {
        setSelectedLesson(null);
    };

    const handleComplete = (lessonId) => {
        if (!completedLessons.includes(lessonId)) {
            setCompletedLessons([...completedLessons, lessonId]);
        }
        setSelectedLesson(null);
    };

    if (selectedLesson) {
        return (
            <LessonDetail
                lesson={selectedLesson}
                onBack={handleBack}
                onComplete={handleComplete}
                isCompleted={completedLessons.includes(selectedLesson.id)}
            />
        );
    }

    const progress = (completedLessons.length / lessons.length) * 100;

    return (
        <div className="lessons-container fade-in">
            <div className="container">
                <div className="lessons-header">
                    <h1>📚 Leçons de Code de la Route</h1>
                    <p>Explorez les différents modules pour maîtriser le code de la route</p>

                    <div className="progress-section">
                        <div className="progress-info">
                            <span>Progression globale</span>
                            <span className="progress-percentage">{Math.round(progress)}%</span>
                        </div>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className="progress-stats">
                            <span>{completedLessons.length} / {lessons.length} leçons complétées</span>
                        </div>
                    </div>
                </div>

                <div className="lessons-grid grid grid-2">
                    {lessons.map((lesson) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        return (
                            <div
                                key={lesson.id}
                                className={`lesson-card card ${isCompleted ? 'completed' : ''}`}
                                onClick={() => handleLessonClick(lesson)}
                            >
                                <div className="lesson-icon">{lesson.icon}</div>
                                <div className="lesson-content">
                                    <h3 className="lesson-title">{lesson.title}</h3>
                                    <p className="lesson-description">{lesson.description}</p>
                                    <div className="lesson-footer">
                                        <span className="lesson-duration">⏱️ {lesson.duration}</span>
                                        {isCompleted && (
                                            <span className="badge badge-success">
                                                ✓ Complété
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LessonsList;
