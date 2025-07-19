/* JavaScript for Page 1 */
const quizButton = document.getElementById('quizButton');
if (quizButton) {
  quizButton.addEventListener('click', function () {
    console.log('Quiz button clicked! Navigating to Page 2.');
    // You can add navigation logic here
  });
}

/* JavaScript for Page 5 */
const slider = document.getElementById("wasteSlider");
const sliderValue = document.getElementById("sliderValue");
const sliderText = document.getElementById("sliderText");

if (slider && sliderValue && sliderText) {
  slider.addEventListener("input", () => {
    const value = parseInt(slider.value);

    // Update the visible percentage value
    sliderValue.textContent = `${value}%`;

    // Estimate how many people could be fed (based on max 3.45 billion)
    const estimatedPeopleFed = Math.floor((value / 100) * 3450); // in millions

    // Update the text below the slider
    sliderText.textContent = `We could feed over ${estimatedPeopleFed.toLocaleString()} million people annually`;
  });
}

/* JavaScript for Page 2 */
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
