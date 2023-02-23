const sizeOptions = document.querySelector('.book__control');
const book = document.getElementById('book');

const changeFontSize = function(e) {
    for (i of sizeOptions.children) {
        i.classList.remove('font-size_active');
    }
    e.target.classList.add('font-size_active')
    e.preventDefault();
    
    let test = e.target.getAttribute('data-size');
    book.className = 'book'
    if (test && test !== '') {
        book.classList.add('book_fs-' + test)
    }
}

sizeOptions.addEventListener('click', changeFontSize)

