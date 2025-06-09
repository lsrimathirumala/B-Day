// Gallery Images Array
const galleryImages = [
    "images/gallery/IMG_4244.JPG",
    "images/gallery/IMG_4325.JPG",
    "images/gallery/IMG_4424.JPG",
    "images/gallery/IMG_4437.JPG",
    "images/gallery/IMG_4542.JPG",
    "images/gallery/IMG_4683.JPG",
    "images/gallery/IMG_4699.JPG",
    "images/gallery/Vargal-8.jpg"
];

const slideshowContainer = document.getElementById("slideshow-container");

function createGallery() {
    if (!slideshowContainer) {
        console.error("Slideshow container not found!");
        return;
    }

    galleryImages.forEach((imageSrc, index) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Gallery Image ${index + 1}`;
        img.classList.add("gallery-img");
        slideshowContainer.appendChild(img);
    });

    startSlideshow();
}

function startSlideshow() {
    const images = document.querySelectorAll("#slideshow-container img");
    let currentIndex = 0;

    images.forEach(img => img.style.display = "none");
    images[currentIndex].style.display = "block";

    setInterval(() => {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 3000);  // Change image every 3 seconds
}

window.addEventListener("DOMContentLoaded", createGallery);
