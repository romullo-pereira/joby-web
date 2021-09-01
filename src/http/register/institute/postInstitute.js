const createInstitute = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/institute`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(reqBody + this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
        sessionStorage.removeItem("inep");
        sessionStorage.removeItem("instituteData");

        sessionStorage.setItem("instituteInformation", reqBody);

        window.location.href = "../login/login-page.html";
      }
    };

    http.send(reqBody);
  };
  