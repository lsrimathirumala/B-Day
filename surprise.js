// 🎵 Select audio element
const music = document.getElementById('birthday-music');

// 🎉 Automatically play the music on first interaction
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const pauseBtn = document.getElementById('pause-btn');

    // ✅ Start music immediately
    music.play().catch(error => console.log('Autoplay blocked:', error));

    // 🎵 Pause functionality
    pauseBtn.addEventListener('click', () => {
        if (!music.paused) {
            music.pause();
            pauseBtn.textContent = 'Music Paused';
        }
    });
});

// 🎈 Function to create confetti
function createConfetti() {
    for (let i = 0; i < 30; i++) {  // Fewer confetti but continuous
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 6000);  // Remove after 6 seconds
    }
}

// 🎈 Function to create balloons
function createBalloons() {
    for (let i = 0; i < 10; i++) {  // Fewer balloons but continuous
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 7000);  // Remove after 7 seconds
    }
}

// 🎆 Function to create fireworks
function createFireworks() {
    for (let i = 0; i < 15; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 2000);  // Remove after 2 seconds
    }
}

// 🎁 Continuous animation loop
function startContinuousCelebration() {
    setInterval(() => {
        createConfetti();
        createBalloons();
        createFireworks();
    }, 4000);  // Trigger animations every 4 seconds
}

// 🎉 Trigger celebration on page load
window.addEventListener('DOMContentLoaded', () => {
    startContinuousCelebration();
});
