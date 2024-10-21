const mathButton = document.getElementById("math");
const chemistryButton = document.getElementById("chemistry");
const subject = document.getElementById("subject");
const level = document.getElementById("level");
const easyButton = document.getElementById("easy");
const medButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
const questions = document.getElementById("questions");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const next = document.getElementById("next");
const score = document.getElementById("score");
const userScore = document.getElementById("userScore");
const timeLeft = document.getElementById("timeLeft");
const flag_ = document.getElementById("flag");

let sub = 0, lev = 0, score_ = 0, questionNum = 0, Q = [], count = 20, countdown, time,f = false;
const questionArr = [
    // math
    [
        // easy
        [
            {
                question: "What is 2 + 2?",
                options: [2, 3, 4, 5],
                correctAnswer: 4
            },
            {
                question: "What is 5 - 3?",
                options: [1, 2, 3, 4],
                correctAnswer: 2
            },
            {
                question: "What is 3 × 3?",
                options: [6, 9, 12, 15],
                correctAnswer: 9
            },
            {
                question: "What is 8 ÷ 2?",
                options: [2, 3, 4, 5],
                correctAnswer: 4
            },
            {
                question: "What is 7 + 1?",
                options: [6, 7, 8, 9],
                correctAnswer: 8
            },
            {
                question: "What is 9 - 6?",
                options: [1, 2, 3, 4],
                correctAnswer: 3
            },
            {
                question: "What is 4 × 2?",
                options: [6, 8, 10, 12],
                correctAnswer: 8
            },
            {
                question: "What is 12 ÷ 3?",
                options: [3, 4, 5, 6],
                correctAnswer: 4
            },
            {
                question: "What is 6 + 4?",
                options: [8, 9, 10, 11],
                correctAnswer: 10
            },
            {
                question: "What is 10 - 7?",
                options: [1, 2, 3, 4],
                correctAnswer: 3
            }
        ],
        // medium
        [
            {
                question: "What is the value of 12 ÷ 3 + 4 × 2?",
                options: [10, 12, 8, 6],
                correctAnswer: 10
            },
            {
                question: "If a triangle has a base of 10 cm and a height of 5 cm, what is its area?",
                options: [25, 50, 15, 30],
                correctAnswer: 25
            },
            {
                question: "What is 9² - 5²?",
                options: [56, 54, 64, 36],
                correctAnswer: 54
            },
            {
                question: "If 3x + 4 = 19, what is the value of x?",
                options: [3, 5, 4, 7],
                correctAnswer: 5
            },
            {
                question: "What is the least common multiple (LCM) of 4 and 6?",
                options: [12, 24, 6, 8],
                correctAnswer: 12
            },
            {
                question: "What is 15 × 3 - 4?",
                options: [41, 40, 39, 38],
                correctAnswer: 41
            },
            {
                question: "If a car travels at a speed of 70 km/h, how long will it take to cover 210 km?",
                options: [2.5, 3, 4, 5],
                correctAnswer: 3
            },
            {
                question: "What is 100 ÷ 4 + 3²?",
                options: [28, 34, 36, 32],
                correctAnswer: 34
            },
            {
                question: "If the circumference of a circle is 31.4 cm, what is its radius? (Use π ≈ 3.14)",
                options: [5, 10, 15, 20],
                correctAnswer: 5
            },
            {
                question: "What is the solution to the equation 5x - 10 = 0?",
                options: [1, 2, 3, 4],
                correctAnswer: 2
            }

        ],
        // hard
        [
            {
                question: "What is the value of \( \frac{5!}{3! \times 2!} \)?",
                options: [10, 15, 20, 25],
                correctAnswer: 10
            },
            {
                question: "Solve for \( x \): \( 2^{x} = 32 \)",
                options: [3, 4, 5, 6],
                correctAnswer: 5
            },
            {
                question: "What is the derivative of \( f(x) = 3x^3 - 5x + 4 \)?",
                options: ["9x^2 - 5", "3x^2 - 5", "6x^2 - 5", "9x^2 + 5"],
                correctAnswer: "9x^2 - 5"
            },
            {
                question: "What is the integral of \( \int (4x^3 - 2x^2 + 3)dx \)?",
                options: ["x^4 - \frac{2}{3}x^3 + 3x + C", "x^4 + 2x^3 + 3x + C", "x^4 - x^3 + 3x + C", "x^4 - \frac{2}{3}x^3 + 2x + C"],
                correctAnswer: "x^4 - \frac{2}{3}x^3 + 3x + C"
            },
            {
                question: "What is the solution to the equation \( 4x^2 + 8x + 3 = 0 \)?",
                options: ["-1, -3/2", ["-3, -1"], ["1, -3"], ["-2, -1/2"]],
                correctAnswer: [-1, -3 / 2]
            },
            {
                question: "What is the limit of \( \lim_{x \to 0} \frac{\sin(x)}{x} \)?",
                options: [0, 1, '∞', -1],
                correctAnswer: 1
            },
            {
                question: "What is the sum of the angles in a hexagon?",
                options: [720, 600, 540, 480],
                correctAnswer: 720
            },
            {
                question: "What is the fourth root of 256?",
                options: [2, 4, 6, 8],
                correctAnswer: 4
            },
            {
                question: "What is the value of \( \log_{10}(1000) \)?",
                options: [1, 2, 3, 10],
                correctAnswer: 3
            },
            {
                question: "If the area of a circle is \( 50\pi \), what is its radius?",
                options: [5, 10, 25, 50],
                correctAnswer: 5
            }
        ]

    ],
    // chemistry
    [
        // easy
        [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                correctAnswer: "H2O"
            },
            {
                question: "What is the most abundant gas in the Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: "Nitrogen"
            },
            {
                question: "What is the pH level of pure water?",
                options: [7, 1, 14, 10],
                correctAnswer: 7
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                correctAnswer: "NaCl"
            },
            {
                question: "What element does 'O' represent on the periodic table?",
                options: ["Gold", "Oxygen", "Silver", "Iron"],
                correctAnswer: "Oxygen"
            },
            {
                question: "What is the process called when a solid turns into a gas?",
                options: ["Condensation", "Sublimation", "Evaporation", "Freezing"],
                correctAnswer: "Sublimation"
            },
            {
                question: "Which of the following is a noble gas?",
                options: ["Oxygen", "Hydrogen", "Neon", "Chlorine"],
                correctAnswer: "Neon"
            },
            {
                question: "What is the main component of natural gas?",
                options: ["Methane", "Propane", "Butane", "Ethane"],
                correctAnswer: "Methane"
            },
            {
                question: "What is the chemical formula for glucose?",
                options: ["C6H12O6", "C12H22O11", "C6H6", "CH4"],
                correctAnswer: "C6H12O6"
            },
            {
                question: "What type of bond is formed when electrons are shared?",
                options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
                correctAnswer: "Covalent bond"
            }
        ],
        // medium
        [
            {
                question: "What is the molar mass of water (H2O)?",
                options: [16, 18, 20, 22],
                correctAnswer: 18
            },
            {
                question: "Which element has the highest electronegativity?",
                options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
                correctAnswer: "Fluorine"
            },
            {
                question: "What type of reaction is represented by the equation: 2H2 + O2 → 2H2O?",
                options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
                correctAnswer: "Synthesis"
            },
            {
                question: "What is the primary component of the Earth's crust?",
                options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
                correctAnswer: "Oxygen"
            },
            {
                question: "What is the chemical formula for sulfuric acid?",
                options: ["HCl", "H2SO4", "HNO3", "CH3COOH"],
                correctAnswer: "H2SO4"
            },
            {
                question: "Which gas is produced during photosynthesis?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: "Oxygen"
            },
            {
                question: "What is the process of converting a solid directly to a gas called?",
                options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                correctAnswer: "Sublimation"
            },
            {
                question: "In which of the following processes is energy absorbed?",
                options: ["Exothermic", "Endothermic", "Combustion", "Neutralization"],
                correctAnswer: "Endothermic"
            },
            {
                question: "What is the pH of a neutral solution at 25°C?",
                options: [7, 0, 14, 1],
                correctAnswer: 7
            },
            {
                question: "Which of the following is an example of an ionic compound?",
                options: ["NaCl", "C6H12O6", "CO2", "H2O"],
                correctAnswer: "NaCl"
            }
        ],
        // hard
        [
            {
                question: "What is the hybridization of the carbon atoms in ethylene (C2H4)?",
                options: ["sp", "sp2", "sp3", "dsp3"],
                correctAnswer: "sp2"
            },
            {
                question: "What is the heat of formation of water in kJ/mol?",
                options: [-285.8, -241.8, -227.3, -210.0],
                correctAnswer: -241.8
            },
            {
                question: "Which of the following compounds is a strong electrolyte?",
                options: ["Glucose", "Acetic Acid", "Sodium Chloride", "Ammonia"],
                correctAnswer: "Sodium Chloride"
            },
            {
                question: "What is the oxidation state of sulfur in H2SO4?",
                options: [0, +2, +4, +6],
                correctAnswer: +6
            },
            {
                question: "Which of the following is not a colligative property?",
                options: ["Boiling Point Elevation", "Freezing Point Depression", "Vapor Pressure Lowering", "Density"],
                correctAnswer: "Density"
            },
            {
                question: "What is the molecular geometry of SF6?",
                options: ["Tetrahedral", "Octahedral", "Trigonal Bipyramidal", "Square Planar"],
                correctAnswer: "Octahedral"
            },
            {
                question: "What type of reaction occurs when an acid reacts with a base?",
                options: ["Redox Reaction", "Decomposition", "Neutralization", "Combustion"],
                correctAnswer: "Neutralization"
            },
            {
                question: "What is the bond order of O2?",
                options: [1, 2, 3, 4],
                correctAnswer: 2
            },
            {
                question: "What is the equilibrium constant expression for the reaction: aA + bB ⇌ cC + dD?",
                options: ["K = [C]^c[D]^d / [A]^a[B]^b", "K = [A]^a[B]^b / [C]^c[D]^d", "K = [A]^a[C]^c / [B]^b[D]^d", "K = [C]^c[B]^b / [A]^a[D]^d"],
                correctAnswer: "K = [C]^c[D]^d / [A]^a[B]^b"
            },
            {
                question: "Which of the following is the strongest acid?",
                options: ["HCl", "H2SO4", "HF", "HNO3"],
                correctAnswer: "H2SO4"
            }
        ]
    ]

];

let choosedOp = new Array(10).fill(-1);
let flagArr = [];

mathButton.onclick = function () {
    subject.classList.add('hidden');
    level.classList.remove('hidden');
};

chemistryButton.onclick = function () {
    subject.classList.add('hidden');
    level.classList.remove('hidden');
    sub = 1;
};

easyButton.onclick = function () {
    level.classList.add('hidden');
    lev = 0;
    time = 15;
    timeLeft.innerText = "15s";
    displayQuestion();
    questions.classList.remove('hidden');
};

medButton.onclick = function () {
    level.classList.add('hidden');
    lev = 1;
    time = 20;
    timeLeft.innerText = "20s";
    displayQuestion();
    questions.classList.remove('hidden');
};

hardButton.onclick = function () {
    level.classList.add('hidden');
    lev = 2;
    time = 25;
    timeLeft.innerText = "25s";
    displayQuestion();
    questions.classList.remove('hidden');
};


function displayQuestion() {
    clearInterval(countdown);
    question.innerHTML = `
    <p>${questionArr[sub][lev][questionNum].question}</p>
    <div class = "options">
        <button class="option" onclick="checker(this)">${questionArr[sub][lev][questionNum].options[0]}</button>
        <button class="option" onclick="checker(this)">${questionArr[sub][lev][questionNum].options[1]}</button>
        <button class="option" onclick="checker(this)">${questionArr[sub][lev][questionNum].options[2]}</button>
        <button class="option" onclick="checker(this)">${questionArr[sub][lev][questionNum].options[3]}</button>
    </div>
        `;
    if(f){
        flag_.classList.add('hidden');
    }else{
        flag_.classList.remove('hidden');
    }
    next.classList.add('hidden');
    count = time;
    countdown = setInterval(() => {
        timeLeft.innerText = `${count}s`;
        if (count <= 0) {
            clearInterval(countdown);
            if(f) flagQuestion();
            else nextQuestion();
        }
        count--;
    }, 2000);
}

function checker(op) {
    next.classList.remove('hidden');
    let options = document.querySelectorAll('.option');
    options.forEach(el => {
        el.classList.remove('choosed');
    });
    op.classList.add('choosed');
    choosedOp[questionNum] = op.innerHTML;
}

function nextQuestion() {
    questionNum++;
    if (questionNum === 10 && flagArr.length === 0) {
        questions.classList.add('hidden');
        choosedOp.forEach((el, i) => {
            if (el == questionArr[sub][lev][i].correctAnswer) score_++;
        });
        userScore.innerHTML = score_;
        score.classList.remove('hidden');
    } else if(questionNum === 10 && flagArr.length !== 0){
        f = true;
        flagQuestion();
    }else {
        questionNumber.innerHTML = questionNum + 1;
        displayQuestion();
    }
}

function flag() {
    flagArr.push(questionNum);
    nextQuestion();
}

function flagQuestion(){
    if(flagArr.length === 0) {
        questionNum = 9;
        nextQuestion();
        f = false;
    }else{
        questionNum = flagArr[0];
        flagArr.pop();
        displayQuestion();
    }
}

function restart() {
    score.classList.add('hidden');
    sub = 0; lev = 0; score_ = 0; questionNum = 0; count = 20;f = false;
    choosedOp = new Array(10).fill(-1);
    flagArr = [];
    subject.classList.remove('hidden');
}