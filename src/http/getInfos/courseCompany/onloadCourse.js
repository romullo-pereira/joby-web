const company =  JSON.parse(sessionStorage.getItem("companyId"));

window.onload = () => {
    getCompanyCourses(company);
}