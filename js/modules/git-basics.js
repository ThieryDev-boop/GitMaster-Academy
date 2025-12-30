// Module: Introduction à Git
const introModule = {
    id: 'intro',
    title: '📚 Introduction à Git',
    intro: 'Git est un système de contrôle de version distribué qui permet de suivre les modifications de code source au fil du temps. Créé par Linus Torvalds en 2005, Git est devenu l\'outil standard pour le versioning de code.',
    commands: [
        {
            name: 'git --version',
            desc: 'Vérifier la version de Git installée sur votre système',
            example: '$ git --version\ngit version 2.39.0'
        },
        {
            name: 'git config --global user.name',
            desc: 'Configurer votre nom d\'utilisateur pour les commits',
            example: '$ git config --global user.name "Jean Dupont"\n# Votre nom apparaîtra dans tous vos commits'
        },
        {
            name: 'git config --global user.email',
            desc: 'Configurer votre adresse email pour les commits',
            example: '$ git config --global user.email "jean.dupont@email.com"\n# Votre email sera associé à vos commits'
        },
        {
            name: 'git config --list',
            desc: 'Afficher toutes les configurations Git actuelles',
            example: '$ git config --list\nuser.name=Jean Dupont\nuser.email=jean.dupont@email.com\ncore.editor=vim'
        }
    ],
    quiz: [
        {
            question: 'Qu\'est-ce que Git ?',
            options: [
                'Un langage de programmation',
                'Un système de contrôle de version distribué',
                'Un éditeur de texte',
                'Un framework JavaScript'
            ],
            correct: 1,
            explanation: 'Git est un système de contrôle de version distribué créé par Linus Torvalds en 2005. Il permet de suivre l\'historique des modifications de code.'
        },
        {
            question: 'Quelle commande permet de vérifier la version de Git installée ?',
            options: [
                'git version',
                'git --version',
                'git -v',
                'git check'
            ],
            correct: 1,
            explanation: 'La commande "git --version" affiche la version de Git actuellement installée sur votre système.'
        },
        {
            question: 'Pourquoi utiliser un système de contrôle de version ?',
            options: [
                'Pour accélérer l\'exécution du code',
                'Pour suivre l\'historique des modifications et collaborer',
                'Pour compiler le code plus rapidement',
                'Pour créer des interfaces graphiques'
            ],
            correct: 1,
            explanation: 'Un système de contrôle de version permet de suivre toutes les modifications, de collaborer avec d\'autres développeurs et de revenir en arrière si nécessaire.'
        },
        {
            question: 'Git est-il un système centralisé ou distribué ?',
            options: [
                'Centralisé (serveur unique)',
                'Distribué (chaque développeur a une copie complète)',
                'Hybride (mélange des deux)',
                'Aucun des deux'
            ],
            correct: 1,
            explanation: 'Git est un système distribué : chaque développeur possède une copie complète de l\'historique du projet, permettant de travailler offline.'
        },
        {
            question: 'Que configure la commande "git config --global user.name" ?',
            options: [
                'Le mot de passe Git',
                'Le nom d\'utilisateur qui apparaîtra dans les commits',
                'Le nom du projet',
                'L\'adresse du serveur distant'
            ],
            correct: 1,
            explanation: 'Cette commande configure le nom qui sera associé à tous vos commits. L\'option --global l\'applique à tous vos projets.'
        }
    ]
};

// Module: Commandes Essentielles
const basicsModule = {
    id: 'basics',
    title: '⚡ Commandes Essentielles',
    intro: 'Apprenez les commandes de base indispensables pour créer un dépôt Git, suivre les fichiers et enregistrer vos modifications. Ces commandes constituent le workflow quotidien de tout développeur.',
    commands: [
        {
            name: 'git init',
            desc: 'Initialiser un nouveau dépôt Git dans le répertoire courant',
            example: '$ git init\nInitialized empty Git repository in /home/user/projet/.git/\n\n# Crée un dossier caché .git contenant toute l\'infrastructure Git'
        },
        {
            name: 'git status',
            desc: 'Afficher l\'état actuel du dépôt (fichiers modifiés, non suivis, en staging)',
            example: '$ git status\nOn branch main\nChanges not staged for commit:\n  modified:   index.html\n\nUntracked files:\n  style.css'
        },
        {
            name: 'git add',
            desc: 'Ajouter des fichiers à la zone de staging (préparation pour commit)',
            example: '$ git add fichier.txt      # Ajoute un fichier spécifique\n$ git add .                # Ajoute tous les fichiers modifiés\n$ git add *.js             # Ajoute tous les fichiers .js'
        },
        {
            name: 'git commit',
            desc: 'Enregistrer les modifications de la zone de staging avec un message descriptif',
            example: '$ git commit -m "Ajout de la page d\'accueil"\n[main a1b2c3d] Ajout de la page d\'accueil\n 2 files changed, 45 insertions(+)'
        },
        {
            name: 'git log',
            desc: 'Afficher l\'historique des commits du dépôt',
            example: '$ git log\ncommit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6\nAuthor: Jean Dupont <jean@email.com>\nDate:   Mon Dec 30 10:00:00 2024\n\n    Ajout de la page d\'accueil'
        },
        {
            name: 'git diff',
            desc: 'Afficher les différences entre les fichiers modifiés et la dernière version commitée',
            example: '$ git diff\n--- a/index.html\n+++ b/index.html\n@@ -10,3 +10,4 @@\n+<h1>Nouveau titre</h1>'
        }
    ],
    quiz: [
        {
            question: 'Quelle commande initialise un nouveau dépôt Git ?',
            options: [
                'git start',
                'git init',
                'git create',
                'git new'
            ],
            correct: 1,
            explanation: '"git init" crée un nouveau dépôt Git dans le répertoire courant en créant un dossier caché .git.'
        },
        {
            question: 'Que fait la commande "git add ." ?',
            options: [
                'Supprime tous les fichiers',
                'Ajoute tous les fichiers modifiés à la zone de staging',
                'Crée un nouveau fichier',
                'Affiche la liste des fichiers'
            ],
            correct: 1,
            explanation: '"git add ." ajoute tous les fichiers modifiés et nouveaux du répertoire courant à la zone de staging (index).'
        },
        {
            question: 'Comment créer un commit avec un message ?',
            options: [
                'git commit "mon message"',
                'git commit -m "mon message"',
                'git save "mon message"',
                'git record "mon message"'
            ],
            correct: 1,
            explanation: 'L\'option -m (message) permet d\'ajouter directement un message descriptif au commit sans ouvrir d\'éditeur.'
        },
        {
            question: 'Quelle commande affiche l\'historique des commits ?',
            options: [
                'git history',
                'git log',
                'git list',
                'git show'
            ],
            correct: 1,
            explanation: '"git log" affiche la liste chronologique des commits avec l\'auteur, la date et le message de chaque commit.'
        },
        {
            question: 'Que montre la commande "git status" ?',
            options: [
                'La version de Git installée',
                'L\'état actuel du dépôt (fichiers modifiés, en staging, non suivis)',
                'Les branches disponibles uniquement',
                'La liste des utilisateurs'
            ],
            correct: 1,
            explanation: '"git status" affiche les fichiers modifiés, ceux en zone de staging, les fichiers non suivis et la branche courante.'
        }
    ]
};