const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        resetToggle();
        toggle.parentNode.classList.toggle('active');
    });
});

function resetToggle() {
    toggles.forEach((toggle) => {
        toggle.parentNode.classList.remove('active');
    });
};
