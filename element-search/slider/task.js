const items = Array.from(document.querySelectorAll('div.slider__item'));
let activeItem = document.querySelector('div.slider__item.slider__item_active');
const dots = Array.from(document.querySelectorAll('div.slider__dot'));
const prev = document.querySelector('div.slider__arrow.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow.slider__arrow_next');

let changeItem = (side) => {
    let item = activeItem;
    let index = items.indexOf(activeItem);
    let i = 0;
    if ((index === 0 && side === prev) || (index === (items.length - 1) && side === next)) {
        i = items.length;
    }
    side === prev ? activeItem = items[index - 1 + i] : activeItem = items[index + 1 - i];
    activeItem.className = 'slider__item.slider__item_active';
    checkDots();
    item.className = 'slider__item';
}

let checkDots = () => {
    dots.forEach(dot => dot.className = 'slider__dot');
    dots[items.indexOf(activeItem)].className = 'slider__dot slider__dot_active';
}

checkDots();

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        let item = activeItem;
        activeItem = items[i];
        activeItem.className = 'slider__item.slider__item_active';
        item.className = 'slider__item';
        checkDots();
    }
}

prev.onclick = () => {
    changeItem(prev);
}
next.onclick = () => {
    changeItem(next);
}