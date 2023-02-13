const menuItem = document.querySelectorAll('a.menu__link');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = () => {
        let activeItem = menuItem[i].parentElement.querySelector('ul.menu.menu_sub');
            if (activeItem && activeItem.className === 'menu menu_sub menu_active') {
                activeItem.className = 'menu menu_sub';
                return false;
            }
            if (activeItem) {
                closeOtherSub();
                activeItem.className = 'menu menu_sub menu_active';
                return false;
                }
            } 
}

let closeOtherSub = () => {
        let a = document.querySelector('ul.menu.menu_sub.menu_active');
        if (a) {
        a.className = 'menu menu_sub';
        }
    }