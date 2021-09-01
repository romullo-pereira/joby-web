const getJobsByCompany = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/job/jobs-company/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatJobsInfos(response);
        }
    };

    http.send();
};
