const root = document.querySelector(":root");
const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  if (root.style.getPropertyValue("--background-color") === "#C5C4C4") {
    root.style.setProperty("--background-color", "#1e1e1e");
    root.style.setProperty("--text-color", "#000");
  } else {
    root.style.setProperty("--background-color", "#C5C4C4");
    root.style.setProperty("--text-color", "#fff");
  }
});