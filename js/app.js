/**
 * GIT MASTERY ACADEMY - Application principale
 * Système de formation interactive Git & GitHub
 * @author Git Mastery Academy
 * @version 1.0.0
 */

// ===== CONFIGURATION & DATA =====

// Agrégation de tous les modules
const modules = [
    introModule,
    basicsModule,
    branchesModule,
    remoteModule,
    workflowModule,
    advancedModule
];

// ===== STATE MANAGEMENT =====

// État de l'application
let appState = {
    currentModule: null,
    userAnswers: {},
    scores: JSON.parse(localStorage.getItem('gitMasteryScores')) || {},
    completedModules: JSON.parse(localStorage.getItem('completedModules')) || []
};

// ===== INITIALIZATION =====

/**
 * Initialise l'application au chargement
 */
function init() {
    renderModuleList();
    updateProgress();
    attachEventListeners();
    
    // Message de bienvenue console
    console.log('%c🚀 Git Mastery Academy', 'color: #2563eb; font-size: 20px; font-weight: bold');
    console.log('%cBienvenue dans la formation interactive Git & GitHub!', 'color: #475569; font-size: 14px');
}

/**
 * Attache tous les event listeners
 */
function attachEventListeners() {
    document.getElementById('startButton').addEventListener('click', () => {
        loadModule('intro');
    });

    document.getElementById('certButton').addEventListener('click', openCertModal);
    document.getElementById('cancelCert').addEventListener('click', closeCertModal);
    document.getElementById('generateCert').addEventListener('click', generateCertificate);
    
    // Fermer modal avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
        }
    });
}

// ===== MODULE RENDERING =====

/**
 * Rend la liste des modules dans la sidebar
 */
function renderModuleList() {
    const list = document.getElementById('moduleList');
    
    list.innerHTML = modules.map((mod, index) => {
        const isCompleted = appState.completedModules.includes(mod.id);
        const isLocked = index > 0 && !appState.completedModules.includes(modules[index - 1].id);
        const isActive = appState.currentModule === mod.id;
        
        // Icône selon l'état
        const icon = isCompleted ? '✓' : isLocked ? '🔒' : '○';
        
        // Classes CSS
        const classes = [
            'module-item',
            isCompleted && 'completed',
            isLocked && 'locked',
            isActive && 'active'
        ].filter(Boolean).join(' ');
        
        return `
            <div class="${classes}" onclick="${isLocked ? '' : `loadModule('${mod.id}')`}">
                <span class="module-icon">${icon}</span>
                <span>${mod.title}</span>
            </div>
        `;
    }).join('');
}

/**
 * Charge et affiche un module spécifique
 * @param {string} moduleId - ID du module à charger
 */
function loadModule(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) {
        console.error(`Module ${moduleId} non trouvé`);
        return;
    }

    // Met à jour l'état
    appState.currentModule = moduleId;
    appState.userAnswers[moduleId] = [];
    
    // Re-rend la liste des modules
    renderModuleList();

    // Construit le HTML du module
    const content = document.getElementById('mainContent');
    content.innerHTML = `
        <div class="module-content">
            <h2>${module.title}</h2>
            
            <div class="module-intro">
                <p>${module.intro}</p>
            </div>

            <h3>📝 Commandes Principales</h3>
            <div class="command-list">
                ${renderCommands(module.commands)}
            </div>

            <h3>💻 Simulateur de Console</h3>
            <div class="console-simulator">
                <div class="console-output" id="consoleOutput">
$ Bienvenue dans le simulateur Git!
$ Tapez "help" pour voir les commandes disponibles
$ Tapez "clear" pour effacer la console
                </div>
                <div class="console-input">
                    <span>$</span>
                    <input type="text" id="consoleInput" placeholder="Entrez une commande Git..." autocomplete="off">
                </div>
            </div>

            <div class="quiz-section">
                <h3>📋 Quiz de Validation</h3>
                <p>Répondez aux questions ci-dessous pour valider vos connaissances. Score minimum requis : <strong>70%</strong></p>
                <div id="quizContainer"></div>
                <button class="quiz-button" onclick="submitQuiz('${moduleId}')">Valider mes réponses</button>
                <div id="quizResult"></div>
            </div>
        </div>
    `;

    // Rend le quiz et active la console
    renderQuiz(module.quiz, moduleId);
    setupConsole();
    
    // Scroll en haut
    content.scrollTop = 0;
}

/**
 * Rend la liste des commandes
 * @param {Array} commands - Tableau des commandes
 * @returns {string} HTML des commandes
 */
function renderCommands(commands) {
    return commands.map(cmd => `
        <div class="command-item">
            <div class="command-name">${escapeHtml(cmd.name)}</div>
            <p class="command-desc">${escapeHtml(cmd.desc)}</p>
            <div class="command-example">${escapeHtml(cmd.example)}</div>
        </div>
    `).join('');
}

// ===== QUIZ MANAGEMENT =====

/**
 * Rend le quiz d'un module
 * @param {Array} questions - Tableau de questions
 * @param {string} moduleId - ID du module
 */
function renderQuiz(questions, moduleId) {
    const container = document.getElementById('quizContainer');
    
    container.innerHTML = questions.map((q, qIndex) => `
        <div class="question">
            <div class="question-text">${qIndex + 1}. ${escapeHtml(q.question)}</div>
            ${q.options.map((opt, oIndex) => `
                <div class="answer-option" onclick="selectAnswer('${moduleId}', ${qIndex}, ${oIndex})">
                    <input type="radio" name="q${qIndex}" id="q${qIndex}_${oIndex}" value="${oIndex}">
                    <label for="q${qIndex}_${oIndex}">${escapeHtml(opt)}</label>
                </div>
            `).join('')}
            <div class="explanation" id="exp_${qIndex}" style="display:none;"></div>
        </div>
    `).join('');
}

/**
 * Sélectionne une réponse au quiz
 * @param {string} moduleId - ID du module
 * @param {number} questionIndex - Index de la question
 * @param {number} answerIndex - Index de la réponse
 */
function selectAnswer(moduleId, questionIndex, answerIndex) {
    if (!appState.userAnswers[moduleId]) {
        appState.userAnswers[moduleId] = [];
    }
    
    appState.userAnswers[moduleId][questionIndex] = answerIndex;

    // Mise à jour visuelle
    const question = document.querySelectorAll('.question')[questionIndex];
    const options = question.querySelectorAll('.answer-option');
    
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === answerIndex);
    });
}

/**
 * Soumet et corrige le quiz
 * @param {string} moduleId - ID du module
 */
function submitQuiz(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    const answers = appState.userAnswers[moduleId] || [];
    
    // Vérification que toutes les questions ont une réponse
    if (answers.length < module.quiz.length) {
        alert('⚠️ Veuillez répondre à toutes les questions avant de valider.');
        return;
    }

    let correctCount = 0;
    
    // Correction de chaque question
    module.quiz.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
        if (isCorrect) correctCount++;

        const question = document.querySelectorAll('.question')[index];
        const options = question.querySelectorAll('.answer-option');
        
        // Affichage visuel des bonnes/mauvaises réponses
        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none'; // Désactive les clics
            
            if (i === q.correct) {
                opt.classList.add('correct');
            } else if (i === answers[index] && i !== q.correct) {
                opt.classList.add('incorrect');
            }
        });

        // Affichage de l'explication
        const expDiv = document.getElementById(`exp_${index}`);
        expDiv.textContent = `💡 ${q.explanation}`;
        expDiv.style.display = 'block';
    });

    // Calcul du score
    const score = Math.round((correctCount / module.quiz.length) * 100);
    const passed = score >= 70;
    
    // Sauvegarde du score
    appState.scores[moduleId] = score;
    localStorage.setItem('gitMasteryScores', JSON.stringify(appState.scores));

    // Marquage du module comme complété
    if (passed && !appState.completedModules.includes(moduleId)) {
        appState.completedModules.push(moduleId);
        localStorage.setItem('completedModules', JSON.stringify(appState.completedModules));
    }

    // Affichage du résultat
    displayQuizResult(correctCount, module.quiz.length, score, passed);
    
    // Mise à jour de l'interface
    updateProgress();
    renderModuleList();
}

/**
 * Affiche le résultat du quiz
 */
function displayQuizResult(correct, total, score, passed) {
    const resultDiv = document.getElementById('quizResult');
    resultDiv.className = `quiz-result ${passed ? 'success' : 'failure'}`;
    
    resultDiv.innerHTML = `
        <h4>${passed ? '🎉 Félicitations !' : '😔 Pas encore réussi...'}</h4>
        <p><strong>Score: ${correct}/${total} (${score}%)</strong></p>
        <p>${passed 
            ? 'Vous avez validé ce module ! Vous pouvez passer au suivant.' 
            : 'Révisez le cours et réessayez. Score minimum requis : 70%.'
        }</p>
    `;
    
    // Scroll vers le résultat
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== CONSOLE SIMULATOR =====

/**
 * Configure le simulateur de console
 */
function setupConsole() {
    const input = document.getElementById('consoleInput');
    const output = document.getElementById('consoleOutput');

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            
            // Affichage de la commande
            output.innerHTML += `<br>$ ${escapeHtml(cmd)}<br>`;

            // Traitement de la commande
            processCommand(cmd, output);

            input.value = '';
            output.scrollTop = output.scrollHeight; // Scroll automatique
        }
    });
}

/**
 * Traite une commande console
 * @param {string} cmd - Commande entrée
 * @param {HTMLElement} output - Élément de sortie
 */
function processCommand(cmd, output) {
    if (cmd === '') return;
    
    if (cmd === 'help') {
        output.innerHTML += `
<span style="color: #10b981;">Commandes disponibles:</span>
• git init
• git status
• git add .
• git commit -m "message"
• git log
• git branch
• git checkout nom
• git push origin main
• git pull origin main
• clear - Efface la console
• help - Affiche cette aide
        `;
    } else if (cmd === 'clear') {
        output.innerHTML = '$ Console réinitialisée<br>$ Tapez "help" pour l\'aide';
    } else if (cmd.startsWith('git ')) {
        output.innerHTML += `<span style="color: #10b981;">✓ Commande exécutée avec succès!</span>`;
    } else {
        output.innerHTML += `<span style="color: #ef4444;">⚠️ Commande non reconnue. Tapez "help"</span>`;
    }
}

// ===== PROGRESS MANAGEMENT =====

/**
 * Met à jour la barre de progression
 */
function updateProgress() {
    const completed = appState.completedModules.length;
    const total = modules.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = 
        `Progression: ${percentage}% (${completed}/${total} modules complétés)`;
}

// ===== CERTIFICATE MANAGEMENT =====

/**
 * Ouvre la modal de certificat
 */
function openCertModal() {
    if (appState.completedModules.length < modules.length) {
        alert('⚠️ Vous devez terminer tous les modules pour obtenir votre certificat.');
        return;
    }
    
    document.getElementById('certModal').classList.add('active');
    document.getElementById('userName').focus();
}

/**
 * Ferme la modal de certificat
 */
function closeCertModal() {
    document.getElementById('certModal').classList.remove('active');
    document.getElementById('userName').value = '';
}

/**
 * Génère et télécharge le certificat PDF
 */
function generateCertificate() {
    const name = document.getElementById('userName').value.trim();
    
    if (!name) {
        alert('⚠️ Veuillez entrer votre nom complet.');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Fond coloré
        doc.setFillColor(240, 248, 255);
        doc.rect(0, 0, 297, 210, 'F');

        // Bordure élégante
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(3);
        doc.rect(10, 10, 277, 190);
        
        doc.setLineWidth(1);
        doc.rect(15, 15, 267, 180);

        // Titre principal
        doc.setFontSize(40);
        doc.setTextColor(37, 99, 235);
        doc.text('CERTIFICAT DE FORMATION', 148.5, 50, { align: 'center' });

        // Sous-titre
        doc.setFontSize(20);
        doc.setTextColor(71, 85, 105);
        doc.text('Git & GitHub Mastery', 148.5, 65, { align: 'center' });

        // Ligne décorative
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(0.5);
        doc.line(80, 70, 217, 70);

        // Texte principal
        doc.setFontSize(16);
        doc.setTextColor(30, 41, 59);
        doc.text('Ce certificat atteste que', 148.5, 90, { align: 'center' });

        // Nom de l'étudiant
        doc.setFontSize(32);
        doc.setTextColor(37, 99, 235);
        doc.setFont(undefined, 'bold');
        doc.text(name, 148.5, 110, { align: 'center' });

        // Suite du texte
        doc.setFontSize(16);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(30, 41, 59);
        doc.text('a complété avec succès la formation complète', 148.5, 125, { align: 'center' });
        doc.text('Git Mastery Academy', 148.5, 135, { align: 'center' });

        // Score moyen
        const scores = Object.values(appState.scores);
        const avgScore = scores.length > 0 
            ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
            : 100;
        
        doc.setFontSize(14);
        doc.setTextColor(16, 185, 129);
        doc.text(`Score moyen: ${avgScore}%`, 148.5, 150, { align: 'center' });

        // Date et signature
        const date = new Date().toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 116, 139);
        doc.text(`Délivré le ${date}`, 148.5, 170, { align: 'center' });
        
        doc.setFontSize(10);
        doc.text('Git Mastery Academy - Formation Interactive', 148.5, 180, { align: 'center' });

        // Téléchargement
        const filename = `Certificat_Git_Mastery_${name.replace(/\s+/g, '_')}.pdf`;
        doc.save(filename);
        
        closeCertModal();
        alert('🎓 Votre certificat a été généré avec succès !');
        
    } catch (error) {
        console.error('Erreur génération PDF:', error);
        alert('❌ Erreur lors de la génération du certificat. Veuillez réessayer.');
    }
}

// ===== UTILITY FUNCTIONS =====

/**
 * Échappe les caractères HTML pour éviter les injections
 * @param {string} text - Texte à échapper
 * @returns {string} Texte échappé
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== START APPLICATION =====

// Initialisation au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}