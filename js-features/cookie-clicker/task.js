const cookie = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let clickPeriodCounter = document.getElementById('clickPeriod__counter')
let clickAvgPeriodCounter = document.getElementById('clickAvgPeriod__counter')
let clickStartTime = Date.now();
let clickTime = Date.now();

cookie.onclick = function() {
    ++clickCounter.textContent % 2 === 0 ? cookie.width = 400 : cookie.width = 200;
    clickPeriodCounter.textContent = Math.round((1000 / (Date.now() - clickTime)) * 100) / 100 + " кликов в секунду";
    clickTime = Date.now();
    clickAvgPeriodCounter.textContent = Math.round(((clickCounter.textContent / (Date.now() - clickStartTime) )* 1000) * 100) / 100 + " кликов в секунду"; 
}