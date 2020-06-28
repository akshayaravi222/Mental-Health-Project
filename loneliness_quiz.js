const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const depressionQnA = [
  {
    question: "How much are you able to connect with other people?",
    answers: {
      a: "I engage in conversation and enjoy myself.",
      b: "I talk sometimes but prefer not to.",
      c: "I mostly just sit and wait for other people to talk.",
      d: "I don't talk unless very important.",
      e: "I don't talk or communicate to people at all."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
    five: "e"
  },
  {
    question: "How often do you and your friends connect?",
    answers: {
      a: "I talk to my friends everyday.",
      b: "Normally, I don't talk unless they text/call me first!",
      c: "I used to talk but now I don't."
    },
    one: "a",
    two: "b",
    three: "c",
  },
  {
    question: "Do you feel alone and worthless?",
    answers: {
      a: "Never.",
      b: "Sometimes.",
      c: "Often.",
      d: "Always."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "Do you feel disapppointed and/or unimportant?",
    answers: {
      a: "Never.",
      b: "Sometimes.",
      c: "Often.",
      d: "Always."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "When you talk, do you feel ignored?",
    answers: {
      a: "Never.",
      b: "Sometimes.",
      c: "Often.",
      d: "Always."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
];

function quiz() {
  const output = [];
  depressionQnA.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}

function results() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let worryCount = 0;
  depressionQnA.forEach(
    (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const selectedAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(selectedAnswer === currentQuestion.one) {
        worryCount += 1
      } else if(selectedAnswer === currentQuestion.two) {
        worryCount += 2
      } else if(selectedAnswer === currentQuestion.three) {
        worryCount += 3
      } else if(selectedAnswer === currentQuestion.four) {
        worryCount += 4
      } else if(selectedAnswer === currentQuestion.five) {
        worryCount += 5
      }
    }
  );
  if(worryCount > 13) {
    resultsContainer.innerHTML = `You may have chronic loneliness. Please consider scheduling an appointment with a professional.`;
  } else {
    resultsContainer.innerHTML = `You likely don't have chronic loneliness. If you feel that you truly do have chronic loneliness, please consider scheduling an appointment with a professional.`;
  }
}

quiz();

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', results);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
