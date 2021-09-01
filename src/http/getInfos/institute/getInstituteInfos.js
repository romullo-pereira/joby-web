const getInstitute = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/institute/institute-user/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatInfos(response);
        }
    };

    http.send();
};
function concatInfos(response) {
    sessionStorage.setItem("instituteId", JSON.stringify(response["id"]));

    const name = document.querySelector("#institute-name");
    name.innerHTML = response.name;

    const infoName = document.querySelector("#info-name");
    infoName.innerHTML = response.name;

    const modality = document.querySelector("#info-modality");
    modality.innerHTML += response.teachingModality;

    const codInep = document.querySelector("#info-cod-inep");
    codInep.innerHTML += response.codInep;

    const email = document.querySelector("#info-email");
    email.innerHTML += response.information.user.email;

    const street = document.querySelector("#info-street");
    street.innerHTML += response.information.streetLocation;

    const district = document.querySelector("#info-district");
    district.innerHTML += response.information.district;

    const zipCode = document.querySelector("#info-zip-code");
    zipCode.innerHTML += response.information.zipCode;

    const city = document.querySelector("#info-city");
    city.innerHTML += response.information.city;

    getCountStudents(response.id);

    getCoursesSelect(response.id);
}

const getCountStudents = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/student-institute/count/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatCountStudent(response);
        }
    };

    http.send();
};

function concatCountStudent(response) {
    const count = document.querySelector("#count-student");
    count.innerHTML = response;
}