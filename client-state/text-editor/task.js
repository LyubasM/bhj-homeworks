const editor = document.getElementById('editor');
const btn = document.querySelector('button');

window.addEventListener('beforeunload', (e) => {
    e.preventDefault;
    if (editor.value !== '') {
    localStorage.setItem('text', editor.value);}
    })

const getText = function() {
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    }
}

getText();

btn.addEventListener('click', () => {
    localStorage.clear();
    editor.value = '';
})