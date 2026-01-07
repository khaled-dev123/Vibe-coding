// Questions du Code de la Route
export const categories = [
  {
    id: 'signalisation',
    title: 'Signalisation',
    icon: '🚧',
    description: 'Panneaux et marquages routiers',
    color: '#667eea'
  },
  {
    id: 'priorite',
    title: 'Règles de Priorité',
    icon: '🚗',
    description: 'Priorités et intersections',
    color: '#f59e0b'
  },
  {
    id: 'vitesse',
    title: 'Vitesse et Distance',
    icon: '⚡',
    description: 'Limitations et distances de sécurité',
    color: '#ef4444'
  },
  {
    id: 'securite',
    title: 'Sécurité Routière',
    icon: '🛡️',
    description: 'Équipements et comportements',
    color: '#10b981'
  },
  {
    id: 'circulation',
    title: 'Circulation',
    icon: '🛣️',
    description: 'Règles de circulation générale',
    color: '#3b82f6'
  }
];

export const lessons = {
  signalisation: {
    title: 'Les Panneaux de Signalisation',
    content: [
      {
        subtitle: 'Les Panneaux de Danger',
        text: 'Les panneaux de danger sont triangulaires avec un fond blanc et un bord rouge. Ils annoncent un danger à une distance de 50m en agglomération et 150m hors agglomération.',
        tips: ['Triangle = Danger', 'Anticipez et adaptez votre vitesse']
      },
      {
        subtitle: 'Les Panneaux d\'Interdiction',
        text: 'Les panneaux d\'interdiction sont circulaires avec un fond blanc et un bord rouge. Ils indiquent une interdiction absolue qui s\'applique dès le panneau.',
        tips: ['Rond rouge = Interdiction', 'Respectez-les immédiatement']
      },
      {
        subtitle: 'Les Panneaux d\'Obligation',
        text: 'Les panneaux d\'obligation sont circulaires avec un fond bleu. Ils imposent un comportement obligatoire à tous les usagers.',
        tips: ['Rond bleu = Obligation', 'Suivez la direction ou le comportement indiqué']
      },
      {
        subtitle: 'Les Panneaux d\'Indication',
        text: 'Les panneaux d\'indication sont carrés ou rectangulaires avec un fond bleu ou vert. Ils donnent des informations utiles aux usagers.',
        tips: ['Carré/Rectangle = Information', 'Ils facilitent votre conduite']
      }
    ]
  },
  priorite: {
    title: 'Les Règles de Priorité',
    content: [
      {
        subtitle: 'Priorité à Droite',
        text: 'En l\'absence de signalisation, vous devez céder le passage aux véhicules venant de votre droite. C\'est la règle de priorité par défaut en France.',
        tips: ['Regardez toujours à droite', 'Ralentissez à l\'approche des intersections']
      },
      {
        subtitle: 'Les Stops et Cédez le Passage',
        text: 'Au panneau STOP, l\'arrêt est obligatoire même si la voie est libre. Au panneau "Cédez le passage", vous devez laisser passer les véhicules prioritaires.',
        tips: ['STOP = Arrêt complet obligatoire', 'Cédez le passage = Ralentir et observer']
      },
      {
        subtitle: 'Les Ronds-Points',
        text: 'Dans un rond-point (giratoire), les véhicules engagés sont prioritaires. Vous devez céder le passage avant d\'entrer.',
        tips: ['Cédez le passage à l\'entrée', 'Signalez votre sortie avec le clignotant']
      }
    ]
  },
  vitesse: {
    title: 'Vitesse et Distances de Sécurité',
    content: [
      {
        subtitle: 'Limitations de Vitesse',
        text: 'En agglomération: 50 km/h. Hors agglomération: 80 km/h. Voie express: 110 km/h. Autoroute: 130 km/h. Ces vitesses peuvent être réduites par la signalisation.',
        tips: ['Adaptez votre vitesse aux conditions', 'Jeune conducteur: -10 km/h sur certaines routes']
      },
      {
        subtitle: 'Distance de Sécurité',
        text: 'Sur autoroute, maintenez au moins 2 secondes d\'écart avec le véhicule qui précède. Cela correspond à environ 2 bandes blanches de la bande d\'arrêt d\'urgence.',
        tips: ['2 secondes minimum', 'Augmentez par mauvais temps']
      },
      {
        subtitle: 'Distance de Freinage',
        text: 'La distance de freinage augmente avec le carré de la vitesse. À 50 km/h: ~25m. À 100 km/h: ~100m. Elle double sur route mouillée.',
        tips: ['Vitesse x 2 = Distance x 4', 'Anticipez toujours']
      }
    ]
  },
  securite: {
    title: 'Sécurité Routière',
    content: [
      {
        subtitle: 'La Ceinture de Sécurité',
        text: 'Le port de la ceinture est obligatoire pour tous les occupants du véhicule. Elle réduit de 50% le risque de blessures graves en cas d\'accident.',
        tips: ['Obligatoire à l\'avant ET à l\'arrière', 'Vérifiez que tous sont attachés']
      },
      {
        subtitle: 'L\'Alcool au Volant',
        text: 'Le taux d\'alcoolémie autorisé est de 0,5 g/l de sang (0,2 g/l pour les jeunes conducteurs). L\'alcool est responsable d\'un tiers des accidents mortels.',
        tips: ['0,5 g/l max (0,2 g/l permis probatoire)', 'Un verre = 0,25 g/l environ']
      },
      {
        subtitle: 'Le Téléphone au Volant',
        text: 'L\'usage du téléphone tenu en main est interdit. Il multiplie par 3 le risque d\'accident. Même les kits mains-libres réduisent l\'attention.',
        tips: ['Téléphone = 3 points + 135€', 'Arrêtez-vous pour téléphoner']
      }
    ]
  },
  circulation: {
    title: 'Règles de Circulation',
    content: [
      {
        subtitle: 'Le Dépassement',
        text: 'Un dépassement se fait par la gauche. Il est interdit sur une ligne continue, au sommet d\'une côte, dans un virage sans visibilité, ou à moins de 150m d\'un passage à niveau.',
        tips: ['Vérifiez les rétroviseurs et l\'angle mort', 'Signalez avec le clignotant']
      },
      {
        subtitle: 'Le Stationnement',
        text: 'Le stationnement est interdit sur les trottoirs, passages piétons, pistes cyclables, et à moins de 5m des intersections. Le stationnement gênant est sanctionné.',
        tips: ['Respectez les marquages au sol', 'Pensez aux autres usagers']
      },
      {
        subtitle: 'Les Feux Tricolores',
        text: 'Rouge = Arrêt obligatoire. Orange = Arrêt sauf si vous ne pouvez plus vous arrêter en sécurité. Vert = Passage autorisé si la voie est libre.',
        tips: ['Orange ≠ Accélérer', 'Anticipez les changements de feux']
      }
    ]
  }
};

export const questions = {
  signalisation: [
    {
      id: 's1',
      question: 'Quelle est la forme d\'un panneau de danger ?',
      options: ['Circulaire', 'Triangulaire', 'Carré', 'Octogonal'],
      correct: 1,
      explanation: 'Les panneaux de danger sont triangulaires avec un fond blanc et un bord rouge.'
    },
    {
      id: 's2',
      question: 'Quelle couleur de fond ont les panneaux d\'obligation ?',
      options: ['Rouge', 'Blanc', 'Bleu', 'Vert'],
      correct: 2,
      explanation: 'Les panneaux d\'obligation ont un fond bleu et imposent un comportement obligatoire.'
    },
    {
      id: 's3',
      question: 'À quelle distance préviennent les panneaux de danger hors agglomération ?',
      options: ['50 mètres', '100 mètres', '150 mètres', '200 mètres'],
      correct: 2,
      explanation: 'Hors agglomération, les panneaux de danger sont placés à environ 150m du danger.'
    },
    {
      id: 's4',
      question: 'Que signifie un panneau rond à bord rouge barré ?',
      options: ['Obligation', 'Danger', 'Interdiction', 'Information'],
      correct: 2,
      explanation: 'Un panneau circulaire à bord rouge indique une interdiction.'
    },
    {
      id: 's5',
      question: 'Un panneau carré bleu est généralement un panneau de :',
      options: ['Danger', 'Interdiction', 'Obligation', 'Indication'],
      correct: 3,
      explanation: 'Les panneaux carrés ou rectangulaires bleus sont des panneaux d\'indication.'
    }
  ],
  priorite: [
    {
      id: 'p1',
      question: 'En l\'absence de signalisation, quelle règle de priorité s\'applique ?',
      options: ['Priorité à gauche', 'Priorité à droite', 'Premier arrivé, premier servi', 'Priorité aux véhicules lourds'],
      correct: 1,
      explanation: 'La priorité à droite est la règle par défaut en France.'
    },
    {
      id: 'p2',
      question: 'Au panneau STOP, l\'arrêt est :',
      options: ['Facultatif si la voie est libre', 'Obligatoire dans tous les cas', 'Obligatoire uniquement de nuit', 'Recommandé mais pas obligatoire'],
      correct: 1,
      explanation: 'L\'arrêt au STOP est toujours obligatoire, même si la voie semble libre.'
    },
    {
      id: 'p3',
      question: 'Dans un rond-point, qui est prioritaire ?',
      options: ['Celui qui entre', 'Celui qui est déjà engagé', 'Le véhicule le plus gros', 'Le premier arrivé'],
      correct: 1,
      explanation: 'Les véhicules déjà engagés dans le rond-point sont prioritaires.'
    },
    {
      id: 'p4',
      question: 'Que devez-vous faire avant d\'entrer dans un giratoire ?',
      options: ['Accélérer', 'Klaxonner', 'Céder le passage', 'Passer en priorité'],
      correct: 2,
      explanation: 'Vous devez céder le passage aux véhicules circulant dans le giratoire.'
    },
    {
      id: 'p5',
      question: 'Un panneau "Cédez le passage" impose :',
      options: ['Un arrêt complet', 'De laisser passer les prioritaires', 'De passer en premier', 'Aucune obligation'],
      correct: 1,
      explanation: 'Ce panneau impose de laisser passer les véhicules prioritaires sans arrêt obligatoire.'
    }
  ],
  vitesse: [
    {
      id: 'v1',
      question: 'Quelle est la vitesse maximale autorisée en agglomération ?',
      options: ['30 km/h', '50 km/h', '70 km/h', '90 km/h'],
      correct: 1,
      explanation: 'La vitesse est limitée à 50 km/h en agglomération, sauf signalisation contraire.'
    },
    {
      id: 'v2',
      question: 'Quelle est la vitesse maximale sur autoroute par temps normal ?',
      options: ['110 km/h', '120 km/h', '130 km/h', '150 km/h'],
      correct: 2,
      explanation: 'La vitesse maximale sur autoroute est de 130 km/h par temps normal.'
    },
    {
      id: 'v3',
      question: 'Quel est l\'intervalle de sécurité minimum sur autoroute ?',
      options: ['1 seconde', '2 secondes', '5 secondes', '10 secondes'],
      correct: 1,
      explanation: 'L\'intervalle de sécurité minimum est de 2 secondes sur autoroute.'
    },
    {
      id: 'v4',
      question: 'Sur route mouillée, la distance de freinage :',
      options: ['Reste identique', 'Double', 'Triple', 'Est divisée par 2'],
      correct: 1,
      explanation: 'Sur route mouillée, la distance de freinage double environ.'
    },
    {
      id: 'v5',
      question: 'Quelle est la vitesse maximale hors agglomération pour un jeune conducteur ?',
      options: ['70 km/h', '80 km/h', '90 km/h', '100 km/h'],
      correct: 0,
      explanation: 'Les jeunes conducteurs sont limités à 80 km/h sur les routes où la limite est 80 km/h (pas de réduction supplémentaire depuis 2018 sur ces routes).'
    }
  ],
  securite: [
    {
      id: 'se1',
      question: 'Quel est le taux d\'alcoolémie maximum autorisé pour un conducteur expérimenté ?',
      options: ['0,2 g/l', '0,5 g/l', '0,8 g/l', '1,0 g/l'],
      correct: 1,
      explanation: 'Le taux maximum est de 0,5 g/l de sang pour un conducteur expérimenté.'
    },
    {
      id: 'se2',
      question: 'Le port de la ceinture de sécurité est obligatoire :',
      options: ['Uniquement à l\'avant', 'Uniquement sur autoroute', 'Pour tous les occupants', 'Uniquement pour le conducteur'],
      correct: 2,
      explanation: 'La ceinture est obligatoire pour tous les occupants du véhicule.'
    },
    {
      id: 'se3',
      question: 'L\'usage du téléphone au volant fait perdre :',
      options: ['1 point', '2 points', '3 points', '6 points'],
      correct: 2,
      explanation: 'L\'usage du téléphone tenu en main fait perdre 3 points et coûte 135€.'
    },
    {
      id: 'se4',
      question: 'Le gilet de sécurité doit être :',
      options: ['Dans le coffre', 'Sous le siège', 'Accessible depuis l\'habitacle', 'Dans la boîte à gants uniquement'],
      correct: 2,
      explanation: 'Le gilet doit être facilement accessible depuis l\'habitacle du véhicule.'
    },
    {
      id: 'se5',
      question: 'Quel équipement est obligatoire dans un véhicule ?',
      options: ['Extincteur', 'Triangle de signalisation', 'Trousse de secours', 'Lampe torche'],
      correct: 1,
      explanation: 'Le triangle de signalisation et le gilet sont obligatoires dans tout véhicule.'
    }
  ],
  circulation: [
    {
      id: 'c1',
      question: 'Un dépassement doit se faire :',
      options: ['Par la droite', 'Par la gauche', 'Par n\'importe quel côté', 'Uniquement sur autoroute'],
      correct: 1,
      explanation: 'En règle générale, le dépassement s\'effectue par la gauche.'
    },
    {
      id: 'c2',
      question: 'Le feu orange signifie :',
      options: ['Passage libre', 'Accélérer pour passer', 'Arrêt sauf si impossibilité', 'Reculer'],
      correct: 2,
      explanation: 'Le feu orange impose l\'arrêt, sauf si vous ne pouvez plus vous arrêter en sécurité.'
    },
    {
      id: 'c3',
      question: 'À quelle distance minimale d\'une intersection le stationnement est-il interdit ?',
      options: ['3 mètres', '5 mètres', '10 mètres', '15 mètres'],
      correct: 1,
      explanation: 'Le stationnement est interdit à moins de 5 mètres d\'une intersection.'
    },
    {
      id: 'c4',
      question: 'Le dépassement est interdit :',
      options: ['Sur une ligne discontinue', 'Sur une ligne continue', 'Sur une ligne de rive', 'Après un panneau de limitation'],
      correct: 1,
      explanation: 'Le dépassement est interdit sur une ligne continue.'
    },
    {
      id: 'c5',
      question: 'Que signifie un feu clignotant orange ?',
      options: ['Interdiction de passer', 'Passage libre', 'Prudence, priorité à droite', 'Feu en panne'],
      correct: 2,
      explanation: 'Le feu clignotant orange invite à la prudence avec la règle de priorité à droite.'
    }
  ]
};

// Fonction pour mélanger un tableau
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Fonction pour obtenir des questions aléatoires
export const getRandomQuestions = (count = 10) => {
  const allQuestions = Object.values(questions).flat();
  return shuffleArray(allQuestions).slice(0, count);
};

// Fonction pour obtenir les questions d'une catégorie
export const getQuestionsByCategory = (categoryId) => {
  return questions[categoryId] || [];
};
