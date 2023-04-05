const popup = document.getElementById('subscribe-modal');
const closer = document.querySelector('.modal__close');

window.addEventListener('load', () => {
    if (!localStorage.modalActivity) {
        popup.classList.add('modal_active');
    }
});

closer.addEventListener('click', () => {
    localStorage.setItem('modalActivity', 'off');
    popup.classList.remove('modal_active');
});