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
            fullSyllabusNotes: `Module 1: Foundational Artificial Intelligence & Historical Frameworks
Artificial Intelligence (AI) maps computational science models focused on engineering architectures capable of handling complex tasks traditionally requiring human focus. In traditional software engineering, human developers write explicit imperative rules paired with structural data to yield a deterministic outcome. In AI and Machine Learning, this paradigm inverts: the system consumes historical data alongside known target outputs to synthesize its own computational rules.
The taxonomy of AI is traditionally split into three core horizons:
1. Artificial Narrow AI (ANI): Systems highly optimized to perform a single, isolated cognitive task (e.g., localized chest X-ray classifiers or AlphaGo). They exhibit zero cross-domain adaptability.
2. Artificial General AI (AGI): A theoretical milestone where a machine displays cross-domain cognitive competency matching or exceeding human performance, including abstract reasoning, autonomous transfer learning, and metacognition.
3. Artificial Superintelligence (ASI): A theoretical era where machine intelligence exponentially eclipses collective human intellect across all disciplines, highly tied to recursive self-improvement loops.
The trajectory of AI has been marked by alternating cycles of intense academic optimism and severe systemic defunding, known as "AI Winters." The First AI Winter (1974-1980) was triggered by computational bottlenecks and combinatorial explosions that made early search-tree algorithms unviable. The rise and subsequent fall of rule-based "Expert Systems" in the 1980s led directly to the Second AI Winter (1987-1993) due to maintenance costs and brittle brittleness. The modern Deep Learning renaissance was unlocked post-2012 by the convergence of uncompressed web-scale data (Big Data), highly parallel hardware acceleration (GPUs), and architectural breakthroughs.

Module 2: Mathematics Foundations & Optimization Schemes
Matrix transformation algorithms operate the core pipeline calculations: Y = W * X + b. Where X represents high-dimensional data vectors, W represents adjustable weight parameters, b is the bias offset, and Y is the transformed prediction. Multidimensional arrays spanning arbitrary axes are processed as Tensors.
Training models demands multivariable calculus to minimize an objective error metric (Loss Function). Optimization engines utilize Gradient Descent to compute partial derivatives of the loss surface with respect to every weight. Parameters update recursively against the gradient direction: W_new = W_old - (learning_rate * Gradient). If the learning rate hyperparameter is calibrated too low, training cycles stall in local minima; if calibrated too high, weight values oscillate wildly and diverge completely. Categorical decision outputs are mapped into valid probability distributions summing to 1.0 using the Softmax transformation layer.

Module 3: Natural Language Processing & The Transformer Revolution
Early language processing relied on sequential tokenization and word embeddings (e.g., Word2Vec) to map semantic relationships into multi-dimensional coordinate spaces where semantic analogies could be resolved via vector math.
Processing long text streams historically relied on Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) blocks. However, RNNs suffer from the "Vanishing Gradient Problem" where early context is lost over long sequences due to continuous fractional multiplication during backpropagation. Furthermore, their sequential design prevents parallel execution across GPUs.
The Transformer architecture solved this bottleneck by discarding recurrence entirely. It implements:
1. Positional Encodings: Mathematical wave components added directly to token vectors to preserve word sequence positioning without step-by-step processing.
2. Scaled Dot-Product Self-Attention: A mechanism computing explicit contextual alignment matrices across all tokens concurrently. By evaluating Query (Q), Key (K), and Value (V) matrices, models calculate exactly how words contextually shift in meaning based on the entire sentence architecture.

Module 4: Computer Vision & Spatial Data Systems
Processing high-resolution digital images through standard fully connected networks creates a parameter explosion that breaks memory buffers and causes rapid overfitting. Convolutional Neural Networks (CNNs) preserve local vertical and horizontal spatial relationships while drastically reducing parameter count.
A standard CNN pipeline utilizes three key layers:
1. Convolutional Layer: Small matrix filters (kernels) slide across pixel grids to perform element-wise multiplication and summation, generating Feature Maps that progressively isolate low-level edges, textures, and deep structural shapes.
2. Pooling Layer: Downsamples feature maps (typically via Max Pooling) to retain maximum signal activation while discarding spatial size and computational overhead.
3. Fully Connected Layer: Flattens remaining spatial grids into a 1D vector to execute final multi-class probability scoring.

Module 5: Generative Foundations, Ethics, & MLOps Infrastructure
Generative AI frameworks synthesize original high-dimensional content. This is achieved via paths such as Generative Adversarial Networks (GANs)—which lock a data-synthesizing Generator and an asset-auditing Discriminator into a zero-sum optimization game—and Diffusion Models, which learn to synthesize structures by systematically reversing controlled Gaussian noise processes.
Modern deployments bypass foundational retraining costs using Retrieval-Augmented Generation (RAG). RAG utilizes specialized Vector Databases to index document embeddings, perform ultra-fast spatial similarity searches, and inject precise corporate facts directly into LLM context windows to eliminate factual hallucinations.
System deployments must continually monitor for "Concept Drift" (where real-world relationships between input features and target labels shift over time) and address the "Alignment Problem" ensuring autonomous models operate strictly within human ethical boundaries.`
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
            fullSyllabusNotes: `Module 1: Advanced Machine Learning Principles
Statistical Learning Theory establishes analytical framework limits processing empirical vectors. Machine Learning systems invert traditional imperative computing paradigms. Instead of taking human-written logical code rules and data to find an answer, ML pipelines ingest historical data observations paired with target outputs to autonomously infer generalized mathematical models.
Data collections are carefully partitioned into Train, Validation, and Test pools. The Training set builds raw parameter values; the Validation set isolates optimal structural hyperparameters; and the Test set provides a blind assessment metric. 
Evaluating classifiers on imbalanced datasets requires moving beyond standard percentage accuracy. Engineers map performance using a Confusion Matrix tracking True Positives (TP), False Positives (FP), False Negatives (FN), and True Negatives (TN). From this, we derive Precision (minimizing false alarms) and Recall (minimizing missed targets), balancing both via the harmonic F1-Score metric.

Module 2: Regularized Optimization Schemes & Classical Models
Lasso elements add spatial reduction thresholds to mitigate system parameter variance. Linear Regression models a continuous target by finding a hyper-plane that minimizes Mean Squared Error (MSE). To manage the Bias-Variance Tradeoff, regularization terms are injected into the loss calculation:
1. L1 Regularization (Lasso): Adds an absolute weight magnitude penalty to the loss function. This drives non-essential feature coefficients completely to zero, executing automated feature selection.
2. L2 Regularization (Ridge): Adds a squared weight magnitude penalty. This shrinks weights uniformly, smoothing out decision boundaries without throwing out columns.
Logistic Regression handles binary classification by routing linear computations through a Sigmoid activation curve to restrict outputs to a 0.0 to 1.0 probability threshold. Support Vector Machines (SVM) locate an optimal dividing boundary that maximizes the geometric margin distance between distinct classes, utilizing the "Kernel Trick" to map linearly inseparable points into higher-dimensional separating spaces.

Module 3: Unsupervised Topology & Dimensionality Reduction
Unsupervised learning paradigms analyze unlabeled feature structures independently. K-Means Clustering partitions data into K non-overlapping density groups through an iterative cycle: matching samples to their nearest cluster centroids via Euclidean distance, updating centroid locations to the mean positions of their assigned coordinates, and repeating until convergence. The optimal selection of cluster count K is calculated using the Elbow Method.
To combat the "Curse of Dimensionality"—where high-dimensional vector spaces become highly isolated and distance metrics converge uniformly—Principal Component Analysis (PCA) is applied. PCA performs orthogonal linear transformations on the feature covariance matrix, isolating perpendicular Principal Components that maximize variance retention while compressing data footprints.

Module 4: Ensemble Engineering & Boosting Frameworks
Ensemble learning blends multiple base estimators to lower overall error rates. This is accomplished via two primary architectural paths:
1. Bootstrap Aggregating (Bagging): Builds hundreds of deep, independent decision trees in parallel over random subsets of the data. Random Forests use this strategy, averaging tree results to drastically lower model variance.
2. Boosting Frameworks: Builds weak decision trees sequentially. Each new tree is explicitly optimized to predict the residual errors (mistakes) committed by the preceding tree structures.
Highly optimized implementations like XGBoost and LightGBM scale this sequential boosting process by adding second-order Taylor series approximations and hardware-level cache management, making them the leading solution for structured, tabular enterprise datasets.

Module 5: Production Lifecycles & MLOps Architectures
Deploying machine learning models into live cloud ecosystems demands comprehensive operational infrastructure (MLOps). Once live, systems naturally decay due to two core tracking changes:
1. Data Drift: Shifting statistical distributions within incoming production features compared to historical baseline distributions.
2. Concept Drift: Changing real-world structural relationships between input features and target labels, rendering historical parameter models obsolete.
Production pipelines mitigate decay by implementing centralized Feature Stores (e.g., Feast) to unify offline training and online inference transformations, maintaining version-controlled Model Registries, and tracking live data pipelines to trigger automated retraining loops.`
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
    
    // Completely replaced long module notes with a concise, clean workspace description layout.
    let outputHTML = `
        <h2>Course Workspace Overview</h2>
        <p>Welcome to your active learning workspace window. Use this dashboard to solve domain puzzles, review technical quiz flash decks, and track streaming lectures.</p>
        <p style="color: var(--text-secondary); font-style: italic;"><strong>Note:</strong> The full-text academic syllabus structure and core text formulas are fully compiled into your digital record. Click the <strong>Extract Complete Curriculum (PDF)</strong> button below to export your comprehensive offline handbook.</p>
    `;
    
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
