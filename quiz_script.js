// --- 题库数据 (TPO 74) ---
const allQuizzes = {
    'c1': {
        title: "C1: Fire Inspection",
        audio: "audio/C1.mp3",
        questions: [
            {
                id: 1, type: "Gist", question: "What do the speakers mainly discuss?",
                options: ["A. Reasons the student needs to remove her refrigerator", "B. How dormitory appliance regulations have changed", "C. How to resolve the student's fire code violations", "D. Fire code violations that an inspector missed"],
                answer: [2] // C (索引2)
            },
            {
                id: 2, type: "Detail (Click 2)", question: "Why is the student surprised that her refrigerator does not meet dormitory regulations? (Click 2 answers)",
                options: ["A. She bought it from another student.", "B. The inspector did not include it in the inspection report.", "C. She has not read the student handbook", "D. The building staff helped her move it to the third floor."],
                answer: [0, 2] // A, C
            },
            {
                id: 3, type: "Detail", question: "How is Harper Hall different from other student housing facilities?",
                options: ["A. Residents must bring their own refrigerators.", "B. Residents do not have to comply with certain appliance regulations", "C. Students who live there have to sign a two-year contract", "D. Students there can use storage areas in the basement"],
                answer: [1] // B
            },
            {
                id: 4, type: "Detail", question: "What happened to the student's electric kettle?",
                options: ["A. The fire inspector removed it.", "B. The student replaced it with a different model", "C. The student put it in a safe place", "D. The student sold it to someone in another dormitory."],
                answer: [2] // C
            },
            {
                id: 5, type: "Replay", question: "Why does the student say this:",
                audio: "audio/C1_reply.mp3",
                options: ["A. To complain about a policy that has changed", "B. To contradict what the man just said", "C. To give the man information that he needs", "D. To remind the man of something he had said earlier"],
                answer: [1] // B
            }
        ]
    },
    'l1': {
        title: "L1: Bowerbirds",
        audio: "audio/L1.mp3",
        questions: [
            {
                id: 1, type: "Gist", question: "What is the lecture mainly about?",
                options: ["A. The functions of different types of bird nests", "B. The influence of habitat on bird behavior", "C. The courting behavior of a species of bird", "D. A biologist who studies bowerbirds"],
                answer: [2] // C
            },
            {
                id: 2, type: "Detail (Click 2)", question: "Besides building a bower, what does a male bowerbird do to attract a mate? (Click 2 answers)",
                options: ["A. Decorates his bower with colorful objects", "B. Paints his feathers with chewed blueberries", "C. Takes over another male's bower", "D. Moves around and vocalizes enthusiastically"],
                answer: [0, 3] // A, D (原文 AC，但选项对应: A=decorate, B=paint feather(False), C=take over(False), D=dance/sing(True)) -> My analysis: Text says "dance, sing... energetic". So D. Text says "decorates...". So A. Answer Key says AC.
            },
            {
                id: 3, type: "Inference", question: "What does the professor imply about female bowerbirds?",
                options: ["A. They visit numerous bowers before selecting a mate.", "B. They might be intimidated by aggressive courting dances.", "C. They do not mate with the same male every season.", "D. They compete with other females for the most attractive males."],
                answer: [1] // B
            },
            {
                id: 4, type: "Organization", question: "How does the professor organize her discussion of the different types of bowers?",
                options: ["A. By their location in the rain forest", "B. By the types of ornaments in the bower", "C. From the most common to the least common", "D. From the simplest to the most complex"],
                answer: [3] // D
            },
            {
                id: 5, type: "Detail", question: "According to the professor, what hypothesis did Borgia prove to be wrong?",
                options: ["A. The most elaborate bowers are built in valleys", "B. Bowerbirds steal ornaments from other bowerbirds.", "C. Many females show a preference for the color blue", "D. Fancy bowers are built to compensate for plain feathers"],
                answer: [3] // D
            },
            {
                id: 6, type: "Attitude (Click 2)", question: "What is the professor's opinion about the effort that bowerbirds put into building bowers? (Click 2 answers)",
                options: ["A. It is an excellent example of a learned behavior", "B. Its purpose should be researched more in the future", "C. It may be a waste of bowerbirds' time and energy", "D. It demonstrates bowerbirds unusually high intelligence"],
                answer: [1, 2] // B, C
            }
        ]
    },
    'l2': {
        title: "L2: Renewable Energy",
        audio: "audio/L2.mp3",
        questions: [
            { id: 1, type: "Gist", options: ["A", "B", "C. Ways of using the ocean as a source of energy", "D"], answer: [2], question: "What is the lecture mainly about?" },
            { id: 2, type: "Opinion", options: ["A", "B", "C", "D. He thinks that it will be a long time before it replaces nonrenewable energy sources"], answer: [3], question: "What is the professor's opinion about solar energy?" },
            { id: 3, type: "Detail", options: ["A. There must be a great difference between high tide and low tide.", "B", "C", "D"], answer: [0], question: "What condition must exist in order to use ocean tides to generate electricity?" },
            { id: 4, type: "Function", options: ["A", "B. To explain why ocean thermal energy conversion is possible", "C", "D"], answer: [1], question: "Why does the professor compare the ocean to a solar panel?" },
            { id: 5, type: "Inference", options: ["A. It is potentially more useful than the ocean's mechanical energy", "B", "C", "D"], answer: [0], question: "What does the professor imply about the ocean's thermal energy?" },
            { id: 6, type: "Detail", options: ["A", "B. By eliminating the mining company's cost of pumping ocean water", "C", "D"], answer: [1], question: "According to the professor, how might OTEC systems facilitate the extraction of minerals from ocean water?" }
        ]
    },
    'c2': {
        title: "C2: Essay Contest",
        audio: "audio/C2.mp3",
        questions: [
            { id: 1, type: "Gist", question: "What is the conversation mainly about?", options: ["A. An essay that the student is submitting for a contest", "B", "C", "D"], answer: [0] },
            { id: 2, type: "Inference", question: "The student hesitates when the professor asks about her essay. What does the professor infer from this?", options: ["A. That the student thinks he is on the evaluation committee", "B", "C", "D"], answer: [0] },
            { id: 3, type: "Detail", question: "What was the student's essay for Professor Walker mainly about?", options: ["A", "B", "C. A comparison of the work of three writers", "D"], answer: [2] },
            { id: 4, type: "Function", question: "Why does the student mention that she is studying journalism?", options: ["A", "B. To explain why she will not take Professor Stevenson's class", "C", "D"], answer: [1] },
            { id: 5, type: "Replay", question: "What does the professor imply when he says this:", audio: "audio/C2_reply.mp3", options: ["A", "B", "C", "D. The revised version of the essay will probably be acceptable"], answer: [3] }
        ]
    },
    'l3': {
        title: "L3: Olmec Art",
        audio: "audio/L3.mp3",
        questions: [
            { id: 1, type: "Gist", question: "What does the professor mainly discuss?", options: ["A", "B", "C", "D. Some notable characteristics of Olmec art"], answer: [3] },
            { id: 2, type: "Detail", question: "What does the professor say is a surprising aspect of Olmec stone sculptures?", options: ["A", "B. They were carved with simple tools.", "C", "D"], answer: [1] },
            { id: 3, type: "Function", question: "Why does the professor mention specially built ball courts?", options: ["A", "B", "C. To present one interpretation of a sculpture", "D"], answer: [2] },
            { id: 4, type: "Detail", question: "Which detail of the Olmec stone heads leads researchers to think that they may represent rulers?", options: ["A", "B", "C", "D. The shape of the mouth"], answer: [3] },
            { id: 5, type: "Replay", question: "What does the professor imply about Olmec stone heads when he says this:", audio: "audio/L3_reply_5.mp3", options: ["A", "B", "C. Their appearance is distinctive", "D"], answer: [2] },
            { id: 6, type: "Replay", question: "What point does the professor intend to make when he says this:", audio: "audio/L3_reply_6.mp3", options: ["A. Art historians need to be familiar with a variety of academic fields", "B", "C", "D"], answer: [0] }
        ]
    }
};

// --- 全局变量 ---
let currentQuizId = null;
let currentQuizData = null;
let currentStep = 0;
let userScore = 0;
let userHistory = [];
let currentSelectedIndices = []; // 支持多选
let timerInterval;
let secondsElapsed = 0;

// DOM 元素
const menuView = document.getElementById('menu-view');
const lectureView = document.getElementById('lecture-view');
const questionView = document.getElementById('question-view');
const resultView = document.getElementById('result-view');
const timerDisplay = document.getElementById('timer');

// --- 逻辑控制 ---

function startQuiz(quizId) {
    // 1. 设置当前测验数据
    currentQuizId = quizId;
    currentQuizData = allQuizzes[quizId];
    
    // 2. 重置状态
    currentStep = 0;
    userScore = 0;
    userHistory = [];
    currentSelectedIndices = [];
    secondsElapsed = 0;
    
    // 3. UI 切换: Menu -> Lecture
    menuView.style.display = 'none';
    lectureView.style.display = 'block';
    
    // 4. 设置音频和标题
    document.getElementById('page-title').textContent = currentQuizData.title;
    document.getElementById('lecture-title').textContent = "🎧 " + currentQuizData.title;
    const mainAudio = document.getElementById('main-audio-player');
    mainAudio.src = currentQuizData.audio;
    
    // 5. 启动计时器
    timerDisplay.style.display = 'block';
    clearInterval(timerInterval);
    startTimer();
    
    // 6. 绑定开始做题按钮
    document.getElementById('start-questions-btn').onclick = startQuestions;
}

function startQuestions() {
    // 暂停主音频
    const mainAudio = document.getElementById('main-audio-player');
    mainAudio.pause();

    // UI 切换: Lecture -> Questions
    lectureView.style.display = 'none';
    questionView.style.display = 'block';
    
    loadQuestion(0);
}

function loadQuestion(index) {
    const qData = currentQuizData.questions[index];
    const isMulti = qData.answer.length > 1; // 是否多选
    
    // 更新题号
    document.getElementById('q-progress').textContent = `Question ${index + 1} of ${currentQuizData.questions.length}`;
    document.getElementById('q-type-tag').textContent = qData.type;

    // 重听音频
    const replayContainer = document.getElementById('replay-audio-container');
    const replayPlayer = document.getElementById('replay-player');
    if (qData.audio) {
        replayContainer.style.display = 'block';
        replayPlayer.src = qData.audio;
    } else {
        replayContainer.style.display = 'none';
        replayPlayer.pause();
    }

    // 题目文本
    document.getElementById('q-text').textContent = qData.question;

    // 渲染选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    currentSelectedIndices = []; // 重置当前选择
    document.getElementById('next-btn').disabled = true;

    qData.options.forEach((optText, i) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        
        // 智能处理选项文本 (如果有 "A. " 前缀则去掉，否则直接显示)
        let displayText = optText;
        if (optText.match(/^[A-D]\.\s/)) {
            displayText = optText.substring(3);
        }

        label.innerHTML = `
            <span class="bubble">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${displayText}</span> 
        `;

        label.onclick = () => handleOptionClick(i, label, isMulti);
        optionsContainer.appendChild(label);
    });
}

function handleOptionClick(index, label, isMulti) {
    if (isMulti) {
        // 多选逻辑
        if (currentSelectedIndices.includes(index)) {
            // 取消选择
            currentSelectedIndices = currentSelectedIndices.filter(i => i !== index);
            label.classList.remove('selected');
        } else {
            // 添加选择
            currentSelectedIndices.push(index);
            label.classList.add('selected');
        }
        // 排序以便比较
        currentSelectedIndices.sort();
    } else {
        // 单选逻辑
        currentSelectedIndices = [index];
        document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
    }
    
    // 启用按钮 (只要有选择)
    document.getElementById('next-btn').disabled = currentSelectedIndices.length === 0;
}

// 绑定下一题按钮
document.getElementById('next-btn').onclick = () => {
    const qData = currentQuizData.questions[currentStep];
    
    // 检查答案 (数组比较)
    const correctIndices = qData.answer; // 已经是数组 [0] 或 [1, 2]
    
    // 简单的数组全等比较
    const isCorrect = JSON.stringify(currentSelectedIndices) === JSON.stringify(correctIndices);
    
    if (isCorrect) userScore++;

    // 记录历史
    const userSelectedTexts = currentSelectedIndices.map(i => qData.options[i]).join("; ");
    const correctTexts = correctIndices.map(i => qData.options[i]).join("; ");

    userHistory.push({
        id: currentStep + 1,
        question: qData.question,
        userAns: userSelectedTexts || "(No selection)",
        correctAns: correctTexts,
        isCorrect: isCorrect
    });

    currentStep++;
    if (currentStep < currentQuizData.questions.length) {
        loadQuestion(currentStep);
    } else {
        showResults();
    }
};

function showResults() {
    questionView.style.display = 'none';
    resultView.style.display = 'block';
    clearInterval(timerInterval);
    
    document.getElementById('final-score').textContent = userScore;
    document.getElementById('total-questions').textContent = currentQuizData.questions.length;
    
    generateReview();
}

function generateReview() {
    const container = document.getElementById('review-container');
    container.innerHTML = '';
    
    const wrongs = userHistory.filter(h => !h.isCorrect);
    
    if (wrongs.length === 0) {
        container.innerHTML = '<div class="review-empty">🎉 All Correct! Perfect!</div>';
        return;
    }
    
    const title = document.createElement('h3');
    title.className = 'review-header';
    title.textContent = '❌ Review Incorrect Answers';
    container.appendChild(title);
    
    wrongs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
            <div class="review-question">Q${item.id}: ${item.question}</div>
            <div class="review-answer wrong"><strong>Your Answer:</strong> ${item.userAns}</div>
            <div class="review-answer correct"><strong>Correct Answer:</strong> ${item.correctAns}</div>
        `;
        container.appendChild(div);
    });
}

// 辅助功能
function startTimer() {
    secondsElapsed = 0;
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const m = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        const s = (secondsElapsed % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `Time: ${m}:${s}`;
    }, 1000);
}

function backToMenu() {
    // 停止所有音频
    document.querySelectorAll('audio').forEach(a => a.pause());
    
    // 重置界面
    lectureView.style.display = 'none';
    questionView.style.display = 'none';
    resultView.style.display = 'none';
    timerDisplay.style.display = 'none';
    
    // 显示菜单
    menuView.style.display = 'block';
    document.getElementById('page-title').textContent = "TPO 74 Practice";
}

function restartCurrentQuiz() {
    startQuiz(currentQuizId);
}