const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.querySelector('[data-email]');
    const password = event.target.querySelector('[data-password]');
    const name = event.target.querySelector('[data-name]');
    const phone = event.target.querySelector('[data-phone]');
    const cell = event.target.querySelector('[data-cell]');
    const modality = event.target.querySelector('[data-modality]');


    const instituteData = JSON.stringify(
        {
            "email": email.value,
            "password": password.value,
            "name": name.value,
            "phone" : phone.value,
            "cell" : cell.value,
            "modality" : modality.value
        }
    );

    sessionStorage.setItem("instituteData", instituteData);
    window.location.href = "./institution-registration-page-tree.html";
});
