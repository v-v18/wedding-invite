document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.querySelector('.section').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
