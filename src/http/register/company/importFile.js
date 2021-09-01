const saveFIle = () => {
    const http = new XMLHttpRequest();

    const companyId = sessionStorage.getItem("companyId");

    http.open('GET', `${baseUrl}/company/reports/infos-students/${companyId}`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onloadstart = function () {
        alert("O arquivo está sendo processado!");
    };

    http.send();
};
