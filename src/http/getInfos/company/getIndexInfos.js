const getCompany = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/company/company-user/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatIndexInfos(response);
        }
    };

    http.send();
};

function concatIndexInfos(response) {
    sessionStorage.setItem("companyId", JSON.stringify(response.id));

    const base = response.information;

    const name = document.querySelector("#name");
    name.innerHTML = response.name;

    const infoName = document.querySelector("#info-name");
    infoName.innerHTML = response.name;

    const sector = document.querySelector("#info-sector");
    sector.innerHTML = response.sector;

    const cnpj = document.querySelector("#info-cnpj");
    cnpj.innerHTML += response.cnpj;

    const email = document.querySelector("#info-email");
    email.innerHTML  = base.user.email;

    const street = document.querySelector("#info-street");
    street.innerHTML += base.streetLocation;

    const district = document.querySelector("#info-district");
    district.innerHTML += base.district;

    const zipCode = document.querySelector("#info-zip-code");
    zipCode.innerHTML += base.zipCode;

    const city = document.querySelector("#info-city");
    city.innerHTML += base.city;

    getCountJobs(response.id);
}

const getCountJobs = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/job/count/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatCountJobs(response);
        }
    };

    http.send();
};

function concatCountJobs(response) {
    const count = document.querySelector("#info-count-jobs");
    count.innerHTML = response;
}
