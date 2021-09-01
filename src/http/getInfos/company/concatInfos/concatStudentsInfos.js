function concatStudentsInfos(response) {
    document.getElementById('cards-student-like').innerHTML = '';

    document.getElementById('init-job').innerHTML = '';

    response.map((match) => {

      
        let studentId = match.student.id;
        let experienceId = `info-experience${studentId}`;
        let heartId = `heart${studentId}`;
        let likeId = `like${studentId}`;
        let birthday = createDate(match.student.birthDate);

        document.getElementById('cards-student-like').innerHTML += `
            <div class="card-student-like">
                <div class="info-student">
                  <p class="titles-infos">Informações do aluno</p>
                  <div class="photo-name">
                    <div class="photo">
                    <img src="${match.student.information.imageContent}" alt="Imagem de perfil">                    </div>
                    <div class="name-like">
                      <div class="name">
                        <p>Nome</p>
                        <h3>${match.student.name}</h3>
                      </div>
                        <div id="${likeId}" onclick="getMatchValues(${studentId}, ${match.job.id})">
                            <span class="material-icons" id="${heartId}">
                                        favorite
                            </span>                    
                       </div>
                    </div>
                  </div>
                </div>
                <div class="pseudo"></div>
                <div class="matrialStatus">
                  <div class="status">
                    <p class="titles-infos">Status civil</p>
                    <h3>${match.student.matrialStatus}</h3>
                  </div>
                  <div class="status">
                    <p class="titles-infos">Aniversário</p>
                    <h3>${birthday}</h3>
                  </div>
                  <div class="status">
                    <p class="titles-infos">Email</p>
                    <h3>${match.student.information.user.email}</h3>
                  </div>
                  <div class="status">
                    <p class="titles-infos">Telefone</p>
                    <h3>${match.student.information.cellNumber}</h3>
                  </div>
                  <div class="status">
                    <p class="titles-infos">Curso</p>
                    <h3>${match.student.studentInstitute.courseInstitute.name}</h3>
                  </div>
                  <div class="status">
                    <p class="titles-infos">Instituição</p>
                    <h3>${match.student.studentInstitute.courseInstitute.institute.name}</h3>
                  </div>
                </div>
                <div class="pseudo"></div>
                <div class="exp-student" id="${experienceId}">
                  <p class="titles-infos">Experiências</p>
                </div>
                <div class="pseudo"></div>
                <div class="name-job">
                  <div class="status">
                    <p class="titles-infos">Nome da vaga</p>
                    <h3>${response[0].job.name}</h3>
                  </div>
                  <div class="icon-name-job">
                    <span class="material-icons">work</span>
                  </div>
                </div>
              </div>`;

        getExperiences(studentId);

        verifyMatch(match);
    });
}

function concatExperiences(response, id) {
    for (let i = 0; i < 2; i++) {
        document.getElementById(`info-experience${id}`).innerHTML += `
            <div class="names-exp-company">
                <span class="material-icons">done</span>
                <div class="names-func">
                    <p class="titles-infos" id="info-company-name">${response[i].company}</p>
                    <h3 id="info-role">${response[i].roleExperience}</h3>
                </div>
            </div>`;
    }
}