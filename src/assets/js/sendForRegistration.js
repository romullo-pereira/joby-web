const cardEstudante = document.getElementById('card-student');
const cardEmpresa = document.getElementById('card-company');
const cardInstituicao = document.getElementById('card-institution');

cardEstudante.addEventListener('click', () => {
  window.location.href =
    '../forms/user-registration/user-registration-page-one.html';
});

cardEmpresa.addEventListener('click', () => {
  window.location.href =
    '../forms/company-registration/company-registration-page-one.html';
});

cardInstituicao.addEventListener('click', () => {
  window.location.href =
    '../forms/institution-registration/institution-registration-page-one.html';
});
