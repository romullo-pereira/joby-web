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

    const inep = sessionStorage.getItem("inep");
    const instituteData = JSON.parse(sessionStorage.getItem("instituteData"));

    const reqBody = JSON.stringify(
        {
            "user": {
                "email": instituteData.email,
                "password": instituteData.password,
            },
            "information": {
                "streetLocation": adressData.streetLocation,
                "complement": adressData.complement,
                "zipCode": adressData.zipCode,
                "district": adressData.district,
                "city": adressData.city,
                "state": adressData.state,
                "country": "Brasil",
                "cellNumber": instituteData.cell,
                "phoneNumber": instituteData.phone
            },
            "institute" : {
                "name" : instituteData.name,
                "teachingModality" : instituteData.modality,
                "codInep" : inep
            }
        }

    );

    createInstitute(reqBody);
});
