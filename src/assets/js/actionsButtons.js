function cleanValues() {
    const cpf = document.querySelector("#data-cpf");
    cpf.value = "";
}

function cleanValuesCourse() {
    const name = document.querySelector("#course-name");
    name.value = "";

    const start = document.querySelector("#start");
    start.value = "";

    const conclusion = document.querySelector("#conclusion");
    conclusion.value = "";

    const description = document.querySelector("#course-description");
    description.value = "";

    const time = document.querySelector("#select-time");
    time.value = "";
}

function cleanValuesJob() {
    const name = document.querySelector("#job-name");
    name.value = "";

    const overview = document.querySelector("#overview");
    overview.value = "";

    const journey = document.querySelector("#journey");
    journey.value = "";

    const location = document.querySelector("#location");
    location.value = "";

    const salary = document.querySelector("#salary");
    salary.value = "";
}


function verifyMatch(response) {
    const match = response.match;
    const heartId = `heart${response.student.id}`;
    const likeId = `like${response.student.id}`;

    if (match) {
        document.querySelector(`#${heartId}`).style.color = "#d52525";
        document.querySelector(`#${likeId}`).style.pointerEvents = 'none';
    }
}
