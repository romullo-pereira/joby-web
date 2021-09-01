const login = (email, password) => {
  const http = new XMLHttpRequest();
  http.open('POST', `${baseUrl}/sessions`, true);

  http.setRequestHeader('Content-Type', 'application/json');
  // http.setRequestHeader('Access-Control-Allow-Origin', '*');
  http.setRequestHeader('Accept', '*/*');

  http.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const response = JSON.parse(http.responseText);
      sessionStorage.setItem('user', JSON.stringify(response));
      redirect(response);
    } else if(this.readyState === XMLHttpRequest.DONE && this.status === 404) {
      alert("Email ou senha incorretos!");
    }
  };

  const reqBody = JSON.stringify({
    email: email,
    password: password,
  });

  http.send(reqBody);
};

function redirect(infos) {
  const levelAccess = infos.levelAccess;

  if (levelAccess === 1) {
    window.location.href = '../../system/curriculum-page.html';
  } else if (levelAccess === 2) {
    window.location.href = '../../../pages/system/company/index.html';
  } else if (levelAccess === 3) {
    window.location.href = '../../../pages/system/institute/index.html';
  }
}

