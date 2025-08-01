// Elements
const langTrigger = document.querySelector("#clickableDive");
const langDisplay = document.getElementById("d");
const langDropdown = document.getElementById("name");
const langBox = document.getElementById("lang-main1");

// Show dropdown on hover
function showDropdown() {
  langDropdown.style.display = "block";
}

// Hide dropdown when mouse leaves all
function hideDropdown() {
  setTimeout(() => {
    if (
      !langDropdown.matches(":hover") &&
      !langTrigger.matches(":hover") &&
      !langDisplay.matches(":hover")
    ) {
      langDropdown.style.display = "none";
    }
  }, 200);
}

// Hover listeners
langTrigger.addEventListener("mouseenter", showDropdown);
langDisplay.addEventListener("mouseenter", showDropdown);
langBox.addEventListener("mouseenter", showDropdown);

// Hide when mouse leaves
langTrigger.addEventListener("mouseleave", hideDropdown);
langDisplay.addEventListener("mouseleave", hideDropdown);
langBox.addEventListener("mouseleave", hideDropdown);

// Update language code on selection
const languageOptions = document.querySelectorAll(".lang-type, .lang-type1");

languageOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const radio = option.querySelector('input[type="radio"]');
    if (radio && radio.id) {
      langDisplay.textContent = radio.id;
    }
  });
});
