const menuItem = document.querySelectorAll('a.menu__link');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = () => {
        closeSub();
        let activeItem = menuItem[i].parentElement.querySelector('ul.menu.menu_sub');
        if (activeItem) {
            activeItem.className = 'menu menu_sub menu_active';
            return false;
        }
    }
}

let closeSub = () => {
        let a = document.querySelector('ul.menu.menu_sub.menu_active');
        if (a) {
        a.className = 'menu menu_sub';
        }
    }