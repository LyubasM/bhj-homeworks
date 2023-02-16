const menuTitle = document.querySelector('div.dropdown__value')
const menu = document.querySelector('ul');


const openMenu = () => {
    if (menu.className === 'dropdown__list dropdown__list_active') {
        menu.className = 'dropdown__list';
        return;
    }
    menu.className = 'dropdown__list dropdown__list_active';
}

const changeTitle = function(event) {
    menuTitle.textContent = event.target.closest('a').innerText;
    event.preventDefault();
    menu.className = 'dropdown__list';
}

menuTitle.addEventListener('click', openMenu);
menu.addEventListener('click', changeTitle);

