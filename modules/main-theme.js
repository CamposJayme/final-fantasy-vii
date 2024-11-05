export default function initTheme() {
    const audioIcon = document.querySelector('.bi');

    audioIcon.addEventListener('click', function() {
        audioIcon.classList.toggle('active')
        const audioSong = document.querySelector('audio')
        if(audioIcon.classList.contains('active')) {
            audioSong.currentTime = 0.2
            audioSong.play()
        } else {
            audioSong.pause();
        }
    });
}
