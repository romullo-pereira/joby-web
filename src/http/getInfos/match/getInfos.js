const carrosel = new Glide('.glide',{
    type: 'carousel', 
    startAt: 0, 
    perView: 3,
    focusAt: 'center' 
});

let dataJobs;
const user = JSON.parse(sessionStorage.getItem("student"));

function getInfos() {

    const knowledgeArea = user.knowledgeArea.id;
    const academicFormation = user.academicFormation.id;


    const http = new XMLHttpRequest();
    http.open('GET', `${baseUrl}/job/carousel/${knowledgeArea}/${academicFormation}`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(http.responseText);
            plotCarrousel(response);
            dataJobs = response;

        }
    };
    http.send();
}

function activeVerMais(boxDesc, descJob, btnVerMais, btnVerMenos) {

    if (!boxDesc.classList.contains('box-desc-mais')) {
      console.log('entrou');
      boxDesc.classList.add('box-desc-mais');
      descJob.classList.add('active');
      btnVerMais.classList.add('inative');
      btnVerMenos.classList.add('active');
    }
}

function activeVerMenos(boxDesc, descJob, btnVerMais, btnVerMenos) {

    if (boxDesc.classList.contains('box-desc-mais')) {
        boxDesc.classList.remove('box-desc-mais');
        descJob.classList.remove('active');
        btnVerMais.classList.remove('inative');
        btnVerMenos.classList.remove('active');
    }
}

 


function plotCarrousel(jobs) {
    console.log(jobs);

    const glide = document.querySelector(".glide__slides");
    jobs.map(job => {

        let slide = document.createElement('li');
        slide.setAttribute('class', "glide__slide");
        slide.setAttribute('id', job.id);

        let div1 = document.createElement("div");
        let boxDesc = document.createElement("div");
        boxDesc.setAttribute('class', 'box-desc');


        let div2 = document.createElement("div");

        let location = document.createElement("location");
        location.setAttribute('class', 'location');

        let sector = document.createElement("p");
        let sectorValue = document.createTextNode(job.company.sector);

        let adress = document.createElement("p");
        let adressValue = document.createTextNode(`${job.company.information.district}, ${job.company.information.state}`);

        let title = document.createElement('div');
        title.setAttribute('class', 'title-match');

        let company = document.createElement('h3');
        let companyValue = document.createTextNode(job.name);

        let nameJob = document.createElement('p');
        let nameJobValue = document.createTextNode(job.company.name);

        let buttons = document.createElement('div');
        buttons.setAttribute('class', 'buttons');

        let divDesc = document.createElement('div');
        divDesc.setAttribute('class', 'desc');

        let titleDesc = document.createElement('h3');
        let titleDescValue = document.createTextNode('Descrição da vaga');

        let desc = document.createElement('p');
        let descValue = document.createTextNode(job.overview);
        
        let bt = document.createElement('button');
        bt.setAttribute('class', 'btn-ver-mais');
        let btValue = document.createTextNode('Ver mais');

        let btMenos = document.createElement('button');
        btMenos.setAttribute('class', 'btn-ver-menos');
        btMenos.style.display = 'none';
        let btMenosValue = document.createTextNode('Ver menos');

        sector.appendChild(sectorValue);
        adress.appendChild(adressValue);

        location.appendChild(sector);
        location.appendChild(adress);

        company.appendChild(companyValue);
        nameJob.appendChild(nameJobValue);

        title.appendChild(company);
        title.appendChild(nameJob);

        titleDesc.appendChild(titleDescValue);
        desc.appendChild(descValue);

        divDesc.appendChild(titleDesc);
        divDesc.appendChild(desc);

        bt.appendChild(btValue);
        btMenos.appendChild(btMenosValue);

        buttons.appendChild(bt);
        buttons.appendChild(btMenos);

        
        div2.appendChild(location);
        div2.appendChild(title);
        div2.appendChild(divDesc);

        boxDesc.appendChild(div2);
        boxDesc.appendChild(buttons);
        bt.addEventListener('click', () => {
            activeVerMais(boxDesc, divDesc, bt, btMenos);
        });

        btMenos.addEventListener('click', () => {
            activeVerMenos(boxDesc, divDesc, bt, btMenos);
        });

        div1.appendChild(boxDesc);
        slide.appendChild(div1);
        glide.appendChild(slide);
    })

    carrosel.mount();
}

function like(job) {

    const payload = {
        job : {
            id: job.id
        },
        student : {
            id: user.id
        }
    }

    const http = new XMLHttpRequest();

    http.open('POST', `${baseUrl}/favorite-job`, true);

    http.setRequestHeader('Content-Type', 'application/json');

    http.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
            alert('Vaga Curtida!');

        }
    };
    http.send(JSON.stringify(payload));
}



window.onload = () => {
    getInfos();
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        like(dataJobs[carrosel.index]);
    });
}