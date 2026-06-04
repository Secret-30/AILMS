/* --- APPLICATION LOGIC ARCHITECTURE STATE REGISTER --- */
const GLOBAL_DATA_STATE = {
    appTheme: 'dark',
    sessionUser: null,
    authCardMode: 'login', // 'login' or 'register'
    selectedTrackKey: 'ai',
    isCardFlipped: false,

    // Hardcoded Admin Keys Configuration Space
    adminRootCredentials: {
        vectorEmail: "admin@aiml.com",
        secretPassword: "admin123"
    },

    // In-Memory Simulation Accounts Storage
    accountRegistry: [
        { identity: "Marcus Vance", vector: "m.vance@aiml.com", accessKey: "student123" },
        { identity: "Evae Jung", vector: "Evae@gmail.com", accessKey: "student123" },
        { identity: "Mark Roy", vector: "mark@hotmail.com", accessKey: "student123" },
        { identity: "Wendy Choi", vector: "wendy@gmail.com", accessKey: "student123" },
        { identity: "Khushi Parmar", vector: "khushi@aiml.com", accessKey: "student123" },
        { identity: "Nitish Oberoi", vector: "nitish@gmail.com", accessKey: "student123" },
        { identity: "Samule Kim", vector: "Samule@hotmail.com", accessKey: "student123" },
        { identity: "Elena Rostova", vector: "elena.r@aiml.com", accessKey: "student123" }
    ],

    // Operational Analytics Mapping Log
    studentLedger: [
        { identity: "Marcus Vance", vector: "m.vance@aiml.com", registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 100, stateFlag: "certified" },
        { identity: "Marcus Vance", vector: "m.vance@aiml.com",  registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 75, stateFlag: "inprogress" },
        { identity: "Evae Jung", vector: "Evae@gmail.com",  registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 80, stateFlag: "inprogress" },
        { identity: "Mark Roy", vector: "mark@hotmail.com",  registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 100, stateFlag: "certified" },
        { identity: "Wendy Choi", vector: "wendy@gmail.com",  registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 40, stateFlag: "inprogress" },
        { identity: "Khushi Parmar", vector: "khushi@aiml.com",  registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 50, stateFlag: "inprogress" },
        { identity: "Nitish Oberoi", vector: "nitish@gmail.com", registeredCourse: "Advanced Machine Learning & Statistical Modeling", executionProgress: 45, stateFlag: "inprogress" },
        { identity: "Samule Kim", vector: "Samule@hotmail.com", registeredCourse: "Advanced Machine Learning & Statistical Modeling", executionProgress: 100, stateFlag: "certified" },
        { identity: "Elena Rostova", vector: "elena.r@aiml.com", registeredCourse: "Advanced Machine Learning & Statistical Modeling", executionProgress: 45, stateFlag: "inprogress" }
    ],

    tracksMap: {
        ai: {
            title: "Foundational Artificial Intelligence & Generative Science",
            videoEmbed: "https://www.youtube.com/embed/JMUxmLyrhSk",
            cardIndexPointer: 0,
            puzzlesCollection: [
                { keyword: "AGENT", clue: "An autonomous architecture node monitoring environmental factors via specific sensors." },
                { keyword: "TENSOR", clue: "Multi-dimensional statistical numerical array representation managing deep feature matrices." },
                { keyword: "HEURISTIC", clue: "A practical mental shortcut or search rule designed to solve optimization puzzles faster when classic boundary configurations fail." },
                { keyword: "TOKENS", clue: "The core broken-down structural text bits, characters, or semantic fragments processed directly by transformer text generators." },
                { keyword: "PROMPT", clue: "The explicit semantic input context sequence engineered to direct an LLM model's contextual execution window." }
            ],
            flashcardsCollection: [
                { query: "What sets Machine Learning apart from custom heuristic program scripts?", response: "Classic programs combine rules and data to return answers. ML profiles process answers and raw data to extract mathematical rules." },
                { query: "What exactly is an Artificial General Intelligence (AGI)?", response: "A theoretical representation of AI capable of matching or surpassing human adaptability across any cognitive domain." },
                { query: "How does the 'Attention Mechanism' impact sequence-to-sequence model layers?", response: "It allows networks to weigh dynamically how tokens depend on each other across long distances, completely bypassing traditional bottleneck dependencies." },
                { query: "What is Hallucination inside Large Language Models?", response: "A behavioral flaw where a transformer generates factually incorrect phrases that sound grammatically plausible and confident." }
            ],
            fullSyllabusNotes: `Module 1: Foundational Artificial Intelligence & Historical Frameworks\nArtificial Intelligence (AI) maps computational science models focused on engineering architectures capable of handling complex tasks traditionally requiring human focus.\n\nModule 2: Mathematics Foundations\nMatrix transformation algorithms operate the core pipeline calculations: Y = W * X + b.`
        },
        ml: {
            title: "Advanced Machine Learning & Statistical Modeling",
            videoEmbed: "https://www.youtube.com/embed/hR-tMLTMw0s",
            cardIndexPointer: 0,
            puzzlesCollection: [
                { keyword: "BIAS", clue: "The algorithmic error value derived directly from structural oversimplification models." },
                { keyword: "OVERFITTING", clue: "A state where a model aligns too closely with custom noise profiles in training datasets, ruining outside performance metrics." },
                { keyword: "GRADIENT", clue: "The vector matrix of multi-variable partial derivatives pointing toward the steepest rate of function elevation." },
                { keyword: "EPOCH", clue: "One full execution pass traversing the training data vectors entirely forward and backward through a network loop." }
            ],
            flashcardsCollection: [
                { query: "What represents the definitive technical function of L1 Lasso Regularization?", response: "It applies an absolute magnitude penalty directly onto the loss curve, driving less predictive weights down to zero to achieve automated feature selection." },
                { query: "What is the primary trade-off highlighted by the Bias-Variance dilemma?", response: "High bias causes underfitting due to overly simple structural assumptions, while high variance causes overfitting by treating minor dataset fluctuations as vital rules." },
                { query: "How does Stochastic Gradient Descent differ from classic Batch Gradient Descent?", response: "Stochastic updates weights using just one sample at a time instead of processing the entire collection, leading to faster updates with more random variance." },
                { query: "What defines an unsupervised learning structural strategy?", response: "Analyzing unlabelled data pools directly to uncover hidden associations, clusters, or internal features without manual classification labels." }
            ],
            fullSyllabusNotes: `Module 1: Advanced Machine Learning Principles\nStatistical Learning Theory establishes analytical framework limits processing empirical vectors.\n\nModule 2: Regularized Optimization Schemes\nLasso elements add spatial reduction thresholds to mitigate system parameter variance.`
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    compileAdministrativeLedger();
    refreshSystemMetricsSummary();
});

/* --- FUNCTIONAL PASSWORD EYE TOGGLE CONTROLLER --- */
window.togglePasswordInputMask = function() {
    const passwordField = document.getElementById('auth-password-input');
    const eyeIcon = document.getElementById('toggle-password-visibility');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.className = 'fa-solid fa-eye-slash toggle-password-eye';
    } else {
        passwordField.type = 'password';
        eyeIcon.className = 'fa-solid fa-eye toggle-password-eye';
    }
};

/* --- SECURE ROUTING GATEWAY SYSTEM ACTIONS --- */
window.setAuthMode = function(targetMode) {
    const activeRole = document.querySelector('input[name="user-role"]:checked').value;
    
    if (activeRole === 'admin' && targetMode === 'register') {
        alert("Administrative root configurations must use fixed terminal access points. New admin registration is prohibited.");
        document.getElementById('toggle-login-mode').click();
        return;
    }

    GLOBAL_DATA_STATE.authCardMode = targetMode;
    const isLogin = targetMode === 'login';
    
    document.getElementById('toggle-login-mode').className = isLogin ? 'active' : '';
    document.getElementById('toggle-register-mode').className = !isLogin ? 'active' : '';
    document.getElementById('register-name-wrapper').classList.toggle('hidden', isLogin);
    
    document.getElementById('auth-submit-btn').innerHTML = isLogin 
        ? `<span>Initialize Core Connection</span> <i class="fa-solid fa-right-to-bracket"></i>`
        : `<span>Deploy Registered Node</span> <i class="fa-solid fa-user-plus"></i>`;
};

window.onRoleSwitch = function() {
    const activeRole = document.querySelector('input[name="user-role"]:checked').value;
    const noticeBox = document.getElementById('admin-security-notice');
    
    if (activeRole === 'admin') {
        noticeBox.classList.remove('hidden');
        if (GLOBAL_DATA_STATE.authCardMode === 'register') {
            setAuthMode('login');
        }
    } else {
        noticeBox.classList.add('hidden');
    }
};

window.handleAuthentication = function(event) {
    event.preventDefault();
    const selectedRole = document.querySelector('input[name="user-role"]:checked').value;
    const inputEmail = document.getElementById('auth-email-input').value.trim();
    const inputPassword = document.getElementById('auth-password-input').value;
    const inputName = document.getElementById('auth-name-input').value.trim();

    if (selectedRole === 'admin') {
        if (inputEmail === GLOBAL_DATA_STATE.adminRootCredentials.vectorEmail && 
            inputPassword === GLOBAL_DATA_STATE.adminRootCredentials.secretPassword) {
            
            GLOBAL_DATA_STATE.sessionUser = { identity: "System Core Supervisor", vector: inputEmail, accountRole: "admin" };
            document.getElementById('user-display-tag').innerHTML = `<i class="fa-solid fa-user-shield"></i> Authority: ${inputEmail}`;
            
            document.getElementById('auth-section').classList.add('hidden');
            document.getElementById('admin-management-section').classList.remove('hidden');
            document.getElementById('global-logout-btn').classList.remove('hidden');
            
            compileAdministrativeLedger();
            refreshSystemMetricsSummary();
            clearSecurityFormInputs();
        } else {
            alert("Security Vector Error: Access denied. Invalid administrative credentials.");
        }
    } else {
        if (GLOBAL_DATA_STATE.authCardMode === 'register') {
            if (!inputName) {
                alert("Identity verification parameter missing: Full Name required.");
                return;
            }
            
            const conflictMatch = GLOBAL_DATA_STATE.accountRegistry.find(user => user.vector === inputEmail);
            if (conflictMatch) {
                alert("System Registry Alert: A user vector matching this email address is already initialized.");
                return;
            }

            GLOBAL_DATA_STATE.accountRegistry.push({ identity: inputName, vector: inputEmail, accessKey: inputPassword });
            GLOBAL_DATA_STATE.studentLedger.push({
                identity: inputName, vector: inputEmail, registeredCourse: "Foundational Artificial Intelligence & Generative Science", executionProgress: 0, stateFlag: "inprogress"
            });

            alert("Account deployment verified. Please sign in to establish your terminal session.");
            setAuthMode('login');
        } else {
            const accountRecord = GLOBAL_DATA_STATE.accountRegistry.find(u => u.vector === inputEmail && u.accessKey === inputPassword);
            
            if (accountRecord) {
                GLOBAL_DATA_STATE.sessionUser = { identity: accountRecord.identity, vector: inputEmail, accountRole: "student" };
                document.getElementById('user-display-tag').innerHTML = `<i class="fa-solid fa-circle-nodes"></i> Active Node: ${inputEmail}`;
                
                document.getElementById('auth-section').classList.add('hidden');
                document.getElementById('portal-hub-section').classList.remove('hidden');
                document.getElementById('global-logout-btn').classList.remove('hidden');
                
                generateTrackPortalDisplayCards();
                clearSecurityFormInputs();
            } else {
                alert("Authentication Signature Failure: Check entry email and security access key password.");
            }
        }
    }
};

function clearSecurityFormInputs() {
    document.getElementById('auth-email-input').value = '';
    document.getElementById('auth-password-input').value = '';
    document.getElementById('auth-name-input').value = '';
    // Reset eye visibility indicator states dynamically on clear execution
    const passwordField = document.getElementById('auth-password-input');
    const eyeIcon = document.getElementById('toggle-password-visibility');
    passwordField.type = 'password';
    eyeIcon.className = 'fa-solid fa-eye toggle-password-eye';
}

/* --- ADMIN EDITOR LOGIC BLOCK --- */
window.onFormModeOrTrackSwitch = function() {
    const selectedMode = document.getElementById('admin-track-action-mode').value;
    const currentHeader = document.getElementById('form-panel-header-title');
    const systemId = document.getElementById('new-track-id');
    const systemTitle = document.getElementById('new-track-title');
    const systemVideo = document.getElementById('new-track-video-url');
    const systemNotes = document.getElementById('new-track-notes-payload');
    const actionButton = document.getElementById('admin-form-submit-btn');

    if (selectedMode === 'create') {
        currentHeader.innerHTML = `<i class="fa-solid fa-folder-plus"></i> Inject New Pipeline Course Variant`;
        actionButton.innerHTML = `<i class="fa-solid fa-tower-broadcast"></i> Broadcast Active Course Pipeline`;
        systemId.disabled = false;
        document.getElementById('admin-course-injection-form').reset();
        document.getElementById('admin-track-action-mode').value = 'create';
    } else {
        const targetKey = selectedMode === 'edit-ai' ? 'ai' : 'ml';
        const trackData = GLOBAL_DATA_STATE.tracksMap[targetKey];

        currentHeader.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modify Active Course: ${trackData.title}`;
        actionButton.innerHTML = `<i class="fa-solid fa-file-shield"></i> Commit Core Track Updates`;
        
        systemId.value = targetKey;
        systemId.disabled = true;
        systemTitle.value = trackData.title;
        systemVideo.value = trackData.videoEmbed;
        systemNotes.value = trackData.fullSyllabusNotes;
    }
};

window.handleCourseFormSubmission = function(event) {
    event.preventDefault();
    const activeMode = document.getElementById('admin-track-action-mode').value;
    const targetId = document.getElementById('new-track-id').value.trim().toLowerCase();
    const calculatedTitle = document.getElementById('new-track-title').value.trim();
    const mediaUrl = document.getElementById('new-track-video-url').value.trim();
    const inputContent = document.getElementById('new-track-notes-payload').value.trim();

    if (activeMode === 'create') {
        if (GLOBAL_DATA_STATE.tracksMap[targetId]) {
            alert("Tracking identifier error: This custom key already references a core course infrastructure element.");
            return;
        }
        GLOBAL_DATA_STATE.tracksMap[targetId] = {
            title: calculatedTitle, videoEmbed: mediaUrl, cardIndexPointer: 0,
            puzzlesCollection: [{ keyword: "COMPUTE", clue: "Dynamic integration node validation parameter placeholder row." }],
            flashcardsCollection: [{ query: `Verification query for incoming pipeline domain: ${calculatedTitle}`, response: "Database record structural sync complete." }],
            fullSyllabusNotes: inputContent
        };
        alert(`Course Stream Deployment Complete: ${calculatedTitle}`);
    } else {
        const structuralEditKey = activeMode === 'edit-ai' ? 'ai' : 'ml';
        GLOBAL_DATA_STATE.tracksMap[structuralEditKey].title = calculatedTitle;
        GLOBAL_DATA_STATE.tracksMap[structuralEditKey].videoEmbed = mediaUrl;
        GLOBAL_DATA_STATE.tracksMap[structuralEditKey].fullSyllabusNotes = inputContent;
        alert(`Pipeline Core Updates Successfully Committed: ${calculatedTitle}`);
    }

    document.getElementById('admin-track-action-mode').value = 'create';
    document.getElementById('new-track-id').disabled = false;
    document.getElementById('admin-course-injection-form').reset();
    onFormModeOrTrackSwitch();
    
    compileAdministrativeLedger();
    refreshSystemMetricsSummary();
};

/* --- SHARED DISPLAY INFRASTRUCTURE MAPPING SYSTEMS --- */
window.engageCourseTrack = function(trackKey) {
    GLOBAL_DATA_STATE.selectedTrackKey = trackKey;
    const activeCourse = GLOBAL_DATA_STATE.tracksMap[trackKey];
    
    document.getElementById('active-workspace-title').innerText = activeCourse.title;
    document.getElementById('workspace-video-iframe').src = activeCourse.videoEmbed;
    
    GLOBAL_DATA_STATE.isCardFlipped = false;
    processMarkdownTextDocument(activeCourse.fullSyllabusNotes);
    initializeTerminalKeyPuzzles(activeCourse.puzzlesCollection);
    syncSidebarFlashcardDisplay();

    document.getElementById('portal-hub-section').classList.add('hidden');
    document.getElementById('learning-workspace-section').classList.remove('hidden');
};

function processMarkdownTextDocument(rawTextLines) {
    const textPane = document.getElementById('curriculum-document-flow');
    if (!textPane) return;
    const paragraphLines = rawTextLines.split('\n');
    let outputHTML = '';
    
    paragraphLines.forEach(line => {
        const formatted = line.trim();
        if (formatted.startsWith('Module') || formatted.startsWith('Table of Contents')) {
            outputHTML += `<h2>${formatted}</h2>`;
        } else if (formatted.length > 0) {
            outputHTML += `<p>${formatted}</p>`;
        }
    });
    textPane.innerHTML = outputHTML;
    textPane.scrollTop = 0;
}

function generateTrackPortalDisplayCards() {
    const portalGrid = document.getElementById('courses-cards-grid');
    if (!portalGrid) return;
    portalGrid.innerHTML = '';
    
    Object.keys(GLOBAL_DATA_STATE.tracksMap).forEach(key => {
        const data = GLOBAL_DATA_STATE.tracksMap[key];
        const isML = key === 'ml';
        portalGrid.innerHTML += `
            <div class="hub-course-card-element ${isML ? 'purple-card' : ''}" onclick="engageCourseTrack('${key}')">
                <div class="card-icon-backing"><i class="fa-solid ${isML ? 'fa-gears' : 'fa-brain'}"></i></div>
                <h4>${data.title}</h4>
                <p>Deploy continuous text files, interactive design assets layers, and data structure logging verification terminals.</p>
            </div>
        `;
    });
}

function initializeTerminalKeyPuzzles(puzzleDataArray) {
    const textTargetBox = document.getElementById('track-interactive-puzzles-deck');
    if (!textTargetBox) return;
    textTargetBox.innerHTML = '';
    
    puzzleDataArray.forEach((puz, i) => {
        textTargetBox.innerHTML += `
            <div class="puzzle-node-row-item">
                <p class="puzzle-prompt-hint"><strong>System Variable [0${i + 1}]:</strong> ${puz.clue}</p>
                <div class="puzzle-input-action-row">
                    <input type="text" id="puzzle-term-field-${i}" placeholder="ENTER CONFIRMATION KEYWORD...">
                    <button class="btn btn-secondary" onclick="evaluateSinglePuzzleNode(${i}, '${puz.keyword}', 'puzzle-term-field-${i}', 'puzzle-status-hook-${i}')">Verify</button>
                </div>
                <div id="puzzle-status-hook-${i}" class="puzzle-feedback-row"></div>
            </div>
        `;
    });
}

window.evaluateSinglePuzzleNode = function(idx, validAnswer, inputFieldId, trackingAnchor) {
    const userString = document.getElementById(inputFieldId).value.trim().toUpperCase();
    const textStatusFrame = document.getElementById(trackingAnchor);
    if (userString === validAnswer) {
        textStatusFrame.innerHTML = `<span style="color:var(--color-success-green); font-size:12.5px;"><i class="fa-solid fa-square-check"></i> Variable linked inside schema directory!</span>`;
    } else {
        textStatusFrame.innerHTML = `<span style="color:var(--color-danger-crimson); font-size:12.5px;"><i class="fa-solid fa-circle-exclamation"></i> Out of Alignment. Correct realigned element is [ <strong>${validAnswer}</strong> ]</span>`;
    }
};

function syncSidebarFlashcardDisplay() {
    const course = GLOBAL_DATA_STATE.tracksMap[GLOBAL_DATA_STATE.selectedTrackKey];
    const singleFlashNode = course.flashcardsCollection[course.cardIndexPointer];
    
    document.getElementById('flashcard-index-tracker').innerText = `Flash Deck Core (${course.cardIndexPointer + 1}/${course.flashcardsCollection.length})`;
    const targetSurface = document.getElementById('flashcard-interactive-surface');
    if (targetSurface && singleFlashNode) {
        targetSurface.innerText = GLOBAL_DATA_STATE.isCardFlipped ? singleFlashNode.response : singleFlashNode.query;
    }
}

window.toggleActiveFlashcardFlip = function() {
    GLOBAL_DATA_STATE.isCardFlipped = !GLOBAL_DATA_STATE.isCardFlipped;
    syncSidebarFlashcardDisplay();
};

window.shiftFlashcardPointer = function(offsetValue) {
    const activeTrack = GLOBAL_DATA_STATE.tracksMap[GLOBAL_DATA_STATE.selectedTrackKey];
    const totalCount = activeTrack.flashcardsCollection.length;
    activeTrack.cardIndexPointer = (activeTrack.cardIndexPointer + offsetValue + totalCount) % totalCount;
    GLOBAL_DATA_STATE.isCardFlipped = false;
    syncSidebarFlashcardDisplay();
};

function compileAdministrativeLedger() {
    const anchorBody = document.getElementById('admin-student-matrix-rows-hook');
    if (!anchorBody) return;
    anchorBody.innerHTML = '';

    GLOBAL_DATA_STATE.studentLedger.forEach(row => {
        const isCertified = row.stateFlag === 'certified';
        anchorBody.innerHTML += `
            <tr>
                <td><strong>${row.identity}</strong></td>
                <td style="color:var(--text-secondary); font-family:monospace; font-size:12.5px;">${row.vector}</td>
                <td>${row.registeredCourse}</td>
                <td>
                    <span style="font-weight:700; font-size:12px;">${row.executionProgress}%</span>
                    <div class="progress-bar-outer-frame">
                        <div class="progress-bar-inner-fill" style="width:${row.executionProgress}%; background-color:${isCertified ? 'var(--color-success-green)' : 'var(--color-primary-cyan)'};"></div>
                    </div>
                </td>
                <td>
                    <span class="status-pill-badge ${isCertified ? 'certified' : 'inprogress'}">
                        <i class="fa-solid ${isCertified ? 'fa-award' : 'fa-spinner'}"></i> ${row.stateFlag}
                    </span>
                </td>
            </tr>
        `;
    });
}

function refreshSystemMetricsSummary() {
    if (document.getElementById('metric-total-students-count')) {
        document.getElementById('metric-total-students-count').innerText = GLOBAL_DATA_STATE.studentLedger.length;
        document.getElementById('metric-total-tracks-count').innerText = Object.keys(GLOBAL_DATA_STATE.tracksMap).length;
    }
}

window.exitWorkspaceToHub = function() {
    document.getElementById('learning-workspace-section').classList.add('hidden');
    document.getElementById('portal-hub-section').classList.remove('hidden');
    document.getElementById('workspace-video-iframe').src = '';
};

window.logoutSession = function() {
    GLOBAL_DATA_STATE.sessionUser = null;
    GLOBAL_DATA_STATE.authCardMode = 'login';
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('portal-hub-section').classList.add('hidden');
    document.getElementById('learning-workspace-section').classList.add('hidden');
    document.getElementById('admin-management-section').classList.add('hidden');
    document.getElementById('global-logout-btn').classList.add('hidden');
    document.getElementById('user-display-tag').innerHTML = `<i class="fa-solid fa-user-clock"></i> Guest Session Terminal`;
    document.querySelector('input[name="user-role"][value="student"]').checked = true;
    onRoleSwitch();
    setAuthMode('login');
};

window.toggleAppTheme = function() {
    GLOBAL_DATA_STATE.appTheme = GLOBAL_DATA_STATE.appTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-app-theme', GLOBAL_DATA_STATE.appTheme);
    document.getElementById('theme-icon').className = GLOBAL_DATA_STATE.appTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
};

/* --- FIXED MULTI-PAGE ACADEMIC REPORT PDF GENERATOR --- */
window.executeAdvancedPDFGeneration = function() {
    const { jsPDF } = window.jspdf;
    const documentCanvas = new jsPDF('p', 'mm', 'a4');
    const selectedCourse = GLOBAL_DATA_STATE.tracksMap[GLOBAL_DATA_STATE.selectedTrackKey];
    
    const margin = 20;
    const layoutWidth = documentCanvas.internal.pageSize.getWidth() - (margin * 2);
    let printingY = 25;

    documentCanvas.setFont("helvetica", "bold");
    documentCanvas.setFontSize(20);
    documentCanvas.text("AI LMS PLATFORM CURRICULUM REPORT", margin, printingY);
    
    printingY += 10;
    documentCanvas.setFontSize(12);
    documentCanvas.setFont("helvetica", "normal");
    documentCanvas.text(`Course Track: ${selectedCourse.title}`, margin, printingY);
    
    printingY += 5;
    documentCanvas.line(margin, printingY, documentCanvas.internal.pageSize.getWidth() - margin, printingY);
    printingY += 10;

    const documentParagraphs = selectedCourse.fullSyllabusNotes.split('\n');
    documentParagraphs.forEach(para => {
        const targetText = para.trim();
        if (!targetText) return;

        if (printingY > 270) {
            documentCanvas.addPage();
            printingY = 25;
        }

        if (targetText.startsWith("Module")) {
            documentCanvas.setFont("helvetica", "bold");
            documentCanvas.setFontSize(13);
            documentCanvas.setTextColor(2, 132, 199);
        } else {
            documentCanvas.setFont("helvetica", "normal");
            documentCanvas.setFontSize(10.5);
            documentCanvas.setTextColor(51, 65, 85);
        }

        const splitParagraphLines = documentCanvas.splitTextToSize(targetText, layoutWidth);
        documentCanvas.text(splitParagraphLines, margin, printingY);
        printingY += (splitParagraphLines.length * 6) + 2;
    });

    documentCanvas.save('ailms-syllabus-export.pdf');
};
