const items = Array.from(document.querySelectorAll('div.slider__item'));
const dots = Array.from(document.querySelectorAll('div.slider__dot'));
const prev = document.querySelector('div.slider__arrow.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow.slider__arrow_next');


let activateDot = () => {
    let activeDot = dots[items.indexOf(document.querySelector('div.slider__item.slider__item_active'))];
    activeDot.className = 'slider__dot slider__dot_active';
};

activateDot();

let changeItem = (i) => {
    let index = items.findIndex(item => item === document.querySelector('div.slider__item.slider__item_active'))
    items[index].className = 'slider__item';
    dots[index].className = 'slider__dot';
    items[i].className = 'slider__item slider__item_active';
    dots[i].className = 'slider__dot slider__dot_active';
}

prev.onclick = () => {
    let index = items.findIndex(item => item === document.querySelector('div.slider__item.slider__item_active'));
    let i;
    if (index === 0) {
        i = items.length - 1;
    } else {
        i = index - 1;
    }
    changeItem(i);
}

next.onclick = () => {
    let index = items.findIndex(item => item === document.querySelector('div.slider__item.slider__item_active'));
    let i;
    if (index === (items.length - 1)) {
        i = index - items.length + 1;
    }
    else {
        i = index + 1;
    }
    changeItem(i);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        changeItem(i);
    }
}