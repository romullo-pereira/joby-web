function getResume() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/student/user/${user.id}`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            
            sessionStorage.setItem("student-id", response.id);
            sessionStorage.setItem("student", JSON.stringify(response));
            if (!(response.academicFormation == null && response.knowledgeArea == null)) {
                window.location.href = './index.html';
            }else {
                plotInfos(response);
            }
      }
    };

    http.send();
}


function plotInfos(user) {
    let date = new Date(user.birthDate);

    document.getElementById("name").innerHTML = user.name;
    document.getElementById("email").innerHTML = user.information.user.email;
    document.getElementById("city").innerHTML = user.information.city;
    document.getElementById("state").innerHTML = user.information.state;
    document.getElementById("country").innerHTML = user.information.country;
    document.getElementById("birthDate").innerHTML = `${date.getDate() < 10 ? `0${date.getDate() }` : date.getDate()}/${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}/${date.getFullYear()}`;
    console.log(user);
}   

window.onload = () => {
    getResume();
    getKnowleageAreas();
    getAcademicFormations();
}