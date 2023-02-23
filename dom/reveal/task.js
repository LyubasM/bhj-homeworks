const div = document.querySelectorAll('.reveal')

const showBlock = function() {
     for (el of div) {
        let position = el.getBoundingClientRect();
        (position.bottom > 0 && position.top < window.innerHeight) ? el.classList.add('reveal_active') : el.classList.remove('reveal_active');
    }
}

window.addEventListener('scroll', showBlock)