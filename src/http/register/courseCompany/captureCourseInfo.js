const formCourse = document.querySelector("#form-course");

formCourse.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.querySelector("#course-name");
    const start = event.target.querySelector("#start");
    const conclusion = event.target.querySelector("#conclusion");
    const dateStartConclusion = start.value+"/"+conclusion.value;
    const description = event.target.querySelector("#course-description");
    const time = event.target.querySelector("#select-time");
    const company = JSON.parse(sessionStorage.getItem("companyId"));

    const reqBody = JSON.stringify(
        {
            "name": name.value,
            "description": description.value,
            "dateStartConclusion": dateStartConclusion,
            "time": time.value,
            "company": {
                "id": company
            }
        }
    );

    createCourseCompany(reqBody);
});