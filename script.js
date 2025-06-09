// Gallery Slideshow
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

function loadGallery() {
    const container = document.getElementById("gallery-container");
    galleryImages.forEach(img => {
        const slide = document.createElement("div");
        slide.className = "mySlides fade";
        slide.innerHTML = `<img src="${img}" alt="Gallery Image">`;
        container.appendChild(slide);
    });
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let index = 0;
    setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        index = (index + 1) % slides.length;
        slides[index].style.display = "block";
    }, 3000);
}

// Memory Game
const gameImages = [
    { year: "2018", image: "images/game/IMG-20250114-WA0005.jpg" },
    { year: "2023", image: "images/game/IMG-20250329-WA0032.jpg" },
    { year: "2019", image: "images/game/IMG-20250329-WA0033.jpg" },
    { year: "2022", image: "images/game/IMG-20250329-WA0034.jpg" },
    { year: "2018", image: "images/game/IMG-20250329-WA0035.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0036.jpg" },
    { year: "2023", image: "images/game/IMG-20250329-WA0037.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0038.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0039.jpg" },
    { year: "2018", image: "images/game/IMG-20250329-WA0040.jpg" },
    { year: "2011", image: "images/game/IMG-20250329-WA0041.jpg" },
    { year: "2010", image: "images/game/IMG-20250329-WA0042.jpg" },
    { year: "2011", image: "images/game/IMG-20250329-WA0043.jpg" },
    { year: "2014", image: "images/game/IMG-20250329-WA0044.jpg" },
    { year: "2010", image: "images/game/IMG-20250329-WA0045.jpg" },
    { year: "2010", image: "images/game/IMG-20250329-WA0046.jpg" },
    { year: "2014", image: "images/game/IMG-20250329-WA0047.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0048.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0049.jpg" },
    { year: "2017", image: "images/game/IMG-20250329-WA0050.jpg" },
    { year: "2010", image: "images/game/IMG-20250329-WA0051.jpg" },
    { year: "2011", image: "images/game/IMG-20250329-WA0052.jpg" },
];

function startGame() {
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    gameImages.forEach(img => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.backgroundImage = `url(${img.image})`;
        card.onclick = () => alert(`You guessed: ${img.year}`);
        board.appendChild(card);
    });
}

function surprise() {
    document.getElementById("surprise-message").classList.toggle("hidden");
}

window.onload = () => {
    loadGallery();
    startGame();
};
