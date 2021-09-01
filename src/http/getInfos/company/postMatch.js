const createMatch = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/favorite-job/matches`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {

        }
    };

    http.send(reqBody);
};


function getMatchValues(idStudent, idJob) {
    changeHeartColor(idStudent);

    const reqBody = JSON.stringify(
        {
            "job": {
                "id": idJob
            },
            "student": {
                "id": idStudent
            }
        }
    );

    createMatch(reqBody);
}

function changeHeartColor(idStudent) {
    const heartId = `heart${idStudent}`;

    document.querySelector(`#${heartId}`).style.color = "#d52525";
}
