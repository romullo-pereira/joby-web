const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const cep = event.target.querySelector('[data-cep]');
    const city = event.target.querySelector('[data-city]');
    const district = event.target.querySelector('[data-district]');
    const streetLocation = event.target.querySelector('[data-streetLocation]');
    const complement = event.target.querySelector('[data-complement]');
    const state = event.target.querySelector('[data-state]');
    const number = event.target.querySelector('[data-number]');


    const adressData =
    {
        "streetLocation": streetLocation.value,
        "complement": complement.value,
        "zipCode": cep.value,
        "district": district.value,
        "city": city.value,
        "state": state.value
    }

    const studentInstitute = JSON.parse(sessionStorage.getItem("studentInstitute"));
    const personData = JSON.parse(sessionStorage.getItem("personData"));

    const reqBody = JSON.stringify(
        {
            "user": {
                "email": personData.email,
                "password": personData.password,
            },
            "information": {
                "streetLocation": adressData.streetLocation,
                "complement": adressData.complement,
                "zipCode": adressData.zipCode,
                "district": adressData.district,
                "city": adressData.city,
                "state": adressData.state,
                "country": "Brasil",
                "cellNumber": personData.cellNumber,
                "phoneNumber": personData.phoneNumber
            },
            "student": {
                "disabledPerson": false,
                "name": personData.name,
                "birthDate": personData.birth,
                "gender": personData.gender,
                "matrialStatus": personData.matrialStatus,
            },
            "studentInstitute" : studentInstitute
        }
    );

    createStudent(reqBody)
});
