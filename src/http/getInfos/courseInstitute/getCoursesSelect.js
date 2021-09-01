const getCoursesSelect = (id) => {
    const http = new XMLHttpRequest();

    http.open('GET', `${baseUrl}/institute-course/courses-institute/${id}`, true);

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            concatCourseNames(response);
        }
    };

    http.send();
};

function concatCourseNames(response) {
    for (let i = 0; i < response.length; i++) {
        document.getElementById("select-inst-courses").innerHTML += `<option value='${response[i].id}'>${response[i].name}</option>`;
    }
}
