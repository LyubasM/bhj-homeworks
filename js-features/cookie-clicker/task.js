const cookie = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let clickPeriodCounter = document.getElementById('clickPeriod__counter')
let clickAvgPeriodCounter = document.getElementById('clickAvgPeriod__counter')
let clickTime = Date.now();
let clickStartTime = Date.now();

cookie.onclick = function() {
    let count = parseFloat(clickCounter.textContent);
    if (count % 2 === 0) {
        cookie.width = 400;
    } else {
        cookie.width = 200;
    }
    count++;
    clickCounter.textContent = count;
    clickTime = Date.now();
    clickPeriodCounter.textContent = Math.round((1000 / (Date.now() - clickTime)) * 100) / 100 + " кликов в секунду";
    clickAvgPeriodCounter.textContent = Math.round(((count / (Date.now() - clickStartTime) )* 1000) * 100) / 100 + " кликов в секунду"; 
}