function sendResume(payload) {
    const studentId = sessionStorage.getItem("student-id");
    console.log(JSON.parse(payload));
    const http = new XMLHttpRequest();
    http.open('PUT', `${baseUrl}/student/resume/${studentId}`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            window.location.href = "../system/index.html";
            
      }
    };

    http.send(payload);
}