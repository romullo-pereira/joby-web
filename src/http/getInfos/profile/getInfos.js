// function getUser() {
//     const user = JSON.parse(sessionStorage.getItem("user"));
    
//     const http = new XMLHttpRequest();
//     http.open('GET', `${baseUrl}/student/user/${user.id}`, true);
  
//     http.setRequestHeader('Content-Type', 'application/json');
  
//     http.onreadystatechange = function () {
//         console.log(this.status);
//       if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//             const response = JSON.parse(http.responseText);
//             plotInfos(response);
            
//       }
//     };

//     http.send();
// }

function getExperiences() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/experiences/student/user/${user.id}`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotExperiences(response);
            
      }
    };

    http.send();
}

function plotInfos(user) {
    let date = new Date(user.birthDate);
    console.log(user);

    document.getElementById("name").innerHTML = user.name;

    const courseNames = document.querySelectorAll("#courseName");
    Array.prototype.slice.call(courseNames).map((name) => {
        
        name.innerHTML = user.studentInstitute.courseInstitute.name;
    });
    document.getElementById("email").innerHTML = user.information.user.email;
    document.getElementById("city").innerHTML = user.information.city;
    document.getElementById("uf").innerHTML = user.information.state;
    document.getElementById("country").innerHTML = user.information.country;
    document.getElementById("birthDate").innerHTML = `${date.getDate() < 10 ? `0${date.getDate() }` : date.getDate()}/${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}/${date.getFullYear()}`;
    document.getElementById("phone").innerHTML = user.information.cellNumber;
    document.getElementById("institute").innerHTML = user.studentInstitute.courseInstitute.institute.name;
    document.getElementById("img-container").src = user.information.imageContent;
}   


function plotExperiences(experiences) {

    let experience = experiences.shift();

    document.getElementById("role").innerHTML = experience.roleExperience;
    document.getElementById("time").innerHTML = experience.timeExperience;
    document.getElementById("company").innerHTML = experience.company;
    document.getElementById("location").innerHTML = experience.localization;
    document.getElementById("info-overview").innerHTML = experience.overview
}

window.onload = () => {
    plotInfos(JSON.parse(sessionStorage.getItem('student')));
    getExperiences();
    const colorProfile = document.querySelector('.color-profile');
    const color = Cookies.get('color1');
    const colorSession = sessionStorage.getItem('color');
    console.log(colorProfile);
    console.log(color);
    // colorProfile.id = color == undefined ? 'color1' : color;
    colorProfile.id = colorSession == undefined ? 'color1' : colorSession;
}