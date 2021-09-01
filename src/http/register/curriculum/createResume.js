function converterImagem(input) {
    if(input.files && input.files[0]) {

        let file = input.files[0]

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

async function createResume() {
    const img = document.querySelector("#flImage");

    let file = await converterImagem(img);

    const company = document.querySelector("#company");
    const roleExperience = document.querySelector("#role");
    const timeExperience = document.querySelector("#time");
    const localization = document.querySelector("#location");
    const overview = document.querySelector("#resume-overview");

    const knowledge = document.querySelector("#combo-knowledge");
    const academic = document.querySelector("#combo-academic");

    const payload = {
        experiences : [{
            company : company.value,
            roleExperience : roleExperience.value,
            timeExperience : timeExperience.value,
            localization : localization.value,
            overview : overview.value
        }],
        image: file,
        imageType: img.files[0].type,
        academicFormation : {
            id : academic.value
        },
        knowledgeArea : {
            id : knowledge.value
        }
    };

    console.log(JSON.stringify(payload));
    sendResume(JSON.stringify(payload));
}