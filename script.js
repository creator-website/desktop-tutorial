const body = document.querySelector('body');
const themeSelect = document.querySelector('#theme-select');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeSelect.value = savedTheme;
} else {
  body.classList.add('auto-theme');
}

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;

  if (selectedTheme === 'auto-theme') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-theme'
      : 'light-theme';

    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(systemTheme);
  } else {
    body.classList.remove('auto-theme', 'dark-theme', 'light-theme');
    body.classList.add(selectedTheme);
  }

  localStorage.setItem('theme', selectedTheme);
});

// получаем все элементы с классом .skills-level
const skillsLevels = document.querySelectorAll('.skills-level');

// проходимся по каждому элементу и устанавливаем ему ширину, соответствующую проценту из текста
skillsLevels.forEach((level) => {
  const percent = parseInt(level.innerText); // получаем число из текста
  level.style.width = percent + '%'; // устанавливаем ширину в процентах
});
