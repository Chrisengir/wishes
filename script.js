function revealMessage() {
    document.querySelector('.birthday-box').classList.add('hidden');
    document.getElementById('birthday-message').classList.remove('hidden');
    const audio = new Audio('chime.mp3');
    audio.play();
}

