const formLogin = document.querySelector('[data-form]');

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.querySelector('[data-email]');
  const password = event.target.querySelector('[data-password]');

  login(email.value, password.value);
});
