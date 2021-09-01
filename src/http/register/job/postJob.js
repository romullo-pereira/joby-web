function createJob(request) {

    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/job`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
            alert("Vaga cadastrada com sucesso!");
            cleanValuesJob();
        }
    };

    http.send(request);
}