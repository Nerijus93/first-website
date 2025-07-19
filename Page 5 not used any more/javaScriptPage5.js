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