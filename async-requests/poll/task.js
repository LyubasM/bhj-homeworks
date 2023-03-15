const pollTitle = document.getElementById('poll__title');
const btns = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
        let pollData = JSON.parse(xhr.responseText);
        pollTitle.innerText = pollData.data.title;
        pollData.data.answers.forEach((i) => {
            let btn = document.createElement('button');
            btn.classList.add('poll__answer');
            btn.innerText = i;
            btns.appendChild(btn);
            btns.append(" ");
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
        }
})