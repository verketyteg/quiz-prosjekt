const questions = [
    { question: "Hva er hovedstaden i Norge?", answer: "Oslo", level: 1 },
    { question: "Hva er 2 + 2?", answer: "4", level: 1 },
    { question: "Hvem skrev 'Romeo og Julie'?", answer: "Shakespeare", level: 2 },
    { question: "Hva er den største planeten i solsystemet?", answer: "Jupiter", level: 2 },
    { question: "Hva er verdens største hav?", answer: "Stillehavet", level: 3 },
    { question: "Hvilket grunnstoff har atomnummer 79?", answer: "Gull", level: 3 },
];

let score = 0;
let currentQuestion = 0;
let level = 1;
let totalQuestions = questions.length;

document.getElementById("total-questions").textContent = totalQuestions;

function displayQuestion() {
    const currentQ = questions[currentQuestion];
    document.getElementById("question").textContent = currentQ.question;
    document.getElementById("level").textContent = "Nivå: " + currentQ.level;
    document.getElementById("question-number").textContent = currentQuestion + 1;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        feedback.textContent = "Riktig!";
    } else {
        feedback.textContent = "Feil, riktig svar er: " + correctAnswer;
    }

    document.getElementById("score").textContent = score;

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
        displayQuestion();
    } else {
        showFinalResult();
    }

    document.getElementById("answer").value = "";
}

function showFinalResult() {
    const finalResult = document.getElementById("final-result");
    finalResult.textContent = "Quizen er over! Du fikk " + score + " poeng.";
    document.getElementById("question-container").style.display = "none";
}
    
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

shuffleQuestions();
displayQuestion();
