const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages');
const message = document.querySelector('input');
const messageBox = document.querySelector('.chat-widget__messages-container');
const answers = ['Спасибо, я подумаю',
            'Я не нашла ни одного намека на список и на возможность к нему обратиться, поэтому извините',
            'Я знал, что этот день настанет',
            'Где список ответов, Лебовски?',
            'Ну нормально ж общались...',
            'Бебебе'];

const scroll = () => {messageBox.scrollTop = messageBox.scrollHeight}

const sendMessage = function(e) {
    if (e.keyCode === 13 && message.value !== '') {
        e.preventDefault();
        let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time"> ${time} </div>
            <div class="message__text">
            ${message.value}
            </div>
        </div>
        `;
        message.value = '';
        scroll();
        setTimeout(getAnswer, 2000);
    }
}

const getAnswer = () => {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    let i = Math.floor(Math.random() * answers.length)
    messages.innerHTML += `
        <div class="message">
            <div class="message__time"> ${time} </div>
            <div class="message__text">
            ${answers[i]}
            </div>
        </div>
        `;
    scroll();
}

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

chat.addEventListener('keydown', sendMessage)