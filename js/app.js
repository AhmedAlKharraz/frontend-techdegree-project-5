baguetteBox.run('.gallery');

function myFunction() {
    // Declare variables
    var input, filter, imageContainer, img, i;
    input = document.getElementById('myInput');
    filter = input.value.toLowerCase();
    imageContainer = document.getElementById("gallery-grid");
    img = imageContainer.querySelectorAll('.picture');

    // Loop through all img items, and hide those who don't match the search query
    for (i = 0; i < img.length; i++) {
        txtValue = img[i].getElementsByTagName("img")[0].alt;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            img[i].style.display = "";
        } else {
            img[i].style.display = "none";
        }
    }
}