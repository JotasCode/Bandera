document.addEventListener('DOMContentLoaded', () => {
    const coatOfArms = document.getElementById('coatOfArms');
    const coatOfArmsModal = document.getElementById('coatOfArmsModal');
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    coatOfArms.addEventListener('click', () => {
        coatOfArmsModal.style.display = 'flex';
    });

    coatOfArmsModal.addEventListener('click', () => {
        coatOfArmsModal.style.display = 'none';
    });

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        if (body.classList.contains('night-mode')) {
            toggleButton.textContent = 'Cambiar a Día';
        } else {
            toggleButton.textContent = 'Cambiar a Noche';
        }
    });
});
});





