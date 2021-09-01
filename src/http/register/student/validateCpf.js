const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cpf = event.target.querySelector('[data-cpf]');
  console.log(cpf);
  
  const http = new XMLHttpRequest();
  
  http.open('POST', `${baseUrl}/student/cpf`, true);
  http.setRequestHeader('Content-Type', 'application/json');

  http.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.parse(http.response);

        sessionStorage.setItem("studentInstitute", JSON.stringify(response));

        window.location.href = "./user-registration-page-two.html";

    }
  }

  const reqBody = JSON.stringify(
      {
          "cpf": cpf.value
      }
  );

  console.log(reqBody);
  http.send(reqBody);

  
});
