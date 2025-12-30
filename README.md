# GitMaster-Academy
Cette platforme vous donne la possibilité de booster vos connaissance en git et github deux outils puissant de manipulation de version de code qui pourront donc vous permettre d'être un peu plus à l'aise dans le suivie de l'historique de vos code 


🚀 Git Mastery Academy

Formation interactive complète sur Git et GitHub avec exercices pratiques, quiz et certificat téléchargeable.

📋 Table des matières

    Présentation
    Fonctionnalités
    Installation
    Structure du projet
    Utilisation
    Modules disponibles
    Ajouter un module
    Déploiement GitHub Pages
    Technologies utilisées
    Contribution
    Licence

🎯 Présentation

Git Master Academy est une application web pédagogique moderne qui permet d'apprendre Git et GitHub de manière interactive. L'application propose :

    6 modules progressifs couvrant tous les aspects de Git
    30 questions de quiz avec explications détaillées
    Simulateur de console pour pratiquer les commandes
    Système de progression avec déblocage séquentiel
    Certificat PDF téléchargeable à la fin

✨ Fonctionnalités
🎓 Formation complète

    Introduction aux concepts de Git
    Commandes essentielles (init, add, commit, log)
    Gestion des branches (branch, checkout, merge)
    Travail avec GitHub (clone, push, pull)
    Workflow collaboratif (fork, pull request, issues)
    Commandes avancées (reset, revert, stash, rebase)

💯 Système d'évaluation

    Quiz interactifs avec correction automatique
    Score minimum de 70% requis pour valider
    Explications détaillées des bonnes réponses
    Sauvegarde automatique de la progression

🎨 Interface moderne

    Design responsive (mobile, tablette, desktop)
    Animations fluides et transitions
    Palette de couleurs professionnelle
    Navigation intuitive

📜 Certificat officiel

    Génération automatique en PDF
    Personnalisé avec votre nom
    Score moyen affiché
    Téléchargeable instantanément

💻 Installation
Prérequis

    Navigateur web moderne (Chrome, Firefox, Safari, Edge)
    Aucune installation serveur requise

Installation locale

    Cloner ou télécharger le projet

bash

git clone https://github.com/votre-username/git-mastery-academy.git
cd git-mastery-academy

    Ouvrir le fichier index.html

bash

# Sur macOS
open index.html

# Sur Linux
xdg-open index.html

# Sur Windows
start index.html

Ou simplement double-cliquer sur index.html dans votre explorateur de fichiers.
📁 Structure du projet

git-mastery-academy/
│
├── index.html                 # Page principale
│
├── css/
│   └── styles.css            # Styles globaux
│
├── js/
│   ├── app.js                # Application principale
│   └── modules/
│       ├── git-basics.js     # Module intro + commandes de base
│       ├── branches.js       # Module gestion des branches
│       ├── remote.js         # Module GitHub remote
│       ├── workflow.js       # Module workflow collaboratif
│       └── advanced.js       # Module commandes avancées
│
└── README.md                 # Ce fichier

🎮 Utilisation
Démarrer la formation

    Ouvrez index.html dans votre navigateur
    Cliquez sur "Commencer la Formation"
    Suivez les modules dans l'ordre (déblocage progressif)

Navigation

    Sidebar gauche : Liste des modules
        ✓ = Module complété
        ○ = Module disponible
        🔒 = Module verrouillé
    Zone principale : Contenu du module actuel
    Barre de progression : Visualise votre avancement

Valider un module

    Lisez le cours et les commandes
    Testez des commandes dans le simulateur de console
    Répondez aux 5 questions du quiz
    Cliquez sur "Valider mes réponses"
    Score minimum requis : 70%

Obtenir le certificat

    Complétez les 6 modules (100% de progression)
    Cliquez sur "📜 Mon Certificat" dans la sidebar
    Entrez votre nom complet
    Cliquez sur "Générer PDF"
    Le certificat se télécharge automatiquement

📚 Modules disponibles
Module	Titre	Contenu
1️⃣	Introduction à Git	Concepts de base, configuration
2️⃣	Commandes Essentielles	init, add, commit, status, log
3️⃣	Gestion des Branches	branch, checkout, merge, conflits
4️⃣	Remote avec GitHub	clone, push, pull, SSH
5️⃣	Workflow Collaboratif	fork, pull request, issues
6️⃣	Commandes Avancées	reset, revert, stash, rebase
➕ Ajouter un nouveau module

Pour ajouter un module personnalisé, créez un nouveau fichier dans js/modules/ :
javascript

// js/modules/mon-module.js

const monModule = {
    id: 'mon-module',
    title: '🎯 Titre du Module',
    intro: 'Description introductive du module...',
    commands: [
        {
            name: 'git ma-commande',
            desc: 'Description de la commande',
            example: '$ git ma-commande\nRésultat attendu'
        }
        // Ajoutez autant de commandes que nécessaire
    ],
    quiz: [
        {
            question: 'Ma question ?',
            options: [
                'Réponse A',
                'Réponse B',
                'Réponse C',
                'Réponse D'
            ],
            correct: 1, // Index de la bonne réponse (0-3)
            explanation: 'Explication de la bonne réponse'
        }
        // Minimum 5 questions recommandé
    ]
};

Ensuite, ajoutez-le dans index.html :
html

<script src="js/modules/mon-module.js"></script>

Et modifiez js/app.js pour l'inclure :
javascript

const modules = [
    introModule,
    basicsModule,
    branchesModule,
    remoteModule,
    workflowModule,
    advancedModule,
    monModule  // ← Ajoutez votre module ici
];

🌐 Déploiement sur GitHub Pages
Étapes de déploiement

    Créer un dépôt GitHub

bash

git init
git add .
git commit -m "Initial commit - Git Mastery Academy"

    Pousser vers GitHub

bash

git remote add origin https://github.com/votre-username/git-mastery-academy.git
git branch -M main
git push -u origin main

    Activer GitHub Pages
        Allez dans Settings > Pages
        Source : Deploy from a branch
        Branch : main / (root)
        Cliquez sur Save
    Accéder à votre site
        URL : https://votre-username.github.io/git-mastery-academy/
        Le déploiement prend 2-3 minutes

Configuration DNS personnalisé (optionnel)

Si vous avez un domaine personnalisé :

    Ajoutez un fichier CNAME à la racine :

votre-domaine.com

    Configurez les DNS chez votre registrar :

A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   votre-username.github.io

🛠️ Technologies utilisées

    HTML5 - Structure sémantique
    CSS3 - Styles modernes (Flexbox, Grid, animations)
    JavaScript Vanilla - Logique applicative (ES6+)
    jsPDF - Génération de certificats PDF
    LocalStorage API - Sauvegarde de progression

Pourquoi Vanilla JS ?

    ✅ Zéro dépendances (sauf jsPDF)
    ✅ Performance optimale
    ✅ Maintenance simplifiée
    ✅ Apprentissage des fondamentaux
    ✅ Compatible tous navigateurs modernes

🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

    Fork le projet
    Créez une branche (git checkout -b feature/amelioration)
    Commitez vos changements (git commit -m 'Ajout fonctionnalité')
    Push vers la branche (git push origin feature/amelioration)
    Ouvrez une Pull Request

Idées de contributions

    🌍 Traductions (EN, ES, DE...)
    📚 Nouveaux modules (Git LFS, Submodules...)
    🎨 Thèmes alternatifs (dark mode)
    ♿ Améliorations accessibilité
    🐛 Corrections de bugs

📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de :

    ✅ Utiliser commercialement
    ✅ Modifier
    ✅ Distribuer
    ✅ Utiliser en privé

Voir le fichier LICENSE pour plus de détails.
📧 Contact & Support

    GitHub : Issues
    Email : support@gitmasteryacademy.com
    Twitter : @GitMasteryAcad

🎉 Remerciements

Merci à tous les contributeurs et à la communauté Git pour avoir rendu cet outil incroyable !
<div align="center">

Fait avec ❤️ par Git Mastery Academy

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !
</div>
