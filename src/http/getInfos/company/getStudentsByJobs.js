const getStudentsByJobs = (id) => {

  activeItem(id);

  const http = new XMLHttpRequest();

  http.open('GET', `${baseUrl}/favorite-job/applications/${id}`, true);

  http.onreadystatechange = function () {
     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const response = JSON.parse(http.responseText);
      concatStudentsInfos(response);
    } else if(this.readyState === XMLHttpRequest.DONE && this.status === 204){
      concatNullValue();
    }
  };

  http.send();
};

function getExperiences(id) {
  const http = new XMLHttpRequest();

  http.open('GET', `${baseUrl}/experiences/student/${id}`, true);

  http.setRequestHeader('Content-Type', 'application/json');

  http.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const response = JSON.parse(http.responseText);
      concatExperiences(response, id);
    }
  };

  http.send();
}