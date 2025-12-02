
        // User state management
        let currentUser = null;
        let userProfile = {
            name: "",
            email: "",
            userType: "",
            skills: [],
            hasResume: false,
            profileComplete: 0,
            quizResults: null
        };

        // Quiz Data - UPDATED with A-E categories
        const quizQuestions = [
            // Section 1: Questions 1-5
            {
                question: "What type of work sounds most appealing to you?",
                options: [
                    "Teaching computers to learn patterns",
                    "Building reliable applications for users",
                    "Maintaining infrastructure and automating systems",
                    "Creating interactive or visual experiences",
                    "Protecting systems by identifying weaknesses"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which activity feels most satisfying?",
                options: [
                    "Analyzing data to discover insights",
                    "Designing clean software architecture",
                    "Deploying and monitoring large-scale systems",
                    "Building game mechanics or animations",
                    "Finding vulnerabilities and fixing them"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What kind of technical challenges excite you most?",
                options: [
                    "Mathematical and statistical modeling",
                    "Managing complex backend logic",
                    "Debugging servers or distributed services",
                    "Optimizing graphics or physics",
                    "Breaking and securing systems"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What would you prefer to spend hours working on?",
                options: [
                    "Training and tuning ML models",
                    "Building APIs and backend features",
                    "Configuring CI/CD pipelines",
                    "Creating playable experiences",
                    "Pen-testing or analyzing threat vectors"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What describes your preferred way of thinking?",
                options: [
                    "Analytical and data-oriented",
                    "Structured and engineering-focused",
                    "Systematic and operational",
                    "Creative and visual",
                    "Adversarial and investigative"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            // Section 2: Questions 6-10
            {
                question: "Which toolset sounds most fun to master?",
                options: [
                    "Python + NumPy + TensorFlow",
                    "Java, Spring, Node.js",
                    "Docker, Kubernetes, Terraform",
                    "Unreal Engine, Unity, Blender",
                    "Burp Suite, Wireshark, Metasploit"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which project would you choose to work on?",
                options: [
                    "A model that predicts outcomes",
                    "A scalable web application",
                    "A cloud-native deployment pipeline",
                    "A 3D simulation or game level",
                    "A security audit of a company system"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What do you enjoy learning about most?",
                options: [
                    "Data, learning algorithms",
                    "Databases and backend systems",
                    "Cloud platforms and automation",
                    "Rendering, engines, and real-time logic",
                    "Exploits, vulnerabilities, and defenses"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which workplace role sounds appealing?",
                options: [
                    "ML Engineer",
                    "Backend Developer",
                    "DevOps Engineer",
                    "Game Developer",
                    "Security Analyst"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What's your ideal 'flow state' task?",
                options: [
                    "Tweaking parameters until a model performs better",
                    "Implementing a new module or API",
                    "Solving infrastructure issues under pressure",
                    "Perfecting a game mechanic",
                    "Probing systems to uncover flaws"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            // Section 3: Questions 11-15
            {
                question: "Choose the type of difficulty you enjoy.",
                options: [
                    "Mathematical challenges",
                    "Complex software design",
                    "Troubleshooting systems",
                    "Technical creativity",
                    "Security puzzles"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What kind of documentation do you prefer?",
                options: [
                    "Research papers & datasets",
                    "System architecture documents",
                    "Deployment diagrams & logs",
                    "Animation sheets & game design docs",
                    "Vulnerability reports & threat models"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which compliment would make you happiest?",
                options: [
                    "You made the model incredibly accurate.",
                    "Your API design is clean and efficient.",
                    "You stabilized the entire system.",
                    "Your game feels amazing to play.",
                    "You found a critical security flaw."
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "How do you prefer to contribute to a team?",
                options: [
                    "Turning data into solutions",
                    "Implementing core functionality",
                    "Ensuring everything runs smoothly",
                    "Creating memorable user experiences",
                    "Making the system safer"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which long-term goal sounds most satisfying?",
                options: [
                    "Building intelligent systems",
                    "Architecting large applications",
                    "Running flawless automated deployments",
                    "Developing a successful indie game",
                    "Becoming a penetration testing expert"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            // Section 4: Questions 16-20
            {
                question: "What kind of problems do you naturally excel at?",
                options: [
                    "Statistical & logical analysis",
                    "Structured logic and engineering",
                    "Systems troubleshooting",
                    "Visual-spatial reasoning",
                    "Pattern-breaking and forensics"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "What motivates you most?",
                options: [
                    "Understanding how intelligence is built",
                    "Building things that people use",
                    "Keeping systems stable under pressure",
                    "Creating fun and engaging experiences",
                    "Outsmarting attackers"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which type of stress do you handle best?",
                options: [
                    "Unpredictable model behavior",
                    "Tight engineering deadlines",
                    "System failures or outages",
                    "Creative redesigns",
                    "Security incidents"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "Which area would you prefer to specialize in?",
                options: [
                    "Machine learning algorithms",
                    "High-performance backend services",
                    "Cloud-native infrastructure",
                    "Game engine internals",
                    "Cyber defense"
                ],
                categories: ["A", "B", "C", "D", "E"]
            },
            {
                question: "If all paths paid exactly the same, what would you choose?",
                options: [
                    "Teaching machines to understand the world",
                    "Engineering scalable applications",
                    "Automating and orchestrating systems",
                    "Creating interactive digital worlds",
                    "Building secure and resilient systems"
                ],
                categories: ["A", "B", "C", "D", "E"]
            }
        ];

        // Career matching data - UPDATED to match A-E categories
        const careerMatches = {
            A: {
                title: "AI / ML / Data Science",
                description: "You have a strong analytical mind and enjoy working with data and algorithms. You'd excel in roles that involve building intelligent systems, predictive models, and working with large datasets. Your problem-solving skills are perfectly suited for the rapidly evolving field of artificial intelligence and data science.",
                matchScore: 0,
                courses: [
                    "Introduction to Machine Learning & Artificial Intelligence",
                    "Deep Learning",
                    "Foundations of Machine Learning",
                    "Applied LLM Systems",
                    "Developing AI-Based Applications"
                ],
                jobs: ["AI Engineer", "Machine Learning Specialist", "Data Scientist", "MLOps Engineer", "Research Scientist"],
                icon: "🤖"
            },
            B: {
                title: "Backend / Software Engineering",
                description: "You're methodical, structured, and enjoy building reliable systems. You'd thrive in backend development roles where you can architect scalable applications, design efficient APIs, and work with databases. Your engineering mindset is perfect for creating robust software solutions.",
                matchScore: 0,
                courses: [
                    "Backend Development",
                    "Backend Development (.NET)",
                    "System Design",
                    "Problem Solving with Algorithms and Data Structures",
                    "JavaScript: Advanced Course and Full Stack Applications"
                ],
                jobs: ["Backend Developer", "Software Engineer", "Full Stack Developer", "API Developer", "Systems Architect"],
                icon: "💻"
            },
            C: {
                title: "DevOps / Cloud / Systems Engineering",
                description: "You're systematic, operational, and enjoy keeping things running smoothly. You'd excel in DevOps and cloud engineering roles where you can automate deployments, manage infrastructure, and ensure system reliability. Your troubleshooting skills are valuable for maintaining complex systems.",
                matchScore: 0,
                courses: [
                    "DevOps",
                    "Cloud Technologies",
                    "Virtual Machines",
                    "System Management Essentials: Windows & Linux",
                    "Program Optimization"
                ],
                jobs: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer", "Infrastructure Engineer", "Platform Engineer"],
                icon: "☁️"
            },
            D: {
                title: "Game Development / Graphics",
                description: "You're creative, visual, and enjoy building interactive experiences. You'd thrive in game development roles where you can create immersive worlds, implement game mechanics, and work on real-time systems. Your technical creativity is perfect for the gaming and graphics industry.",
                matchScore: 0,
                courses: [
                    "Game Programming Using the Unreal Engine",
                    "Foundations of Computer Game Engine Development",
                    "Principles of Game Art",
                    "System Design",
                    "Parallel System Architecture I"
                ],
                jobs: ["Game Developer", "Gameplay Programmer", "Technical Artist", "Graphics Programmer", "Game Engine Developer"],
                icon: "🎮"
            },
            E: {
                title: "Cybersecurity / Security Engineering",
                description: "You're investigative, detail-oriented, and enjoy solving security puzzles. You'd excel in cybersecurity roles where you can protect systems, identify vulnerabilities, and build secure infrastructure. Your adversarial thinking is perfect for staying ahead of threats.",
                matchScore: 0,
                courses: [
                    "Computer System Security",
                    "Fundamentals of Cybersecurity",
                    "Introduction to Cryptography",
                    "Security Testing with Fuzzing",
                    "Logic in Artificial Intelligence"
                ],
                jobs: ["Security Analyst", "Penetration Tester", "Security Engineer", "Cryptographer", "Threat Intelligence Analyst"],
                icon: "🛡️"
            }
        };

        // Courses Data
        const courses = [
            {
                title: "Cloud Technologies",
                description: "Learn cloud computing concepts, deployment strategies, and management of cloud infrastructure for scalable applications.",
                tags: ["cloud", "devops", "systems"],
                category: "cloud",
                icon: "☁️"
            },
            {
                title: "Introduction to Data Science Using Python",
                description: "Master data analysis, statistical modeling, and visualization techniques using Python for real-world data science applications.",
                tags: ["data science", "python", "analytics"],
                category: "data",
                icon: "📊"
            },
            {
                title: "Computer System Security",
                description: "Understand security principles, threats, vulnerabilities, and protection mechanisms for modern computer systems.",
                tags: ["security", "cybersecurity", "systems"],
                category: "security",
                icon: "🔒"
            },
            {
                title: "System Design",
                description: "Learn to design scalable, reliable, and maintainable software systems using modern architectural patterns and best practices.",
                tags: ["architecture", "systems", "design"],
                category: "systems",
                icon: "🏗️"
            },
            {
                title: "Introduction to Cryptography",
                description: "Master encryption algorithms, cryptographic protocols, and security mechanisms for protecting digital information.",
                tags: ["security", "cryptography", "encryption"],
                category: "security",
                icon: "🔐"
            },
            {
                title: "Parallel System Architecture I",
                description: "Explore parallel computing architectures, multi-core processors, and techniques for optimizing parallel system performance.",
                tags: ["architecture", "parallel", "systems"],
                category: "systems",
                icon: "⚡"
            },
            {
                title: "Introduction to Graph-Based Databases",
                description: "Learn to work with graph databases for modeling complex relationships and analyzing network data efficiently.",
                tags: ["databases", "graphs", "data"],
                category: "data",
                icon: "🕸️"
            },
            {
                title: "Logic in Artificial Intelligence",
                description: "Study formal logic systems and their applications in artificial intelligence, knowledge representation, and automated reasoning.",
                tags: ["ai", "logic", "theory"],
                category: "ai",
                icon: "🧠"
            },
            {
                title: "Program Optimization",
                description: "Master techniques for improving program performance through code optimization, profiling, and efficient algorithm implementation.",
                tags: ["optimization", "performance", "programming"],
                category: "systems",
                icon: "⚙️"
            },
            {
                title: "Backend Development",
                description: "Learn server-side programming, REST APIs, database integration, and deployment strategies for web applications.",
                tags: ["web", "backend", "apis"],
                category: "web",
                icon: "🔧"
            },
            {
                title: "Virtual Machines",
                description: "Understand virtualization technologies, hypervisors, and containerization for efficient resource management and deployment.",
                tags: ["virtualization", "cloud", "systems"],
                category: "systems",
                icon: "💻"
            },
            {
                title: "Introduction to Machine Learning & Artificial Intelligence",
                description: "Learn fundamental ML concepts, algorithms, and their applications in solving real-world problems using AI techniques.",
                tags: ["ai", "machine learning", "algorithms"],
                category: "ai",
                icon: "🤖"
            },
            {
                title: "JavaScript: Advanced Course and Full Stack Applications",
                description: "Master modern JavaScript, frameworks, and build complete full-stack web applications with frontend and backend integration.",
                tags: ["javascript", "web", "fullstack"],
                category: "web",
                icon: "📝"
            },
            {
                title: "System Management Essentials: Windows & Linux",
                description: "Learn system administration, configuration, and management for both Windows and Linux operating environments.",
                tags: ["systems", "administration", "devops"],
                category: "systems",
                icon: "🖥️"
            },
            {
                title: "Foundations of Machine Learning",
                description: "Understand the mathematical foundations, statistical principles, and core algorithms behind machine learning systems.",
                tags: ["machine learning", "statistics", "algorithms"],
                category: "ai",
                icon: "📈"
            },
            {
                title: "Game Programming Using the Unreal Engine",
                description: "Learn game development with Unreal Engine, including graphics, physics, AI, and interactive gameplay programming.",
                tags: ["gaming", "graphics", "programming"],
                category: "systems",
                icon: "🎮"
            },
            {
                title: "Security Testing with Fuzzing",
                description: "Master automated security testing techniques using fuzzing to discover vulnerabilities and improve software security.",
                tags: ["security", "testing", "quality"],
                category: "security",
                icon: "🔍"
            },
            {
                title: "Backend Development (.NET)",
                description: "Learn Microsoft's .NET framework for building robust, scalable backend systems and enterprise applications.",
                tags: ["backend", "dotnet", "web"],
                category: "web",
                icon: "🌐"
            },
            {
                title: "Developing AI-Based Applications",
                description: "Build practical AI applications using modern tools and frameworks for real-world problem-solving.",
                tags: ["ai", "applications", "development"],
                category: "ai",
                icon: "🚀"
            },
            {
                title: "Data Mining Using Python",
                description: "Discover patterns, trends, and insights from large datasets using data mining techniques and Python libraries.",
                tags: ["data mining", "python", "analytics"],
                category: "data",
                icon: "💎"
            },
            {
                title: "Deep Learning",
                description: "Master neural networks, convolutional networks, recurrent networks, and advanced deep learning architectures.",
                tags: ["deep learning", "neural networks", "ai"],
                category: "ai",
                icon: "🧬"
            },
            {
                title: "DevOps",
                description: "Learn continuous integration, deployment, infrastructure as code, and modern DevOps practices for software delivery.",
                tags: ["devops", "ci/cd", "automation"],
                category: "systems",
                icon: "🔄"
            },
            {
                title: "LLM Applications Using LangChain",
                description: "Build applications with Large Language Models using LangChain framework for natural language processing tasks.",
                tags: ["ai", "llm", "nlp"],
                category: "ai",
                icon: "💬"
            },
            {
                title: "Management Information Systems",
                description: "Understand how information systems support business processes, decision-making, and organizational strategy.",
                tags: ["management", "systems", "business"],
                category: "systems",
                icon: "📋"
            },
            {
                title: "Foundations of Computer Game Engine Development",
                description: "Learn the architecture, components, and implementation of modern computer game engines.",
                tags: ["gaming", "engine", "graphics"],
                category: "systems",
                icon: "🎯"
            },
            {
                title: "Problem Solving with Algorithms and Data Structures",
                description: "Master algorithmic thinking and efficient data structures for solving complex computational problems.",
                tags: ["algorithms", "data structures", "problem solving"],
                category: "systems",
                icon: "🧩"
            },
            {
                title: "Probability and Statistics with Programming",
                description: "Apply statistical methods and probability theory to data analysis using programming for practical problem-solving.",
                tags: ["statistics", "probability", "data"],
                category: "data",
                icon: "🎲"
            },
            {
                title: "Fundamentals of Cybersecurity",
                description: "Learn the basics of cybersecurity, including threat analysis, risk management, and secure system design principles.",
                tags: ["cybersecurity", "security", "fundamentals"],
                category: "security",
                icon: "🛡️"
            },
            {
                title: "Product Development for Software Engineers",
                description: "Learn product management, user-centered design, and development processes for creating successful software products.",
                tags: ["product", "development", "management"],
                category: "web",
                icon: "📱"
            },
            {
                title: "Applied LLM Systems",
                description: "Build practical applications using Large Language Models for text generation, classification, and natural language tasks.",
                tags: ["ai", "llm", "applications"],
                category: "ai",
                icon: "🤯"
            }
        ];

        // Quiz state
        let quizState = {
            currentQuestion: 0,
            answers: [],
            currentSection: 0,
            sectionsCompleted: 0
        };

        // DOM Elements
        const profileIcon = document.getElementById('profileIcon');
        const profileText = document.getElementById('profileText');
        const authModal = document.getElementById('authModal');
        const closeAuth = document.getElementById('closeAuth');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navLinks');
        const profileTabs = document.querySelectorAll('.profile-tab');
        const profileContents = document.querySelectorAll('.profile-content');
        const logoutBtn = document.getElementById('logoutBtn');
        const addSkillBtn = document.getElementById('addSkillBtn');
        const newSkillInput = document.getElementById('newSkill');
        const skillsList = document.getElementById('skillsList');
        const noSkillsMessage = document.getElementById('noSkillsMessage');
        const completeProfileBtn = document.getElementById('completeProfileBtn');
        const profileProgress = document.getElementById('profileProgress');
        const progressPercent = document.getElementById('progressPercent');
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        const userType = document.getElementById('userType');
        const profileBadge = document.getElementById('profileBadge');
        const profileAvatar = document.getElementById('profileAvatar');
        
        // Resume upload elements
        const resumeFileInput = document.getElementById('resumeFile');
        const browseResumeBtn = document.getElementById('browseResumeBtn');
        const resumeUploadArea = document.getElementById('resumeUploadArea');
        const uploadedResume = document.getElementById('uploadedResume');
        const resumeStatus = document.getElementById('resumeStatus');
        const resumeFileName = document.getElementById('resumeFileName');
        const resumeFileSize = document.getElementById('resumeFileSize');
        const resumeUploadDate = document.getElementById('resumeUploadDate');
        const viewResumeBtn = document.getElementById('viewResumeBtn');
        const replaceResumeBtn = document.getElementById('replaceResumeBtn');
        const deleteResumeBtn = document.getElementById('deleteResumeBtn');
        
        // Browse All Jobs button
        const browseAllJobsBtn = document.getElementById('browseAllJobsBtn');

        // Quiz elements
        const quizContent = document.getElementById('quizContent');
        const quizProgressBar = document.getElementById('quizProgressBar');
        const currentQuestionSpan = document.getElementById('currentQuestion');
        const currentSectionSpan = document.getElementById('currentSection');
        const prevQuestionBtn = document.getElementById('prevQuestion');
        const nextQuestionBtn = document.getElementById('nextQuestion');
        const sectionNavigation = document.getElementById('sectionNavigation');
        const nextSectionBtn = document.getElementById('nextSection');
        const quizResult = document.getElementById('quizResult');
        const resultTitle = document.getElementById('resultTitle');
        const matchPercentage = document.getElementById('matchPercentage');
        const resultDescription = document.getElementById('resultDescription');
        const careerRecommendations = document.getElementById('careerRecommendations');
        const retakeQuizBtn = document.getElementById('retakeQuiz');
        const saveResultsBtn = document.getElementById('saveResults');
        const exploreCareersBtn = document.getElementById('exploreCareers');

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            checkLoginStatus();
            setupEventListeners();
            
            // Initialize job filtering
            initJobFiltering();
            
            // Initialize courses page if needed
            if (document.getElementById('courses')) {
                initializeCoursesPage();
            }
            
            // Initialize quiz if on quiz page
            if (document.getElementById('quiz')) {
                initializeQuiz();
            }
        });

        function checkLoginStatus() {
            const savedUser = localStorage.getItem('forkways_user');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                const savedProfile = localStorage.getItem('forkways_profile');
                if (savedProfile) {
                    userProfile = JSON.parse(savedProfile);
                }
                updateProfileDisplay();
                profileText.textContent = currentUser.name.split(' ')[0];
            }
        }

        function setupEventListeners() {
            // NEW: Logo click to go home
            document.getElementById('homeLogo').addEventListener('click', function(e) {
                e.preventDefault();
                navigateToPage('home');
                navMenu.classList.remove('active');
            });

            // Profile icon click
            profileIcon.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentUser) {
                    navigateToPage('profile');
                } else {
                    authModal.classList.add('active');
                }
            });

            // Close auth modal
            closeAuth.addEventListener('click', function() {
                authModal.classList.remove('active');
            });

            // Auth modal outside click
            authModal.addEventListener('click', function(e) {
                if (e.target === authModal) {
                    authModal.classList.remove('active');
                }
            });

            // Auth tab switching
            authTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    authTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    authForms.forEach(form => {
                        form.classList.remove('active');
                        if (form.id === tabId + 'Form') {
                            form.classList.add('active');
                        }
                    });
                });
            });

            // Login form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (email && password) {
                    currentUser = {
                        name: "Demo User",
                        email: email,
                        userType: "student"
                    };
                    
                    localStorage.setItem('forkways_user', JSON.stringify(currentUser));
                    
                    // Initialize profile if new user
                    if (!localStorage.getItem('forkways_profile')) {
                        userProfile = {
                            name: "Demo User",
                            email: email,
                            userType: "student",
                            skills: [],
                            hasResume: false,
                            profileComplete: 20,
                            quizResults: null
                        };
                        localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                    }
                    
                    updateProfileDisplay();
                    profileText.textContent = currentUser.name.split(' ')[0];
                    
                    authModal.classList.remove('active');
                    navigateToPage('profile');
                    
                    alert(`Welcome back, ${currentUser.name}!`);
                } else {
                    alert('Please fill in all fields.');
                }
            });

            // Register form submission
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                const userTypeSelect = document.getElementById('registerUserType').value;
                
                if (name && email && password && userTypeSelect) {
                    currentUser = {
                        name: name,
                        email: email,
                        userType: userTypeSelect
                    };
                    
                    // Initialize user profile
                    userProfile = {
                        name: name,
                        email: email,
                        userType: userTypeSelect,
                        skills: [],
                        hasResume: false,
                        profileComplete: 20,
                        quizResults: null
                    };
                    
                    localStorage.setItem('forkways_user', JSON.stringify(currentUser));
                    localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                    
                    updateProfileDisplay();
                    profileText.textContent = currentUser.name.split(' ')[0];
                    
                    authModal.classList.remove('active');
                    navigateToPage('profile');
                    
                    alert(`Welcome to _forkWays, ${name}! Your account has been created.`);
                } else {
                    alert('Please fill in all fields and agree to the terms.');
                }
            });

            // Social auth buttons
            document.querySelectorAll('.social-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const provider = this.classList.contains('google') ? 'Google' : 'LinkedIn';
                    alert(`In a real application, this would redirect to ${provider} authentication.`);
                });
            });

            // Profile tab switching
            profileTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    profileTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    profileContents.forEach(content => {
                        content.classList.remove('active');
                        document.getElementById(tabId + 'Tab').classList.add('active');
                    });
                    
                    // Load quiz results if on that tab
                    if (tabId === 'quiz-results' && currentUser) {
                        loadQuizResults();
                    }
                });
            });

            // Logout button
            logoutBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to sign out?')) {
                    currentUser = null;
                    localStorage.removeItem('forkways_user');
                    
                    profileText.textContent = 'Profile';
                    navigateToPage('home');
                    
                    alert('You have been signed out.');
                }
            });

            // Add skill button
            addSkillBtn.addEventListener('click', function() {
                const skill = newSkillInput.value.trim();
                if (skill && currentUser) {
                    if (!userProfile.skills.includes(skill)) {
                        userProfile.skills.push(skill);
                        updateSkillsList();
                        updateProfileCompletion();
                        localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                    }
                    newSkillInput.value = '';
                } else if (!currentUser) {
                    alert('Please sign in to add skills.');
                }
            });

            // Enter key for adding skills
            newSkillInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkillBtn.click();
                }
            });

            // Complete profile button
            completeProfileBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentUser) {
                    profileTabs.forEach(t => t.classList.remove('active'));
                    document.querySelector('.profile-tab[data-tab="skills"]').classList.add('active');
                    
                    profileContents.forEach(content => content.classList.remove('active'));
                    document.getElementById('skillsTab').classList.add('active');
                } else {
                    authModal.classList.add('active');
                }
            });

            // Browse All Jobs button
            browseAllJobsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToPage('careers');
            });

            // Resume upload functionality
            browseResumeBtn.addEventListener('click', function() {
                resumeFileInput.click();
            });

            resumeUploadArea.addEventListener('click', function() {
                resumeFileInput.click();
            });

            resumeFileInput.addEventListener('change', function(e) {
                if (e.target.files.length > 0 && currentUser) {
                    const file = e.target.files[0];
                    
                    // Validate file
                    if (file.size > 5 * 1024 * 1024) {
                        alert('File size must be less than 5MB');
                        return;
                    }
                    
                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    if (!validTypes.includes(file.type)) {
                        alert('Please upload a PDF, DOC, or DOCX file');
                        return;
                    }
                    
                    // Update UI
                    resumeStatus.textContent = 'Resume uploaded successfully!';
                    resumeFileName.textContent = file.name;
                    
                    const fileSize = file.size < 1024 * 1024 
                        ? `${(file.size / 1024).toFixed(1)} KB` 
                        : `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
                    resumeFileSize.textContent = `${fileSize} • Uploaded on ${new Date().toLocaleDateString()}`;
                    
                    uploadedResume.style.display = 'block';
                    resumeUploadArea.style.display = 'none';
                    
                    // Update profile
                    userProfile.hasResume = true;
                    updateProfileCompletion();
                    
                    // Update activity
                    document.getElementById('activity3').style.display = 'block';
                    
                    localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                    
                    alert('Resume uploaded successfully!');
                }
            });

            viewResumeBtn.addEventListener('click', function() {
                if (userProfile.hasResume) {
                    alert('In a real application, this would open your resume file.');
                }
            });

            replaceResumeBtn.addEventListener('click', function() {
                resumeFileInput.click();
            });

            deleteResumeBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete your resume?')) {
                    userProfile.hasResume = false;
                    uploadedResume.style.display = 'none';
                    resumeUploadArea.style.display = 'block';
                    resumeStatus.textContent = 'No resume uploaded yet.';
                    updateProfileCompletion();
                    localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                }
            });

            // Navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetPage = this.getAttribute('data-page');
                    navigateToPage(targetPage);
                    
                    navMenu.classList.remove('active');
                });
            });

            // Footer navigation
            document.querySelectorAll('.footer-links a').forEach(link => {
                link.addEventListener('click', function(e) {
                    if(this.getAttribute('data-page')) {
                        e.preventDefault();
                        const targetPage = this.getAttribute('data-page');
                        navigateToPage(targetPage);
                    }
                });
            });

            // CTA buttons navigation
            document.querySelectorAll('.cta-button').forEach(button => {
                button.addEventListener('click', function(e) {
                    if(this.getAttribute('data-page')) {
                        e.preventDefault();
                        const targetPage = this.getAttribute('data-page');
                        navigateToPage(targetPage);
                    }
                });
            });

            // Apply buttons
            document.querySelectorAll('.apply-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (currentUser) {
                        alert('Application submitted! We will match your profile with this position and notify you of next steps.');
                        document.getElementById('activity4').style.display = 'block';
                    } else {
                        alert('Please sign in to apply for this position.');
                        authModal.classList.add('active');
                    }
                });
            });

            // Take Quiz buttons navigation (HOME and PROFILE)
            document.querySelectorAll('.take-quiz-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = this.getAttribute('data-page');
                    navigateToPage(targetPage);
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                });
            });

            // Hamburger menu
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });

            // Quiz event listeners
            retakeQuizBtn.addEventListener('click', function() {
                resetQuiz();
                showQuestion(0);
            });

            saveResultsBtn.addEventListener('click', function() {
                if (currentUser) {
                    saveQuizResults();
                } else {
                    alert('Please sign in to save your quiz results.');
                    authModal.classList.add('active');
                }
            });

            exploreCareersBtn.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToPage('careers');
            });

            // Initialize profile if user is logged in
            if (currentUser) {
                updateProfileDisplay();
            }
        }

        function navigateToPage(pageId) {
            // Update active nav link
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('data-page') === pageId) {
                    navLink.classList.add('active');
                }
            });
            
            // Show target page
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update profile page if needed
            if (pageId === 'profile' && currentUser) {
                updateProfileDisplay();
            }
            
            // Initialize quiz if navigating to quiz page
            if (pageId === 'quiz') {
                initializeQuiz();
            }
        }

        function updateProfileDisplay() {
            if (currentUser) {
                userName.textContent = currentUser.name;
                userEmail.textContent = currentUser.email;
                userType.textContent = `${currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1)} Account`;
                profileBadge.textContent = currentUser.userType.charAt(0).toUpperCase() + currentUser.userType.slice(1);
                profileBadge.style.display = 'inline-block';
                
                // Update avatar with initials
                const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
                profileAvatar.innerHTML = initials.substring(0, 2);
                
                updateProfileCompletion();
                updateSkillsList();
                updateResumeDisplay();
                updateActivities();
            }
        }

        function updateProfileCompletion() {
            if (!currentUser) return;
            
            // Calculate completion percentage
            let completion = 20; // Base for having an account
            
            if (userProfile.name && userProfile.name.length > 0) completion += 10;
            if (userProfile.skills.length >= 1) completion += 10;
            if (userProfile.skills.length >= 3) completion += 10;
            if (userProfile.skills.length >= 5) completion += 10;
            if (userProfile.hasResume) completion += 20;
            if (userProfile.userType) completion += 10;
            if (userProfile.quizResults) completion += 10;
            
            completion = Math.min(completion, 100);
            
            // Update UI
            profileProgress.style.width = `${completion}%`;
            progressPercent.textContent = `${completion}%`;
            
            // Update steps
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            const step3 = document.getElementById('step3');
            const step4 = document.getElementById('step4');
            
            step1.style.textDecoration = userProfile.name ? 'line-through' : 'none';
            step1.style.color = userProfile.name ? 'var(--gray)' : 'var(--dark)';
            
            step2.style.textDecoration = userProfile.skills.length >= 3 ? 'line-through' : 'none';
            step2.style.color = userProfile.skills.length >= 3 ? 'var(--gray)' : 'var(--dark)';
            
            step3.style.textDecoration = userProfile.hasResume ? 'line-through' : 'none';
            step3.style.color = userProfile.hasResume ? 'var(--gray)' : 'var(--dark)';
            
            step4.style.textDecoration = completion >= 80 ? 'line-through' : 'none';
            step4.style.color = completion >= 80 ? 'var(--gray)' : 'var(--dark)';
            
            // Update user profile object
            userProfile.profileComplete = completion;
        }

        function updateSkillsList() {
            skillsList.innerHTML = '';
            
            if (userProfile.skills.length === 0) {
                noSkillsMessage.style.display = 'block';
            } else {
                noSkillsMessage.style.display = 'none';
                userProfile.skills.forEach((skill, index) => {
                    const skillContainer = document.createElement('div');
                    skillContainer.style.display = 'flex';
                    skillContainer.style.alignItems = 'center';
                    skillContainer.style.marginBottom = '10px';
                    
                    const skillTag = document.createElement('span');
                    skillTag.className = 'skill-tag';
                    skillTag.textContent = skill;
                    skillTag.style.flex = '1';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.style.background = 'none';
                    removeBtn.style.border = 'none';
                    removeBtn.style.color = '#ff4757';
                    removeBtn.style.cursor = 'pointer';
                    removeBtn.style.marginLeft = '10px';
                    removeBtn.title = 'Remove skill';
                    
                    removeBtn.addEventListener('click', function() {
                        userProfile.skills.splice(index, 1);
                        updateSkillsList();
                        updateProfileCompletion();
                        localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
                    });
                    
                    skillContainer.appendChild(skillTag);
                    skillContainer.appendChild(removeBtn);
                    skillsList.appendChild(skillContainer);
                });
            }
        }

        function updateResumeDisplay() {
            if (userProfile.hasResume) {
                resumeStatus.textContent = 'Resume uploaded';
                uploadedResume.style.display = 'block';
                resumeUploadArea.style.display = 'none';
            } else {
                uploadedResume.style.display = 'none';
                resumeUploadArea.style.display = 'block';
                resumeStatus.textContent = 'No resume uploaded yet.';
            }
        }

        function updateActivities() {
            if (userProfile.profileComplete > 30) {
                document.getElementById('activity2').style.display = 'block';
            }
            if (userProfile.hasResume) {
                document.getElementById('activity3').style.display = 'block';
            }
            if (userProfile.quizResults) {
                document.getElementById('activity5').style.display = 'block';
            }
        }

        function initJobFiltering() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const jobCards = document.querySelectorAll('.job-card');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    jobCards.forEach(card => {
                        if (filter === 'all') {
                            card.style.display = 'block';
                        } else {
                            const categories = card.getAttribute('data-category');
                            if (categories.includes(filter)) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
        }

        function initializeCoursesPage() {
            const coursesList = document.getElementById('coursesList');
            const filterBtns = document.querySelectorAll('.course-filter-btn');
            const courseSearch = document.getElementById('courseSearch');
            
            // Render all courses initially
            renderCourses(courses);
            
            // Course filtering
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    let filteredCourses;
                    
                    if (filter === 'all') {
                        filteredCourses = courses;
                    } else {
                        filteredCourses = courses.filter(course => course.category === filter);
                    }
                    
                    renderCourses(filteredCourses);
                });
            });
            
            // Course search
            courseSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                let filteredCourses;
                
                if (searchTerm === '') {
                    const activeFilter = document.querySelector('.course-filter-btn.active').getAttribute('data-filter');
                    if (activeFilter === 'all') {
                        filteredCourses = courses;
                    } else {
                        filteredCourses = courses.filter(course => course.category === activeFilter);
                    }
                } else {
                    filteredCourses = courses.filter(course => 
                        course.title.toLowerCase().includes(searchTerm) ||
                        course.description.toLowerCase().includes(searchTerm) ||
                        course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                    );
                }
                
                renderCourses(filteredCourses);
            });
            
            function renderCourses(coursesArray) {
                coursesList.innerHTML = '';
                
                if (coursesArray.length === 0) {
                    coursesList.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--gray);">
                            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                            <h3>No courses found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    `;
                    return;
                }
                
                coursesArray.forEach(course => {
                    const courseCard = document.createElement('div');
                    courseCard.className = 'course-card';
                    courseCard.setAttribute('data-category', course.category);
                    
                    courseCard.innerHTML = `
                        <div class="course-header">
                            <div class="course-icon">${course.icon}</div>
                            <h3 class="course-title">${course.title}</h3>
                        </div>
                        <div class="course-body">
                            <p class="course-description">${course.description}</p>
                            <div class="course-tags">
                                ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `;
                    
                    coursesList.appendChild(courseCard);
                });
            }
        }

        function initializeQuiz() {
            // Reset quiz state
            quizState = {
                currentQuestion: 0,
                answers: [],
                currentSection: 0,
                sectionsCompleted: 0
            };
            
            // Reset UI
            quizResult.classList.remove('active');
            quizContent.innerHTML = '';
            
            // Show first question
            showQuestion(0);
            
            // Setup quiz navigation
            nextQuestionBtn.addEventListener('click', nextQuestion);
            prevQuestionBtn.addEventListener('click', prevQuestion);
            nextSectionBtn.addEventListener('click', nextSection);
        }

        function showQuestion(questionIndex) {
            quizState.currentQuestion = questionIndex;
            quizState.currentSection = Math.floor(questionIndex / 5);
            
            const question = quizQuestions[questionIndex];
            
            // Update progress
            const progress = ((questionIndex + 1) / quizQuestions.length) * 100;
            quizProgressBar.style.width = `${progress}%`;
            currentQuestionSpan.textContent = `Question ${questionIndex + 1} of ${quizQuestions.length}`;
            currentSectionSpan.textContent = `Section ${quizState.currentSection + 1}/4`;
            
            // Show/hide navigation
            prevQuestionBtn.style.display = questionIndex > 0 ? 'inline-block' : 'none';
            
            // Check if we're at the end of a section
            const isEndOfSection = (questionIndex + 1) % 5 === 0 && questionIndex > 0;
            if (isEndOfSection && questionIndex < quizQuestions.length - 1) {
                nextQuestionBtn.style.display = 'none';
                sectionNavigation.style.display = 'block';
                // UPDATED: Removed "(5 questions)" text
                nextSectionBtn.textContent = questionIndex === 14 ? 'Next Section (Last Section)' : 'Next Section';
            } else {
                nextQuestionBtn.style.display = 'inline-block';
                sectionNavigation.style.display = 'none';
                nextQuestionBtn.textContent = questionIndex === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question';
            }
            
            // Render question
            quizContent.innerHTML = `
                <div class="question-container active">
                    <div class="question-number">Question ${questionIndex + 1}</div>
                    <h3 class="question-text">${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <button class="quiz-option ${quizState.answers[questionIndex] === index ? 'selected' : ''}" 
                                    data-answer="${index}">
                                <span class="quiz-option-label">${String.fromCharCode(65 + index)}</span>
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Add event listeners to options
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', function() {
                    const answerIndex = parseInt(this.getAttribute('data-answer'));
                    selectAnswer(questionIndex, answerIndex);
                });
            });
        }

        function selectAnswer(questionIndex, answerIndex) {
            quizState.answers[questionIndex] = answerIndex;
            
            // Update UI to show selected answer
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.classList.remove('selected');
            });
            document.querySelector(`.quiz-option[data-answer="${answerIndex}"]`).classList.add('selected');
        }

        function nextQuestion() {
            if (quizState.currentQuestion < quizQuestions.length - 1) {
                // Check if answer is selected
                if (quizState.answers[quizState.currentQuestion] === undefined) {
                    alert('Please select an answer before continuing.');
                    return;
                }
                
                showQuestion(quizState.currentQuestion + 1);
            } else {
                // Submit quiz if on last question
                submitQuiz();
            }
        }

        function prevQuestion() {
            if (quizState.currentQuestion > 0) {
                showQuestion(quizState.currentQuestion - 1);
            }
        }

        function nextSection() {
            // Check if all answers in current section are selected
            const sectionStart = quizState.currentSection * 5;
            const sectionEnd = sectionStart + 5;
            
            for (let i = sectionStart; i < sectionEnd; i++) {
                if (quizState.answers[i] === undefined) {
                    alert(`Please answer all questions in Section ${quizState.currentSection + 1} before continuing.`);
                    return;
                }
            }
            
            // Move to next section
            quizState.sectionsCompleted++;
            showQuestion(quizState.currentQuestion + 1);
        }

        function submitQuiz() {
            // Check if all questions are answered
            for (let i = 0; i < quizQuestions.length; i++) {
                if (quizState.answers[i] === undefined) {
                    alert('Please answer all questions before submitting.');
                    return;
                }
            }
            
            // Calculate results
            const scores = calculateQuizResults();
            displayQuizResults(scores);
        }

        function calculateQuizResults() {
            // Reset scores
            Object.keys(careerMatches).forEach(category => {
                careerMatches[category].matchScore = 0;
            });
            
            // Calculate scores based on answers
            quizState.answers.forEach((answer, index) => {
                if (answer !== undefined) {
                    const category = quizQuestions[index].categories[answer];
                    careerMatches[category].matchScore++;
                }
            });
            
            // Convert to percentages
            Object.keys(careerMatches).forEach(category => {
                careerMatches[category].matchScore = Math.round((careerMatches[category].matchScore / quizQuestions.length) * 100);
            });
            
            // Sort by score (highest first)
            const sortedScores = Object.keys(careerMatches)
                .map(category => ({ category, ...careerMatches[category] }))
                .sort((a, b) => b.matchScore - a.matchScore);
            
            return sortedScores;
        }

        function displayQuizResults(scores) {
            const topResult = scores[0];
            
            // Hide quiz content
            quizContent.innerHTML = '';
            quizResult.classList.add('active');
            
            // Update result display
            resultTitle.textContent = topResult.title;
            matchPercentage.textContent = `${topResult.matchScore}% Match`;
            resultDescription.textContent = topResult.description;
            
            // Display top 3 results
            careerRecommendations.innerHTML = `
                <h3 style="margin-bottom: 20px;">Your Top Career Matches</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                    ${scores.slice(0, 3).map(result => `
                        <div style="background: ${result.category === topResult.category ? 'linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%)' : 'white'}; 
                                    padding: 20px; border-radius: 10px; width: 300px; text-align: center; 
                                    border: 2px solid ${result.category === topResult.category ? 'var(--primary)' : '#eee'};">
                            <div style="font-size: 2rem; margin-bottom: 10px;">${result.icon}</div>
                            <h4 style="margin-bottom: 10px;">${result.title}</h4>
                            <div style="font-weight: 700; color: var(--primary); margin-bottom: 10px;">${result.matchScore}% Match</div>
                            <p style="color: var(--gray); font-size: 0.9rem; margin-bottom: 15px;">${result.description.substring(0, 100)}...</p>
                            <div style="font-size: 0.8rem; color: var(--gray);">
                                <strong>Related Jobs:</strong> ${result.jobs.slice(0, 3).join(', ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div style="margin-top: 40px;">
                    <h3 style="margin-bottom: 20px;">Recommended Courses for ${topResult.title}</h3>
                    <div class="recommended-courses-quiz">
                        ${topResult.courses.slice(0, 4).map(course => `
                            <div class="recommended-course">
                                <h4>${course}</h4>
                                <p>${courses.find(c => c.title === course)?.description || 'Essential course for this career path'}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Save results to quiz state for potential saving
            window.currentQuizResults = {
                topResult: topResult,
                allScores: scores,
                date: new Date().toISOString()
            };
        }

        function resetQuiz() {
            quizState = {
                currentQuestion: 0,
                answers: [],
                currentSection: 0,
                sectionsCompleted: 0
            };
            
            quizResult.classList.remove('active');
            showQuestion(0);
        }

        function saveQuizResults() {
            if (!window.currentQuizResults) {
                alert('No quiz results to save. Please complete the quiz first.');
                return;
            }
            
            userProfile.quizResults = window.currentQuizResults;
            localStorage.setItem('forkways_profile', JSON.stringify(userProfile));
            
            // Update profile completion
            updateProfileCompletion();
            
            // Update activity
            document.getElementById('activity5').style.display = 'block';
            
            alert('Quiz results saved to your profile!');
            
            // Navigate to profile quiz results tab
            navigateToPage('profile');
            setTimeout(() => {
                profileTabs.forEach(t => t.classList.remove('active'));
                document.querySelector('.profile-tab[data-tab="quiz-results"]').classList.add('active');
                
                profileContents.forEach(content => content.classList.remove('active'));
                document.getElementById('quiz-resultsTab').classList.add('active');
                
                loadQuizResults();
            }, 100);
        }

        function loadQuizResults() {
            const quizResultsContent = document.getElementById('quizResultsContent');
            const noQuizResults = document.getElementById('noQuizResults');
            
            if (userProfile.quizResults) {
                noQuizResults.style.display = 'none';
                quizResultsContent.style.display = 'block';
                
                const result = userProfile.quizResults.topResult;
                const date = new Date(userProfile.quizResults.date).toLocaleDateString();
                
                quizResultsContent.innerHTML = `
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">${result.icon}</div>
                        <h3 style="margin-bottom: 10px;">${result.title}</h3>
                        <div style="display: inline-block; background-color: var(--secondary); color: white; 
                                    padding: 5px 15px; border-radius: 20px; font-weight: 600; margin-bottom: 15px;">
                            ${result.matchScore}% Match
                        </div>
                        <p style="color: var(--gray); margin-bottom: 20px;">Completed on ${date}</p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #f9fcff 0%, #f2f7ff 100%); 
                                padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                        <h4 style="margin-bottom: 10px;">Career Description</h4>
                        <p>${result.description}</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
                        <div style="background-color: white; padding: 15px; border-radius: 10px; border-left: 4px solid var(--primary);">
                            <h5 style="margin-bottom: 10px;">Related Job Roles</h5>
                            <ul style="color: var(--gray); padding-left: 20px;">
                                ${result.jobs.map(job => `<li>${job}</li>`).join('')}
                        </ul>
                        </div>
                        <div style="background-color: white; padding: 15px; border-radius: 10px; border-left: 4px solid var(--secondary);">
                            <h5 style="margin-bottom: 10px;">Recommended Courses</h5>
                            <ul style="color: var(--gray); padding-left: 20px;">
                                ${result.courses.slice(0, 5).map(course => `<li>${course}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="#" class="cta-button-secondary take-quiz-btn" data-page="quiz" style="margin-right: 10px;">
                            <i class="fas fa-redo"></i> Retake Quiz
                        </a>
                        <a href="#" class="cta-button" data-page="courses">
                            <i class="fas fa-book"></i> View Recommended Courses
                        </a>
                    </div>
                `;
                
                // Add event listeners to buttons
                quizResultsContent.querySelectorAll('a[data-page]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetPage = this.getAttribute('data-page');
                        navigateToPage(targetPage);
                    });
                });
            } else {
                noQuizResults.style.display = 'block';
                quizResultsContent.style.display = 'none';
            }
        }

        // Simple scroll effect for header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const category = document.getElementById('category').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} regarding your inquiry as a ${category}.`);
            
            this.reset();
        });
