// function getInfos() {
//     const user = JSON.parse(sessionStorage.getItem("user"));
    
//     const http = new XMLHttpRequest();
//     http.open('GET', `${baseUrl}/student/user/${user.id}`, true);
  
//     http.setRequestHeader('Content-Type', 'application/json');
  
//     http.onreadystatechange = function () {
//         console.log(this.status);
//       if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//             const response = JSON.parse(http.responseText);
//             console.log(response);
//             plotInfos(response);
            
//       }
//     };
//     http.send();
// }

function plotInfos(infos) {
    console.log(infos);

    sessionStorage.setItem("student", JSON.stringify(infos));
    const name = document.querySelector("#nameStu");
    const nameT = document.querySelector(".span-title");

    name.innerHTML = infos.name;
    nameT.innerHTML = infos.name;

    const names = document.querySelectorAll("#name");

    Array.prototype.slice.call(names).map((name) => {
        name.innerHTML = infos.name;
    })

    const email = document.querySelector("#email");

    email.innerHTML = infos.information.user.email;

    const nameInstitute = document.querySelector("#name-institution");

    nameInstitute.innerHTML = infos.studentInstitute.courseInstitute.institute.name;

    const nameCourse = document.querySelector("#courseName");

    nameCourse.innerHTML = infos.studentInstitute.courseInstitute.name;

    const img = document.querySelector(".img-profile");
    img.src = infos.information.imageContent;
}

function getCompanies() {
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/company`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotCompanies(response);
            
      }
    };
    http.send();
}


function getCountFavoriteJobs() {
    const user = JSON.parse(sessionStorage.getItem("student"));
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/favorite-job/count/${user.id}`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotCount(response);
      }else if (this.readyState === XMLHttpRequest.DONE && this.status === 404) {
        plotCount(0);
      }
    };
    http.send();
}


function plotCompanies(companies) {
    const glide = document.querySelector(".glide__slides");
    console.log(companies);
    companies.map(company => {
        let image = "../../assets/img/logo-paygo.jpg";
        if(company.information.imageContent != null) {
            image = company.information.imageContent ;
        }

        let slide = document.createElement('li');
        slide.setAttribute('class', "glide__slide");
        slide.setAttribute('id', company.name);

        let img = document.createElement('img');
        img.setAttribute('src', image);

        slide.appendChild(img);
        glide.appendChild(slide);
    });

    const config = {
        type: 'carousel',
        startAt: 0,
        perView: 4
      }
      new Glide('.glide', config).mount()
}


function plotCount(cont) {
    document.getElementById("countCurtidas").innerHTML = cont;
}


function sendDiscordId(discordId) {

    const user = JSON.parse(sessionStorage.getItem("student"));
    const http = new XMLHttpRequest();

    console.log(baseUrl);

    http.open('PUT', `${baseUrl}/student/${user.id}/${discordId}`, true);
    
    http.setRequestHeader('Content-Type', 'application/json');
    
    http.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            window.location.reload();
        }
    };
    http.send(JSON.stringify(user));
    
}

window.onload = () => {
    authenticate();
    plotInfos(JSON.parse(sessionStorage.getItem('student')));
    getCompanies();
    getCountFavoriteJobs();
    document.getElementById('btnSend').addEventListener('click', e => {
        e.preventDefault();
        const discordId = (document.getElementById('discId').value);
        sendDiscordId(discordId.toString());
    })
}

