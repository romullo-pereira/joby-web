const user =  JSON.parse(sessionStorage.getItem("user"));

const institute =  JSON.parse(sessionStorage.getItem("instituteId"));

window.onload = () => {
    getInstitute(user.id);
}