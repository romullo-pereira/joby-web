const saveDataFile = (request) => {
    const http = new XMLHttpRequest();
    http.open('POST', `${baseUrl}/institute/import-file`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onloadstart = function () {
        alert("O arquivo está sendo processado!");
    };

    http.send(request);
};


async function getFile() {
    const file = document.getElementById("flImage");

    let result = await createFile(file);

    const request = JSON.stringify(
        {
            "file": result,
            "fileType": file.files[0].type,
            "fileName": file.files[0].name
        }
    );

    saveDataFile(request);
}




