
document.addEventListener("DOMContentLoaded", () => {

  const langTrigger  = document.querySelector("#clickableDive");
  const langDisplay  = document.getElementById("d");
  const langDropdown = document.getElementById("name");
  const langBox      = document.getElementById("lang-main1");
  const languageOptions = document.querySelectorAll(".lang-type, .lang-type1");

  if (!langTrigger || !langDisplay || !langDropdown || !langBox) return;

  let hoverDot = document.getElementById("hover-dot");
  if (!hoverDot) {
    hoverDot = document.createElement("span");
    hoverDot.id = "hover-dot";
    document.body.appendChild(hoverDot);
  }

  let selectedDot = document.getElementById("selected-dot");
  if (!selectedDot) {
    selectedDot = document.createElement("span");
    selectedDot.id = "selected-dot"; 
    selectedDot.style.visibility = "hidden";
    langDisplay.insertAdjacentElement("afterend", selectedDot);
  }

  function showDropdown() {
    langDropdown.style.display = "block";
  }

  function hideDropdown() {
    setTimeout(() => {
      const isHoveringAny =
        langDropdown.matches(":hover") ||
        langTrigger.matches(":hover") ||
        langDisplay.matches(":hover") ||
        langBox.matches(":hover");
      if (!isHoveringAny) {
        langDropdown.style.display = "none";
        hoverDot.style.display = "none"; // hide hover dot when closing
      }
    }, 200);
  }
  langTrigger.addEventListener("mouseenter", showDropdown);
  langDisplay.addEventListener("mouseenter", showDropdown);
  langBox.addEventListener("mouseenter", showDropdown);
  langDropdown.addEventListener("mouseenter", showDropdown);

  langTrigger.addEventListener("mouseleave", hideDropdown);
  langDisplay.addEventListener("mouseleave", hideDropdown);
  langBox.addEventListener("mouseleave", hideDropdown);
  langDropdown.addEventListener("mouseleave", hideDropdown);

  function positionDotOnRadio(radio) {
    if (!radio) return;
    const rect = radio.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top  + rect.height / 2;
    hoverDot.style.left = x + "px";
    hoverDot.style.top  = y + "px";
  }

  function showHoverDotOn(optionEl) {
    const radio = optionEl.querySelector('input[type="radio"]');
    if (!radio) return;
    positionDotOnRadio(radio);
    hoverDot.style.display = "block";
  }

  languageOptions.forEach((option) => {
    option.addEventListener("mouseenter", () => showHoverDotOn(option));
    option.addEventListener("mousemove", () => showHoverDotOn(option));
    option.addEventListener("mouseleave", () => {
      hoverDot.style.display = "none";
    });
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const radio = option.querySelector('input[type="radio"]');
      if (radio && radio.id) {
        radio.checked = true;               
        langDisplay.textContent = radio.id;   
        selectedDot.style.visibility = "visible"; 
      }
    });
  });

 
  const DEFAULT_LANG_ID = "EN";
  const defaultRadio = document.getElementById(DEFAULT_LANG_ID);

  if (defaultRadio) defaultRadio.checked = true;
  langDisplay.textContent = DEFAULT_LANG_ID;
  selectedDot.style.visibility = "visible";
});
