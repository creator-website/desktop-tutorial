const body = document.querySelector('body');
const themeSelect = document.querySelector('#theme-select');

let savedTheme = 'auto-theme';
if (localStorage.getItem('theme')) {
  savedTheme = localStorage.getItem('theme');
  themeSelect.value = savedTheme;
}
ChangeTheme(savedTheme);

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  ChangeTheme(selectedTheme);
});

function ChangeTheme(theme) {
  if (theme === 'auto-theme') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-theme'
      : 'light-theme';
  }
  body.classList.remove('auto-theme', 'dark-theme', 'light-theme');
  body.classList.add(theme);
}

// получаем все элементы с классом .skills-level
const skillsLevels = document.querySelectorAll('.skills-level');
// проходимся по каждому элементу и устанавливаем ему ширину, соответствующую проценту из текста
skillsLevels.forEach((level) => {
  const percent = parseInt(level.innerText); // получаем число из текста
  level.style.width = percent + '%'; // устанавливаем ширину в процентах
});
