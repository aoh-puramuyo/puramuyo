const toggleDarkModeButton = document.querySelector('#toggle-dark-mode');
const body = document.querySelector('body');

toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});