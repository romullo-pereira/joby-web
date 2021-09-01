function concatNullValue() {
    const divMessage = document.querySelector("#init-job");
    divMessage.innerHTML = "Essa vaga não possui nenhuma aplicação";

    const box =  document.querySelector('#cards-student-like');
    box.innerHTML = '';
}

function activeItem(idJob) {
    const id = `job${idJob}`;

    const title = document.getElementsByTagName('H3');
    for (let i = 0; i < title.length; i++) {
        title.item(i).classList.remove('item-menu-active');
    }

    const item = document.querySelector(`#${id}`);
    item.classList.add('item-menu-active');
}

function createDate(date) {
    let birthday = new Date(date);

    return `${
        birthday.getDate() < 10 ? `0${birthday.getDate()}` : birthday.getDate()
    }/${
        birthday.getMonth() < 10 ? `0${birthday.getMonth()}` : birthday.getMonth()
    }/${birthday.getFullYear()}`;
}
