function getCourses() {
  const http = new XMLHttpRequest();
  http.open('GET', `${baseUrl}/company-course`, true);

  http.setRequestHeader('Content-Type', 'application/json');

  http.onreadystatechange = function () {
    console.log(this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const response = JSON.parse(http.responseText);
      plotCourses(response);
    }
  };

  http.send();
}

function plotCourses(courses) {
  const box = document.querySelector('.box-two-cards');
  courses.map((course) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let bannerCard = document.createElement('div');
    bannerCard.setAttribute('class', 'banner-card');

    let boxImgCourse = document.createElement('div');
    boxImgCourse.setAttribute('class', 'box-img-course');

    let boxTitleCard = document.createElement('div');
    boxTitleCard.setAttribute('class', 'box-title-card');

    let title = document.createElement('h3');
    title.setAttribute('class', 'paragraph');
    let titleValue = document.createTextNode(course.name);
    title.appendChild(titleValue);

    let location = document.createElement('p');
    location.setAttribute('class', 'type type-card');
    let locationValue = document.createTextNode(
      `${course.company.information.district}, ${course.company.information.state}, ${course.company.information.country}`,
    );
    location.appendChild(locationValue);

    let boxDescCard = document.createElement('div');
    boxDescCard.setAttribute('class', 'box-desc-card');

    let titleDesc = document.createElement('h3');
    titleDesc.setAttribute('class', 'paragraph');
    let titleDescValue = document.createTextNode('Descrição: ');
    titleDesc.appendChild(titleDescValue);

    let desc = document.createElement('p');
    desc.setAttribute('class', 'paragraph');
    let descValue = document.createTextNode(course.description);
    desc.appendChild(descValue);

    let pseudo = document.createElement('div');
    pseudo.setAttribute('class', 'pseudo');

    boxTitleCard.appendChild(title);
    boxTitleCard.appendChild(location);

    boxDescCard.appendChild(titleDesc);
    boxDescCard.appendChild(desc);
    // boxDescCard.appendChild(pseudo);

    bannerCard.appendChild(boxImgCourse);
    bannerCard.appendChild(boxTitleCard);
    card.appendChild(bannerCard);
    card.appendChild(boxDescCard);

    box.appendChild(card);
  });
}

window.onload = () => {
  getCourses();
};
