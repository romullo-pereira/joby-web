const createStudentInstitute = (reqBody) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/student-institute`);

    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
            cleanValues();
            alert("Aluno cadastrado com sucesso!");
        }
    };

    http.send(reqBody);
};
