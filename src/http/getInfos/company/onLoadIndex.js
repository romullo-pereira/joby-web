const user =  JSON.parse(sessionStorage.getItem("user"));

window.onload = () => {
    getCompany(user.id);
    getKnowleageAreas();
    getAcademicFormations();
}