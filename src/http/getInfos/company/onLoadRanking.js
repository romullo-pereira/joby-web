const company =  JSON.parse(sessionStorage.getItem("companyId"));

window.onload = () => {
    getJobsByCompany(company);
}