//// JavaScript for Lightbox Preview
function openPreview(element) {
    const lightbox = document.getElementById("lightbox");
    const previewImage = document.getElementById("preview-image");
    const previewVideo = document.getElementById("preview-video");

    // Display the lightbox
    lightbox.style.display = "flex";

    // Check if the clicked element is an image or video
    if (element.tagName === "IMG") {
        previewImage.src = element.src;
        previewImage.style.display = "block";
        previewVideo.style.display = "none";
    } else if (element.tagName === "VIDEO") {
        previewVideo.src = element.src;
        previewVideo.style.display = "block";
        previewImage.style.display = "none";
    }
}

function closePreview() {
    const lightbox = document.getElementById("lightbox");
    const previewImage = document.getElementById("preview-image");
    const previewVideo = document.getElementById("preview-video");

    // Hide the lightbox and reset sources
    lightbox.style.display = "none";
    previewImage.src = "";
    previewVideo.src = "";
}￼Enter
