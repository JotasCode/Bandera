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

    // Nuevo código para el botón
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        if (body.classList.contains('night-mode')) {
            toggleButton.textContent = 'Día';
        } else {
            toggleButton.textContent = 'Noche';
        }
    });
});



