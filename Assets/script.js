// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    var startButton = document.querySelector('#home-screen .btn');
    var guide = document.querySelector('#guide');
    var exitButton = document.querySelector('#guide .exit');
    var continueButton = document.querySelector('#guide .continue');
    var testBox = document.querySelector('#test-Box');
    var correctMessage = document.querySelector('#score #correct');
    var wrongMessage = document.querySelector('#score #wrong');
    var tryAgainButton = document.querySelector('#results #tryagain');
    var homeScreen = document.querySelector('#home-screen');
    var results = document.querySelector('#results');
    var highscoreButton = document.querySelector('#results #highscore-btn');
    var highscorePage = document.querySelector('#highscore');
  
    // Hide the elements that should not be displayed initially
    guide.style.display = 'none';
    testBox.style.display = 'none';
    correctMessage.style.display = 'none';
    wrongMessage.style.display = 'none';
    results.style.display = 'none';
    highscorePage.style.display = 'none';
  
    // Add event listener to the start button
    startButton.addEventListener('click', function() {
      // Show the guide
      guide.style.display = 'block';
      homeScreen.style.display = 'none';
    });
  
    // Add event listener to the exit button in the guide
    exitButton.addEventListener('click', function() {
      // Show the home screen again
      guide.style.display = 'none';
      homeScreen.style.display = 'block';
    });
  
    // Add event listener to the continue button in the guide
    continueButton.addEventListener('click', function() {
      // Hide the guide and show the test box
      guide.style.display = 'none';
      testBox.style.display = 'block';
    });
  
    // Add event listeners to the answer options
    var answerOptions = document.querySelectorAll('#questions h4');
    for (var i = 0; i < answerOptions.length; i++) {
      answerOptions[i].addEventListener('click', function() {
        // Check if the selected answer is correct or wrong
        var selectedAnswer = this.innerText;
        if (selectedAnswer === 'D. Cascading Style Sheets') {
          // Show the correct message
          correctMessage.style.display = 'block';
          wrongMessage.style.display = 'none';
        } else {
          // Show the wrong message
          wrongMessage.style.display = 'block';
          correctMessage.style.display = 'none';
        }
  
        // Hide the test box and show the results
        testBox.style.display = 'none';
        results.style.display = 'block';
  
        // Update the score in the results
        var score = selectedAnswer === 'D. Cascading Style Sheets' ? '1/1' : '0/1';
        var scoreElement = document.querySelector('#results #points');
        scoreElement.textContent = 'Your score was ' + score;
      });
    }
  
    // Add event listener to the try again button
    tryAgainButton.addEventListener('click', function() {
      // Hide the results and show the test box again
      testBox.style.display = 'block';
      correctMessage.style.display = 'none';
      wrongMessage.style.display = 'none';
      results.style.display = 'none';
    });
  
    // Add event listener to the highscores button
    highscoreButton.addEventListener('click', function() {
      // Show the highscore page and hide the results
      results.style.display = 'none';
      highscorePage.style.display = 'block';
    });
  
    // Add event listener to the results element
    results.addEventListener('click', function() {
      // Hide the correct and wrong messages
      correctMessage.style.display = 'none';
      wrongMessage.style.display = 'none';
    });
  });
  