const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const anxietyQnA = [
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
    question: "How stress do you feel that you are going through?",
    answers: {
      a: "I feel very content with my life and am relaxed.",
      b: "I have a little stress to go through, but it's all in the workflow.",
      c: "I tend to be a little aggressive in stressful situations and have a bit of trouble resting.",
      d: "Conflicts tend to find its way between my relationships, and I can't rest ever. I wish it can stop."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "Are you constantly fearful and/or worrisome?",
    answers: {
      a: "I have no troubles aside from the natural obstacles that life throws at me.",
      b: "I do remember that one time where I messed up, but I try not to let it get to me.",
      c: "This one problem affected my outlook on my friends, and I feel like I can't let that go. However, I still maintain healthy relationships.",
      d: "I can't ever look past my mistakes, and every mistake that my friends make affects my outlook on them, and I tend to become more aggressive as a result."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
  },
  {
    question: "How often do panic attacks get to you?",
    answers: {
      a: "I do not panic unless it is extremely intense and dangerous.",
      b: "Certain things make me panic; however, I think that those are my phobias.",
      c: "I randomly but not very often panic. This may be because of another condition.",
      d: "I panic when I try to remember things, and it happens often.",
      e: "I worry about having panic attacks and have panic attacks about having panic attacks."
    },
    one: "a",
    two: "b",
    three: "c",
    four: "d",
    five: "e"
  },
  {
    question: "How is your heartbeat?",
    answers: {
      a: "It feels and sounds normal. I breathe normally.",
      b: "The beat is always high; however, that's because I am very active.",
      c: "It feels rapid at random times; however, it may be heartburn.",
      d: "My heart races often, my adrenaline rushes throughout my body, and I break down sometimes."
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
  if(worryCount > 24) {
    resultsContainer.innerHTML = `You may have anxiety. Please consider scheduling an appointment with a professional.`;
  } else {
    resultsContainer.innerHTML = `You likely don't have anxiety. If you feel that you truly do have anxiety, please consider scheduling an appointment with a professional.`;
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
