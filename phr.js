// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var downloadBtn = document.getElementById("downloadBtn");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        downloadBtn.href = this.src; // Set the download link to the image source
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
