const institute =  JSON.parse(sessionStorage.getItem("instituteId"));

window.onload = () => {
    getInstituteCourse(institute);
}