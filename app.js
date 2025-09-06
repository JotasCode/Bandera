document.addEventListener('DOMContentLoaded', () => {
    const coatOfArms = document.getElementById('coatOfArms');
    const coatOfArmsModal = document.getElementById('coatOfArmsModal');

    coatOfArms.addEventListener('click', () => {
        coatOfArmsModal.style.display = 'flex';
    });

    coatOfArmsModal.addEventListener('click', () => {
        coatOfArmsModal.style.display = 'none';
    });
});