const boxIconInput = document.querySelectorAll('.icon-input');
const inputs = document.querySelectorAll('.input-cad');

function activeInput(e) {
  inputs.forEach((input) => {
    input.classList.remove('input-hover-active');
  });

  let element = e.target;

  if (element.classList.contains('input-cad')) {
    element.classList.add('input-hover-active');
    let boxIcon = element.nextElementSibling;
    boxIcon.classList.add('box-active');
  }
}

inputs.forEach((input) => {
  input.addEventListener('click', activeInput);
  input.addEventListener('keyup', activeInput);
});
