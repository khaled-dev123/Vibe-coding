import './LessonDetail.css';
import ReactMarkdown from 'react-markdown';

function LessonDetail({ lesson, onBack, onComplete, isCompleted }) {
    return (
        <div className="lesson-detail-container fade-in">
            <div className="container">
                <div className="lesson-detail-header">
                    <button className="btn btn-secondary" onClick={onBack}>
                        ← Retour aux Leçons
                    </button>
                </div>

                <div className="lesson-detail-content">
                    <div className="lesson-detail-title-section">
                        <div className="lesson-detail-icon">{lesson.icon}</div>
                        <div>
                            <h1 className="lesson-detail-title">{lesson.title}</h1>
                            <div className="lesson-meta">
                                <span className="badge badge-primary">{lesson.category}</span>
                                <span className="lesson-duration">⏱️ {lesson.duration}</span>
                                {isCompleted && (
                                    <span className="badge badge-success">✓ Complété</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="lesson-text-content card">
                        <ReactMarkdown>{lesson.content}</ReactMarkdown>
                    </div>

                    <div className="lesson-actions">
                        {!isCompleted && (
                            <button
                                className="btn btn-primary"
                                onClick={() => onComplete(lesson.id)}
                            >
                                ✓ Marquer comme Complété
                            </button>
                        )}
                        <button className="btn btn-secondary" onClick={onBack}>
                            Retour aux Leçons
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonDetail;
