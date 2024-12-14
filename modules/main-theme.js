export default function initTheme() {
    const audioIcon = document.querySelector('.bi');
    const mainTheme = new Audio('../media/prelude-theme.mp3');

    mainTheme.loop = true;
    audioIcon.addEventListener('click', function() {
        if (mainTheme.paused) {
            mainTheme.play();
            audioIcon.classList.add('active');
        } else {
            mainTheme.pause();
            audioIcon.classList.remove('active');
        }
    });
}
