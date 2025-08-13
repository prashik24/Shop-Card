
const accTrigger = document.querySelector(".navsign"); // Target full area including hover
const accDropdown = document.getElementById("formContainer");

let accTimeout; // to prevent flicker

accTrigger.addEventListener("mouseenter", () => {
  clearTimeout(accTimeout);
  accDropdown.style.display = "block";
});

accDropdown.addEventListener("mouseenter", () => {
  clearTimeout(accTimeout);
  accDropdown.style.display = "block";
});

accTrigger.addEventListener("mouseleave", () => {
  accTimeout = setTimeout(() => {
    if (!accDropdown.matches(":hover")) {
      accDropdown.style.display = "none";
    }
  }, 200);
});

accDropdown.addEventListener("mouseleave", () => {
  accDropdown.style.display = "none";
});
