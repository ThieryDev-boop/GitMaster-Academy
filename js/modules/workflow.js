// Module: Workflow Collaboratif
const workflowModule = {
    id: 'workflow',
    title: '🤝 Workflow Collaboratif',
    intro: 'Découvrez les bonnes pratiques et outils pour collaborer efficacement sur GitHub avec d\'autres développeurs. Apprenez le workflow Fork -> Branch -> Pull Request utilisé dans les projets open source et professionnels.',
    commands: [
        {
            name: 'Fork (interface GitHub)',
            desc: 'Créer une copie personnelle d\'un dépôt dans votre compte GitHub',
            example: '1. Sur GitHub, naviguez vers le dépôt original\n2. Cliquez sur le bouton "Fork" en haut à droite\n3. Une copie du dépôt est créée dans votre compte\n4. Vous pouvez maintenant cloner VOTRE fork localement'
        },
        {
            name: 'Pull Request (PR)',
            desc: 'Proposer vos modifications pour qu\'elles soient fusionnées dans le dépôt original',
            example: '1. Faites vos modifications sur une branche\n2. git push origin ma-branche\n3. Sur GitHub, cliquez "New Pull Request"\n4. Décrivez vos changements et soumettez\n5. Les mainteneurs peuvent reviewer et accepter'
        },
        {
            name: 'Issues (interface GitHub)',
            desc: 'Signaler des bugs, proposer des fonctionnalités ou discuter du projet',
            example: '1. Onglet "Issues" sur GitHub\n2. Cliquez "New issue"\n3. Titre clair et description détaillée\n4. Labels optionnels (bug, feature, question)\n5. Assign à des développeurs si nécessaire'
        },
        {
            name: 'git fetch upstream',
            desc: 'Récupérer les mises à jour du dépôt original (après avoir forké)',
            example: '$ git remote add upstream https://github.com/original/projet.git\n$ git fetch upstream\n$ git checkout main\n$ git merge upstream/main\n# Synchronise votre fork avec l\'original'
        },
        {
            name: 'git rebase upstream/main',
            desc: 'Mettre à jour votre branche avec les derniers changements du projet original',
            example: '$ git fetch upstream\n$ git checkout ma-feature\n$ git rebase upstream/main\n# Rejoue vos commits sur les dernières modifications'
        },
        {
            name: 'Code Review',
            desc: 'Processus de révision du code avant fusion (bonnes pratiques)',
            example: 'Sur GitHub Pull Request:\n- Commenter des lignes spécifiques\n- Suggérer des modifications\n- Approuver ou demander des changements\n- Discuter de l\'implémentation\n- Tester le code avant de merger'
        }
    ],
    quiz: [
        {
            question: 'Qu\'est-ce qu\'un "Fork" sur GitHub ?',
            options: [
                'Un bug critique dans le code',
                'Une copie personnelle d\'un dépôt dans votre compte',
                'Une branche spéciale protégée',
                'Un type de commit particulier'
            ],
            correct: 1,
            explanation: 'Un fork est une copie complète d\'un dépôt dans votre propre compte GitHub, vous permettant d\'expérimenter librement sans affecter l\'original.'
        },
        {
            question: 'À quoi sert une Pull Request (PR) ?',
            options: [
                'Télécharger du code depuis GitHub',
                'Proposer des modifications à fusionner dans le dépôt original',
                'Supprimer une branche distante',
                'Créer un nouveau dépôt'
            ],
            correct: 1,
            explanation: 'Une PR permet de proposer vos modifications pour révision. Les mainteneurs peuvent commenter, demander des changements et finalement fusionner votre code.'
        },
        {
            question: 'Quelle est la différence entre "git fetch" et "git pull" ?',
            options: [
                'Aucune différence pratique',
                'fetch récupère sans fusionner, pull récupère ET fusionne',
                'fetch est obsolète, utilisez toujours pull',
                'pull ne fonctionne qu\'en local'
            ],
            correct: 1,
            explanation: '"git fetch" télécharge les modifications sans les appliquer. "git pull" fait un fetch + merge automatique, ce qui peut créer des conflits.'
        },
        {
            question: 'À quoi servent les "Issues" sur GitHub ?',
            options: [
                'À créer des branches automatiquement',
                'À signaler des bugs, proposer des fonctionnalités et discuter',
                'À fusionner du code automatiquement',
                'À supprimer des fichiers du projet'
            ],
            correct: 1,
            explanation: 'Les Issues sont un système de suivi pour bugs, demandes de fonctionnalités, questions et discussions autour du projet. C\'est un outil de gestion de projet.'
        },
        {
            question: 'Quel est le workflow recommandé pour contribuer à un projet open source ?',
            options: [
                'Clone direct > Commit sur main > Push',
                'Fork > Branche > Commit > Push > Pull Request',
                'Download ZIP > Modification > Upload',
                'Direct push sur le dépôt original'
            ],
            correct: 1,
            explanation: 'Le workflow standard est : Forks le projet, créer une branche pour vos modifications, commiter, pusher sur votre fork, puis créer une Pull Request vers l\'original.'
        }
    ]
};