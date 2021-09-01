const form = document.querySelector('[data-form-job]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const companyId = sessionStorage.getItem("companyId");
    const name = event.target.querySelector("#job-name");
    const overview = event.target.querySelector("#overview");
    const journey = event.target.querySelector("#journey");
    const location = event.target.querySelector("#location");
    const salary = event.target.querySelector("#salary");

    const academicFormation = event.target.querySelector("#combo-academic");
    const knowledgeArea = event.target.querySelector("#combo-knowledge");

    const request =
    {
        name: name.value,
        overview: overview.value,
        journey: journey.value,
        location: location.value,
        salary: salary.value,
        company: {
            id: companyId
        },
        academicFormation: {
            id: academicFormation.value
        },
        knowledgeArea: {
            id: knowledgeArea.value
        }
    }

    createJob(JSON.stringify(request));
});