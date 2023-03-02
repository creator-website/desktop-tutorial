const body = document.querySelector('body');
const themeSelect = document.querySelector('#theme-select');

// При загрузке страницы проверяем, есть ли сохраненная тема в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeSelect.value = savedTheme;
} else {
  body.classList.add('auto-theme');
}

// Обрабатываем изменение выбранного значения в списке
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;

  if (selectedTheme === 'auto-theme') {
    // Проверяем, какая тема у пользователя в системе
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-theme'
      : 'light-theme';

    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(systemTheme);
  } else {
    body.classList.remove('auto-theme', 'dark-theme', 'light-theme');
    body.classList.add(selectedTheme);
  }

  // Сохраняем выбранную тему в localStorage
  localStorage.setItem('theme', selectedTheme);
});
