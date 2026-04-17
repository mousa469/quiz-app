// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

startButton.addEventListener("click", startQuiz);

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
];

let questionIndex = 0;
let score = 0;

function startQuiz(params) {
  startScreen.classList.remove("display");
  startScreen.classList.add("vanish");
  quizScreen.classList.add("display");
  quizScreen.classList.remove("vanish");

  questionIndex = 0;
  score = 0;

  totalQuestionsSpan.innerHTML = quizQuestions.length;
  scoreSpan.innerHTML = score;

  showQuestion();
}

function showQuestion(params) {
  let pWidth = (questionIndex / quizQuestions.length) * 100;

  progressBar.style.width = `${pWidth}%`;
  answersContainer.innerHTML = "";
  let question = quizQuestions[questionIndex];
  questionText.innerHTML = question.question;
  currentQuestionSpan.innerHTML = questionIndex + 1;
  for (let i = 0; i < question.answers.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerHTML = question.answers[i].text;

    btn.addEventListener("click", function () {
      if (question.answers[i].correct) {
        score++;
        scoreSpan.innerHTML = score;
      }

      questionIndex++;

      if (questionIndex < quizQuestions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });

    answersContainer.appendChild(btn);
  }
}

function showResult() {
  quizScreen.classList.remove("display");
  quizScreen.classList.add("vanish");
  resultScreen.classList.add("display");
  resultScreen.classList.remove("vanish");

  finalScoreSpan.innerHTML = score;
  maxScoreSpan.innerHTML = quizQuestions.length;
}

restartButton.addEventListener("click", function () {
  questionIndex = 0;
  score = 0;
  resultScreen.classList.remove("display");
  resultScreen.classList.add("vanish");
  quizScreen.classList.add("display");
  quizScreen.classList.remove("vanish");

  showQuestion();
});
