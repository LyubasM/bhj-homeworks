const rotators = document.querySelectorAll('.rotator__case');

const rotation = function() {
    for (el of rotators) {
        if (el.classList.contains('rotator__case_active')) {
            el.classList.remove('rotator__case_active');
            if (el.nextElementSibling) {
                el.nextElementSibling.classList.toggle('rotator__case_active');
                } else {rotators[0].classList.toggle('rotator__case_active')
            }
            return;
        }
    }
}

setInterval(rotation, 1000);