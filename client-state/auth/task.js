const form = document.getElementById('signin__form');
const authBlock = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const requestUrl = 'https://students.netoservices.ru/nestjs-backend/auth'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', requestUrl)
    
    xhr.onload = () => {
        console.log(xhr.response);
        const response = JSON.parse(xhr.response);
        if (response.success) {
            authBlock.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcome.textContent += response.user_id;
        } else {
            alert('Неверные логин/пароль');
        }
    }
    
    const formData = new FormData(form);
    xhr.send(formData);
    form.reset();
})

