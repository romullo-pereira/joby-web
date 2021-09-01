function createFile(input) {
    if(input.files && input.files[0]) {

        let file = input.files[0]

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}