window.onscroll = () => {
    scroll();
}

const scroll = () => {
    const backTop = document.getElementById('goHome');
    backTop.addEventListener('click', () => {
        smoothScrollTo(0, 0, 500);
    });
    if (window.pageYOffset < 50) {
        backTop.style.display = 'none';
        backTop.style.animation = 'animation 2s';
    } else {
        backTop.style.display = 'block';
    }
}
