

const startBtn = document.querySelector(".start-btn");
const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector(".quiz-screen");


startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden")
   quizScreen.classList.remove("hidden")
}
