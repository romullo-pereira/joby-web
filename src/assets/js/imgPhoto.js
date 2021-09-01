'use strict';

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
  file.click();
});

function readImage() {
  if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById("imgPhoto").src = e.target.result;
      };       
      reader.readAsDataURL(reader.files[0]);
  }
}

