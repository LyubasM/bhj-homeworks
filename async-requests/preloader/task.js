const loader = document.getElementById('loader');
const itemBox = document.getElementById('items');

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()
xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let currencyList = JSON.parse(xhr.responseText).response.Valute;
        for (i in currencyList) {
            if (currencyList.hasOwnProperty(i)) {
                let item = document.createElement('div');
                item.classList.add('item');
                let charCode = document.createElement('div');
                charCode.classList.add('item__code');
                let value = document.createElement('div');
                value.classList.add('item__value');
                let cur = document.createElement('div');
                cur.classList.add('item__currency');
                itemBox.appendChild(item);
                item.appendChild(charCode);
                item.appendChild(value);
                item.appendChild(cur);
                charCode.innerText = currencyList[i].CharCode;
                value.innerText = currencyList[i].Value.toFixed(2);
                cur.innerText = 'руб.';
            }
        }
    }
})