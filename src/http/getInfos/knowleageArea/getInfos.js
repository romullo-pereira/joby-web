function getKnowleageAreas() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/knowledge-area`, true);
  
    http.setRequestHeader('Content-Type', 'application/json');
  
    http.onreadystatechange = function () {
        console.log(this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotKnowleageArea(response);
            
      }
    };
    http.send();
}

function plotKnowleageArea(infos) {
    const combo = document.querySelector("#combo-knowledge");

    infos.map((info) => {
        let opt = document.createElement("option");
        opt.setAttribute("value", info.id);

        let t = document.createTextNode(info.name);
        opt.appendChild(t);

        combo.appendChild(opt);
    })
}