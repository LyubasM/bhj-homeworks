const deathCounter = document.getElementById('dead');
const looseCounter = document.getElementById('lost');


const reset = () => {
    deathCounter.textContent = 0;
    looseCounter.textContent = 0;
}

getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            ++deathCounter.textContent;
                if (deathCounter.textContent > 9) {
                reset();
                alert('Вы победили!');
                }
        } else {
            ++looseCounter.textContent;
                if (looseCounter.textContent > 4) {
                reset();
                alert('Вы проиграли!');
                }
        }
    }
}