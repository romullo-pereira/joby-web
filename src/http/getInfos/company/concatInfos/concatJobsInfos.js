function concatJobsInfos(response) {
    const load = document.querySelector("#load-jobs");
    load.innerHTML = "";

    response.map((job) => {
        const idJob = `job${job.id}`;

        document.getElementById("card-office").innerHTML += `
             <div class="infos-card-office">
                <div class="icon-office">
                  <span class="material-icons iconSub">school</span>
                </div>
                <div class="desc-office" onclick="getStudentsByJobs(${job.id})">
                  <p>${job.journey}</p>
                  <h3 id="${idJob}">${job.name}</h3>
                </div>
              </div>
             <div class="pseudo"></div>`;
    });
}
