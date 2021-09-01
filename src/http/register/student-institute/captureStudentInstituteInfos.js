const form = document.querySelector("#form-student-institute");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const cpf = event.target.querySelector("#data-cpf");
    const course = event.target.querySelector("#select-inst-courses");

    const studentInstitute = JSON.stringify({
        "cpf": cpf.value,
        "courseInstitute": {
            "id": course.value
        }
    });

    createStudentInstitute(studentInstitute);
});