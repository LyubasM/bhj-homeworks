let deathCounter = 0;
let looseCounter = 0;

const reset = () => {
    deathCounter = 0;
    looseCounter = 0;
    document.getElementById('dead').textContent = deathCounter;
    document.getElementById('lost').textContent = looseCounter;
}

getHole = (index) => document.getElementById(`hole${index}`);


for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            deathCounter++;
            document.getElementById('dead').textContent = deathCounter;
                if (deathCounter > 9) {
                reset();
                alert('Вы победили!');
                }
        } else {
            looseCounter++;
            document.getElementById('lost').textContent = looseCounter;
                if (looseCounter > 4) {
                reset();
                alert('Вы проиграли!');
                }
        }
    }
}