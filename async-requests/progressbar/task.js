const progress = document.getElementById('progress');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.addEventListener('progress', function(e) {
        const per = (e.loaded / e.total);
        progress.setAttribute('value', per);
    })

    xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
            alert(xhr.responseText);
    })

    xhr.send(formData);    
})