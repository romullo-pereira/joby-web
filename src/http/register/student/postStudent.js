const createStudent = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/student`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
        sessionStorage.removeItem("studentInstitute");
        sessionStorage.removeItem("personData");

        sessionStorage.setItem("userInformation", reqBody);

        window.location.href = "../login/login-page.html";
      }
    };

    http.send(reqBody);
  };
  