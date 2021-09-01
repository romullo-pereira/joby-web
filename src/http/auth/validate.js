
function authenticate() {
    const user = sessionStorage.getItem('user');
    if(user == undefined || user == null) {
        window.location = "../forms/login/login-page.html";
    }
}

function logout() {
        sessionStorage.clear();
        window.location.href = "../forms/login/login-page.html";
}

function getProfileImage() {
    const student = JSON.parse(sessionStorage.getItem('student'));
    const imgNav = document.querySelector(".profile-menu");
    console.log(imgNav);
    imgNav.src = student.information.imageContent;
}

getProfileImage();

    