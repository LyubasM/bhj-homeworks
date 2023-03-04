const nav = document.querySelector('.tab__navigation')
const navTabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

const changeTab = function(event) {
    let index = navTabs.indexOf(event.target);
    if (index > -1) {
        navTabs.forEach(i => i.className = 'tab');
        tabContent.forEach(i => i.className = 'tab__content');
        navTabs[index].className = 'tab tab_active';
        tabContent[index].className = 'tab__content tab__content_active';
    }
}

nav.addEventListener('click', changeTab);