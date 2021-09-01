const createCourseInstitute = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/institute-course`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
            alert("Curso cadastrado com sucesso!");
            cleanValuesCourse();
        }
    };

    http.send(reqBody);
};