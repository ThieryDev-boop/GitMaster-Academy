// Module: Commandes Avancées
const advancedModule = {
    id: 'advanced',
    title: '🔧 Commandes Avancées',
    intro: 'Maîtrisez les commandes avancées de Git pour gérer l\'historique, corriger des erreurs, optimiser votre workflow et devenir un expert. Ces outils puissants nécessitent une compréhension approfondie pour être utilisés en toute sécurité.',
    commands: [
        {
            name: 'git reset',
            desc: 'Annuler des commits en déplaçant HEAD (3 modes : soft, mixed, hard)',
            example: '$ git reset --soft HEAD~1\n# Annule le dernier commit, garde les modifs en staging\n\n$ git reset --mixed HEAD~1\n# Annule le commit ET le staging (par défaut)\n\n$ git reset --hard HEAD~1\n# ⚠️ DANGER: Supprime tout (commit + staging + modifs)'
        },
        {
            name: 'git revert',
            desc: 'Créer un nouveau commit qui annule les changements d\'un commit précédent',
            example: '$ git revert a1b2c3d\n[main e4f5g6h] Revert "Mauvaise modification"\n 1 file changed, 5 deletions(-)\n\n# Préférable à reset pour l\'historique public'
        },
        {
            name: 'git stash',
            desc: 'Mettre de côté temporairement des modifications non commitées',
            example: '$ git stash\nSaved working directory and index state\n\n$ git stash list\nstash@{0}: WIP on main: a1b2c3d Message\n\n$ git stash pop\n# Récupère et supprime le stash\n\n$ git stash apply\n# Récupère mais garde le stash'
        },
        {
            name: 'git rebase',
            desc: 'Réécrire l\'historique en rejouant les commits sur une nouvelle base',
            example: '$ git checkout feature\n$ git rebase main\n# Rejoue les commits de feature sur main\n# Crée un historique linéaire et propre\n\n⚠️ Ne jamais rebase sur des commits publics partagés!'
        },
        {
            name: 'git cherry-pick',
            desc: 'Appliquer un commit spécifique d\'une autre branche sur la branche courante',
            example: '$ git cherry-pick a1b2c3d\n[main e4f5g6h] Message du commit choisi\n\n# Utile pour récupérer un correctif spécifique\n# sans fusionner toute la branche'
        },
        {
            name: 'git reflog',
            desc: 'Afficher l\'historique de toutes les références HEAD (sauvetage possible)',
            example: '$ git reflog\ne4f5g6h HEAD@{0}: reset: moving to HEAD~1\na1b2c3d HEAD@{1}: commit: Message\n\n# Permet de récupérer des commits "perdus"\n$ git reset --hard a1b2c3d'
        },
        {
            name: 'git bisect',
            desc: 'Recherche dichotomique pour trouver le commit qui a introduit un bug',
            example: '$ git bisect start\n$ git bisect bad              # Commit actuel est mauvais\n$ git bisect good a1b2c3d     # Ce commit était bon\n# Git teste automatiquement les commits intermédiaires\n$ git bisect good/bad         # Vous indiquez à chaque fois\n$ git bisect reset            # Termine la recherche'
        }
    ],
    quiz: [
        {
            question: 'Quelle est la différence principale entre "git reset" et "git revert" ?',
            options: [
                'Aucune différence, ce sont des synonymes',
                'reset réécrit l\'historique (dangereux), revert crée un commit d\'annulation',
                'revert est plus rapide que reset',
                'reset ne fonctionne que localement'
            ],
            correct: 1,
            explanation: '"git reset" modifie l\'historique (dangereux sur branches partagées). "git revert" crée un nouveau commit qui annule proprement les changements.'
        },
        {
            question: 'À quoi sert la commande "git stash" ?',
            options: [
                'Supprimer définitivement des fichiers',
                'Mettre de côté temporairement des modifications non commitées',
                'Créer une nouvelle branche',
                'Fusionner deux branches'
            ],
            correct: 1,
            explanation: '"git stash" sauvegarde temporairement vos modifications sans les committer, utile pour changer rapidement de contexte.'
        },
        {
            question: 'Que fait la commande "git rebase" ?',
            options: [
                'Supprime toutes les branches',
                'Rejoue vos commits sur une nouvelle base, créant un historique linéaire',
                'Crée un backup complet du projet',
                'Télécharge les dernières modifications'
            ],
            correct: 1,
            explanation: '"git rebase" réapplique vos commits un par un sur une autre base, créant un historique propre et linéaire (mais réécrit l\'historique).'
        },
        {
            question: 'Pourquoi "git reset --hard" est-il dangereux ?',
            options: [
                'Il ralentit considérablement Git',
                'Il supprime définitivement toutes les modifications non commitées',
                'Il crée automatiquement des conflits',
                'Il nécessite une connexion Internet'
            ],
            correct: 1,
            explanation: '"--hard" supprime de façon irréversible toutes les modifications en cours. Les modifications non commitées sont perdues définitivement.'
        },
        {
            question: 'Dans quel cas utiliser "git cherry-pick" ?',
            options: [
                'Pour supprimer plusieurs commits',
                'Pour appliquer UN commit spécifique d\'une branche sans tout fusionner',
                'Pour créer une nouvelle branche',
                'Pour pousser vers GitHub'
            ],
            correct: 1,
            explanation: '"git cherry-pick" permet d\'appliquer sélectivement un ou plusieurs commits spécifiques sans fusionner toute la branche source.'
        }
    ]
};