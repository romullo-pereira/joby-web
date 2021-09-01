const createCompany = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/company`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
        sessionStorage.removeItem("cnpj");
        sessionStorage.removeItem("companyData");

        sessionStorage.setItem("companyInformation", reqBody);

        window.location.href = "../login/login-page.html";
      }
    };

    http.send(reqBody);
  };
  