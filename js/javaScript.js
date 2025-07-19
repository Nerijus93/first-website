/* JavaScript for Home Page made by Nerijus Kmitas x24170232 */

// Get the reference to the quiz button by button ID
const quizButton = document.getElementById('quizButton');

// Check or the button exists on the page
if (quizButton) {
  // Adding event listener to the quiz button
  quizButton.addEventListener('click', function () {
    //Log the message in the browser when button is clicked
    console.log('Quiz button clicked! Navigating to Page 2.');
  });
}

/* JavaScript for Statistics page made by Nerijus Kmitas x24170232 */

//Get references to slider input and display elements
const slider = document.getElementById("rangeSlider"); //Element to show Range Slider
const sliderValue = document.getElementById("sliderValue"); //Element to show the percentage
const sliderText = document.getElementById("sliderText"); //Text to display people fed

//To make sure that all slider elements are present on the page
if (slider && sliderValue && sliderText) {
  //Add an "input" event listener so this so this will run when user moves slider
  slider.addEventListener("input", () => {
    //Convert slider value String into integer value
    const value = parseInt(slider.value);

    // Update the visible percentage value with the current value
    sliderValue.textContent = `${value}%`;

    // Calculate how many people could be fed (based on max 3.45 billion)
    const estimatedPeopleFed = Math.floor((value / 100) * 3450); // Result will be displayed in millions

    // Update the text below the slider
    sliderText.textContent = `We could feed over ${estimatedPeopleFed.toLocaleString()} million people annually`;
  });
}

document.getElementById("submitBTN").addEventListener("click", function () {
  var answers = {
      q1: "10%",
      q2: "All of the above",
      q3: "25",
      q4: "100%",
      q5: "Women and girls",
      q6: "25%",
      q7: "10%",
      q8: "7%",
      q9: "Sustainable farming",
      q10: "All of the above"
  };

  var score = 0;

  for (var q in answers) {
      var radios = document.getElementsByName(q);
      for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked && radios[i].value === answers[q]) {
              score++;
              break;
          }
      }
  }

  alert("You got " + score + " out of 10 correct.");
});
