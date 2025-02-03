function countdown() {
    const weddingDate = new Date("June 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${days} days to go!`;
}

countdown();
setInterval(countdown, 1000 * 60 * 60); // Update every hour
