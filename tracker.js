const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const anxietyQnA = [
  {
    question: "How do you feel right now?",
    answers: {
      a: "rested"
      b: "stressed"
      c: "lonely"
      d: "content"
      e: "suicidal"
      f: "energetic"
      g: "inspired"
      h: "tranquil"
      i: "worried"
      j: "hurt"
      k: "insane"
      l: "fatigued"
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
    five: "e"
    six: "f"
    seven: "g"
    eight: "h"
    nine: "i"
    ten: "j"
    eleven: "k"
    twelve: "l"
  }
];

function quiz() {
  const output = [];
  anxietyQnA.forEach(
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
  anxietyQnA.forEach(
    (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const selectedAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(selectedAnswer === currentQuestion.one) { //rested
        resultsContainer.innerHTML = `Sounds like you have a good night's sleep. Now that you're well rested, have some good food and do what you need to do to take on the day.`;
      } else if(selectedAnswer === currentQuestion.two) { //stressed
        resultsContainer.innerHTML = `I'm sorry you feel that way. It can be hard when you have a lot of work to do or a lot of pressure on your shoulders. Take a break, rest, and do something you enjoy, because your mental health is more important than any other work. If necessary, talk with a professional or loved one as well.`;
      } else if(selectedAnswer === currentQuestion.three) { //lonely
       resultsContainer.innerHTML = `Especially during this pandemic, times can be tough and you can feel very isolated. Talk over a voice or face chat or text someone you know. If that is not possible, do something you enjoy and call a national helpline, which can be found in our resources section.`;
      } else if(selectedAnswer === currentQuestion.four) { //content
        resultsContainer.innerHTML = `Great! To keep feeling content, do things you enjoy and make sure you sleep and eat well.`;
      } else if(selectedAnswer === currentQuestion.five) { //suicidal
        resultsContainer.innerHTML = `I'm sorry you feel that way. First, take 10 deep breaths and clear your mind for a minute by doing something you enjoy or by going outside. Then, talk to a loved one, a healthcare professional, or call a national helpline, all of whom can assist you.`;
      } else if(selectedAnswer === currentQuestion.six) { //energetic
        resultsContainer.innerHTML = `Great! Now, use that energy productively to exercise, complete work, or do something else you love.`;
      } else if(selectedAnswer === currentQuestion.seven) { //inspired
        resultsContainer.innerHTML = `Wow! That's a great feeling. Put that inspiration to use and do something creative, something you love, or talk to someone else about this inspiration.`;
      } else if(selectedAnswer === currentQuestion.eight) { //"tranquil"
        resultsContainer.innerHTML = `Great! Feeling peaceful is always a great feeling. Using that peace, do something relaxing or complete some work that you would like to do.`;
      } else if(selectedAnswer === currentQuestion.nine) { // worried
        resultsContainer.innerHTML = `I'm sorry you feel that way,that must be tough. If you feel worried, try going outside, meditating, or doing something you love to clear your mind. Then, talk to a loved one or professional if you still feel that way. Most importantly, take a break from thinking about the thing that makes you worried.`;
      } else if(selectedAnswer === currentQuestion.ten) { //hurt
        resultsContainer.innerHTML = `Oh, being hurt is never a good feeling. I'm sorry that you feel like that. Take a break and do something you love, meditate, or go outside, and most importantly, talk to a loved one or professional about your feelings.`;
      } else if(selectedAnswer === currentQuestion.eleven) { //insane
        resultsContainer.innerHTML = `I'm sorry you feel that way. Just take a few minutes and meditate, go outside, or do something relaxing. Then, once you have calmed down a bit, talk to a loved one or professional about your feelings.`;
      } else if(selectedAnswer === currentQuestion.twelve) { //fatigued
        resultsContainer.innerHTML = `Oh, I'm sorry you feel that way. If you are fatigued, try taking a nap, eating a good meal, or doing something relaxing. Often times it is better to take a break and complete something at a later time when you are not fatigued.`;
      }

    }
  );
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
