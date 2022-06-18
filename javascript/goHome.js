window.onscroll = () => {
    scroll();
}

const scroll = () => {
    const backTop = document.getElementById('goHome');
    if (window.pageYOffset < 50) {
        backTop.style.display = 'none';
        backTop.style.animation = 'animation 2s';
    } else {
        backTop.style.display = 'block';
    }
}