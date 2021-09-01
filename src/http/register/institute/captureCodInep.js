const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inep = event.target.querySelector('[data-inep]');  
  sessionStorage.setItem("inep", inep.value);

  window.location.href = "./institution-registration-page-two.html"; 

});
