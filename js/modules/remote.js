// Module: Remote avec GitHub
const remoteModule = {
    id: 'remote',
    title: '🌐 Remote avec GitHub',
    intro: 'Apprenez à connecter votre dépôt local à GitHub pour collaborer avec d\'autres développeurs, sauvegarder votre code en ligne et bénéficier des fonctionnalités de la plateforme (issues, pull requests, etc.).',
    commands: [
        {
            name: 'git clone',
            desc: 'Cloner (télécharger) un dépôt distant complet sur votre machine',
            example: '$ git clone https://github.com/utilisateur/projet.git\nCloning into \'projet\'...\nremote: Counting objects: 100, done.\nReceiving objects: 100% (100/100), done.'
        },
        {
            name: 'git remote add origin',
            desc: 'Ajouter un dépôt distant et le nommer "origin" (convention standard)',
            example: '$ git remote add origin https://github.com/utilisateur/mon-projet.git\n\n$ git remote -v\norigin  https://github.com/utilisateur/mon-projet.git (fetch)\norigin  https://github.com/utilisateur/mon-projet.git (push)'
        },
        {
            name: 'git push',
            desc: 'Envoyer (pousser) vos commits locaux vers le dépôt distant',
            example: '$ git push origin main\nCounting objects: 5, done.\nWriting objects: 100% (5/5), 450 bytes | 0 bytes/s, done.\nTo https://github.com/utilisateur/projet.git\n   a1b2c3d..e4f5g6h  main -> main'
        },
        {
            name: 'git pull',
            desc: 'Récupérer et fusionner automatiquement les modifications distantes',
            example: '$ git pull origin main\nremote: Counting objects: 3, done.\nUpdating a1b2c3d..e4f5g6h\nFast-forward\n README.md | 10 ++++++++--\n 1 file changed, 8 insertions(+), 2 deletions(-)'
        },
        {
            name: 'git fetch',
            desc: 'Récupérer les modifications distantes SANS les fusionner automatiquement',
            example: '$ git fetch origin\nremote: Counting objects: 5, done.\nFrom https://github.com/utilisateur/projet\n * branch            main     -> FETCH_HEAD'
        },
        {
            name: 'ssh-keygen',
            desc: 'Générer une paire de clés SSH pour l\'authentification sécurisée avec GitHub',
            example: '$ ssh-keygen -t ed25519 -C "votre.email@example.com"\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key: [Entrée]\n\n# Puis ajoutez la clé publique (~/.ssh/id_ed25519.pub) dans GitHub'
        },
        {
            name: 'git remote -v',
            desc: 'Afficher la liste des dépôts distants configurés avec leurs URLs',
            example: '$ git remote -v\norigin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)\nupstream  https://github.com/original/repo.git (fetch)'
        }
    ],
    quiz: [
        {
            question: 'Quelle commande clone (télécharge) un dépôt GitHub ?',
            options: [
                'git download URL',
                'git clone URL',
                'git copy URL',
                'git fetch URL'
            ],
            correct: 1,
            explanation: '"git clone URL" télécharge une copie complète du dépôt distant, incluant tout l\'historique des commits.'
        },
        {
            question: 'Que signifie "origin" dans Git ?',
            options: [
                'Le premier commit du projet',
                'Le nom conventionnel par défaut du dépôt distant principal',
                'La branche principale (main)',
                'Le dossier racine du projet'
            ],
            correct: 1,
            explanation: '"origin" est le nom par défaut donné au dépôt distant lorsque vous clonez un projet ou ajoutez un remote. C\'est une convention, pas une obligation.'
        },
        {
            question: 'Quelle commande envoie vos commits locaux sur GitHub ?',
            options: [
                'git send origin main',
                'git push origin main',
                'git upload origin main',
                'git sync origin main'
            ],
            correct: 1,
            explanation: '"git push origin main" envoie les commits de votre branche main locale vers la branche main du dépôt distant nommé origin.'
        },
        {
            question: 'Quelle est la différence entre "git pull" et "git fetch" ?',
            options: [
                'Aucune différence, ce sont des synonymes',
                'pull récupère ET fusionne, fetch récupère SANS fusionner',
                'fetch est plus rapide que pull',
                'pull ne fonctionne qu\'avec GitHub'
            ],
            correct: 1,
            explanation: '"git fetch" télécharge les modifications sans les fusionner, vous laissant les inspecter. "git pull" = fetch + merge automatique.'
        },
        {
            question: 'Pourquoi utiliser une clé SSH avec GitHub ?',
            options: [
                'Pour accélérer les opérations Git',
                'Pour s\'authentifier de manière sécurisée sans saisir de mot de passe',
                'Pour crypter les fichiers du projet',
                'Pour créer des branches automatiquement'
            ],
            correct: 1,
            explanation: 'Les clés SSH permettent une authentification sécurisée et automatique avec GitHub, sans avoir à entrer votre mot de passe à chaque push/pull.'
        }
    ]
};