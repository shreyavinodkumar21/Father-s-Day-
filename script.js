
const clickMeBtn = document.getElementById('clickMeBtn');
const popup = document.getElementById('popup');

clickMeBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

function closePopup() {
    popup.style.display = 'none';
}
