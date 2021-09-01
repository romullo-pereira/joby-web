function getAcademicFormations() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/academic-formation`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotAcademicFormation(response);
            
      }
    };
    http.send();
}

function plotAcademicFormation(infos) {
    const combo = document.querySelector("#combo-academic");

    infos.map((info) => {
        let opt = document.createElement("option");
        opt.setAttribute("value", info.id);

        let t = document.createTextNode(info.name);
        opt.appendChild(t);

        combo.appendChild(opt);
    })
}