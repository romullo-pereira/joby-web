const downloadFile = () => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/company/reports/download/csv/CandidatosInfos`, true);

    console.log(http.response);

    http.send();
};
