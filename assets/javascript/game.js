var randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
  $("#number-to-guess").text(randomNumber);
  var counter = 0;
  $(".crystal-image").on("click", function() {
    counter += Math.floor(Math.random() * ((12-1)+1) + 1);
    
    alert("New score: " + counter);
    if (counter === randomNumber) {
      alert("You win!");
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= randomNumber) {
      // Then they are alerted with a loss.
      alert("You lose!!");
    }
    // This is fine except the way our code is written every user will win first (when they hit 50).
    // But will then lose immediately if they click again. Seems pointless right?
    // To make this a game we need to create additional code to randomize the counter and targetScore.
  });