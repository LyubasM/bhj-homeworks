let counter = document.getElementById("timer");
let count = setInterval(function() {
    if (parseFloat(counter.textContent) === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(count);
        } else {
        counter.textContent -= 1;
    }
}, 1000);
