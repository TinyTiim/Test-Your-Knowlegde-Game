document.addEventListener('DOMContentLoaded', function() {
  // Gets the necessary elements
  var startButton = document.querySelector('#home-screen .btn');
  var guide = document.querySelector('#guide');
  var testBox = document.querySelector('#test-box');
  var questionContainer = document.getElementById('questions');
  var score = document.querySelector('#score');
  var results = document.querySelector('#results');
  var highscoreButton = document.querySelector('#results #highscore-btn');
  var highscorePage = document.querySelector('#highscore');
  const progressBar = document.getElementById('progress');
  const timeElement = document.getElementById('time');

  // Hides the elements that should not be displayed initially
  guide.style.display = 'none';
  testBox.style.display = 'none';
  score.style.display = 'none';
  results.style.display = 'none';
  highscorePage.style.display = 'none';

  // Adds event listener to the start button
  startButton.addEventListener('click', function() {
    // Hides the home screen
    document.getElementById('home-screen').style.display = 'none';

    // Shows the guide
    guide.style.display = 'block';
  });

  // Adds event listener to the continue button in the guide
  document.querySelector('#guide .continue').addEventListener('click', function() {
    // Hide the guide and show the test box
    guide.style.display = 'none';
    testBox.style.display = 'block';
    showQuestionSet(0);
    startTimer();
  });

  // Defines the questions as an array of objects
  const questions = [
    {
      question: 'Which of the following is not a valid HTML tag?',
      options: ['<div>', '<span>', '<paragraph>', '<h1>'],
      answer: '<paragraph>'
    },
    {
      question: 'Which property is used to change the background color in CSS?',
      options: ['font-size', 'background-color', 'text-align', 'margin'],
      answer: 'background-color'
    },
    {
      question: 'Which JavaScript keyword is used to declare a variable?',
      options: ['var', 'let', 'const', 'variable'],
      answer: 'var'
    },
    {
      question: 'Which CSS property is used to add space between the border and content of an element?',
      options: ['margin', 'padding', 'border-spacing', 'space-between'],
      answer: 'padding'
    },
    {
      question: 'Which method is used to remove the last element from an array in JavaScript?',
      options: ['pop()', 'shift()', 'splice()', 'pop()'],
      answer: 'pop()'
    }
  ];

  let currentQuestionIndex = 0; // Tracks the current question index
  let scoreCount = 0; // Tracks the user's score
  const totalQuestions = questions.length;

  // Functions to show the question set based on the index
  function showQuestionSet(index) {
    // Clears the previous question
    questionContainer.innerHTML = '';

    // Creates the question element
    const questionElement = document.createElement('h4');
    questionElement.textContent = questions[index].question;
    questionContainer.appendChild(questionElement);

    // Create the options elements
    questions[index].options.forEach(function(option) {
      const optionElement = document.createElement('h4');
      optionElement.textContent = option;
      optionElement.addEventListener('click', function() {
        checkAnswer(this.textContent === questions[currentQuestionIndex].answer);
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
          showQuestionSet(currentQuestionIndex);
        } else {
          endQuiz();
        }
      });
      questionContainer.appendChild(optionElement);
    });
  }

  // Functions to check the user's answer
  function checkAnswer(isCorrect) {
    if (isCorrect) {
      scoreCount++;
      document.getElementById('correct').style.display = 'block';
    } else {
      document.getElementById('wrong').style.display = 'block';
    }
    setTimeout(function() {
      document.getElementById('correct').style.display = 'none';
      document.getElementById('wrong').style.display = 'none';
    }, 1000);
  }

  // Functions to end the quiz and show the results
  function endQuiz() {
    score.style.display = 'block';
    results.style.display = 'block';
    document.getElementById('points').textContent = `Your score was ${scoreCount}/${totalQuestions}`;
  }

  // Functions to start the timer
  function startTimer() {
    let timeLeft = 30; // Time limit in seconds
    timeElement.textContent = timeLeft;

    const timer = setInterval(function() {
      timeLeft--;
      timeElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
});
