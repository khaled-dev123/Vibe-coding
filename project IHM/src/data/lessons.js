// Leçons de code de la route
export const lessons = [
  {
    id: 1,
    title: "🚦 Panneaux de Signalisation",
    category: "Signalisation",
    description: "Apprenez à reconnaître et comprendre les différents panneaux routiers.",
    content: `
# Panneaux de Signalisation

Les panneaux de signalisation sont essentiels pour la sécurité routière. Ils se divisent en plusieurs catégories :

## Panneaux de Danger (Triangulaires)
- **Forme** : Triangle rouge pointant vers le haut
- **Fonction** : Avertir d'un danger à venir
- Exemples : virages dangereux, passages piétons, animaux sauvages

## Panneaux d'Interdiction (Circulaires)
- **Forme** : Cercle rouge avec fond blanc
- **Fonction** : Interdire certaines actions
- Exemples : sens interdit, interdiction de stationner, limitation de vitesse

## Panneaux d'Obligation (Circulaires bleus)
- **Forme** : Cercle bleu
- **Fonction** : Imposer une direction ou comportement
- Exemples : direction obligatoire, piste cyclable obligatoire

## Panneaux d'Indication (Carrés ou rectangulaires)
- **Forme** : Carré ou rectangle bleu/blanc/vert
- **Fonction** : Informer les usagers
- Exemples : parking, hôpital, autoroute

## Points Clés à Retenir
✓ Les panneaux triangulaires = DANGER
✓ Les cercles rouges = INTERDICTION
✓ Les cercles bleus = OBLIGATION
✓ Respecter tous les panneaux est OBLIGATOIRE
    `,
    icon: "🚦",
    duration: "10 min"
  },
  {
    id: 2,
    title: "🔄 Règles de Priorité",
    category: "Circulation",
    description: "Maîtrisez les règles de priorité aux intersections et carrefours.",
    content: `
# Règles de Priorité

Les règles de priorité permettent d'organiser le trafic et d'éviter les accidents.

## Priorité à Droite
**Règle générale** : En l'absence de signalisation, vous devez céder le passage aux véhicules venant de votre droite.

### Exceptions importantes :
- Sur les routes prioritaires (panneau jaune)
- Aux ronds-points (priorité à ceux déjà engagés)
- Devant les panneaux STOP et cédez-le-passage

## Panneaux de Priorité

### STOP (Octogone rouge)
- **Arrêt OBLIGATOIRE**
- Marquer un temps d'arrêt complet
- Céder le passage même si aucun véhicule n'est visible

### Cédez le Passage (Triangle inversé)
- Ralentir et céder le passage
- Pas d'arrêt obligatoire si la voie est libre

### Route Prioritaire (Losange jaune)
- Vous êtes sur une voie prioritaire
- Les autres doivent vous céder le passage

## Cas Particuliers
- **Piétons** : Toujours prioritaires sur les passages cloutés
- **Véhicules prioritaires** : Police, pompiers, ambulances avec gyrophares
- **Tramways** : Prioritaires dans tous les cas

## Ronds-Points
✓ Priorité à ceux déjà engagés dans le rond-point
✓ Mettre le clignotant droit pour sortir
✓ Céder le passage avant d'entrer
    `,
    icon: "🔄",
    duration: "12 min"
  },
  {
    id: 3,
    title: "🅿️ Règles de Stationnement",
    category: "Stationnement",
    description: "Où et comment stationner correctement votre véhicule.",
    content: `
# Règles de Stationnement

Le stationnement incorrect peut entraîner des amendes et mise en fourrière.

## Stationnement Interdit

### ABSOLUMENT INTERDIT de stationner :
- Sur les passages piétons
- Devant les bouches d'incendie
- Sur les trottoirs (sauf signalisation contraire)
- Dans les virages sans visibilité
- Sur les pistes cyclables
- À moins de 5m d'un carrefour

### Zones à Stationnement Réglementé
- **Zone bleue** : Stationnement limité dans le temps (disque requis)
- **Zone payante** : Horodateur obligatoire
- **Zone résidents** : Carte de résident nécessaire

## Stationnement Gênant vs Dangereux

### Stationnement Gênant (amende)
- Sur une place handicapé sans carte
- Sur une place de livraison
- Dépassement du temps autorisé

### Stationnement Dangereux (amende + fourrière)
- Virage sans visibilité
- Voie de circulation
- Passage piéton

## Arrêt vs Stationnement

**ARRÊT** : Immobilisation du véhicule :
- Inférieure à 1 minute
- Le conducteur reste au volant
- Moteur peut rester allumé

**STATIONNEMENT** : Immobilisation :
- Supérieure à 1 minute
- Conducteur quitte le véhicule

## Conseils Pratiques
✓ Vérifier les panneaux de signalisation
✓ Respecter les marquages au sol
✓ Ne jamais gêner la circulation
✓ Penser aux personnes à mobilité réduite
    `,
    icon: "🅿️",
    duration: "8 min"
  },
  {
    id: 4,
    title: "⚡ Limitations de Vitesse",
    category: "Vitesse",
    description: "Connaître les vitesses maximales autorisées selon les zones.",
    content: `
# Limitations de Vitesse

Respecter les limitations de vitesse est crucial pour votre sécurité et celle des autres.

## Limitations Générales en France

### En Agglomération
- **50 km/h** : Vitesse maximale standard
- **30 km/h** : Zones résidentielles, écoles
- **20 km/h** : Zones de rencontre
- **Zone 30** : Signalée par panneau spécifique

### Hors Agglomération
- **80 km/h** : Routes bidirectionnelles sans séparateur central
- **90 km/h** : Routes avec séparateur central
- **110 km/h** : Voies express (routes à 2x2 voies)

### Autoroutes
- **130 km/h** : Par temps sec
- **110 km/h** : Par temps de pluie
- **50 km/h** : En cas de très mauvaise visibilité (< 50m)

## Jeunes Conducteurs (Permis < 3 ans)

Limitations RÉDUITES pour les jeunes conducteurs :
- Autoroutes : **110 km/h** (au lieu de 130)
- Voies express : **100 km/h** (au lieu de 110)
- Routes : **80 km/h** (même limitation)
- Agglomération : **50 km/h** (même limitation)

## Conditions Particulières

### Par Temps de Pluie
- Autoroute : 130 → **110 km/h**
- Voie express : 110 → **100 km/h**
- Route : 80 → **80 km/h** (inchangé)

### Visibilité < 50m (brouillard intense)
- **TOUTES VOIES : 50 km/h**
- Allumer feux de brouillard

## Sanctions
- Dépassement < 20 km/h : Amende + 1 point
- Dépassement 20-30 km/h : Amende + 2 points
- Dépassement 30-40 km/h : Amende + 3 points
- Dépassement > 50 km/h : Délit, suspension permis

## Points Essentiels
✓ Adapter sa vitesse aux conditions
✓ Respecter les panneaux de limitation
✓ Jeunes conducteurs = vitesses réduites
✓ Pluie = réduction automatique de vitesse
    `,
    icon: "⚡",
    duration: "10 min"
  },
  {
    id: 5,
    title: "📏 Distances de Sécurité",
    category: "Sécurité",
    description: "Respecter les distances pour éviter les accidents.",
    content: `
# Distances de Sécurité

Maintenir une distance suffisante est primordial pour réagir en cas d'urgence.

## Distance de Sécurité

**Définition** : Espace minimum à maintenir entre votre véhicule et celui qui vous précède.

### Règle des 2 Secondes
1. Choisir un point de repère fixe
2. Quand le véhicule devant passe ce point, compter "1001, 1002"
3. Vous devez atteindre ce point APRÈS avoir compté 2 secondes

### Par temps de pluie ou mauvaise visibilité
- **Doubler la distance** : Règle des 4 secondes minimum

## Distance d'Arrêt

**Distance d'arrêt = Distance de réaction + Distance de freinage**

### Distance de Réaction
Temps entre la perception du danger et l'action de freiner :
- **En moyenne : 1 seconde**
- À 50 km/h ≈ 14 mètres
- À 90 km/h ≈ 25 mètres
- À 130 km/h ≈ 36 mètres

### Distance de Freinage
Distance parcourue pendant le freinage :
- À 50 km/h ≈ 14 mètres
- À 90 km/h ≈ 45 mètres
- À 130 km/h ≈ 94 mètres

### Distance d'Arrêt Totale
- À **50 km/h** : ~28 mètres
- À **90 km/h** : ~70 mètres
- À **130 km/h** : ~130 mètres

## Facteurs Aggravants

### Ces éléments AUGMENTENT les distances :
- ❌ Pluie, neige, verglas
- ❌ Fatigue, alcool, drogues
- ❌ Pneumatiques usés
- ❌ Freins défectueux
- ❌ Distraction (téléphone)

## Sur Autoroute

**Règle pratique** : Laisser au moins 2 bandes de la ligne blanche entre les véhicules

## Sanctions
- Non-respect distance de sécurité : **Amende de 135€ + 3 points**

## À Retenir
✓ Minimum 2 secondes par beau temps
✓ 4 secondes si pluie/brouillard
✓ Plus la vitesse augmente, plus la distance augmente
✓ Toujours anticiper les freinages
✓ Garder ses distances = temps de réaction
    `,
    icon: "📏",
    duration: "12 min"
  },
  {
    id: 6,
    title: "🛡️ Équipements et Sécurité",
    category: "Sécurité",
    description: "Les équipements obligatoires et règles de sécurité essentielles.",
    content: `
# Équipements et Sécurité

Votre véhicule doit être équipé de dispositifs obligatoires pour circuler légalement.

## Équipements Obligatoires

### À BORD DU VÉHICULE
- ✅ **Gilet de haute visibilité** : À portée de main (pas dans le coffre)
- ✅ **Triangle de signalisation** : En cas de panne ou accident
- ✅ **Éthylotest** : Non obligatoire mais recommandé
- ✅ **Assurance** : Attestation visible sur le pare-brise
- ✅ **Carte grise** : Document du véhicule
- ✅ **Permis de conduire** : Valide et adapté au véhicule

### SUR LE VÉHICULE
- ✅ Deux feux de croisement
- ✅ Deux feux de position (veilleuses)
- ✅ Deux feux de route
- ✅ Feux de stop fonctionnels
- ✅ Clignotants avant et arrière
- ✅ Plaque d'immatriculation lisible et éclairée
- ✅ Rétroviseurs (intérieur + extérieurs)

## Ceinture de Sécurité

**OBLIGATOIRE** pour tous les passagers, à toutes les places.

### Sanctions
- Non port de ceinture : **Amende 135€ + 3 points**
- Le conducteur est responsable des passagers < 18 ans

### Exceptions limitées
- Femmes enceintes avec certificat médical
- Personnes handicapées avec certificat
- Taxis en service

## Siège Auto pour Enfants

**OBLIGATOIRE** jusqu'à 10 ans ou 135 cm :
- Groupe 0/0+ : Nouveau-né à 13 kg (dos à la route)
- Groupe 1 : 9 à 18 kg
- Groupe 2/3 : 15 à 36 kg (rehausseur)

### Interdictions
❌ JAMAIS d'enfant à l'avant avec airbag actif et siège dos à la route

## Alcool et Drogues

### Taux d'alcoolémie autorisé
- Conducteurs expérimentés : **0,5 g/L** (0,25 mg/L air expiré)
- Jeunes conducteurs (< 3 ans permis) : **0,2 g/L** (0,10 mg/L)

### Sanctions alcool
- 0,5 à 0,8 g/L : Amende + 6 points
- > 0,8 g/L : Délit, suspension permis, prison possible

### Drogues
- **TOLÉRANCE ZÉRO**
- Dépistage positif = Suspension immédiate + poursuites

## Téléphone au Volant

### INTERDIT
❌ Téléphoner en conduisant (même avec kit mains-libres à l'oreille)
❌ Écrire ou lire des messages
❌ Utiliser des écouteurs/oreillettes

### Autorisé
✓ Système Bluetooth intégré au véhicule
✓ Téléphone à l'arrêt, moteur éteint

### Sanction
- Amende **135€ + 3 points**
- Rétention de permis possible

## Points Essentiels
✓ Ceinture = TOUJOURS et pour TOUS
✓ Gilet + triangle = obligatoires et accessibles
✓ Alcool = 0,5 g/L max (0,2 pour jeunes)
✓ Téléphone = À ranger pendant la conduite
✓ Vérifier l'état des feux régulièrement
    `,
    icon: "🛡️",
    duration: "15 min"
  }
];

export default lessons;
