// Module: Gestion des Branches
const branchesModule = {
    id: 'branches',
    title: '🌿 Gestion des Branches',
    intro: 'Les branches permettent de travailler sur différentes fonctionnalités ou versions de manière isolée avant de les fusionner. C\'est un concept fondamental de Git qui facilite le travail collaboratif et l\'expérimentation sans risque.',
    commands: [
        {
            name: 'git branch',
            desc: 'Lister toutes les branches locales, ou créer une nouvelle branche',
            example: '$ git branch\n* main\n  develop\n  feature-login\n\n$ git branch nouvelle-feature\n# Crée une nouvelle branche sans y basculer'
        },
        {
            name: 'git checkout',
            desc: 'Basculer vers une autre branche ou créer et basculer en une seule commande',
            example: '$ git checkout develop\nSwitched to branch \'develop\'\n\n$ git checkout -b nouvelle-feature\n# Crée et bascule vers la nouvelle branche'
        },
        {
            name: 'git switch',
            desc: 'Commande moderne pour changer de branche (alternative à checkout)',
            example: '$ git switch main\nSwitched to branch \'main\'\n\n$ git switch -c nouvelle-feature\n# Crée et bascule (équivalent de checkout -b)'
        },
        {
            name: 'git merge',
            desc: 'Fusionner une branche dans la branche courante',
            example: '$ git checkout main\n$ git merge feature-login\nUpdating a1b2c3d..e4f5g6h\nFast-forward\n login.html | 50 ++++++++++++++++++\n 1 file changed, 50 insertions(+)'
        },
        {
            name: 'git branch -d',
            desc: 'Supprimer une branche locale (seulement si elle a été fusionnée)',
            example: '$ git branch -d ancienne-feature\nDeleted branch ancienne-feature (was a1b2c3d)\n\n$ git branch -D force-delete\n# Force la suppression même si non fusionnée'
        },
        {
            name: 'git merge --abort',
            desc: 'Annuler une fusion en cours en cas de conflits',
            example: '$ git merge feature-x\nAuto-merging file.txt\nCONFLICT (content): Merge conflict in file.txt\n\n$ git merge --abort\n# Annule la fusion et revient à l\'état initial'
        }
    ],
    quiz: [
        {
            question: 'Quelle commande crée une nouvelle branche ?',
            options: [
                'git new branch nom',
                'git branch nom',
                'git create nom',
                'git add branch nom'
            ],
            correct: 1,
            explanation: '"git branch nom" crée une nouvelle branche à partir du commit actuel sans y basculer automatiquement.'
        },
        {
            question: 'Comment basculer vers une autre branche existante ?',
            options: [
                'git switch nom  ou  git checkout nom',
                'git change nom',
                'git goto nom',
                'git move nom'
            ],
            correct: 0,
            explanation: 'On peut utiliser "git switch nom" (commande moderne) ou "git checkout nom" (commande traditionnelle) pour changer de branche.'
        },
        {
            question: 'Que fait la commande "git checkout -b nouvelle" ?',
            options: [
                'Supprime la branche nommée "nouvelle"',
                'Crée la branche "nouvelle" et bascule dessus immédiatement',
                'Renomme la branche courante en "nouvelle"',
                'Fusionne la branche "nouvelle" dans main'
            ],
            correct: 1,
            explanation: 'L\'option -b combine deux actions : créer une nouvelle branche ET basculer dessus en une seule commande.'
        },
        {
            question: 'Quelle commande fusionne une branche dans la branche courante ?',
            options: [
                'git combine nom-branche',
                'git merge nom-branche',
                'git join nom-branche',
                'git unite nom-branche'
            ],
            correct: 1,
            explanation: '"git merge nom-branche" fusionne les commits de la branche spécifiée dans la branche courante où vous vous trouvez.'
        },
        {
            question: 'Un conflit de fusion (merge conflict) se produit quand...',
            options: [
                'Git ne trouve pas la branche à fusionner',
                'Deux branches ont modifié les mêmes lignes d\'un fichier',
                'La branche à fusionner est vide',
                'Le message de commit est invalide'
            ],
            correct: 1,
            explanation: 'Un conflit survient quand deux branches ont modifié les mêmes portions de fichier. Git ne peut pas décider automatiquement quelle version garder.'
        }
    ]
};