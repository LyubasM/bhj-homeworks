const popup = document.querySelectorAll('div.modal');
const successBtn = document.getElementsByClassName('btn btn_danger modal__close show-success');

popup[0].className = 'modal modal_active'
successBtn[0].onclick = () => {
    popup[0].className = 'modal';
    popup[1].className = 'modal modal_active';
}

const popupClose = Array.from(document.getElementsByClassName('modal__close modal__close_times'));
let closeAll = () => {popup.forEach(popup => popup.className = 'modal')};

popupClose.forEach(closeBtn => closeBtn.onclick = closeAll);