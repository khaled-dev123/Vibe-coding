// Fonctions utilitaires pour le calcul des scores

export const calculateScore = (answers, questions) => {
    let correct = 0;

    answers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            correct++;
        }
    });

    const percentage = Math.round((correct / questions.length) * 100);

    return {
        correct,
        total: questions.length,
        percentage,
        passed: percentage >= 70 // 70% pour réussir l'examen
    };
};

export const getScoreByCategory = (answers, questions) => {
    const categories = {};

    questions.forEach((question, index) => {
        const category = question.category;

        if (!categories[category]) {
            categories[category] = {
                correct: 0,
                total: 0
            };
        }

        categories[category].total++;

        if (answers[index] === question.correctAnswer) {
            categories[category].correct++;
        }
    });

    // Calculer les pourcentages
    Object.keys(categories).forEach(category => {
        const cat = categories[category];
        cat.percentage = Math.round((cat.correct / cat.total) * 100);
    });

    return categories;
};

export const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: "Excellent", emoji: "🏆", color: "#10b981" };
    if (percentage >= 80) return { level: "Très bien", emoji: "⭐", color: "#3b82f6" };
    if (percentage >= 70) return { level: "Bien", emoji: "✅", color: "#8b5cf6" };
    if (percentage >= 50) return { level: "Passable", emoji: "📚", color: "#f59e0b" };
    return { level: "Insuffisant", emoji: "❌", color: "#ef4444" };
};

export const getRecommendations = (categoryScores) => {
    const recommendations = [];

    Object.entries(categoryScores).forEach(([category, data]) => {
        if (data.percentage < 70) {
            recommendations.push({
                category,
                message: `Vous devriez réviser le thème "${category}" (${data.correct}/${data.total} correct)`
            });
        }
    });

    if (recommendations.length === 0) {
        recommendations.push({
            category: "Général",
            message: "Excellent travail ! Continuez à pratiquer pour maintenir votre niveau."
        });
    }

    return recommendations;
};

export default {
    calculateScore,
    getScoreByCategory,
    getPerformanceLevel,
    getRecommendations
};
