const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const depressionQnA = [
  {
    question: "How often do you feel tired, sluggish, and fatigued?",
    answers: {
      a: "I am energetic and feel great!",
      b: "I am usually energetic, but I seldom crash.",
      c: "I have days where I feel off, like a downer.",
      d: "Most days, I don't feel like myself, but not every day.",
      e: "I try my hardest to keep a smile, but it never sticks."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
    five: "e"
  },
  {
    question: "How easily can you concentrate and make decisions?",
    answers: {
      a: "I am active and alert, and I think through decisions carefully but not too slowly.",
      b: "Normally, concentrating is not very easy for me, but a cup of tea or coffee can easily fix that!",
      c: "I used to be able to clean my room in 5 minutes; now I take a whole day because I can't concentrate."
    },
    one: "a",
    two: "b",
    three: "c",
  },
  {
    question: "How is your appetite and your self image?",
    answers: {
      a: "I eat normally and have a wonderful image of myself in the mirror.",
      b: "I am starting to eat less because I have a weight loss goal.",
      c: "When I go out to eat, I don't order much food, and that worries my friends.",
      d: "Food grosses me out, and I weigh too much. I hope that by not eating, I will achieve my goals."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "How much sleep do you get? How do you feel during your sleep?",
    answers: {
      a: "I sleep 6-8 hours per day and dream wonderful things.",
      b: "I stay up all night and can't sleep because I think and question topics.",
      c: "I'm always tired and oversleep, and I feel like I let down my family for always oversleeping."
    },
    one: "a",
    two: "b",
    three: "c",
  },
  {
    question: "How do you feel about doing anything?",
    answers: {
      a: "I enjoy my hobbies very much, especially during the time of quarantine.",
      b: "I found new hobbies; however, I have a difficult time keeping interest in any hobby.",
      c: "I feel no motivation to do anything, including my chores, and I fight with my family often."
    },
    one: "a",
    two: "b",
    three: "c",
  },
  {
    question: "How do you feel?",
    answers: {
      a: "I feel like a special person for my friends when I am there for them in this time of quarantine.",
      b: "I miss hanging out with my friends in quarantine, but I still feel good.",
      c: "I feel like since quarantine, I'm a liability for my friends since I dont feel like I'm there for them.",
      d: "I closed myself in, and I don't care about hanging out with others anymore."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "How do you get along with others?",
    answers: {
      a: "I made a lot of friends over the internet, and I enjoy talking to them. I also took this quarantine to get closer with my family.",
      b: "I try to make jokes over the internet; however, I end up offending my friends instead, and I crash socially and want to be alone.",
      c: "I fight with my friends and family a lot because they don't understand the pain that I experience."
    },
    one: "a",
    two: "b",
    three: "c",
  },
  {
    question: "Any thoughts about suicide?",
    answers: {
      a: "I care for those that are suicidal and am glad to help.",
      b: "Suicide has never crossed my mind.",
      c: "I am fascinated with the idea of suicide, but I also know that it is dangerous to do.",
      d: "I've started self harm and am thinking about hurting myself harder until I can't feel anything'."
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
  if(worryCount > 21) {
    resultsContainer.innerHTML = `You may have depression. Please consider scheduling an appointment with a professional.`;
  } else {
    resultsContainer.innerHTML = `You don't have depression. If you feel that you truly do have depression, please consider scheduling an appointment with a professional.`;
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
