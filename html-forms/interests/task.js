const checkboxes = document.querySelectorAll('.interest');

const getChecked = function(e) {
    let checkList = Array.from(e.target.closest('.interest').querySelectorAll('.interest>.interests>.interest'));
    if (checkList)
    for (let i of checkList) {
        i.querySelector('.interest__check').checked = e.target.checked;
    }
}

for (let i of checkboxes) {
    i.addEventListener('change', getChecked)
}

