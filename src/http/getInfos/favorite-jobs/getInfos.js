function getFavoriteJobs() {
    const user = JSON.parse(sessionStorage.getItem("student"));
    
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/favorite-job/likes/student/${user.id}`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotJobs(response);
            
      }
    };

    http.send();
}

function createCard(job) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card-saved-places');

    let box = document.createElement('div');
    box.setAttribute('class', 'box-img-card');

    let boxImgCard = document.createElement('div');
    boxImgCard.setAttribute('class', 'img-card-saved-places');
    
    let titleSubCard = document.createElement('div');
    titleSubCard.setAttribute('class', 'title-sub-card');

    let nameJob = document.createElement('h3');
    nameJob.setAttribute('class', 'paragraph');
    let valueNameJob = document.createTextNode(job.job.name);
    nameJob.appendChild(valueNameJob);

    let nameCompany = document.createElement('h3');
    nameCompany.setAttribute('class', 'paragraph desc-title-sub');

    let valueNameCompany = document.createTextNode(job.job.company.name);
    nameCompany.appendChild(valueNameCompany);

    let location = document.createElement('div');
    location.setAttribute('class', 'location-card');

    let pLocation = document.createElement('p');
    pLocation.setAttribute('class', 'paragraph desc-title-sub desc-location');
    
    let locationValue = document.createTextNode(`${job.job.company.information.district}, ${job.job.company.information.state}, ${job.job.company.information.country}`);
    pLocation.appendChild(locationValue);

    let divDesc = document.createElement('div');
    divDesc.setAttribute('class', 'desc-card');

    let desc = document.createElement('p');
    desc.setAttribute('class', 'paragraph');
    let descValue = document.createTextNode(job.job.overview);
    let descValueMock = document.createTextNode(`${job.job.overview}`);
    desc.appendChild(descValueMock);

    let pseudo = document.createElement('div');
    pseudo.setAttribute('class', 'pseudo');

    let boxDate = document.createElement('box-date');
    boxDate.setAttribute('class', 'box-date');

    let pDate = document.createElement('p');
    pDate.setAttribute('class', 'paragraph desc-title-sub desc-location');
    let pDateValue = document.createTextNode(job.applicationDate);
    pDate.appendChild(pDateValue);

    let iconFav = document.createElement('span');
    iconFav.setAttribute('class', 'material-icons icon-card-saved');
    let iconName = document.createTextNode('favorite');
    iconFav.appendChild(iconName);


    box.appendChild(boxImgCard);
    box.appendChild(titleSubCard);

    titleSubCard.appendChild(nameJob);
    titleSubCard.appendChild(nameCompany);

    location.appendChild(pLocation);

    divDesc.appendChild(desc);

    boxDate.appendChild(pDate);
    boxDate.appendChild(iconFav);

    card.appendChild(box);
    card.appendChild(location);
    card.appendChild(divDesc);
    card.appendChild(pseudo);
    card.appendChild(boxDate);



    return card;
}

function plotJobs(jobs) {
    console.log(jobs);
    const div = document.querySelector(".box-two-cards");
    jobs.map(job => {
        let card = createCard(job);
        div.appendChild(card);
    });
}

window.onload = () => {
    getFavoriteJobs();
}