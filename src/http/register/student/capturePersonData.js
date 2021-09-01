const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.querySelector('[data-email]');
    const password = event.target.querySelector('[data-password]');
    const name = event.target.querySelector('[data-name]');
    const birth = event.target.querySelector('[data-birth]');
    const gender = event.target.querySelector('[data-gender]');
    const matrialStatus = event.target.querySelector('[data-matrialStatus]');
    const phone = event.target.querySelector('[data-phone]');
    const cell = event.target.querySelector('[data-cell]');

    const personData = JSON.stringify(
        {

            "email": email.value,
            "password": password.value,
            "name": name.value,
            "gender" : gender.value,
            "birth": birth.value,
            "matrialStatus": matrialStatus.value,
            "phoneNumber": phone.value,
            "cellNumber": cell.value
        }
    );

    sessionStorage.setItem("personData", personData);

    window.location.href = "./user-registration-page-tree.html"
});
