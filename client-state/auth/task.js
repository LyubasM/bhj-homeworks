const form = document.getElementById('signin__form');
const authBlock = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdText = document.getElementById('user_id');
const signOut = document.getElementById('signout__btn');
const requestUrl = 'https://students.netoservices.ru/nestjs-backend/auth'

const sayHello = () => {
    welcome.classList.add('welcome_active');
    authBlock.classList.remove('signin_active');
    userIdText.textContent = localStorage.userId;
}

window.onload = () => {
    if (localStorage.userId && localStorage.userId !== '') {
        sayHello();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', requestUrl)
    
    xhr.onload = () => {
        console.log(xhr.response);
        const response = JSON.parse(xhr.response);
        if (response.success) {
            localStorage.setItem('userId', response.user_id);
            sayHello();
        } else {
            alert('Неверные логин/пароль');
        }
    }
    
    const formData = new FormData(form);
    xhr.send(formData);
    form.reset();
})

signOut.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    authBlock.classList.add('signin_active');
    localStorage.setItem('userId', '');
})


