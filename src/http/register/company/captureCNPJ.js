const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cnpj = event.target.querySelector('[data-cnpj]');  
  sessionStorage.setItem("cnpj", cnpj.value);

  window.location.href = "./company-registration-page-two.html"; 

});
