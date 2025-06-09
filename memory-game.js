const gameImages = [
    { src: "./images/game/IMG-20250114-WA0005.jpg", year: "2018" },
    { src: "./images/game/IMG-20250329-WA0036.jpg", year: "2017" },
    { src: "./images/game/IMG-20250329-WA0032.jpg", year: "2023" },
    { src: "./images/game/IMG-20250329-WA0033.jpg", year: "2019" },
    { src: "./images/game/IMG-20250329-WA0034.jpg", year: "2022" },
    { src: "./images/game/IMG-20250329-WA0035.jpg", year: "2018" },
    { src: "./images/game/IMG-20250329-WA0037.jpg", year: "2023" },
    { src: "./images/game/IMG-20250329-WA0038.jpg", year: "2017" },
    { src: "./images/game/IMG-20250329-WA0039.jpg", year: "2017" },
    { src: "./images/game/IMG-20250329-WA0040.jpg", year: "2018" }
];

let currentImageIndex = 0;
let score = 0;

const imageContainer = document.getElementById("game-image");
const guessInput = document.getElementById("guess");
const feedback = document.getElementById("feedback");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");
const animationsContainer = document.getElementById("animations-container");

// ✅ Animation Functions
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    animationsContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 5 + 3}s`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

    animationsContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    animationsContainer.appendChild(firework);
    setTimeout(() => firework.remove(), 1500);
}

// ✅ Trigger animations on correct answer
function triggerAnimations() {
    createConfetti();
    createBalloon();
    createFirework();
}

// ✅ Load the Current Image
function loadImage() {
    if (currentImageIndex < gameImages.length) {
        const image = gameImages[currentImageIndex];

        imageContainer.style.display = "none";
        imageContainer.src = image.src;

        imageContainer.onload = () => {
            imageContainer.style.display = "block";
        };

        imageContainer.onerror = () => {
            console.error(`Failed to load image: ${image.src}`);
            imageContainer.style.display = "none";
        };

        guessInput.value = "";
        feedback.textContent = "";
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        // ✅ Display Final Score and Restart Option
        displayFinalScore();
    }
}

// ✅ Check the User's Guess and Increment Score Properly
function checkGuess() {
    const userGuess = guessInput.value.trim();
    const correctYear = gameImages[currentImageIndex].year;

    if (userGuess === correctYear) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";

        // ✅ Increment the score only on correct guesses
        score++; 
        triggerAnimations();
    } else {
        feedback.textContent = `❌ Incorrect. It was ${correctYear}.`;
        feedback.style.color = "red";
    }

    scoreDisplay.textContent = `Score: ${score}`;
}

// ✅ Go to the Next Image
function nextImage() {
    currentImageIndex++;

    if (currentImageIndex < gameImages.length) {
        loadImage();
    } else {
        displayFinalScore();
    }
}

// ✅ Display Final Score with Success Message
function displayFinalScore() {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `
        <h2>🎯 Game Over!</h2>
        <p>Your final score is: <strong>${score}</strong> out of ${gameImages.length}</p>
        <p>🎉 Well done! You've guessed all the images!</p>
        <button onclick="restartGame()">🔄 Play Again</button>
    `;
}

// ✅ Restart the Game
function restartGame() {
    currentImageIndex = 0;
    score = 0;
    loadImage();
}

// ✅ Initialize Game and Attach Event Listeners
function initGame() {
    loadImage();
    
    // Attach event listeners each time the game loads
    checkButton.addEventListener("click", checkGuess);
    nextButton.addEventListener("click", nextImage);
}

initGame();
