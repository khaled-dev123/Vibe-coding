// Questions d'évaluation du code de la route
export const quizQuestions = [
    // Panneaux de signalisation
    {
        id: 1,
        question: "Quelle est la forme d'un panneau de danger ?",
        options: [
            "Triangle rouge pointant vers le haut",
            "Cercle rouge avec fond blanc",
            "Carré bleu",
            "Losange jaune"
        ],
        correctAnswer: 0,
        category: "Signalisation",
        explanation: "Les panneaux de danger ont toujours une forme triangulaire rouge pointant vers le haut pour avertir d'un danger à venir."
    },
    {
        id: 2,
        question: "Que signifie un panneau circulaire rouge avec fond blanc ?",
        options: [
            "Indication d'information",
            "Panneau de danger",
            "Panneau d'interdiction",
            "Panneau d'obligation"
        ],
        correctAnswer: 2,
        category: "Signalisation",
        explanation: "Les panneaux circulaires rouges avec fond blanc sont des panneaux d'interdiction."
    },
    {
        id: 3,
        question: "Les panneaux d'obligation sont de quelle couleur ?",
        options: [
            "Rouge",
            "Jaune",
            "Bleu",
            "Vert"
        ],
        correctAnswer: 2,
        category: "Signalisation",
        explanation: "Les panneaux d'obligation sont circulaires et de couleur bleue."
    },

    // Règles de priorité
    {
        id: 4,
        question: "En l'absence de signalisation, quelle est la règle générale de priorité ?",
        options: [
            "Priorité à gauche",
            "Priorité à droite",
            "Priorité au plus rapide",
            "Pas de règle particulière"
        ],
        correctAnswer: 1,
        category: "Priorité",
        explanation: "La règle générale en France est la priorité à droite en l'absence de signalisation contraire."
    },
    {
        id: 5,
        question: "Devant un panneau STOP, vous devez :",
        options: [
            "Ralentir seulement",
            "Céder le passage sans vous arrêter si la voie est libre",
            "Marquer un arrêt complet obligatoire",
            "Accélérer pour passer rapidement"
        ],
        correctAnswer: 2,
        category: "Priorité",
        explanation: "Le panneau STOP impose un arrêt complet obligatoire, même si aucun véhicule n'est visible."
    },
    {
        id: 6,
        question: "Qui est toujours prioritaire sur un passage piéton ?",
        options: [
            "Les voitures",
            "Les vélos",
            "Les piétons",
            "Les motos"
        ],
        correctAnswer: 2,
        category: "Priorité",
        explanation: "Les piétons sont toujours prioritaires sur les passages piétons."
    },
    {
        id: 7,
        question: "Dans un rond-point, qui a la priorité ?",
        options: [
            "Ceux qui veulent entrer",
            "Ceux qui sont déjà engagés dans le rond-point",
            "Les véhicules venant de droite",
            "Les véhicules venant de gauche"
        ],
        correctAnswer: 1,
        category: "Priorité",
        explanation: "Dans un rond-point, la priorité est donnée aux véhicules déjà engagés dans le rond-point."
    },

    // Stationnement
    {
        id: 8,
        question: "À quelle distance minimale d'un carrefour est-il interdit de stationner ?",
        options: [
            "3 mètres",
            "5 mètres",
            "10 mètres",
            "15 mètres"
        ],
        correctAnswer: 1,
        category: "Stationnement",
        explanation: "Il est interdit de stationner à moins de 5 mètres d'un carrefour."
    },
    {
        id: 9,
        question: "Quelle est la différence entre un arrêt et un stationnement ?",
        options: [
            "Aucune différence",
            "L'arrêt dure moins d'1 minute, le stationnement plus d'1 minute",
            "L'arrêt est sur le trottoir, le stationnement sur la route",
            "Le stationnement nécessite un ticket, pas l'arrêt"
        ],
        correctAnswer: 1,
        category: "Stationnement",
        explanation: "Un arrêt est une immobilisation de moins d'1 minute avec le conducteur au volant. Un stationnement dure plus d'1 minute."
    },
    {
        id: 10,
        question: "Est-il autorisé de stationner sur un passage piéton ?",
        options: [
            "Oui, si c'est pour moins de 5 minutes",
            "Oui, la nuit seulement",
            "Non, c'est absolument interdit",
            "Oui, avec les feux de détresse"
        ],
        correctAnswer: 2,
        category: "Stationnement",
        explanation: "Il est absolument interdit de stationner sur un passage piéton, c'est dangereux et passible d'amende."
    },

    // Limitations de vitesse
    {
        id: 11,
        question: "Quelle est la vitesse maximale en agglomération ?",
        options: [
            "30 km/h",
            "50 km/h",
            "70 km/h",
            "90 km/h"
        ],
        correctAnswer: 1,
        category: "Vitesse",
        explanation: "La vitesse maximale standard en agglomération est de 50 km/h."
    },
    {
        id: 12,
        question: "Sur autoroute par temps de pluie, la vitesse maximale est de :",
        options: [
            "130 km/h",
            "120 km/h",
            "110 km/h",
            "100 km/h"
        ],
        correctAnswer: 2,
        category: "Vitesse",
        explanation: "Par temps de pluie, la vitesse sur autoroute est réduite à 110 km/h (au lieu de 130 km/h)."
    },
    {
        id: 13,
        question: "Pour un jeune conducteur (permis < 3 ans), quelle est la vitesse max sur autoroute ?",
        options: [
            "130 km/h",
            "120 km/h",
            "110 km/h",
            "100 km/h"
        ],
        correctAnswer: 2,
        category: "Vitesse",
        explanation: "Les jeunes conducteurs sont limités à 110 km/h sur autoroute au lieu de 130 km/h."
    },
    {
        id: 14,
        question: "En cas de brouillard avec visibilité inférieure à 50m, quelle est la vitesse maximale ?",
        options: [
            "90 km/h",
            "70 km/h",
            "50 km/h",
            "30 km/h"
        ],
        correctAnswer: 2,
        category: "Vitesse",
        explanation: "Avec une visibilité inférieure à 50 mètres, la vitesse est limitée à 50 km/h sur toutes les voies."
    },

    // Distances de sécurité
    {
        id: 15,
        question: "Quelle est la règle de base pour la distance de sécurité par beau temps ?",
        options: [
            "1 seconde",
            "2 secondes",
            "3 secondes",
            "5 secondes"
        ],
        correctAnswer: 1,
        category: "Sécurité",
        explanation: "Par beau temps, il faut maintenir minimum 2 secondes de distance avec le véhicule précédent."
    },
    {
        id: 16,
        question: "Par temps de pluie, la distance de sécurité doit être :",
        options: [
            "Identique",
            "Légèrement augmentée",
            "Doublée (4 secondes minimum)",
            "Triplée"
        ],
        correctAnswer: 2,
        category: "Sécurité",
        explanation: "Par temps de pluie, il faut doubler la distance de sécurité, soit 4 secondes minimum."
    },
    {
        id: 17,
        question: "La distance d'arrêt est composée de :",
        options: [
            "Distance de freinage uniquement",
            "Distance de réaction uniquement",
            "Distance de réaction + distance de freinage",
            "Distance parcourue en 1 seconde"
        ],
        correctAnswer: 2,
        category: "Sécurité",
        explanation: "La distance d'arrêt = distance de réaction (temps de réaction) + distance de freinage."
    },

    // Équipements et sécurité
    {
        id: 18,
        question: "Où doit se trouver le gilet de haute visibilité ?",
        options: [
            "Dans le coffre",
            "À portée de main dans l'habitacle",
            "Dans la boîte à gants",
            "Peu importe"
        ],
        correctAnswer: 1,
        category: "Équipements",
        explanation: "Le gilet de haute visibilité doit être à portée de main dans l'habitacle, pas dans le coffre."
    },
    {
        id: 19,
        question: "Quel est le taux d'alcoolémie maximum pour un conducteur expérimenté ?",
        options: [
            "0,2 g/L",
            "0,5 g/L",
            "0,8 g/L",
            "1,0 g/L"
        ],
        correctAnswer: 1,
        category: "Sécurité",
        explanation: "Le taux maximum d'alcoolémie pour un conducteur expérimenté est de 0,5 g/L de sang."
    },
    {
        id: 20,
        question: "Est-il autorisé d'utiliser un téléphone avec kit mains-libres à l'oreille en conduisant ?",
        options: [
            "Oui, c'est totalement autorisé",
            "Oui, mais seulement sur autoroute",
            "Non, c'est interdit",
            "Oui, pour les appels courts"
        ],
        correctAnswer: 2,
        category: "Sécurité",
        explanation: "Il est interdit d'utiliser un kit mains-libres à l'oreille en conduisant. Seul le système Bluetooth intégré au véhicule est autorisé."
    }
];

export default quizQuestions;
